import React, { useEffect, useState } from "react";
import { View, Image, Dimensions, Linking, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { StepIndicator } from "@source/components/molecules/StepIndicator";
import { Button } from "@source/components/atoms/Button";
import { FontAwesome } from "@expo/vector-icons";
import { API_URL } from "@env";
import { useRedditDataQuery } from "@source/store/api";

interface RedditDashboardProps {
    id: number;
}

export function RedditDashboard({ id }: RedditDashboardProps) {
    const { styles, theme } = useStyles(stylesheet);
    const [viewData, setViewData] = useState(true);
    const [shouldStartPolling, setShouldStartPolling] = useState(true);

    const { data } = useRedditDataQuery(
        { id: id },
        {
            pollingInterval: !shouldStartPolling ? 0 : 2000,
            skip: !shouldStartPolling,
        }
    );

    console.log("data", data);

    useEffect(() => {
        if (data) {
            setShouldStartPolling(false);
        }
        if (data?.furia_mentions) {
            setViewData(true);
        }
    }, [data]);

    const handleAuthClick = () => {
        Linking.openURL(
            `http://192.168.2.101:5123/api/reddit/auth?state=${id}`
        );
        setShouldStartPolling(true);
    };

    return (
        <View style={styles.background}>
            {!data && (
                <Button
                    variant="primary"
                    onPress={handleAuthClick}
                    label="Integrar com o Reddit"
                    icon="reddit"
                />
            )}
            {data && (
                <View style={styles.background}>
                    <Text style={{ color: theme.colors.white, fontSize: 12 }}>
                        Seu perfil tem {data?.furia_mentions} comentários
                        relacionados a FURIA.
                    </Text>
                    {(() => {
                        switch (true) {
                            case data?.furia_mentions == 0:
                                return (
                                    <Text
                                        style={{
                                            color: theme.colors.white,
                                            fontSize: 12,
                                        }}
                                    >
                                        Acho que veio pro lugar certo, pra
                                        descobrir seu novo time de Esports.
                                    </Text>
                                );
                            case data?.furia_mentions < 10:
                                return (
                                    <Text
                                        style={{
                                            color: theme.colors.white,
                                            fontSize: 12,
                                        }}
                                    >
                                        Começando ainda, mas já está com o
                                        espírito de torcedor.
                                    </Text>
                                );
                            case data?.furia_mentions === 10:
                                return (
                                    <Text
                                        style={{
                                            color: theme.colors.white,
                                            fontSize: 12,
                                        }}
                                    >
                                        Já é um torcedor que vibra com as nossas
                                        vitórias.
                                    </Text>
                                );
                            case data?.furia_mentions > 10:
                                return (
                                    <Text
                                        style={{
                                            color: theme.colors.white,
                                            fontSize: 12,
                                        }}
                                    >
                                        Caramba, isso que é um Furioso de
                                        verdade! Vamos nessa!
                                    </Text>
                                );
                        }
                    })()}
                </View>
            )}
        </View>
    );
}
