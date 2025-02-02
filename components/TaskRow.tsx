import { Colors } from "@/constants/Colors"
import { Todo } from "@/types/types"
import { Link } from "expo-router"
import React, { Suspense } from "react";
import { useState } from "react";
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface TaskRowProps {
    task:Todo,
    fetchData:() => void
}

const TaskRow = ({task, fetchData}:TaskRowProps) => {

    const [isCompleted, setIsCompleted] = useState(task.isCompleted)

    const onCheck = async () => {
        try {
            const response = await fetch(`https://todo-django-api-y8py.onrender.com/api/todo/update/${Number(task.id)}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    isCompleted: !isCompleted
                })
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
    
            const data = await response.json();
            console.log("Task updated successfully:", data);
            setIsCompleted(task.isCompleted)

            fetchData()

        } catch (error) {
            console.error("Error updating the task:", error);
        }
    };

    return (
        <Suspense fallback={<Skeleton />}>
            <Link href={`/task/${task.id}`} style={styles.container} asChild>
                <TouchableOpacity>
                    <View style={styles.row}>
                        <BouncyCheckbox 
                            size={25}
                            textContainerStyle={{display:"none"}}
                            fillColor={Colors.primary}
                            isChecked={task.isCompleted === true}
                            onPress = {onCheck}
                        />
                        <Text style={styles.name}>{task.title}</Text>
                    </View>
                </TouchableOpacity>
            </Link>
        </Suspense>
    )
}

export default TaskRow

export function Skeleton() {
    return (
        <View style={[styles.container,styles.skeleton]}/>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:14,
        backgroundColor:'#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.lightBorder
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    name:{
        fontSize:16,
        flex:1
    },
    skeleton:{
        backgroundColor:"black",
        height:40
    }
})