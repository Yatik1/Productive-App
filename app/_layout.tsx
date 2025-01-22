import { tokenCache } from '@/cache'
import { Colors } from '@/constants/Colors'
import { ClerkProvider, ClerkLoaded, useAuth } from '@clerk/clerk-expo'
import { Stack, usePathname, useRouter, useSegments } from 'expo-router'
import { useEffect } from 'react'
import { ActivityIndicator, LogBox, View } from 'react-native'
import {GestureHandlerRootView} from "react-native-gesture-handler"
import {Toaster} from "sonner-native"

LogBox.ignoreLogs(['Clerk: Clerk has been loaded with developement keys'])

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}


const IniitalLayout = () => {

  const router = useRouter()
  const {isLoaded, isSignedIn} = useAuth()
  const segements = useSegments()
  const pathname = usePathname()

  useEffect(() => {
    if(!isLoaded) return;
    const inAuthGroup = segements[0] === '(authenticated)'

    if(isSignedIn && !inAuthGroup) {
      router.replace('/(authenticated)/(tabs)/today')
    } else if (!isSignedIn && pathname !== "/") {
      router.replace('/')
    }
  } , [isSignedIn])

  if(!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    )
  }
  
  return (
    <Stack screenOptions={{ 
              headerShown:false, 
              contentStyle:{
                backgroundColor:Colors.background
              }
            }}          
    >
      <Stack.Screen name="index" />
      {/* <Stack.Screen name="(authenticated)" /> */}
    </Stack>
  )
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <GestureHandlerRootView style={{flex:1}}>
          <Toaster />
          <IniitalLayout />
        </GestureHandlerRootView>
      </ClerkLoaded>
    </ClerkProvider>
  )
}
