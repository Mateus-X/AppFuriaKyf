import React from "react";
import { View, Image, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { StepIndicator } from "@source/components/molecules/StepIndicator";

interface HeroTemplateProps {
    children: React.ReactNode;
    currentStep?: number;
}

export function HeroTemplate({ children, currentStep }: HeroTemplateProps) {
    const { styles } = useStyles(stylesheet);
    const gradientHeight = Dimensions.get("window").height * 0.4;

    return (
        <View style={styles.background}>
            <Image 
                source={require("@source/assets/icons/onboarding1.png")} // Replace with your image path
                style={[styles.imageBackground, { height: gradientHeight, zIndex: 1 }]}
                resizeMode="cover"
            />
            <LinearGradient
                colors={["rgba(0,0,0,0)", "#000"]}
                style={[styles.gradientOverlay, { zIndex: 2 }]}
            />
            {currentStep && <StepIndicator currentStep={currentStep} />}
            <View
                style={{ flex: 1, zIndex: 100000, paddingTop: gradientHeight }}
            >
                {children}
            </View>
        </View>
    );
}
