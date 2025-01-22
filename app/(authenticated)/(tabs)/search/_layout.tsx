import { Colors } from "@/constants/Colors"
import { Stack } from "expo-router"

export default function Layout () {
    return (
        <Stack>
        <Stack.Screen 
            name="index" 
            options={{
                title:"Search",
                headerLargeTitle:true,
                headerSearchBarOptions:{
                    placeholder:'Search Tasks, Projects and etc...',
                    tintColor:Colors.primary
                }
            }}
        />
    </Stack>
    )
}