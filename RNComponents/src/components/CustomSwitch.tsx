import React, { useState } from 'react'
import { Platform, Switch } from 'react-native';

interface Props {
    isToggled: boolean;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isToggled, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isToggled);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };


    return (
        <Switch
            trackColor={{ false: '#D9D9DB', true: '#50bfa4' }}
            thumbColor={(Platform.OS === 'android') ? '#5856D6' : ''}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
