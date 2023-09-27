import React, { useRef } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

export const Animation102Screen = () => {

    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                // x,y are Animated.Value
                dx: pan.x,
                dy: pan.y,
            },
        ],
            { useNativeDriver: false }
        ),

        onPanResponderRelease: () => {
            Animated.spring(
                // Auto-multiplexed
                pan,
                // Back to zero
                {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false
                },
            ).start();
        },
    });

    return (
        <View style={styles.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.redBox]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    redBox: {
        backgroundColor: '#CC2121',
        width: 150,
        height: 150
    },
});