import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { Text, Pressable } from 'react-native'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import style from '@/utils/style'
import useTheme from '@/hooks/useTheme'


WebBrowser.maybeCompleteAuthSession()

export default function Login() {

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })
  
  const themeStyle = useTheme()

  const onPress = React.useCallback(async () => {

    try {

      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
        await setActive!({ session: createdSessionId })
      } else {
        console.log('Handle further sign-in steps (e.g., MFA).');
      }
    } catch (err) {
        console.log(JSON.stringify(err, null, 2))         
    }
  }, [])

  return (
      <Pressable style={[style.styles.button, themeStyle.button]} onPress={onPress}>
        <Text style={[style.styles.buttonText,themeStyle.buttonText]}>Sign in with Google</Text>
      </Pressable>
  )
}