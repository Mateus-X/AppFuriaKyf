import { responsiveFontSizeByPixel } from '@source/utils/responsiveFontSizeByPixel';
import { StyleSheet } from 'react-native';

export const stylesheet = StyleSheet.create({
  container: {
    position: 'relative',
    gap: 6,
  },
  input: {
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: "#000",
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 2,
    borderColor: "#000",
    fontSize: responsiveFontSizeByPixel(16),
    lineHeight: responsiveFontSizeByPixel(24),
  fontFamily: "PlusJakartaSans_300Light",
    color: "#000",
  },
  disabledInput: {
    backgroundColor: '#f5f5f5', 
    borderColor: '#cccccc', 
    color: '#999999', 
  },
  disabledLabel: {
    color: '#999999',
  },
  label: {
    position: 'absolute',
    left: 15,
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
});