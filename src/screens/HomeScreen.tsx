import React from "react";
import { Layout } from "../components/Layout";
import {
  Button,
  Card,
  Image,
  Text,
  VStack,
  HStack,
  Icon,
  Pressable,
  Heading,
} from "native-base";
import { useAppDispatch } from "../store";
import { logOut } from "../store/slices/AuthSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainRouterParams } from "../routers/MainRouter";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const HomeScreen = () => {
  /***************		HOOKS		***************/

  const image = require("../images/p4m-pic-1.png");
  const { navigate } =
    useNavigation<NativeStackNavigationProp<MainRouterParams>>();
  const dispatch = useAppDispatch();

  /***************		JSX		***************/

  return (
    <Layout>
      <VStack flex="space-around" space={3}>
        <HStack pt={2} paddingTop={2} alignSelf="center" space="200">
          <Pressable alignItems="center" onPress={() => dispatch(logOut())}>
            <Icon
              name="logout"
              as={MaterialCommunityIcons}
              size="2xl"
              color="primary.400"
            />
            <Text textAlign="center">Log Out</Text>
          </Pressable>
          
          <Pressable alignItems="center" onPress={() => navigate("Tutorial")}>
            <Icon
              name="help-circle-outline"
              as={MaterialCommunityIcons}
              size="2xl"
              color="primary.400"
            />
            <Text textAlign="center">Tutorial</Text>
          </Pressable>
        </HStack>
        <Heading textAlign="center" size="xl">Home</Heading>
  
        <Card padding={6} margin={7} borderRadius={20}>
          <VStack space={5} >
            <Button _text={{fontSize: "md"}} variant='big' onPress={() => navigate("Screener")}>Screening Tools</Button>
            <Button _text={{fontSize: "md"}} variant='big' onPress={() => navigate("TabRouter", {screen:"Contact"})}>Contact Us</Button>
          </VStack>
        </Card>
        <Image
          alignSelf="center"
          source={image}
          resizeMode="contain"
          alt="P4M Logo"
          pt={8}
        />
      </VStack>
    </Layout>
  );
};
