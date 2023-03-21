import { useRef } from 'react'
import { Animated, Easing } from 'react-native';

export const UseAnimation = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();


    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    }

    const animationByPosition = (startPosition: number,
        duration: number = 700) => {
        position.setValue(startPosition);

        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                easing: Easing.bounce
            }
        ).start();
    }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        animationByPosition
    }
}
