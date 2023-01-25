import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={styles.container}>

            <Text style={styles.box1}>Box 1</Text>
            <Text style={styles.box2}>Box 2</Text>
            <Text style={styles.box3}>Box 2</Text>

        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    },

    box1: {
        //flex 4 = 40 percent of the screen is for box1
        flex: 4,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },

    box2: {
        //flex 4 = 40  percent of the screen is for box2
        flex: 4,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },

    box3: {
        //flex 4 = 20 percent of the screen is for box3
        flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
})
