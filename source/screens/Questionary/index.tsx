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
import {
    ControlledBadgeSelector,
    ControlledInputMask,
    Header,
} from "@source/components";
import { z } from "@source/config/zod";
import { ControlledInput } from "@source/components";
import { Button } from "@source/components/atoms/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ControlledImagePicker } from "@source/components/features/ControlledImagePicker";
import ImageInput from "@source/components/atoms/ImagePicker";
import { stylesheet } from "./styles";
import { useFansMutation } from "@source/store/api";
import { QuestionaryRequest } from "@source/@types";
import { errorToast, successToast } from "@source/utils";
import { setId, setUser } from "@source/store/reducers/authSlice";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "@source/hooks";

const formSchema = z.object({
    name: z.string().min(1, { message: "O nome é obrigatório." }),
    email: z
        .string()
        .email({ message: "Formato de e-mail inválido." })
        .min(1, { message: "O endereço é obrigatório." }),
    cpf: z.string().min(11, { message: "CPF inválido." }),
    interests: z.array(z.string()).optional(),
    events: z.array(z.string()).optional(),
    aboutyou: z.string().optional(),
    document: z.string({ message: "O documento é obrigatório." }),
});

type RootStackParamList = {
    ContractBuy: undefined;
    SignUpSuccess: undefined;
    PrivacyPolicy: undefined;
    TermsConditions: undefined;
};

export default function QuestionaryScreen({}) {
    const { styles } = useStyles(stylesheet);
    const navigator =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const addressInputRef = useRef<TextInput>(null);
    const cpfInputRef = useRef<TextInput>(null);                
    const dispatch = useAppDispatch();
    const selector = useAppSelector((state) => state.auth.id);


    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "teste",
            email: "teste@teste.com",
            cpf: "13.840.681-4",
            aboutyou: "Oi",
            interests: [],
            events: [],
            document: null,
        },
    });

    const [submitFans] = useFansMutation();

    const onSubmit = handleSubmit(async (data) => {
        try {
            const formData = new FormData();
            formData.append("Name", data.name);
            formData.append("Email", data.email);
            formData.append("DocumentNumber", data.cpf);
            (data.interests || []).forEach((interest: string) => {
                formData.append("Interests", interest);
            });
            (data.events || []).forEach((event: string) => {
                formData.append("Events", event);
            });
            formData.append("AboutYou", data.aboutyou || "");
            //@ts-expect-error file type
            formData.append("Document", {
                uri: data.document,
                name: "document.jpg",
                type: "image/jpeg",
            });

            const response = await submitFans(formData).unwrap();
            console.log("response", response.fan.id);

            if (response.fan.id) {
                successToast({
                    message: `Bem-vindo ${data.name}!`,
                    duration: 3000,
                });

                dispatch(setId(response.fan.id));
                dispatch(
                    setUser({
                        name: response.fan.name,
                        documentNumber: response.fan.documentNumber,
                        email: response.fan.email,
                        interests: response.fan.interests,
                        events: response.fan.events,
                        aboutYou: response.fan.aboutYou,
                        document: response.fan.document,
                    })
                );

                console.log("User data from Redux:", selector);
                navigator.navigate("SignUpSuccess");
            }
        } catch (error) {
            console.log("error", error);
            if ("data" in error) {
                errorToast({
                    message: error.data.detail,
                    duration: 3000,
                });
            } else {
                errorToast({
                    message: "Erro interno do servidor.",
                    duration: 3000,
                });
            }
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
                    <ScrollView
                        contentContainerStyle={styles.scrollViewContainer}
                    >
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
                                    onSubmitEditing={() =>
                                        addressInputRef.current?.focus()
                                    }
                                />
                            </View>
                            <View style={styles.formContainer}>
                                <ControlledInput
                                    control={control}
                                    name="email"
                                    label="E-mail"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    editable={!isSubmitting}
                                    error={errors.email?.message}
                                    onSubmitEditing={() =>
                                        cpfInputRef.current?.focus()
                                    }
                                />
                            </View>
                            <View style={styles.formContainer}>
                                <ControlledInputMask
                                    control={control}
                                    name="cpf"
                                    keyboardType="numeric"
                                    label="RG"
                                    editable={!isSubmitting}
                                    inputRef={cpfInputRef}
                                    onFocus={() => cpfInputRef.current}
                                    returnKeyType="next"
                                    mask={[
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
                                    ]}
                                />
                            </View>
                            <View style={styles.formContainer}>
                                <Text style={styles.formInputTitle}>
                                    Seus interesses
                                </Text>
                                <ControlledBadgeSelector
                                    control={control}
                                    name="interests"
                                    items={[
                                        "Valorant",
                                        "Counter-Strike",
                                        "League of Legends",
                                        "Rocket League",
                                        "Rainbow Six: Siege",
                                    ]}
                                    disabled={isSubmitting}
                                    label="Selecione alguns de seus interesses"
                                    multiple={true}
                                />
                            </View>
                            <View style={styles.formContainer}>
                                <Text style={styles.formInputTitle}>
                                    Eventos que você foi
                                </Text>
                                <ControlledBadgeSelector
                                    control={control}
                                    name="events"
                                    items={["E3", "Gamescom", "BGS", "CCXP"]}
                                    label="Selecione alguns eventos que participou"
                                    multiple={true}
                                    disabled={isSubmitting}
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
                                <Text style={styles.formInputTitle}>
                                    Envie um documento
                                </Text>
                                <Controller
                                    control={control}
                                    name="document"
                                    render={({ field, fieldState }) => (
                                        <ImageInput
                                            field={field}
                                            fieldState={fieldState}
                                            disabled={isSubmitting}
                                        />
                                    )}
                                />
                            </View>
                        </View>
                        <Button
                            label="Cadastrar"
                            onPress={onSubmit}
                            isLoading={isSubmitting}
                        />
                    </ScrollView>
                </KeyboardAwareScrollView>
            </View>
        </View>
    );
}
