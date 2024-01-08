import React, { useRef, useState } from "react";
import { Layout } from "../components/Layout";
import {
  Button,
  Card,
  Image,
  Input,
  Text,
  VStack,
  HStack,
  KeyboardAvoidingView,
} from "native-base";
import { auth, database } from "../firebase/config";
import { Platform, TextInput } from "react-native";
import { useAppDispatch } from "../store";
import { setAuthState } from "../store/slices/AuthSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { CheckBox } from "../components/Checkbox";
import { ref, set } from "firebase/database";
import { Profile } from "../types/Profile";

export function RegisterScreen() {
  /***************		HOOKS		***************/

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [licensed, setlicensed] = useState(false);
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const image = require("../images/p4m_logo.png");

  const passwordInputRef = useRef<TextInput>();
  const dispatch = useAppDispatch();

  /***************		FUNCTIONS		***************/

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    setErrorCode("");
  };

  const handleSignUp = () => {
    if (!licensed) {
      alert(
        "You must be a licensed prescriber from Georgia to use this application"
      );
    } else {
      if (password != confirmationPassword) {
        setErrorCode("Your passwords don't match");
        return;
      } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            dispatch(setAuthState({ user: user, isAuthenticated: true }));
            createProfile(user.uid, {
              email: user.email,
              first_name: "",
              last_name: "",
              phone_number: "",
            });
          })
          .catch((error) => alert(error.message));
      }
    }
  };

  const createProfile = (uid: String, profile: Profile) => {
    let reference = ref(database, `users/${uid}`);
    set(reference, profile);
  };

  /***************		JSX		***************/

  return (
    <Layout>
      <Image
        alignSelf="center"
        source={image}
        maxHeight={200}
        maxWidth={200}
        resizeMode="contain"
        alt="P4M Logo"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, backgroundColor: "white" }}
      >
        <Card>
          <VStack space={3}>
            <HStack space={3} justifyContent="space-between">
              <Text color="black" font-size={5}>
                Register
              </Text>
            </HStack>
            <Input
              placeholder="Email"
              onChangeText={handleEmailChange}
              onSubmitEditing={() => {
                passwordInputRef.current.focus();
              }}
            />
            <Input
              placeholder="Password"
              value={password}
              secureTextEntry
              onChangeText={setPassword}
              onSubmitEditing={() => {
                passwordInputRef.current.focus();
              }}
            />
            <Input
              ref={passwordInputRef}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmationPassword}
              onChangeText={setConfirmationPassword}
              onSubmitEditing={handleSignUp}
            />
            {errorCode && <Text>{errorCode}</Text>}
            <CheckBox
              onPress={() => setlicensed(!licensed)}
              title="Are you a Licensed Prescriber from the State of Georgia?"
              isChecked={licensed}
            />
            <Button onPress={handleSignUp}>Register</Button>
          </VStack>
        </Card>
      </KeyboardAvoidingView>
    </Layout>
  );
}
