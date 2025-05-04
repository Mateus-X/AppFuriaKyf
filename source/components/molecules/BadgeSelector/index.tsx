import React, { useState } from "react";
import { useController, Control } from "react-hook-form";
import { View, Text, Pressable } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";

export interface BadgeSelectorProps {
    items: string[];
    onSelect: (selected: string | string[]) => void;
    multiple?: boolean;
    selectedItems?: string[];
}

export function BadgeSelector({ items, onSelect, multiple = false, selectedItems = [] }: BadgeSelectorProps) {
    const [internalSelectedBadges, setInternalSelectedBadges] = useState<string[]>([]);
    const { styles } = useStyles(stylesheet);

    const handleBadgeClick = (badge: string) => {
        if (multiple) {
            if (internalSelectedBadges.includes(badge)) {
                const updatedBadges = internalSelectedBadges.filter((b) => b !== badge);
                setInternalSelectedBadges(updatedBadges);
                onSelect(updatedBadges);
            } else {
                const updatedBadges = [...internalSelectedBadges, badge];
                setInternalSelectedBadges(updatedBadges);
                onSelect(updatedBadges);
            }
        } else {
            const updatedBadges = selectedItems.includes(badge) ? [] : [badge];
            onSelect(updatedBadges[0] || "");
        }
    };

    const currentSelected = multiple ? internalSelectedBadges : selectedItems;

    return (
        <View style={styles.badgeContainer}>
            {items.map((badge) => (
                <Pressable
                    key={badge}
                    style={[styles.badge, currentSelected.includes(badge) ? styles.badgeSelected : styles.badgeUnselected]}
                    onPress={() => handleBadgeClick(badge)}
                >
                    <Text style={currentSelected.includes(badge) ? styles.badgeTextSelected : styles.badgeTextUnselected}>
                        {badge}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
}

