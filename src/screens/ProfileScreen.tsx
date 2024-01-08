// @ts-nocheck
import {
  Card,
  Heading,
  VStack,
  FormControl,
  View,
  Image,
  Text,
  Button,
} from "native-base";
import "firebase/database";
import React, { useState } from "react";
import { Keyboard,TouchableWithoutFeedback } from "react-native";
import { Layout } from "../components/Layout";
import { database} from "../firebase/config";
import { ref,get } from "firebase/database";
import { useAppSelector } from "../store";
import { Profile } from "../types/Profile";

export const ProfileScreen = () => {
  /***************		HOOKS		***************/

  const image = require("../images/p4m-profile.png");

  const [profile, setProfile] = useState<Profile>({});
  const uid = useAppSelector((state) => state.Auth.user).uid;
  const reference = ref(database, `/users/${uid}`);

  if (!profile) {
    get(reference).then((snapshot) => {
      if (snapshot.exists()) {
        setProfile(snapshot.val());
      }
    });
  }

  /***************		JSX		***************/

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout>
        <FormControl isRequired>
          <VStack space={5} paddingTop={10}>
            <Heading textAlign="center">Profile Information</Heading>
            <Card style={{ borderRadius: 9, backgroundColor: "#FBF4BB" }}>
              <Text>Name:</Text>
            </Card>
            <Card style={{ borderRadius: 9, backgroundColor: "#FBF4BB" }}>
              <Text>Phone Number:</Text>
            </Card>
            <View>
              <Card style={{ borderRadius: 9, backgroundColor: "#FBF4BB" }}>
                <Text>Email: {profile.email}</Text>
              </Card>
            </View>
            <Button>View saved diagnoses</Button>
            <VStack space={2}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 3 }}></View>
              </View>
            </VStack>
          </VStack>
        </FormControl>
        <Image
          alignSelf="center"
          source={image}
          resizeMode="contain"
          alt="P4M profile"
        />
      </Layout>
    </TouchableWithoutFeedback>
  );
};
