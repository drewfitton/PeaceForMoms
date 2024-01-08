import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TutorialScreen } from "../screens/TutorialScreen";
import { ScreeningScreen, ScreeningScreenProps } from "../screens/ScreeningScreen";
import { ScreeningTypeScreen } from "../screens/ScreeningTypeScreen";
import { EmergencyScreen } from "../screens/EmergencyScreen";
import { TabRouter, TabRouterParams } from "./TabRouter";
import { NavigatorScreenParams } from "@react-navigation/native";
import { Header } from "../components/Header";
import { BackButton } from "../components/BackButton";
import { ContactScreen } from "../screens/ContactScreen";
import { ResultsScreen } from "../screens/ResultsScreen";

export type MainRouterParams = {
  TabRouter: NavigatorScreenParams<TabRouterParams>;
  Tutorial: undefined;
  Screener: undefined;
  Screening: ScreeningScreenProps;
  Emergency: undefined;
  Contact: undefined;
  Results: undefined;
};

const Stack = createNativeStackNavigator<MainRouterParams>();

export const MainRouter = () => {
  /***************		JSX		***************/

  return (
    <Stack.Navigator
      initialRouteName="TabRouter"
      screenOptions={{
        headerTitle: () => <Header />,
        headerLeft: () => <BackButton />,
      }}
    >
      <Stack.Screen
        name="TabRouter"
        component={TabRouter}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
      <Stack.Screen name="Emergency" component={EmergencyScreen} />
      <Stack.Screen name="Screener" component={ScreeningTypeScreen} />
      <Stack.Screen name="Screening" component={ScreeningScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />

    </Stack.Navigator>
  );
};