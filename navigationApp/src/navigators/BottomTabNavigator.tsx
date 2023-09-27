import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BottomTabScreenOne } from '../screens/BottomTabScreenOne';
import { BottomTabScreenTwo } from '../screens/BottomTabScreenTwo';
import { BottomTabScreenThree } from '../screens/BottomTabScreenThree';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const BottomTabs = () => {
    return Platform.OS === 'ios'
        ? <IOSTab />
        : <AndroidTab />
}

const AndroidBottomTab = createMaterialBottomTabNavigator();

function AndroidTab() {
    return (
        <AndroidBottomTab.Navigator
            sceneAnimationEnabled={true}
            barStyle={{ backgroundColor: colors.primary }}
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
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'BottomTabScreenOne':
                            iconName = 'caret-up-outline'
                            break;
                        case 'TopTabNavigator':
                            iconName = 'navigate-circle-outline'
                            break;
                        case 'StackNavigator':
                            iconName = 'albums-outline'
                            break;
                    }
                    return <Icon name={iconName} size={25} color={color} />
                }
            })}
        >
            <AndroidBottomTab.Screen name="BottomTabScreenOne" options={{ title: "Tab 1" }} component={BottomTabScreenOne} />
            <AndroidBottomTab.Screen name="TopTabNavigator" options={{ title: "Top Nav" }} component={TopTabNavigator} />
            <AndroidBottomTab.Screen name="StackNavigator" options={{ title: "Stack" }} component={StackNavigator} />
        </AndroidBottomTab.Navigator>
    );
}


const IOSBottomTab = createBottomTabNavigator();

export const IOSTab = () => {
    return (
        <IOSBottomTab.Navigator
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
                            iconName = 'caret-up-outline'
                            break;
                        case 'TopTabNavigator':
                            iconName = 'navigate-circle-outline'
                            break;
                        case 'StackNavigator':
                            iconName = 'compass-outline'
                            break;
                    }
                    return <Icon name={iconName} size={25} color={color} />
                }
            })}
        >
            <IOSBottomTab.Screen name="BottomTabScreenOne" options={{ title: "Tab 1" }} component={BottomTabScreenOne} />
            <IOSBottomTab.Screen name="TopTabNavigator" options={{ title: "TopNav" }} component={TopTabNavigator} />
            <IOSBottomTab.Screen name="StackNavigator" options={{ title: "Stack" }} component={StackNavigator} />
        </IOSBottomTab.Navigator>
    );
}