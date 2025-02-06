import { View, Text } from 'react-native'
import React from 'react'
import { Todo } from '@/types/types'

type TodoFormProps = {
    todo? : Todo & {project_id:number}
}

type TodoFormData = {
    title: string, 
    description?: string
}

const TodoForm = ({todo} : TodoFormProps) => {
  return (
    <View>
      <Text>TodoForm</Text>
    </View>
  )
}

export default TodoForm