import React, { useRef, useState } from "react";
import {
  StatusBar,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useStyles } from "react-native-unistyles";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControlledBadgeSelector, ControlledInputMask, Header } from "@source/components";
import { z } from "@source/config/zod";
import { ControlledInput } from "@source/components";
import { Button } from "@source/components/atoms/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ControlledImagePicker } from "@source/components/features/ControlledImagePicker";
import ImageInput from "@source/components/atoms/ImagePicker";
import {stylesheet} from "./styles";

const formSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório." }),
  address: z.string().min(1, { message: "O endereço é obrigatório." }),
  cpf: z.string().min(11, { message: "CPF inválido." }),
  interests: z.array(z.string()).optional(),
  events: z.array(z.string()).optional(),
  aboutyou: z.string().optional(),
  image: z.string(),
});

type RootStackParamList = {
  ContractBuy: undefined;
  SignUpSuccess: undefined;
  PrivacyPolicy: undefined;
  TermsConditions: undefined;
};

export default function QuestionaryScreen({}) {
  const { styles } = useStyles(stylesheet);
  const navigator = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const addressInputRef = useRef<TextInput>(null);
  const cpfInputRef = useRef<TextInput>(null);
  // const [signUpRequest] = useSignUpMutation();
  const [apiErrors, setApiErrors] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      cpf: "",
      aboutyou: "",
      interests: [],
      events: [],
      image: null,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      // await signUpRequest(data).unwrap();
      // navigator.navigate("SignUpSuccess");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <View style={styles.background}>
      <View style={styles.safeAreaViewContainer}>
        <Header variant="simple" />
        <KeyboardAwareScrollView
          extraScrollHeight={-500}
          enableOnAndroid={true}
          contentContainerStyle={styles.keyboardAvoidingViewContainer}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.formWrapper}>
              <Text style={styles.pageTitle}>Questionário</Text>
              <View style={styles.formContainer}>
                <ControlledInput
                  control={control}
                  name="name"
                  autoCapitalize="words"
                  returnKeyType="next"
                  label="Nome"
                  editable={!isSubmitting}
                  error={errors.name?.message}
                  onSubmitEditing={() => addressInputRef.current?.focus()}
                />
              </View>
              <View style={styles.formContainer}>
                <ControlledInput
                  inputRef={addressInputRef}
                  control={control}
                  name="address"
                  label="Endereço"
                  autoCapitalize="words"
                  returnKeyType="next"
                  editable={!isSubmitting}
                  error={errors.address?.message}
                  onSubmitEditing={() => cpfInputRef.current?.focus()}
                />
              </View>
              <View style={styles.formContainer}>
                <ControlledInputMask
                  control={control}
                  name="cpf"
                  keyboardType="numeric"
                  label="CPF"
                  editable={!isSubmitting}
                  inputRef={cpfInputRef}
                  onFocus={() => cpfInputRef.current}
                  returnKeyType="next"
                  mask={[
                    /\d/,
                    /\d/,
                    /\d/,
                    ".",
                    /\d/,
                    /\d/,
                    /\d/,
                    ".",
                    /\d/,
                    /\d/,
                    /\d/,
                    "-",
                    /\d/,
                    /\d/,
                  ]}
                />
              </View>
              <View style={styles.formContainer}>
                <ControlledBadgeSelector
                  control={control}
                  name="interests"
                  items={["Games", "Séries", "Filmes", "Música", "Esportes"]}
                  label="Selecione alguns de seus interesses"
                  multiple={true}
                />
              </View>
              <View style={styles.formContainer}>
                <ControlledBadgeSelector
                  control={control}
                  name="events"
                  items={["E3", "Gamescom", "BGS", "CCXP"]}
                  label="Selecione alguns eventos que participou"
                  multiple={true}
                />
              </View>
              <View style={styles.formContainer}>
                <ControlledInput
                  control={control}
                  name="aboutyou"
                  label="Conte-nos um pouco sobre você"
                  editable={!isSubmitting}
                />
              </View>
              <View style={styles.formContainer}>
                <ControlledInput
                  control={control}
                  name="aboutyou"
                  label="Conte-nos um pouco sobre você"
                  editable={!isSubmitting}
                />
              </View>
              <View style={styles.formContainer}>
                <Controller
                  control={control}
                  name="image"
                  render={({ field, fieldState }) => (
                    <ImageInput field={field} fieldState={fieldState} label="Documento" />
                  )}
                />
              </View>
            </View>
            <Button
              label="Cadastrar"
              onPress={onSubmit}
              isLoading={isSubmitting}
              style={styles.submitButton}
            />
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}
