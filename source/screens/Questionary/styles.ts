import { responsiveFontSizeByPixel } from '@source/utils';
import { Dimensions } from 'react-native';
import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  background: {
    flex: 1,
    backgroundColor: theme.colors.black,
    paddingHorizontal: responsiveFontSizeByPixel(20),
  },
  safeAreaViewContainer: {
    flex: 1,
    paddingTop: 0,
  },
  keyboardAvoidingViewContainer: {},
  scrollViewContainer: {
    marginBottom: 60,
  },
  formWrapper: {
    flex: 1,
    gap: responsiveFontSizeByPixel(18),
  },
  pageTitle: {
    color: theme.colors.white,
    fontSize: responsiveFontSizeByPixel(28),
    fontFamily: theme.fonts.inter[500],
    marginBottom: responsiveFontSizeByPixel(15),
    alignSelf: 'center',
  },
  formContainer: {
    marginBottom: 5,
  },
  formInputTitle: {
    color: theme.colors.white,
    fontSize: responsiveFontSizeByPixel(18),
    fontFamily: theme.fonts.inter[400],
  }
}));

export default stylesheet;