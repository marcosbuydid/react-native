import React from 'react'
import { StyleSheet, View } from 'react-native'

export const AssigmentScreenEight = () => {
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
        justifyContent: 'center'
    },

    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        alignSelf: 'center'
    },

    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        marginLeft: 255
    },

    lightblueBox: {
        width: 100,
        height: 100,
        backgroundColor: '#28C4D9',
        borderWidth: 10,
        borderColor: 'white',
        alignSelf: 'center'
    },
})