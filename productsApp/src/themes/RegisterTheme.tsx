import { StyleSheet } from "react-native";

export const registerStyle = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50
    },

    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        alignItems: 'center',
        alignSelf: 'center'
    },

    nameLabel: {
        marginTop: 35,
        marginLeft: 5,
        color: 'white',
        fontWeight: 'bold',
    },

    emailLabel: {
        marginTop: 15,
        marginLeft: 5,
        color: 'white',
        fontWeight: 'bold',
    },

    passwordLabel: {
        marginTop: 15,
        marginLeft: 5,
        color: 'white',
        fontWeight: 'bold',
    },

    buttonContainer: {
        alignItems: 'center',
        marginTop: 50
    },

    button: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5
    },

    registerText: {
        fontSize: 18,
        color: 'white'
    },

    userContainer: {
        alignItems: 'flex-end',
        marginTop: -120,
        paddingBottom: 30
    },

    backText: {
        fontSize: 16,
        color: 'white'
    },

    backButton: {
        position: 'absolute',
        top: -600,
        left: 30,
        borderColor: 'white',
    }
});