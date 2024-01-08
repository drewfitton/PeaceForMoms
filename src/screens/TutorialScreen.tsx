import React from "react";
import { Layout } from "../components/Layout";
import {
  Text,
  VStack,
  Heading,
  Box,
  Divider,
  Link,
} from "native-base";
import { MainRouterParams } from "../routers/MainRouter";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const TutorialScreen = () => {
  /***************		HOOKS		***************/

  const { navigate } =
    useNavigation<NativeStackNavigationProp<MainRouterParams>>();

  /***************		JSX		***************/

  return (
    <Layout paddingTop={7}>
      <VStack space={5} alignItems="center" paddingBottom={20}>
  
        <Box
          p="3.5"
          bg="yellow.100"
          alignItems="center"
          borderRadius={30}
          width="90%"
        >
          <Heading textAlign="center" variant="blurb">
            {" "}
            Two Main Functions of the Peace for Moms App
          </Heading>
        </Box>
        <Box alignItems="center" p="7" bg="primary.400" borderRadius={30}>
          <Text bold variant="contrastSubHeading">
            Screen a patient:
          </Text>
          <Text variant="contrastBody">
            On the Home page, select "Screening Tool." Here, you can select
            mental health illnesses to screen for, and then select symptoms your
            patient is facing. When you submit you will receive possible
            diagnoses and treatments.
          </Text>
          <Divider my="3" />
          <Text bold variant="contrastSubHeading">
            Contact Peace for Moms directly:
          </Text>
          <Text variant="contrastBody">
            Select "Contact Us" on the Home page or after receiving a diagnosis
            for information to reach a Peace for Moms professional directly, or click <Link onPress={() => navigate("TabRouter", { screen: "Contact" })}>here</Link>
          </Text>
        </Box>
    
      </VStack>
    </Layout>
  );
};
