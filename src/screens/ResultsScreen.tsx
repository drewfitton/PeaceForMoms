import React from "react";
import { Layout } from "../components/Layout";
import { VStack, Heading, Text, Box, Button, Divider } from "native-base";
import { MainRouterParams } from "../routers/MainRouter";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";
import { Hyperlink } from "react-native-hyperlink";

export const ResultsScreen = () => {
  const image = require("../images/peace4moms-1.png");
  /***************		HOOKS		***************/

  const { navigate } =
    useNavigation<NativeStackNavigationProp<MainRouterParams>>();
  const [service, setService] = React.useState("");
  const route = useRoute();

  /***************		JSX		***************/

  return (
    <Layout>
      <VStack space={8} alignItems="center" justifyContent="center">
        <Heading padding={2} textAlign="center">
          {route?.params?.result[0]}
        </Heading>

        <Text>Your score: {route?.params?.result[1]}</Text>
        <Box
          p="3.5"
          bg="yellow.100"
          alignItems="center"
          borderRadius={30}
          justifyContent="center"
        >
          <Text textAlign="center">{route?.params?.result[2]}</Text>
        {/* </Box>
        <Box 
          p="3.5"
          bg="yellow.100"
          alignItems="center"
          borderRadius={30}
          justifyContent="center"
        > */}
        <Divider my={3}/>
          <Hyperlink linkDefault={true} linkStyle={{color: '#2980b9'}} linkText={(url) => url === route?.params?.result[3] ? 'Click here' : url}>
            <Text textAlign={"center"}>
              {route?.params?.result[3]} to view scoring information for this screening tool.
            </Text>
          </Hyperlink>
          <Hyperlink linkDefault={true} linkStyle={{color: '#2980b9'}} linkText={(url) => url === route?.params?.result[4] ? 'Click here' : url}>
            <Text textAlign={"center"}>
              {route?.params?.result[4]} to view comprehensive information and treatment options for this disorder.
            </Text>
          </Hyperlink>
        </Box>
        <Box padding={2} alignItems="center">
          <Text>
            Disclaimer: The PEACE for Moms mobile application does NOT save your
            screening results. Please screenshot this screen for your records if
            you would like to keep the results.
          </Text>
        </Box>
        <Button onPress={() => navigate("Home")}>Go to home</Button>

        {/* to be fixed: */}
        {/* <Image
          alignSelf="center"
          source={image}
          resizeMode="contain"
          alt="P4M image"
          width={200}
          height={500}
        /> */}
      </VStack>
    </Layout>
  );
};
