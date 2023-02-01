import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top: paddingTop } = useSafeAreaInsets()
    return (
        <Tab.Navigator
            style={{ paddingTop }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => ({
                tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' },
                tabBarStyle: {
                    backgroundColor: 'burlywood',
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                tabBarPressColor: colors.primary,
                tabBarIndicatorStyle: { backgroundColor: colors.primary },
                tabBarShowIcon: true,

                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Chats':
                            iconName = 'CH'
                            break;
                        case 'Contacts':
                            iconName = 'CN'
                            break;
                        case 'Albums':
                            iconName = 'AL'
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>
                }
            })}
        >
            <Tab.Screen name="Chats" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}