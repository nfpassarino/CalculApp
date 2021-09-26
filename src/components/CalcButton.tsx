/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

export enum buttonColor {
    Number = '#333333',
    PrimaryOP = '#FF9D09',
    SecondaryOP = '#A5A5A5',
}

export enum buttonWidth {
    Simple = 80,
    Double = 170,
}

interface Props {
    width?: buttonWidth,
    text?: string,
    bgColor?: buttonColor,
    action: (num: string) => void,
}

export const CalcButton = ({
    width = buttonWidth.Simple,
    text = '-',
    bgColor = buttonColor.Number,
    action,
}: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => action(text) }
        >
            <View style={
                { ...styles.button,
                    width: width,
                    backgroundColor: bgColor }
            }>
                <Text style={{
                    ...styles.textButton,
                    color: (bgColor === buttonColor.SecondaryOP) ? '#000000' : '#FFFFFF',
                }}>{ text }</Text>
            </View>
        </TouchableOpacity>
    );
};
