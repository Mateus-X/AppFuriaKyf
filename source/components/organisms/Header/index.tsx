import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useStyles } from "react-native-unistyles";
import FuriaLogo from "@source/assets/icons/furia-logo.svg";
import { stylesheet } from "./styles";

interface HeaderProps {
    label?: string;
    variant: "simple" | "unauthenticated" | "shop" | "step" | "ImageScreen";
    goBack?: () => void;
}

export function Header({variant }: HeaderProps) {
    const { styles } = useStyles(stylesheet);

    return (
        <>
            {variant === "simple" && (
                <View style={styles.container}>
                    <FuriaLogo />
                </View>
            )}
        </>
    );
}
