import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import {
  Animated,
  StyleProp,
  Text,
  TextInput as TextInputNative,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';
import TextInput, { Mask } from 'react-native-mask-input';
import { useStyles } from 'react-native-unistyles';

import { responsiveFontSizeByPixel } from '@source/utils/responsiveFontSizeByPixel';

import { stylesheet } from './styles';

export interface InputMaskProps
  extends Omit<
    TextInputProps,
    'ref' | 'style' | 'cursorColor' | 'selectionColor'
  > {
  inputRef?: LegacyRef<TextInputNative>;
  mask?: Mask;
  label?: string;
  error?: string;
  style?: StyleProp<TextStyle>;
  disabled?: boolean; 
}

export function InputMask({
  inputRef,
  label,
  error,
  value,
  placeholder,
  onFocus,
  onBlur,
  disabled,
  editable: editableProp,
  ...inputProps
}: InputMaskProps) {
  const { styles, theme } = useStyles(stylesheet);

  const animation = useRef(new Animated.Value(0)).current;
  const [isFocused, setIsFocused] = useState(false);
  
  const editable = disabled ? false : editableProp !== false;
  
  const fontSizeAnimated = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        responsiveFontSizeByPixel(18),
        responsiveFontSizeByPixel(13),
      ],
  });

  const transformYAnimated = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [
          (60 - responsiveFontSizeByPixel(24)) / 2,
          -(responsiveFontSizeByPixel(26) / 2),
      ],
  });

  const lineHeightAnimated = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [
          responsiveFontSizeByPixel(24),
          responsiveFontSizeByPixel(15),
      ],
  });


  useEffect(() => {
    Animated.timing(animation, {
      toValue: isFocused || value?.length > 0 ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);
  return (
    <View style={styles.container}>
      {label && (
        <Animated.Text
          style={[
            styles.label,
            {
              fontSize: fontSizeAnimated,
              lineHeight: lineHeightAnimated,
              transform: [{ translateY: transformYAnimated }],
            },
            disabled && styles.disabledLabel,
          ]}
        >
          {label}
        </Animated.Text>
      )}
  
      <TextInput
        {...inputProps}
        ref={inputRef}
        value={value}
        placeholder={typeof placeholder === 'string' ? placeholder : undefined}
        onFocus={(event) => {
          if (editable) {
            setIsFocused(true);
            if (typeof onFocus === 'function') {
              onFocus(event);
            }
          }
        }}
        onBlur={(event) => {
          if (editable) {
            setIsFocused(false);
            if (typeof onBlur === 'function') {
              onBlur(event);
            }
          }
        }}
        
        style={[
          styles.input,
          disabled && styles.disabledInput,
        ]}
        editable={editable}
      />
  
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
    </View>
  );
}