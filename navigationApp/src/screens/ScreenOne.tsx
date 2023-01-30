import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'


interface Props extends StackScreenProps<any, any> { }

export const ScreenOne = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({

            //this option replace the title name of the screen
            //defined on the stack navigator for the name that
            //appears next to the back arrow on the left-top of the page
            title: '',

            //headerBackTitle: ''
        })
    })

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Screen One</Text>

            <Button
                title="Go to page two"
                onPress={() => navigation.navigate('ScreenTwo')}
            />

            <Text style={styles.text}>Navigate with arguments</Text>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#5856D6'
                        
                    }}
                    onPress={() => navigation.navigate('ProductScreen', {
                        id: 1,
                        brand: 'Coca Cola'
                    })}
                >
                    <Text>Product 1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#FF9427'
                        
                    }}
                    onPress={() => navigation.navigate('ProductScreen', {
                        id: 2,
                        brand: 'Fanta'
                    })}
                >
                    <Text>Product 2</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
