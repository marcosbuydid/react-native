import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchesScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    });

    const { isActive, isHungry, isHappy } = state;

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value
        })
    }

    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title={'Switches'} />
            <View style={styles.label}>
                <Text style={styles.switchText}>isActive</Text>
                <CustomSwitch
                    isToggled={isActive}
                    onChange={(value) => onChange(value, 'isActive')}
                />
            </View>
            <View style={styles.label}>
                <Text style={styles.switchText}>isHungry</Text>
                <CustomSwitch
                    isToggled={isHungry}
                    onChange={(value) => onChange(value, 'isHungry')}
                />
            </View>
            <View style={styles.label}>
                <Text style={styles.switchText}>isHappy</Text>
                <CustomSwitch
                    isToggled={isHappy}
                    onChange={(value) => onChange(value, 'isHappy')}
                />
            </View>
            <Text style={styles.switchText}>
                {JSON.stringify(state, null, 5)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    switchText: {
        fontSize: 20
    },

    label: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
