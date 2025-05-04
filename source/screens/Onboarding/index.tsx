import React, { useState, useRef, useEffect } from "react";
import {
    Text,
    View,
    Platform,
    Touchable,
    TouchableOpacity,
} from "react-native";
import { HeroTemplate } from "@source/components/organisms/HeroTemplate";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";

// type RootStackParamList = {
//   VerifyToken: {
//     cashback: number;
//     installment: Installment;
//     installmentParams: InstallmentParam[];
//     fee: number;
//   };
//   ContractBuy: undefined;
//   DataBank: undefined;
//   AprovePayment: undefined;
// };

export function OnboardingScreen({}: { navigation: any }) {
    const [step, setStep] = useState(1);
    const { styles, theme } = useStyles(stylesheet);

    useEffect(() => {
        if (step > 3) {
            console.log("Step is greater than 3, resetting to 1");
        }
    });

    return (
        <HeroTemplate currentStep={step}>
            <View style={styles.background}>
                {step === 1 && (
                    <View>
                        <Text style={styles.informativeTitle}>
                            De Fã pra Fã
                        </Text>
                        <Text style={styles.informativeText}>
                            Nos permita te conhecer melhor
                        </Text>
                    </View>
                )}
                {step === 2 && (
                    <View>
                        <Text style={styles.informativeTitle}>
                            De Fã pra Fã
                        </Text>
                        <Text style={styles.informativeText}>
                            Nos permita te conehcer melhor
                        </Text>
                    </View>
                )}
                {step === 3 && (
                    <View>
                        <Text style={styles.informativeTitle}>
                            De Fã pra Fã
                        </Text>
                        <Text style={styles.informativeText}>
                            Nos permita te conehcer melhor
                        </Text>
                    </View>
                )}
                <TouchableOpacity
                    onPress={() => setStep((prev) => prev + 1)}
                    style={{
                        backgroundColor: "#fff",
                        position: "absolute",
                        left: 295,
                        top: 330,
                        borderRadius: 50,
                        width: 50,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: theme.colors.gray,
                    }}
                >
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <MaterialCommunityIcons
                            name="chevron-right"
                            color={theme.colors.black}
                            size={40}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </HeroTemplate>
    );
}
