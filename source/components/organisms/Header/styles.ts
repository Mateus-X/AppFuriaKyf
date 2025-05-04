import { responsiveFontSizeByPixel } from "@source/utils";
import { Dimensions } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
    container: {
        paddingBottom: responsiveFontSizeByPixel(15),
        paddingTop: responsiveFontSizeByPixel(40),
        backgroundColor: theme.colors.black,
        flexDirection: "row",
        justifyContent: "center",
    },
    authContainer: {
        flexDirection: "row",
        paddingBottom: responsiveFontSizeByPixel(15),
        paddingTop: responsiveFontSizeByPixel(40),
        backgroundColor: theme.colors.black,
    },
    text: {
        color: theme.colors.white,
        fontSize: responsiveFontSizeByPixel(18),
        fontFamily: theme.fonts.inter[400],
    }
}));

export default stylesheet;
