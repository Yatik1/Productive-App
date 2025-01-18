import { View, Text, StyleSheet, Pressable, useColorScheme } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, useRouter } from 'expo-router';
import style from "@/utils/style"
import useTheme from '@/hooks/useTheme';
import Login from '@/components/(auth)/Login';
import { useUser } from '@clerk/clerk-expo';
import Home from '@/screen/Home';
import React from 'react';

const index = () => {

  const {isSignedIn} = useUser()
  return (
    <>
      {isSignedIn ? <Home /> : <Landing />}
    </>
  )
}

function Landing() {
  const themeStyle = useTheme()
  return (
    <View style={[style.styles.container, themeStyle.container]}>
    <Text style={[style.styles.heading, themeStyle.heading]}>Accomplish your goals!</Text>
    <Text style={[style.styles.text , themeStyle.text]}>Organize it</Text>
    <Login />
  </View>
  )
}

export default index

