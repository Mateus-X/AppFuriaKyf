import React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle,
} from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";

export interface ButtonProps
    extends Omit<TouchableOpacityProps, "activeOpacity" | "style"> {
    label: string;
    variant?: "primary" | "secondary";
    isLoading?: boolean;
    style?: ViewStyle;
}

export function Button({
    label,
    variant = "primary",
    isLoading,
    disabled,
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
                    color={variant === "primary" ? theme.colors.black : theme.colors.white}
                />
            ) : (
                <Text style={styles.label}>{label}</Text>
            )}
        </TouchableOpacity>
    );
}
