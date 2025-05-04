import { StyleSheet } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(theme => ({
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  badge: {
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  badgeSelected: {
    backgroundColor: theme.colors.white,
    borderColor: 'transparent',
  },
  badgeUnselected: {
    backgroundColor: 'transparent',
    borderColor: '#ccc',
  },
  badgeTextSelected: {
    color: theme.colors.black,
  },
  badgeTextUnselected: {
    color: theme.colors.white,
  },
}));
