import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProfileScreen } from "../screens/ProfileScreen";
import { ContactScreen } from "../screens/ContactScreen";

export type TabRouterParams = {
  Home: undefined;
  Profile: undefined;
  Contact: undefined;
};

const Tabs = createBottomTabNavigator<TabRouterParams>();

export const TabRouter = () => {
  /***************		JSX		***************/

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size="5xl"
              as={MaterialCommunityIcons}
              name={focused ? "chat" : "chat-outline"}
              color={focused ? "primary.500" : "gray.400"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size="5xl"
              as={MaterialCommunityIcons}
              name={focused ? "home" : "home-outline"}
              color={focused ? "primary.500" : "gray.400"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size="5xl"
              as={MaterialCommunityIcons}
              name={focused ? "account-circle" : "account-circle-outline"}
              color={focused ? "primary.500" : "gray.400"}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};