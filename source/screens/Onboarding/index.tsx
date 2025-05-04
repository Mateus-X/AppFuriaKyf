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
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    Questionary: undefined;
};

export function OnboardingScreen({}: { navigation: any }) {
    const [step, setStep] = useState(1);
    const { styles, theme } = useStyles(stylesheet);
    const  navigator = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <HeroTemplate currentStep={step}>
            <View style={styles.background}>
                {step === 1 && (
                    <View>
                        <Text style={styles.informativeTitle}>
                            De Fã pra Fã
                        </Text>
                        <Text style={styles.informativeText}>
                            A gente entende a sua paixão. Agora nos permita te conhecer melhor.
                        </Text>
                    </View>
                )}
                {step === 2 && (
                    <View>
                        <Text style={styles.informativeTitle}>
                            Conecte sua História
                        </Text>
                        <Text style={styles.informativeText}>
                            Saiba junto da gente o que te faz um fã único.
                        </Text>
                    </View>
                )}
                {step === 3 && (
                    <View>
                        <Text style={styles.informativeTitle}>
                           Seja Reconhecido
                        </Text>
                        <Text style={styles.informativeText}>
                            Valide seu perfil e tenha acesso a informações exclusivas do seu time de Esports.
                        </Text>
                    </View>
                )}
                {step < 3 ? (
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
                ) : (
                    <TouchableOpacity
                        onPress={() => navigator.navigate("Questionary")}
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
                                name="check"
                                color={theme.colors.black}
                                size={35}
                            />
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </HeroTemplate>
    );
}
