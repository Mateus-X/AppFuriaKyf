import { Dimensions } from 'react-native';
import { createStyleSheet } from 'react-native-unistyles';
import { responsiveFontSizeByPixel } from '@source/utils';

export const stylesheet = createStyleSheet((theme) => ({
  background: {
    width: "100%",
    height: Dimensions.get("window").height * 1.1,
    backgroundColor: theme.colors.black,
    padding: 30,
  },
  container: {
    backgroundColor: theme.colors.black,

  }
}));

export default stylesheet;