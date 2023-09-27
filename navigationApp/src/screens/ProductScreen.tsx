import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigators/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> { };

export const ProductScreen = ({ route, navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({

      //this option replace the title name of the screen
      //defined on the stack navigator for the name that
      //appears next to the back arrow on the left-top of the page
      title: '',

      //headerBackTitle: ''
    })
  })

  const params = route.params;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        Product Screen
        {
          //we print the params that we receive on product screen
          JSON.stringify(params, null, 3)
        }
      </Text>
    </View>
  )
}
