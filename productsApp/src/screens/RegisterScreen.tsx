import React from 'react'
import {
    Keyboard, KeyboardAvoidingView, Platform, Text,
    TextInput, TouchableOpacity, View
} from 'react-native'
import { registerStyle } from '../themes/RegisterTheme'
import { WhiteLogo } from '../components/WhiteLogo'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: Props) => {

    const { email, password, name, onChange } = useForm({
        name: '',
        email: '',
        password: ''
    });

    const onRegister = () => {
        Keyboard.dismiss();
    }

    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: '#5856D6' }}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >

                <View style={registerStyle.formContainer}>

                    <WhiteLogo />

                    <Text style={registerStyle.title}>Register</Text>

                    <Text style={registerStyle.nameLabel}>Name</Text>

                    <TextInput
                        placeholder='Your name'
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="default"
                        underlineColorAndroid="white"
                        style={{ color: 'white' }}
                        selectionColor="white"
                        onChangeText={(value) => onChange(value, 'name')}
                        value={name}
                        onSubmitEditing={onRegister}
                        autoCapitalize="words"
                        autoCorrect={false}
                    />

                    <Text style={registerStyle.emailLabel}>Email</Text>

                    <TextInput
                        placeholder='Your email'
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={{ color: 'white' }}
                        selectionColor="white"
                        onChangeText={(value) => onChange(value, 'email')}
                        value={email}
                        onSubmitEditing={onRegister}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <Text style={registerStyle.passwordLabel}>Password</Text>

                    <TextInput
                        placeholder='Your password'
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="default"
                        secureTextEntry={true}
                        underlineColorAndroid="white"
                        style={{ color: 'white' }}
                        selectionColor="white"
                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                        onSubmitEditing={onRegister}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <View style={registerStyle.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.3}
                            style={registerStyle.button}
                            onPress={onRegister}
                        >
                            <Text style={registerStyle.registerText}>New Account</Text>
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={registerStyle.userContainer}>
                    <TouchableOpacity
                        activeOpacity={0.3}
                        onPress={() => navigation.replace('LoginScreen')}
                        style={registerStyle.backButton}
                    >
                        <Text style={registerStyle.backText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}