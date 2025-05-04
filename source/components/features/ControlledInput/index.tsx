import React from 'react';
import { Controller, Control, Path, FieldValues } from 'react-hook-form';

import { Input, InputProps } from '@source/components/atoms/Input';

interface ComponentProps<T>
  extends Omit<InputProps, 'onBlur' | 'onChangeText' | 'value'> {
  name: Path<T>;
  control: Control<T>;
  onChangeText?: (text: string) => void;
}
export function ControlledInput<T extends FieldValues>({
  name,
  control,
  onChangeText,
  ...inputProps
}: ComponentProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          {...inputProps}
          onBlur={onBlur}
          onChangeText={(text) => {
            onChange(text);
            onChangeText?.(text); 
          }}
          value={value}
        />
      )}
    />
  );
}