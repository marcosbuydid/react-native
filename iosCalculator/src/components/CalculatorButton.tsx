import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/CalculatorTheme'

interface Props {
    text: string,
    color?: string;
    width?: boolean;
    action: (numberText: string) => void;
}

export const CalculatorButton = ({ text, color = '#2D2D2D', width = false, action }: Props) => {

    return (
        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View
                style={{
                    ...styles.button,
                    backgroundColor: color,
                    width: (width) ? 180 : 80

                }}>
                <Text style={{
                    ...styles.buttonText,
                    color: (color === '#9B9B9B' ? 'black' : 'white')
                }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
