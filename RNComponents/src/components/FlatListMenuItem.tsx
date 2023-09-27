import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MenuItem } from '../interfaces/AppInterface';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation<any>();
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color='blue'
                    size={25}
                />
                <Text style={styles.textItem}>
                    {menuItem.name}
                </Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name='chevron-forward-outline'
                    color='blue'
                    size={25}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },

    textItem: {
        marginLeft: 10,
        fontSize: 20,
        color: 'black'
    }
})
