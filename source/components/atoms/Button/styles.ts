import { StyleSheet } from "react-native";
import { responsiveFontSizeByPixel } from "@source/utils/responsiveFontSizeByPixel";

export const stylesheet = StyleSheet.create({
    container: {
        height: 56,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: responsiveFontSizeByPixel(20),
        fontFamily: "PlusJakartaSans_300Light",
        color: "#FFF",
    },
    loading: {
        borderColor: "#FFF",
    },
});

export default stylesheet;