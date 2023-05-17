import React, { Children, createContext, useReducer } from "react";
import { Usuario } from "../interfaces/AppInterface";
import { AuthState, authReducer } from "./AuthReducer";

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: () => void;
    signIn: () => void;
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

    const signUp = () => { };
    const signIn = () => { };
    const signOut = () => { }
    const removeError = () => { };

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
