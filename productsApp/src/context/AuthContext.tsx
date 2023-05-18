import React, { Children, createContext, useReducer } from "react";
import { Usuario, LoginResponse, LoginData } from '../interfaces/AppInterface';
import { AuthState, authReducer } from "./AuthReducer";
import productApi from "../api/ProductApi";

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: () => void;
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
            console.log(response.data)

        } catch (error) {
            console.log(error);
            dispatch({
                type: 'addError',
                payload: 'User or password not match'
            })
        }
    };

    const signUp = () => { };

    const signOut = () => { };

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
