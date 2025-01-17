import { View, Text, StyleSheet, Pressable, useColorScheme } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import style from "@/utils/style"

const index = () => {

  const colorTheme = useColorScheme()
  const themeStyle = colorTheme === "light" ? style.lightTheme : style.darkTheme

  return (
    <View style={[style.styles.container, themeStyle.container]}>
      <Text style={[style.styles.heading, themeStyle.heading]}>Accomplish your goals!</Text>
      <Text style={[style.styles.text , themeStyle.text]}>Organize it</Text>
      <Pressable style={[style.styles.button, themeStyle.button]}>
      <Link href={"/home"}>
        <AntDesign name="arrowright" size={24} style={themeStyle.buttonText} />
      </Link>  
      </Pressable>
    </View>
  )
}


export default index

