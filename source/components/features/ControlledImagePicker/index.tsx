import React from "react";
import { Controller, useForm } from "react-hook-form";
import ImageInput from "@source/components/atoms/ImagePicker";

export const ControlledImagePicker: React.FC = () => {
  const { control } = useForm();

  return (
    <Controller
      control={control}
      name="image"
      render={({ field, fieldState }) => (
        <ImageInput field={field} fieldState={fieldState} label="Imagem" />
      )}
    />
  );
};