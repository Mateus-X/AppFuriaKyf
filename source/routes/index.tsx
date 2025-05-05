import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { useAppDispatch, useAppSelector } from "@source/hooks";

import { OnboardingScreen } from "@source/screens/Onboarding";
import QuestionaryScreen from "@source/screens/Questionary";
import { DashboardScreen } from "@source/screens/Dashboard";

const MainStack = createNativeStackNavigator();

export default function Routes() {
    const dispatch = useAppDispatch();
    const { id, user } = useAppSelector((state) => state.auth);

    console.log("ID", id);
    return (
        <>
            <StatusBar translucent={true} style="light" />

            <NavigationContainer>
                <MainStack.Navigator
                    id={undefined}
                    initialRouteName={id && user ? "Dashboard" : "Onboarding"}
                    screenOptions={{ animation: "slide_from_right" }}
                >
                    {id && user ? (
                        <MainStack.Screen
                            name="Dashboard"
                            component={DashboardScreen}
                            options={{ headerShown: false }}
                        />
                    ) : (
                        <>
                            <MainStack.Screen
                                name="Onboarding"
                                component={OnboardingScreen}
                                options={{ headerShown: false }}
                            />
                            <MainStack.Screen
                                name="Questionary"
                                component={QuestionaryScreen}
                                options={{ headerShown: false }}
                            />
                        </>
                    )}
                </MainStack.Navigator>
            </NavigationContainer>
        </>
    );
}
