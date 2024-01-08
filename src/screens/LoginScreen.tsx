import React, { useRef, useState } from "react";
import { Layout } from "../components/Layout";
import {
  Button,
  Card,
  Heading,
  Image,
  Input,
  KeyboardAvoidingView,
  Text,
  VStack,
} from "native-base";
import { auth } from "../firebase/config";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../store";
import { setAuthState } from "../store/slices/AuthSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UnauthRouterParams } from "../routers/UnauthRouter";
import { Platform, TextInput } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";

export const LoginScreen = () => {
  /***************		HOOKS		***************/

  const image = require("../images/p4m_logo.png");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const passwordInputRef = useRef<TextInput>();
  const dispatch = useAppDispatch();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<UnauthRouterParams>>();

  /***************		FUNCTIONS		***************/

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setAuthState({ user: user, isAuthenticated: true }));
      })
      .catch((error) => alert(error.message));
  };

  /***************		JSX		***************/

  return (
    <Layout>
      <Image
        alignSelf="center"
        source={image}
        maxHeight={140}
        maxWidth={140}
        paddingTop={150}
        resizeMode="contain"
        alt="P4M Logo"
      />
      <VStack>
        <Heading textAlign="center">
          Welcome to the PEACE for Moms Toolkit App
        </Heading>
      </VStack>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, backgroundColor: "white" }}
      >
        <Card>
          <VStack space={3}>
            <Text color="gray.600">Log in or register to continue</Text>
            <Input
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              onSubmitEditing={() => {
                passwordInputRef.current.focus();
              }}
              blurOnSubmit={false}
            />
            <Input
              ref={passwordInputRef}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              onSubmitEditing={handleLogin}
            />
            <Button onPress={handleLogin}>Log In</Button>
            <Text color="gray.600">Don't have an account?</Text>
            <Button onPress={() => navigate("Register")}>Register</Button>
            <Text color="gray.600">Forgot Your Password?</Text>
            <Button onPress={() => navigate("Recover")}>
              Recover Password
            </Button>
          </VStack>
        </Card>
      </KeyboardAvoidingView>
    </Layout>
  );
};
