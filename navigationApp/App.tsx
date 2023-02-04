import 'react-native-gesture-handler';
import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigators/StackNavigator';
import { SideBasicMenu } from './src/navigators/SideBasicMenu';
import { SideMenu } from './src/navigators/SideMenu';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (

    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <SideBasicMenu /> */}
        <SideMenu />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;
