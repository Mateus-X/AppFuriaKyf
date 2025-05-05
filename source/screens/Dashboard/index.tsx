import React, { useState, useRef, useEffect } from "react";
import {
    Text,
    View,
    Platform,
    Touchable,
    TouchableOpacity,
} from "react-native";
import { HeroTemplate } from "@source/components/organisms/HeroTemplate";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Header } from "@source/components";
import { useAppSelector } from "@source/hooks";
import { RedditDashboard } from "@source/components/organisms/RedditDashboard";

export function DashboardScreen() {
    const { styles, theme } = useStyles(stylesheet);
    const { name } = useAppSelector((state) => state.auth.user);
    const id = useAppSelector((state) => state.auth.id);

    return (
            <View style={styles.background}>
                <Header variant="authenticated" name={name} />
                <View style={styles.container}>
                    <Text>Sua dashboard</Text>
                    <RedditDashboard id={id} />
                </View>
            </View>
    );
}
