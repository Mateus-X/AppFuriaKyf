import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignItems: 'center',
    marginVertical: 16,
  },
  label: {
    marginBottom: 8,
    color: theme.colors.white,
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: theme.colors.white,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'center',
  },
  deleteButton: {
    backgroundColor: theme.colors.black,
    position: 'absolute',
    bottom: 10,
    right: 0,
    padding: 8,

  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  error: {
    color: theme.colors.dark_red,
    marginTop: 8,
  },
}));

export default stylesheet;