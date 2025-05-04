import React, { LegacyRef, useEffect, useRef, useState } from "react";
import Icon from "@expo/vector-icons/Feather";
import { Animated, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./styles";
import { responsiveFontSizeByPixel } from "@source/utils/responsiveFontSizeByPixel";

export interface InputProps extends Omit<TextInputProps, "ref" | "style" | "cursorColor" | "selectionColor"> {
    inputRef?: LegacyRef<TextInput>
    label: string
    error?: string
}

export function Input({ inputRef, label, error, value, secureTextEntry, onFocus, onBlur, ...inputProps }: InputProps) {
    const { styles, theme } = useStyles(stylesheet)

    const [isFocused, setIsFocused] = useState(false);
    const [textIsVisible, setTextIsVisible] = useState(false)
    const animation = useRef(new Animated.Value(0)).current;

    const fontSizeAnimated = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [
          responsiveFontSizeByPixel(18),
          responsiveFontSizeByPixel(13),
        ],
    });

    const transformYAnimated = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [
            (60 - responsiveFontSizeByPixel(24)) / 2,
            -(responsiveFontSizeByPixel(26) / 2),
        ],
    });

    const lineHeightAnimated = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [
            responsiveFontSizeByPixel(24),
            responsiveFontSizeByPixel(16),
        ],
    });

    useEffect(() => {
        Animated.timing(animation, {
            toValue: isFocused || value?.length > 0 ? 1 : 0,
            duration: 250,
            useNativeDriver: false,
        }).start();
    }, [isFocused, value]);

    return (
        <View style={styles.container}>
            {label && (
                <Animated.Text
                    style={[
                        styles.label,
                        {
                        fontSize: fontSizeAnimated,
                        lineHeight: lineHeightAnimated,
                        transform: [{ translateY: transformYAnimated }],
                        },
                    ]}
                    disabled
                    >
                    {label}
                </Animated.Text>
            )}

            {secureTextEntry ?
                <TouchableOpacity
                    onPress={() => {
                        setTextIsVisible(state => !state)
                    }}
                    style={styles.showPasswordButton}
                >
                    {textIsVisible 
                        ? <Icon name="eye-off" size={24} color={theme.colors.white} />
                        : <Icon name="eye" size={24} color={theme.colors.white} />
                    }
                </TouchableOpacity>
                : null
            }
            <TextInput
                {...inputProps}
                ref={inputRef}
                value={value}
                onFocus={(event) => {
                    setIsFocused(true)

                    if (typeof onFocus === "function") {
                        onFocus(event)
                    }
                }}
                onBlur={(event) => {
                    setIsFocused(false)

                    if (typeof onFocus === "function") {
                        onBlur(event)
                    }
                }}
                secureTextEntry={typeof secureTextEntry === "boolean" && secureTextEntry ? !textIsVisible : undefined}
                cursorColor={theme.colors.white}
                selectionColor={theme.colors.white}
                style={styles.input}
            />

            {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
        </View>
    );
}

