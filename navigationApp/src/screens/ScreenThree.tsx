import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

export const ScreenThree = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({

            //this option replace the title name of the screen
            //defined on the stack navigator for the name that
            //appears next to the back arrow on the left-top of the page
            title: '',

            //headerBackTitle: ''
        })
    })

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Screen Three</Text>

            <Button
                title="Go Back"
                onPress={() => navigation.pop()}
            />

            <Button
                title="Go to Screen One"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}