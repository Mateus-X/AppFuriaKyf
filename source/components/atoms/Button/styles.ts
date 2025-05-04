import { StyleSheet } from "react-native";
import { responsiveFontSizeByPixel } from "@source/utils/responsiveFontSizeByPixel";
import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(theme => ({
    container: {
        height: 56,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.white
    },
    label: {
        fontSize: responsiveFontSizeByPixel(20),
        fontFamily: "PlusJakartaSans_300Light",
        color:theme.colors.black,
    },
    loading: {
        borderColor:theme.colors.black,
    },
}));

export default stylesheet;