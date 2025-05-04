import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SendCodeScreen } from "@source/screens/UnathenticatedFlow/ForgotPassword/SendCodeScreen";
import { ValidateCodeScreen } from "@source/screens/UnathenticatedFlow/ForgotPassword/ValidateCodeScreen";
import { ChangePasswordScreen } from "@source/screens/UnathenticatedFlow/ForgotPassword/ChangePasswordScreen";
import { PasswordChangedSuccessfullyScreen } from "@source/screens/UnathenticatedFlow/ForgotPassword/PasswordChangedSuccessfullyScreen";

const Stack = createNativeStackNavigator();

export default function ForgotPasswordNavigator() {
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName="SendCode"
      screenOptions={{ headerShown: false, animation: "fade" }}
    >
      <Stack.Screen name="SendCode" component={SendCodeScreen} />
      <Stack.Screen name="ValidateCode" component={ValidateCodeScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen
        name="PasswordChangedSuccessfully"
        component={PasswordChangedSuccessfullyScreen}
      />
    </Stack.Navigator>
  );
}
