import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LoginScreen } from "../screens/LoginScreen";
import { Header } from "../components/Header";
import { BackButton } from "../components/BackButton";
import { RecoveryScreen } from "../screens/RecoveryScreen";
import { RegisterScreen } from "../screens/RegisterScreen";

export type UnauthRouterParams = {
  Login: undefined;
  Register: undefined;
  Recover: undefined;
};

const Stack = createNativeStackNavigator<UnauthRouterParams>();

export const UnauthRouter = () => {
  /***************		JSX		***************/

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
        headerLeft: () => <BackButton />,
      }}
    >
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Recover" component={RecoveryScreen} />
    </Stack.Navigator>
  );
};
