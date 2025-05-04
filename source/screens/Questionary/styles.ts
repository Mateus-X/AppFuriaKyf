import { StyleSheet, Dimensions } from 'react-native';

export const stylesheet = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imageBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: Dimensions.get('window').height * 0.4, 
    zIndex: 1,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: Dimensions.get('window').height * 0.4, 
    zIndex: 2,
  },
});

export default stylesheet;