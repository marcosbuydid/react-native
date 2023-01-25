import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Box Object Model
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: 'green',
        alignContent: 'center',
        padding: 100
    },

    title:{
        padding:10,
        fontSize: 20,
        borderWidth: 10,
        alignSelf: 'center'
    }
})