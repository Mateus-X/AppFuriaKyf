import { UnistylesRegistry } from "react-native-unistyles";

import { lightTheme } from "./themes";

type AppThemes = {
  light: typeof lightTheme;
};

declare module "react-native-unistyles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
}).addConfig({
  adaptiveThemes: true,
  initialTheme: "light",
});
