import { UnistylesRuntime } from "react-native-unistyles";
import { showMessage, MessageOptions } from "react-native-flash-message";

import * as theme from "@source/styles/themes";

const defaultConfig: Partial<MessageOptions> = {
  floating: true,
  duration: 4000,
  position: "top",
  statusBarHeight: UnistylesRuntime.insets.top,
  titleStyle: {
    fontFamily: theme.lightTheme.fonts.inter[700],
  },
  textStyle: {
    fontFamily: theme.lightTheme.fonts.inter[500],
    textAlign: "justify",
  },
};

export function successToast(settings: MessageOptions) {
  showMessage({
    type: "success",
    ...defaultConfig,
    ...settings,
  });
}

export function errorToast(settings: MessageOptions) {
  showMessage({
    backgroundColor: theme.lightTheme.colors.typography.error,
    ...defaultConfig,
    ...settings,
  });
}
