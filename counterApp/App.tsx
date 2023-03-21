import React from 'react';
import { SafeAreaView } from 'react-native';
import { AssigmentScreenOne } from './src/screens/AssigmentScreenOne';
import { AssigmentScreenTwo } from './src/screens/AssigmentScreenTwo';
import { AssigmentScreenThree } from './src/screens/AssigmentScreenThree';
import { AssigmentScreenFour } from './src/screens/AssigmentScreenFour';
import { AssigmentScreenFive } from './src/screens/AssigmentScreenFive';
import { AssigmentScreenSix } from './src/screens/AssigmentScreenSix';
import { AssigmentScreenSeven } from './src/screens/AssigmentScreenSeven';
import { AssigmentScreenEight } from './src/screens/AssigmentScreenEight';
import { AssigmentScreenNine } from './src/screens/AssigmentScreenNine';
import { AssigmentScreenTen } from './src/screens/AssigmentScreenTen';
import { DimensionScreen } from './src/screens/DimensionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { PositionScreen } from './src/screens/PositionScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AssigmentScreenTen />
    </SafeAreaView>
  )
}