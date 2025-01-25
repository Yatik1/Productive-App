import { View, Text, StyleSheet, SectionList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Fab from '@/components/Fab'
import { useAllData } from '@/hooks/useAllData'
import TaskRow from '@/components/TaskRow'
import { Section } from '@/types/types'


const index = () => {

  const data : Section[] = useAllData()
  console.log(data)
  


  return (
    <View style={styles.container}>
      <SectionList 
        contentInsetAdjustmentBehavior='automatic'
        sections={data}
        renderItem={({item}) => <TaskRow task={item} />}
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
      />
      <Fab />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginBottom:82 
  }
})

export default index  