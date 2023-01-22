import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    title: string,
    position?: 'bottomRight' | 'bottomLeft';
    onPress: () => void;
}

export const FloatingActionButton = ({ title, onPress, position = 'bottomLeft' }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={(position === 'bottomLeft') ?
                styles.floatingActionButtonLeftPosition :
                styles.floatingActionButtonRightPosition}>
            <View style={styles.floatingActionButton}>
                <Text style={styles.floatingActionButtonText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    floatingActionButton: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },

    floatingActionButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    floatingActionButtonRightPosition: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },

    floatingActionButtonLeftPosition: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    }
})
