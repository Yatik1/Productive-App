import { Todo } from "@/types/types"
import { Text, View } from "react-native"

interface TaskRowProps {
    task:Todo
}

const TaskRow = ({task}:TaskRowProps) => {
    return (
        <View>
            <Text>{task.title}</Text>
        </View>
    )
}

export default TaskRow