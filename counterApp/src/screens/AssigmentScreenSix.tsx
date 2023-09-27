import React from 'react'
import { StyleSheet, View } from 'react-native'

export const AssigmentScreenSix = () => {
    return (
        <View style={styles.container}>

            <View style={styles.purpleBox} />
            <View style={styles.orangeBox} />
            <View style={styles.lightblueBox} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        alignContent: 'space-between',
    },

    purpleBox: {
        flex: 1,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
    },

    orangeBox: {
        flex: 1,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
    },

    lightblueBox: {
        flex: 2,
        backgroundColor: '#28C4D9',
        borderWidth: 10,
        borderColor: 'white',
    },
})