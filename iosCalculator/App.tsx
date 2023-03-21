import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/theme/CalculatorTheme';


const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="black" />
      <CalculatorScreen />
    </SafeAreaView>

  )
}

export default App;
