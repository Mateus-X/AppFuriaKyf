import { Dimensions } from 'react-native';
import { createStyleSheet } from 'react-native-unistyles';
import { responsiveFontSizeByPixel } from '@source/utils';

export const stylesheet = createStyleSheet((theme) => ({
  background: {
    position: "absolute",
    width: "100%",
    height: Dimensions.get("window").height * 0.6,
    backgroundColor: theme.colors.black,
    padding: 30,
  },
  informativeText: {
    color: theme.colors.white,
    fontSize: responsiveFontSizeByPixel(18),
    fontFamily: theme.fonts.inter[400],
  },
  informativeTitle: {
    color: theme.colors.white,
    fontSize: responsiveFontSizeByPixel(36),
    fontFamily: theme.fonts.inter[500],
    marginBottom: 15,
  },
  
}));

export default stylesheet;