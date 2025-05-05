import React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    ViewStyle,
} from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface ButtonProps
    extends Omit<TouchableOpacityProps, "activeOpacity" | "style"> {
    label: string;
    variant?: "primary" | "secondary";
    icon?: string;
    isLoading?: boolean;
    style?: ViewStyle;
}

export function Button({
    label,
    variant = "primary",
    isLoading,
    disabled,
    icon,
    style,
    ...buttonProps
}: ButtonProps) {
    const { styles, theme } = useStyles(stylesheet);

    return (
        <TouchableOpacity
            {...buttonProps}
            activeOpacity={0.7}
            disabled={isLoading || disabled}
            style={[styles.container, style]}
        >
            {isLoading ? (
                <ActivityIndicator
                    size="large"
                    color={
                        variant === "primary"
                            ? theme.colors.black
                            : theme.colors.white
                    }
                />
            ) : (
                <View
                    style={{
                        gap: 10,
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon as any}
                            size={24}
                            style={styles.label}
                        />
                    )}
                    <Text style={styles.label}>{label}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}
