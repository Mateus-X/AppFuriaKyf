import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useStyles } from "react-native-unistyles";
import FuriaLogo from "@source/assets/icons/furia-logo.svg";
import { stylesheet } from "./styles";
import { useAppDispatch } from "@source/hooks";
import { logout } from "@source/store/reducers/authSlice";

interface HeaderProps {
    label?: string;
    variant: "simple" | "authenticated";
    name?: string;
}

export function Header({ variant, name }: HeaderProps) {
    const { styles, theme } = useStyles(stylesheet);
    const dispatch = useAppDispatch();

    return (
        <>
            {variant === "simple" && (
                <View style={styles.container}>
                    <FuriaLogo width={50} height={50} />
                </View>
            )}
            {variant === "authenticated" && (
                <View style={[styles.authContainer, { gap: 20 }]}>
                    <View
                        style={{
                            gap: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Image
                            source={require("@source/assets/icons/icon.jpeg")}
                            style={{
                                borderColor: theme.colors.white,
                                borderWidth: 1,
                                borderRadius: 50,
                                width: 50,
                                height: 50,
                            }}
                        />
                        <View style={{ gap: 5, flexDirection: "column" }}>
                            <Text style={styles.text}>Boa tarde,</Text>
                            <Text style={[styles.text]}>{name}</Text>
                        </View>
                    </View>
                    <FuriaLogo
                        style={{ alignSelf: "center" }}
                        width={50}
                        height={50}
                        onPress={() => dispatch(logout())}
                    />
                </View>
            )}
        </>
    );
}
