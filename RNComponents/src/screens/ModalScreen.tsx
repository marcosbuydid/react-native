import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title={'Modal Screen'} />
            <Button
                title='Open Modal'
                onPress={() => setIsVisible(true)}
            />

            <Modal
                animationType='slide'
                visible={isVisible}
                transparent={true}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        width: 350,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10

                    }}>
                        <Text style={{
                            marginBottom: 40,
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: 'black'
                        }}
                        >
                            Modal Title
                        </Text>
                        <Text style={{
                            marginBottom: 20,
                            fontSize: 20,
                            fontWeight: 'bold',

                        }}
                        >
                            Modal Body
                        </Text>
                        <Button
                            title='Close Modal'
                            onPress={() => setIsVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
