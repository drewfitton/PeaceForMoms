import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon, IconButton } from "native-base";
import React from "react";
import { MainRouterParams } from "../routers/MainRouter";

export const BackButton = () => {
  const { navigate, goBack } =
    useNavigation<NativeStackNavigationProp<MainRouterParams>>();
  return (
    <IconButton
      icon={
        <Icon
          color="primary.400"
          as={MaterialCommunityIcons}
          name="arrow-left"
        />
      }
      onPress={() => goBack()}
      variant="ghost"
      padding={-3}
      size="lg"
    />
  );
};
