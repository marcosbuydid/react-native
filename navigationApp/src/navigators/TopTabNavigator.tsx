import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
                            iconName = 'chatbubbles-outline'
                            break;
                        case 'Contacts':
                            iconName = 'person-outline'
                            break;
                        case 'Albums':
                            iconName = 'folder-open-outline'
                            break;
                    }
                    return <Icon name={iconName} size={25} color={color} />
                }
            })}
        >
            <Tab.Screen name="Chats" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}