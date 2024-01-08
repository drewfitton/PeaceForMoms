import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Card,
  Heading,
  Text,
  VStack,
  Input,
  FormControl,
  View,
  TextArea,
  Image,
  Button,
  Link,
} from "native-base";
import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, Linking } from "react-native";
import { Layout } from "../components/Layout";
import { MainRouterParams } from "../routers/MainRouter";
import { sendEmail } from "../email/send-email";

export const ContactScreen = () => {
  /***************		HOOKS		***************/

  const image = require("../images/p4m-contact.png");
  const { navigate } =
    useNavigation<NativeStackNavigationProp<MainRouterParams>>();
  const [formData, setData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  /***************		FUNCTIONS		***************/

  const validate = () => {
    var nameValid = false;
    if (formData.name === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
      nameValid = true;
    }
    var emailValid = false;
    if (formData.email === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
      emailValid = true;
    }
    var subjectValid = false;
    if (formData.subject === "") {
      setSubjectError("Subject is required");
    } else {
      setSubjectError("");
      subjectValid = true;
    }
    var messageValid = false;
    if (formData.message === "") {
      setMessageError("Message is required");
    } else {
      setMessageError("");
      messageValid = true;
    }
    if (nameValid && emailValid && subjectValid && messageValid) {
      alert("Message sent successfully!");
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = () => {
    validate()
      ? sendEmail(
          "seohyunh284@gmail.com",
          `${formData.subject}`,
          `From: ${formData.name}\n-----------------\n${formData.message}`
        ).then(() => {
          console.log("Message sent");
          setData({...formData, name: '', email: '', subject: '', message: ''});
        })
      : console.log("Form invalid");
  };

  /***************		JSX		***************/

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout>
        <FormControl isRequired>
          <VStack space={5} paddingTop={10}>
            <Heading textAlign="center" size="xl">Contact</Heading>
            <Card style={{ borderRadius: 8, backgroundColor: "#FBF4BB" }}>
              <Text>
                NOTE: This is not an emergency service. For crisis resources,
                click <Link onPress={() => navigate("Emergency")}>here</Link>.
              </Text>
            </Card>
            <VStack space={2}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Input
                    p={2}
                    mr={2}
                    placeholder="Name"
                    onChangeText={(value) =>
                      setData({ ...formData, name: value })
                    }
                    value={formData.name}
                  />
                  {nameError.length > 0 && (
                    <Text style={{ color: "red" }}>{nameError}</Text>
                  )}
                </View>
                <View style={{ flex: 2 }}>
                  <Input
                    p={2}
                    placeholder="Email"
                    onChangeText={(value) =>
                      setData({ ...formData, email: value })
                    }
                    value={formData.email}
                  />
                  {emailError.length > 0 && (
                    <Text style={{ color: "red" }}>{emailError}</Text>
                  )}
                </View>
              </View>
              <Input
                p={2}
                placeholder="Subject"
                onChangeText={(value) =>
                  setData({ ...formData, subject: value })
                }
                value={formData.subject}
              />
              {subjectError.length > 0 && (
                <Text style={{ color: "red" }}>{subjectError}</Text>
              )}
              <TextArea
                p={2}
                placeholder="Message"
                autoCompleteType={undefined}
                onChangeText={(value) =>
                  setData({ ...formData, message: value })
                }
                value={formData.message}
              />
              {messageError.length > 0 && (
                <Text style={{ color: "red" }}>{messageError}</Text>
              )}
            </VStack>
          </VStack>
        </FormControl>
        <Button onPress={onSubmit}>Send Message</Button>
        <Image
          alignSelf="center"
          source={image}
          resizeMode="contain"
          alt="P4M Contact"
        />
      </Layout>
    </TouchableWithoutFeedback>
  );
};
