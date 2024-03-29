import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { BottomTabs } from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <InternalMenu {...props} />}
        >
            {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
            <Drawer.Screen name="BottomTabs" component={BottomTabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image
                    //source={{uri: 'assets:/avatar.jpg'}}
                    source={{ uri: 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg' }}
                    style={styles.avatar}
                />
            </View>

            <View style={styles.menuContainer}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Icon name="locate-outline" size={38} color="black" />

                    <TouchableOpacity
                        style={styles.buttonMenu}
                        onPress={() => navigation.navigate('BottomTabs')}
                    >
                        <Text style={styles.textMenu}>Navigation</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 4
                }}>
                    <Icon name="settings-outline" size={30} color="black" />

                    <TouchableOpacity
                        style={styles.buttonMenu}
                        onPress={() => navigation.navigate('SettingsScreen')}
                    >
                        <Text style={styles.textMenu}> Settings</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </DrawerContentScrollView>
    );
}