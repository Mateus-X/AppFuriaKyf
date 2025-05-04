import { createStyleSheet } from "react-native-unistyles";

import { responsiveFontSizeByPixel } from "@source/utils/responsiveFontSizeByPixel";

export const stylesheet = createStyleSheet(theme => ({
    container: {
        position: "relative",
        gap: 6,
    },
    input: {
        height: 56,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.secondary,
        marginTop: 2,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: theme.colors.white,
        fontSize: responsiveFontSizeByPixel(18),
        lineHeight: responsiveFontSizeByPixel(24),
        fontFamily: theme.fonts.inter[400],
        color: theme.colors.white,
    },
    label: {
        position: "absolute",
        left: 10,
        zIndex: 1,
        paddingHorizontal: 5,
        fontSize: responsiveFontSizeByPixel(16),
        fontFamily: theme.fonts.inter[400],
        color: theme.colors.white,
    },
    errorMessage: {
        fontSize: responsiveFontSizeByPixel(14),
        fontFamily: theme.fonts.inter[400],
        color: theme.colors.dark_red,
    },
    showPasswordButton: {
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1,
        height: 56,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
}));