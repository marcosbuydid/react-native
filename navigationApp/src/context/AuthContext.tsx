import { createContext, useReducer } from "react";
import { authReducer } from "./AuthReducer";

//anyone who wants to implement out AuthContext must implement our interface
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

//auth initial state
export const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined
}

//we define what exposes our context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    signOut: () => void;
}

//we create the context
export const AuthContext = createContext({} as AuthContextProps);


//component provider of the state
export const AuthProvider = ({ children }: any) => {

    //we create our reducer using the hook useReducer
    //the function of the reducer is to receive arguments and create a new state
    //a new state is like a copy of our authInitialState but the arguments now
    //have a different state, so for example the user is logged in so isLoggedIn now is in true.
    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavoriteIcon', payload: iconName })
    }

    const signOut = () => {
        dispatch({ type: 'signOut' })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}