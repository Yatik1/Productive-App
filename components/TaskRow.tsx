import { Colors } from "@/constants/Colors"
import { Todo } from "@/types/types"
import { Link } from "expo-router"
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface TaskRowProps {
    task:Todo,
    fetchData:() => void
}

const TaskRow = ({task, fetchData}:TaskRowProps) => {

    const [isCompleted, setIsCompleted] = useState(task.isCompleted)

    const onCheck = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/todo/update/${Number(task.id)}/`, {
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
        <View>
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
        </View>
    )
}

export default TaskRow

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
    }
})