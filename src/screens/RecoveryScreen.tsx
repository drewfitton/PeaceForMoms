import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { auth } from "../firebase/config";
import { Button, Card, Image, Input, Text, HStack, VStack } from "native-base";
import { sendPasswordResetEmail } from "firebase/auth";

export const RecoveryScreen = () => {
  /***************		HOOKS		***************/

  const [email, setEmail] = useState("");
  const image = require("../images/p4m_logo.png");

  /***************		FUNCTIONS		***************/

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handleSendEmail = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {})
      .catch((error) => alert(error.message));
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
      <Card>
        <VStack space={5}>
          <HStack space={3} justifyContent="space-between">
            <Text color="black" font-size={5}>
              Recover Account
            </Text>
          </HStack>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => handleEmailChange(text)}
          />
          <Button onPress={handleSendEmail}> Send Recovery Link</Button>
        </VStack>
      </Card>
    </Layout>
  );
};
