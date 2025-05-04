import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { stylesheet } from "./styles";

export interface ButtonProps extends Omit<TouchableOpacityProps, "activeOpacity" | "style"> {
    label: string
    variant?: "primary" | "secondary"
    isLoading?: boolean
    style?: ViewStyle
}

export function Button({ label, variant = "primary", isLoading, disabled, style, ...buttonProps }: ButtonProps) {
    return (
        <TouchableOpacity
            {...buttonProps}
            activeOpacity={0.7}
            disabled={isLoading || disabled}
            style={[stylesheet.container, style]}
        >
            {isLoading ? (
                <ActivityIndicator
                    size="large"
                    color={variant === "primary" ? "#FFF" : "#020202"}
                />
            ) : (
                <Text style={stylesheet.label}>{label}</Text>
            )}
        </TouchableOpacity>
    );
}