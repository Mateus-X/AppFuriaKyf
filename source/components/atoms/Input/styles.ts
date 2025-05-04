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
        backgroundColor: "#000",
        marginTop: 2,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#fff",
        fontSize: responsiveFontSizeByPixel(16),
        lineHeight: responsiveFontSizeByPixel(24),
        fontFamily: "PlusJakartaSans_300Light",
        color: "#f2f2",
    },
    label: {
        position: "absolute",
        left: 10,
        zIndex: 1,
        paddingHorizontal: 5,
        fontSize: responsiveFontSizeByPixel(16),
        fontFamily: "PlusJakartaSans_300Light",
        color: "#fff",
    },
    errorMessage: {
        fontSize: responsiveFontSizeByPixel(14),
        fontFamily: "PlusJakartaSans_300Light",
        color: "#ff0000",
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