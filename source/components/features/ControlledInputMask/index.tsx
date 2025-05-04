import React from 'react';
import { Controller, Control, Path, FieldValues } from 'react-hook-form';

import { InputMask, InputMaskProps } from '@source/components/atoms/InputMask';

interface ComponentProps<T>
  extends Omit<InputMaskProps, 'onBlur' | 'onChangeText' | 'value'> {
  name: Path<T>;
  control: Control<T>;
  style?: any;
  disabled?: boolean;
  editable?: boolean;
}

export function ControlledInputMask<T extends FieldValues>({
  name,
  control,
  style,
  disabled, 
  editable,
  ...inputProps
}: ComponentProps<T>) {
  // Priorizar disabled sobre editable 
  // se disabled=true, o campo está desabilitado independente do valor de editable
  const isDisabled = disabled === true;
  const isEditable = editable !== false && !isDisabled;
  
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputMask
          {...inputProps}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          style={style} 
          disabled={isDisabled}
          editable={isEditable}
        />
      )}
    />
  );
}
