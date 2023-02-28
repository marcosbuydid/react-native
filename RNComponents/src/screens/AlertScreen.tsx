import React from 'react'
import { Alert, Button, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';
import prompt from 'react-native-prompt-android';

export const AlertScreen = () => {

    const showAlert = () => {

        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    }

    const showAlertPrompt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title={'Alerts'} />

            <Button
                title='Show Alert'
                onPress={showAlert}
            />
            <View
                style={{ marginTop: 20 }}
            >
                <Button
                    title='Show Prompt'
                    onPress={showAlertPrompt}
                />
            </View>
        </View>
    )
}
