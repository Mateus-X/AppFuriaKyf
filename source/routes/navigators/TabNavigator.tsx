import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ClientHomeScreen } from "@source/screens/AuthenticatedFlow/ClientHomeScreen";

import { BottomTabBar, MainTabHeader } from "@source/components/organisms";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={{
        header: () => <MainTabHeader />,
      }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tab.Screen name="ClientHome" component={ClientHomeScreen} />
      <Tab.Screen name="Profile" component={() => null} />
    </Tab.Navigator>
  );
}
