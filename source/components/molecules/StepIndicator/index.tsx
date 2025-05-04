import React from "react";
import { View, Text } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      {[1, 2, 3].map((step) => (
        <View key={step} style={styles.stepWrapper}>
          <View
            style={[
              styles.stepCircle,
              currentStep === step && {
                borderColor: theme.colors.secondary,
                borderWidth: 2,
              },
            ]}
          >
            <Text
              style={[
                styles.stepText,
                currentStep === step && { color: theme.colors.secondary },
              ]}
            >
              {step}
            </Text>
          </View>
          {step < 3 && <View style={styles.stepLine} />}
        </View>
      ))}
    </View>
  );
};
