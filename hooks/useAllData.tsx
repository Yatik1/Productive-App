
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import { Section, Todo } from '@/types/types';



export const useAllData = () => {

    const uri = "https://todo-django-api-y8py.onrender.com/api/todo/all/"
    // const uri = process.env.EXPO_API_URI

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

    return sectionListData
}