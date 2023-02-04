import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { TouchableIconButton } from '../components/TouchableIconButton';


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
                fontWeight: 'bold',
                alignSelf: 'center'
            }}>
                Some icons
            </Text>
            <Text style={{
                justifyContent: 'space-between',
                alignSelf: 'center'
            }}>
                <TouchableIconButton iconName="airplane-outline" />
                <TouchableIconButton iconName="alarm-outline" />
                <TouchableIconButton iconName="battery-full-outline" />
            </Text>
        </View>
    )
}
