import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

export const ProtectedScreen = () => {

    const { user, token, signOut } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Protected Screen
            </Text>

            <View>
                <Text style={styles.information}>
                    User information
                </Text>
            </View>

            <Text>
                {JSON.stringify(user, null, 5)}
            </Text>

            <View>
                <Text style={styles.information}>
                    Token
                </Text>
            </View>

            <View>
                <Text style={styles.token}>{token} </Text>
            </View>

            <View style={styles.button}>
                <Button
                    title='Logout'
                    color='#5856D6'
                    onPress={signOut}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 25,
        marginBottom: 20
    },

    information: {
        fontSize: 16,
        marginBottom: 20,
        marginTop: 20
    },

    token: {
        marginBottom: 20,
        marginLeft: 50,
        marginRight: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        marginTop: 50,
    }

})