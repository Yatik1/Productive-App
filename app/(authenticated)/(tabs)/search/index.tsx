import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Fab from '@/components/Fab'
import BouncyCheckbox from "react-native-bouncy-checkbox";


const index = () => {
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View>
          <Text>Search</Text>
          <BouncyCheckbox
  size={25}
  text="Custom Checkbox"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  onPress={(isChecked: boolean) => {console.log(isChecked)}}
/>
        </View>
      </ScrollView>
      <Fab />
    </>
  )
}

export default index 