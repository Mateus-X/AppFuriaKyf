import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { useAppSelector } from "@source/hooks";

import { OnboardingScreen } from "@source/screens/Onboarding";

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
                    initialRouteName={"onboarding"}
                    screenOptions={{ animation: "slide_from_right" }}
                >
                    <>
                        <MainStack.Screen
                            name="onboarding"
                            component={OnboardingScreen}
                            options={{ headerShown: false }}
                        />
                    </>
                </MainStack.Navigator>
            </NavigationContainer>
        </>
    );
}
