import React from "react";
import { ControllerRenderProps } from "react-hook-form";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { launchImageLibraryAsync } from "expo-image-picker";

interface ImageInputProps {
  field: ControllerRenderProps<any, any>;
  fieldState: any;
  label?: string;
}

export default function ImageInput({ field, fieldState, label }: ImageInputProps) {
  const handlePickImage = async () => {
    const response = await launchImageLibraryAsync({
      mediaTypes: "images",
      quality: 0.7,
    });
    if (response.assets && response.assets.length > 0) {
      field.onChange(response.assets[0].uri);
    }
  };

  return (
    <View style={{ alignItems: "center", marginVertical: 16 }}>
      {label && <Text style={{ marginBottom: 8 }}>{label}</Text>}
      <TouchableOpacity
        onPress={handlePickImage}
        style={{
          backgroundColor: "#eee",
          padding: 12,
          borderRadius: 8,
          marginBottom: 8,
        }}
      >
        <Text>Selecionar imagem</Text>
      </TouchableOpacity>
      {field.value ? (
        <Image
          source={{ uri: field.value }}
          style={{ width: 120, height: 120, borderRadius: 8 }}
        />
      ) : null}
      {fieldState.error && (
        <Text style={{ color: "red", marginTop: 8 }}>{fieldState.error.message}</Text>
      )}
    </View>
  );
}