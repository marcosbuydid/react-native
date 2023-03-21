import { AuthState } from './AuthContext';

type authAction =
    | { type: 'signIn' }
    | { type: 'changeFavoriteIcon', payload: string }
    | { type: 'signOut' };

export const authReducer = (state: AuthState, action: authAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'no-username-yet'
            }
        case 'changeFavoriteIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'signOut':
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favoriteIcon: undefined,
            }

        default:
            return state;
    }
}