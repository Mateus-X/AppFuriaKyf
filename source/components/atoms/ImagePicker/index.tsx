import React from "react";
import { ControllerRenderProps } from "react-hook-form";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { launchImageLibraryAsync } from "expo-image-picker";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface ImageInputProps {
  field: ControllerRenderProps<any, any>;
  fieldState: any;
  label?: string;
  disabled?: boolean;
}

export default function ImageInput({ field, fieldState, label, disabled }: ImageInputProps) {
  const {styles} = useStyles(stylesheet);

  const handlePickImage = async () => {
    const response = await launchImageLibraryAsync({
      mediaTypes: "images",
      quality: 0.7,
    });
    if (response.assets && response.assets.length > 0) {
      field.onChange(response.assets[0].uri);
    }
  };

  const handleRemoveImage = () => {
    field.onChange(null);
  }

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleRemoveImage}
            style={styles.deleteButton}
            disabled={disabled}
          >
            <MaterialCommunityIcons
              name="delete-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePickImage}
            style={styles.button}
            disabled={disabled}
          >
            <Text>Selecionar imagem</Text>
          </TouchableOpacity>
        </View>
      {field.value ? (
        <Image
          source={{ uri: field.value }}
          style={styles.image}
        />
      ) : null}
      {fieldState.error && (
        <Text style={styles.error}>{fieldState.error.message}</Text>
      )}
    </View>
  );
}