import { View, Text, StyleSheet, SectionList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import { Section, Todo } from '@/types/types';
import TaskRow from '@/components/TaskRow'

import { Colors } from '@/constants/Colors'
import Fab from '@/components/Fab';

  const uri = "http://127.0.0.1:8000/api/todo/all/"

const index = () => {

    const [sectionListData,setSectionListData] = useState<Section[]>([])
    
    const fetchData = async () => {

      try {
        const response = await fetch(uri)
        const jsonResponse : Todo[] = await response.json()
        const formattedData = jsonResponse?.filter((todo : {isCompleted:boolean}) => todo.isCompleted === false)
        
        const dataByDate = formattedData?.reduce((acc:{[key:string] : Todo[]},task:Todo) => {
            const day = format(new Date(task.created_at || new Date()) , 'd MMM . eee')
            if(!acc[day]) {
              acc[day] = []
            }
            acc[day].push(task)
            return acc
        } , {})

        const listData : Section[] = Object.entries(dataByDate || {}).map(([day,tasks]) => ({
          title:day,
          data:tasks
        }))

        setSectionListData(listData)
        
      } catch (error) {
        console.log(error)
      }

    }

    useEffect(() => {
        fetchData()
    }, [])
  


  return (
    <View style={styles.container}>
      <SectionList 
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior='automatic'
        sections={sectionListData}
        renderItem={({item}) => <TaskRow task={item} fetchData={fetchData} />}
        renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
      />
      <Fab />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginBottom:82 
  },
  header:{
    fontSize:16,
    backgroundColor:'#fff',
    fontWeight:'bold',
    padding:14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.lightBorder,
  }
})

export default index  