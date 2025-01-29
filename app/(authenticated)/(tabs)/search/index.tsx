import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Fab from '@/components/Fab'


const index = () => {
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View>
          <Text>Search</Text>
        </View>
      </ScrollView>
      <Fab />
    </>
  )
}

export default index 