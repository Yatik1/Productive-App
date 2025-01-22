import { Colors } from "@/constants/Colors"
import { useUser } from "@clerk/clerk-expo"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Stack } from "expo-router"
import { Image, StyleSheet } from "react-native"

export default function Layout () {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible:false,
                contentStyle: {backgroundColor:Colors.backgroundAlt}
            }}
        >
           <Stack.Screen 
            name="index" 
            options={{
                title:"Browse",
                headerLeft:() => <HeaderLeft />,
                headerRight:() => <HeaderRight />
            }}
        />
        </Stack>
    )
}

function HeaderLeft() {
    const {user} = useUser()
    return (
        <Image source={{uri:user?.imageUrl}} style={styles.image} />
    )
}

function HeaderRight() {
    return (
        <Ionicons name="settings-outline" color={Colors.primary} size={24} />
    )
}

const styles = StyleSheet.create({
    image:{
        width:32,
        height:32,
        borderRadius:16
    }
})