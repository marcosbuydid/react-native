import React, { useContext, useEffect } from 'react'
import {
    Alert,
    Keyboard, KeyboardAvoidingView, Platform, Text,
    TextInput, TouchableOpacity, View
} from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyle } from '../themes/LoginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> { }

export const LoginScreen = ({ navigation }: Props) => {

    const { signIn, removeError, errorMessage } = useContext(AuthContext);

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (errorMessage.length === 0) { return };
        Alert.alert(
            'Authentication failed',
            errorMessage,
            [
                {
                    text: 'Ok',
                    onPress: removeError,
                }
            ]
        );
    }, [errorMessage])


    const onLogin = () => {
        Keyboard.dismiss();

        signIn({ correo: email, password })
    }

    return (
        <>
            <Background />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >

                <View style={loginStyle.formContainer}>

                    <WhiteLogo />

                    <Text style={loginStyle.title}>Login</Text>

                    <Text style={loginStyle.emailLabel}>Email</Text>

                    <TextInput
                        placeholder='Your email'
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={{ color: 'white' }}
                        selectionColor="white"
                        onChangeText={(value) => onChange(value, 'email')}
                        value={email}
                        onSubmitEditing={onLogin}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <Text style={loginStyle.passwordLabel}>Password</Text>

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
                        onSubmitEditing={onLogin}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <View style={loginStyle.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.3}
                            style={loginStyle.button}
                            onPress={onLogin}
                        >
                            <Text style={loginStyle.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={loginStyle.userContainer}>
                        <TouchableOpacity
                            activeOpacity={0.3}
                            onPress={() => navigation.replace('RegisterScreen')}
                        >
                            <Text style={loginStyle.accountText}>New Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}
