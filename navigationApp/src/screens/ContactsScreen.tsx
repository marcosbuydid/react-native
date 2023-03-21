import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    const { signIn, authState, signOut } = useContext(AuthContext)
    return (
        <View style={styles.globalMargin}>
            <Text style={{
                ...styles.title,
                marginTop: 20,
                paddingBottom: 10,
                alignSelf: 'center'

            }}
            >Contacts Screen
            </Text>
            {/* if the user is logged in we hide the sign in button */}
            <View>
                {authState.isLoggedIn ?
                    null
                    : <Button title='Sign in' onPress={signIn} />
                }
            </View>
            <View>
                <Button title='Sign out' onPress={signOut} />
            </View>
        </View>
    )
}