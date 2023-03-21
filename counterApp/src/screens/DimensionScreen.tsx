import React from 'react'
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native'

//const { width, height } = Dimensions.get('window');

export const DimensionScreen = () => {

    const { width, height } = useWindowDimensions();
    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * 2
                    }} />
                <View style={styles.orangeBox} />
            </View>
            <Text style={styles.title}>W: {width}, H: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red',
    },

    purpleBox: {
        backgroundColor: '#5856D6',
        //width: '50%',
        height: '50%',
    },

    orangeBox: {
        backgroundColor: '#F0A23B',
    },

    title: {
        fontSize: 20,
        textAlign: 'center'
    },

})
