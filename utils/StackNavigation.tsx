import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <View>
      <Text>StackNavigation</Text>
    </View>
  )
}

export default StackNavigation