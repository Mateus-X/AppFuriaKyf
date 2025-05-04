import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { useAppSelector } from "@source/hooks";

import { OnboardingScreen } from "@source/screens/Onboarding";
import QuestionaryScreen from "@source/screens/Questionary";

const MainStack = createNativeStackNavigator();

export default function Routes() {
    // const dispatch = useAppDispatch();

    // const { access_token, user } = useAppSelector((store) => store.auth);

    // const [firstLoading, setFirstLoading] = useState(true);
    // const [animationIsFinished, setAnimationIsFinished] = useState(false);

    // const [accountDetailsRequest] = useLazyAccountDetailsQuery();

    // const getUserDetails = useCallback(async () => {
    //   if (!firstLoading || typeof access_token != "string") return;

    //   await accountDetailsRequest()
    //     .refetch()
    //     .unwrap()
    //     .then((response) => {
    //       dispatch(setUser(response));
    //     })
    //     .catch(() => {
    //       dispatch(logout());
    //     })
    //     .finally(() => setFirstLoading(false));
    // }, [firstLoading, access_token, accountDetailsRequest, dispatch]);

    // useEffect(() => {
    //   getUserDetails();
    // }, [getUserDetails]);

    return (
        <>
            <StatusBar translucent={true} style="light" />

            <NavigationContainer>
                <MainStack.Navigator
                    id={undefined}
                    initialRouteName={"Onboarding"}
                    screenOptions={{ animation: "slide_from_right" }}
                >
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
                </MainStack.Navigator>
            </NavigationContainer>
        </>
    );
}
