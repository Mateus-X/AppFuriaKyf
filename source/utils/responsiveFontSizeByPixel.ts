import { Dimensions, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export function responsiveFontSizeByPixel(value: number): number {
  const baseFontSize = RFValue(value, Dimensions.get("screen").height);

  if (Platform.OS === "ios") {
    return baseFontSize * 0.8;
  }

  return baseFontSize;
}
