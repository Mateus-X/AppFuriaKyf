import { StyleSheet, Dimensions } from 'react-native';
import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  background: {
    backgroundColor: theme.colors.black,
  },
  
}));

export default stylesheet;