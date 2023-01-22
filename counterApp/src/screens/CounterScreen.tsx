import React from 'react';
import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { FloatingActionButton } from '../components/FloatingActionButton';

export const CounterScreen = () => {

    const [counter, setCounter] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Counter: {counter}
            </Text>

            <FloatingActionButton
                title='+1'
                onPress={() => setCounter(counter + 1)}
                position='bottomRight'
            />

            <FloatingActionButton
                title='-1'
                onPress={() => setCounter(counter - 1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontSize: 45,
        textAlign: 'center',
    },
})