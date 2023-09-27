import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenOne } from '../screens/ScreenOne';
import { ScreenThree } from '../screens/ScreenThree';
import { ScreenTwo } from '../screens/ScreenTwo';
import { ProductScreen } from '../screens/ProductScreen';


//we define all the routes needed (the pages) and if needed 
//we put what arguments they receive, otherwise we put undefined.
//all the screens names defined here must be the same ones that we 
//defined in the stack navigator otherwise we will have an error.
export type RootStackParams = {
  ScreenOne: undefined,
  ScreenTwo: undefined,
  ScreenThree: undefined,
  ProductScreen: { id: number, brand: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //prop to initialize the stack navigator in the page you desire
      //initialRouteName="name of the screen"

      screenOptions={{
        headerStyle: {
          elevation: 0,

          //on ios is this property same as elevation
          //shadowColor: 'transparent'
        },

        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="ScreenOne" options={{ title: "Screen 1" }} component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" options={{ title: "Screen 2" }} component={ScreenTwo} />
      <Stack.Screen name="ScreenThree" options={{ title: "Screen 3" }} component={ScreenThree} />
      <Stack.Screen name="ProductScreen" options={{ title: "Product Screen" }} component={ProductScreen} />
    </Stack.Navigator>
  );
}