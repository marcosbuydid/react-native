import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const BottomTabScreenTwo = () => {

    useEffect(() => {
        console.log("bottom tab2 effect")
    })

    return (
        <View>
            <Text>Bottom Tab Screen One</Text>
        </View>
    )
}