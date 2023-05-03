import React from 'react'
import { Text, View } from 'react-native'

export const Background = () => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: '#5856D6',
                width: 800,
                height: 1000,
                transform: [
                    { rotate: '-65deg' }
                ]
            }}
        />
    )
}