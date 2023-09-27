import { StyleSheet } from "react-native";

export const colors = {
    primary: '#5856D6'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },

    text: {
        fontSize: 20,
        marginTop: 30,
        marginBottom: 10
    },

    bigButton: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },

    bigButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },

    avatarContainer: {
        alignItems: 'center',
        marginTop: 20
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 90
    },

    menuContainer: {
        marginVertical: 40,
        marginHorizontal: 50,
        alignItems: 'flex-start'
    },

    buttonMenu: {
        marginVertical: 10
    },

    textMenu: {
        fontSize: 25
    },
})