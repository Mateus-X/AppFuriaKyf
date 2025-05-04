import { createStyleSheet } from "react-native-unistyles";
import { responsiveFontSizeByPixel } from "@source/utils";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingBottom: 1,
    width: "100%"    
},
  stepWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: theme.colors.typography.gray,
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.3s ease-in-out",
  },
  stepText: {
    color: theme.colors.typography.gray,
    fontSize: responsiveFontSizeByPixel(22),
    fontFamily: theme.fonts.inter[500],
  },
  stepLine: {
    width: 45,
    height: 1,
    backgroundColor: theme.colors.typography.gray,
  },
}));