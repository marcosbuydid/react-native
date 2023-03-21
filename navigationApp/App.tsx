import 'react-native-gesture-handler';
import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigators/StackNavigator';
import { SideBasicMenu } from './src/navigators/SideBasicMenu';
import { SideMenu } from './src/navigators/SideMenu';

const App = () => {
  return (
    
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <SideBasicMenu /> */}
      <SideMenu />
    </NavigationContainer>
  )
}

export default App;
