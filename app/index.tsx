import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useOAuth } from '@clerk/clerk-expo'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors';
import * as WebBrowser from 'expo-web-browser';

export default function index() {

  const {startOAuthFlow : gitOAuth} = useOAuth({strategy:'oauth_github'})
  const {startOAuthFlow : googleOAuth} = useOAuth({strategy:'oauth_google'})

  const {top} = useSafeAreaInsets()

  const handleGithubOAuth = async () => {
    try {
      const {createdSessionId, setActive} = await gitOAuth()

      console.log("github session id" , createdSessionId)
      if(createdSessionId) {
        setActive!({session:createdSessionId})
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handleGoogleOAuth = async () => {
    try {
      const {createdSessionId, setActive} = await googleOAuth()

      console.log("google session id" , createdSessionId)
      if(createdSessionId) {
        setActive!({session:createdSessionId})
      }

    } catch (error) {
      console.log(error)
    }
  }

  const onPress = () => {
    WebBrowser.openAuthSessionAsync("https://expo.dev/")
  }

  return (
    <View style={[styles.container, {paddingTop:top}]}>
      <Image source={require('@/assets/images/icon.png')} style={styles.loginImage} />
      <Image source={require('@/assets/images/login.png')} style={styles.bannerImage} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button]} onPress={handleGithubOAuth}>
          <Ionicons name='logo-github' size={24} />
          <Text style={styles.buttonText}>Continue with Github</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleGoogleOAuth}>
          <Ionicons name='logo-google' size={24} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Ionicons name='mail' size={24} />
          <Text style={styles.buttonText}>Continue with Email</Text>
        </TouchableOpacity>

        <Text style={styles.description}>
          By continuing you agree to App's {' '}
          <Text style={styles.link} onPress={onPress}>
             Terms of Service
          </Text> {' '}
          and {' '}
          <Text style={styles.link} onPress={onPress}>
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    gap:40,
    marginTop:50,
    // display:"flex",
    // flex:1,
    // alignItems:'center',
    // justifyContent:'center'
  },
  loginImage:{
    height:40,
    resizeMode:'contain',
    alignSelf:'center'
  },
  bannerImage:{
    height:280,
    resizeMode:'contain',
    alignSelf:'center'
  },
  buttonContainer:{
    gap:20,
    marginHorizontal:40
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center",
    padding:13,
    borderRadius:6,
    gap:10,
    borderWidth:StyleSheet.hairlineWidth,
    borderColor:Colors.lightBorder
  },
  buttonText:{
    fontSize:20,
    fontWeight:'500'
  },
  description:{
    fontSize:12,
    textAlign:'center',
    color:Colors.lightText
  },
  link:{
    color:Colors.lightText,
    fontSize:12,
    textAlign:'center',
    textDecorationLine:'underline'
  }
})

// export default index