import React, { useRef } from 'react'
import { Animated, View } from 'react-native'

export const UseFade = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const fadeIn = (callback?: Function) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            }).start(() => callback ? callback() : null);
    }

    const fadeOut = (duration: number = 300) => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration,
                useNativeDriver: true
            }).start();
    }
    return {
        opacity,
        fadeIn,
        fadeOut,
    }
}
