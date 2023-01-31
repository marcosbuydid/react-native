import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const BottomTabScreenOne = () => {

    useEffect(() => {
        console.log("bottom tab1 effect")
    })

    return (
        <View>
            <Text>Bottom Tab Screen One</Text>
        </View>
    )
}
