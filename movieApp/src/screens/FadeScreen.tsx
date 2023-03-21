import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { UseFade } from '../hooks/UseFade'

export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = UseFade();

    UseFade();
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Animated.View
                style={{
                    backgroundColor: '#084F6A',
                    width: 150,
                    height: 150,
                    borderColor: 'white',
                    borderWidth: 5,
                    opacity: opacity
                }}
            />
            <View style={{ marginTop: 20 }}>
                <Button
                    title="FadeIn"
                    onPress={() => fadeIn}
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button
                    title="FadeOut"
                    onPress={() => fadeOut}
                />
            </View>
        </View>
    )
}
