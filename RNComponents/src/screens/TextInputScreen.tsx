import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';


export const TextInputScreen = () => {
    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                >
                    <View style={styles.globalMargin}>

                        <HeaderTitle title={'Text Inputs'} />

                        <TextInput
                            style={styleSheet.input}
                            placeholder='Insert your name'
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={styleSheet.input}
                            placeholder='Insert your email'
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                        />
                        <TextInput
                            style={styleSheet.input}
                            placeholder='Insert your phone'
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                        />

                        <View style={styles.label}>
                            <Text style={styles.switchText}>Subscribe</Text>
                            <CustomSwitch
                                isToggled={isSubscribed}
                                onChange={(value) => onChange(value, 'isSubscribed')}
                            />
                        </View>

                        <Text style={styleSheet.text}>
                            {JSON.stringify(form, null, 5)}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styleSheet = StyleSheet.create({
    input: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.3)',
        marginTop: 20
    },

    text: {
        marginTop: 30,
        fontSize: 20
    },
})
