import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native';
import { UseAnimation } from '../hooks/UseAnimation';

export const Animation101Screen = () => {

    const { opacity, position, animationByPosition, fadeIn, fadeOut } = UseAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                marginBottom: 20,
                opacity,
                transform: [{
                    translateY: position
                }]
            }} />
            <Button
                title='FadeIn'
                onPress={() => {
                    fadeIn();
                    animationByPosition(-100);
                }}
            />
            <View style={styles.button}>
                <Button
                    title='FadeOut'
                    onPress={fadeOut}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    },

    button: {
        marginTop: 20
    }
});
