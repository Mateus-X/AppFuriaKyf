import { BadgeSelector } from "@source/components";
import React from "react";
import { Control, useController } from "react-hook-form";
import { Text, View } from "react-native";

interface ControlledBadgeSelectorProps {
    name: string;
    control: Control<any>;
    items: string[];
    multiple?: boolean;
    label?: string;
}

export function ControlledBadgeSelector({
    name,
    control,
    items,
    multiple = true,
    label,
}: ControlledBadgeSelectorProps) {
    const {
        field: { value = [], onChange },
        fieldState: { error },
    } = useController({ name, control });

    return (
        <View>
            {label && <Text>{label}</Text>}
            <BadgeSelector
                items={items}
                multiple={multiple}
                selectedItems={value}
                onSelect={onChange}
            />
            {error && <Text style={{ color: "red" }}>{error.message}</Text>}
        </View>
    );
}