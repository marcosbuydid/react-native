import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const SideBasicMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" options={{ title: "Home" }} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{ title: "Settings" }} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}