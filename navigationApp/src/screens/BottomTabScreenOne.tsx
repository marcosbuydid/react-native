import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';


export const BottomTabScreenOne = () => {

    useEffect(() => {
        //console.log("bottom tab1 effect")
    })

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: 20
        }}>
            <Text style={{
                ...styles.title,
                fontSize: 20,
                fontWeight: 'bold'
            }}>
                Some icons
            </Text>
            <Text>
                <Icon name="airplane-outline" size={30} color="black" />
                <Icon name="alarm-outline" size={30} color="black" />
                <Icon name="battery-full-outline" size={30} color="black" />
            </Text>
        </View>
    )
}
