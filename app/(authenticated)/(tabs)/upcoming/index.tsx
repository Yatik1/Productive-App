import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Fab from '@/components/Fab'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Today</Text>
      <Fab />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})

export default index  