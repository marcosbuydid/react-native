import React, { createContext, useEffect, useReducer } from "react";
import { Usuario, LoginResponse, LoginData, RegisterData, RegisterResponse } from '../interfaces/AppInterface';
import { AuthState, authReducer } from "./AuthReducer";
import productApi from "../api/ProductApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: (registerData: RegisterData) => void;
    signIn: (loginData: LoginData) => void;
    signOut: () => void;
    removeError: () => void;
}

const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);

    useEffect(() => {
        tokenValidation();
    }, [])

    const tokenValidation = async () => {
        const token = await AsyncStorage.getItem('token');

        if (!token) return dispatch({ type: 'notAuthenticated' });

        //if we have a token
        const response = await productApi.get('/auth');

        if (response.status !== 200) {
            return dispatch({ type: 'notAuthenticated' });
        }
        else {
            dispatch({
                type: 'signUp',
                payload: {
                    token: response.data.token,
                    user: response.data.usuario
                }
            })
        }
    }


    //I want to receive an object of type LoginData
    //the object I send to signIn must comply with the interface LoginData
    const signIn = async ({ correo, password }: LoginData) => {
        try {
            const response = await productApi.post<LoginResponse>('/auth/login', { correo, password });
            dispatch({
                type: 'signUp',
                payload: {
                    token: response.data.token,
                    user: response.data.usuario
                }
            })

            await AsyncStorage.setItem('token', response.data.token);

        } catch (error) {
            dispatch({
                type: 'addError',
                payload: 'Invalid credentials'
            })
        }
    };

    const signUp = async ({ nombre, correo, password }: RegisterData) => {
        try {
            const response = await productApi.post<RegisterResponse>('/usuarios', { nombre, correo, password });
            dispatch({
                type: 'signUp',
                payload: {
                    token: response.data.token,
                    user: response.data.usuario
                }
            })

            await AsyncStorage.setItem('token', response.data.token);

        } catch (error) {
            dispatch({
                type: 'addError',
                payload: 'Cannot create user'
            })
        }

    };

    const signOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signOut' });
    };

    const removeError = () => {
        dispatch({
            type: 'removeError',
        })
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            signOut,
            removeError,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
