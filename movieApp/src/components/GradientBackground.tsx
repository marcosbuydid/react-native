import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext';
import { UseFade } from '../hooks/UseFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: Props) => {

    const { colors, previousColors, setPreviousMainColors } = useContext(GradientContext);

    const { opacity, fadeIn, fadeOut } = UseFade()

    useEffect(() => {
        fadeIn(() => {
            setPreviousMainColors(colors);
            fadeOut(0);
        })
    }, [colors])


    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[previousColors.primaryColor, previousColors.secondaryColor, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.7 }}
            />

            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'red' }}
            >
                <LinearGradient
                    colors={[colors.primaryColor, colors.secondaryColor, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.7 }}
                />

            </Animated.View>
            {children}
        </View>
    )
}
