import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabScreenOne } from '../screens/BottomTabScreenOne';
import { BottomTabScreenTwo } from '../screens/BottomTabScreenTwo';
import { BottomTabScreenThree } from '../screens/BottomTabScreenThree';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    //removes the line above bottom tab navigator
                    elevation: 0,
                },
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'BottomTabScreenOne':
                            iconName = 'T1'
                            break;
                        case 'BottomTabScreenTwo':
                            iconName = 'T2'
                            break;
                        case 'StackNavigator':
                            iconName = 'SN'
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>
                }
            })}
        >
            <Tab.Screen name="BottomTabScreenOne" options={{ title: "Tab 1" }} component={BottomTabScreenOne} />
            <Tab.Screen name="BottomTabScreenTwo" options={{ title: "Tab 2" }} component={BottomTabScreenTwo} />
            <Tab.Screen name="StackNavigator" options={{ title: "Stack" }} component={StackNavigator} />
        </Tab.Navigator>
    );
}