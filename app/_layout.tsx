import { tokenCache } from '@/cache'
import { Colors } from '@/constants/Colors'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { Stack } from 'expo-router'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}


const IniitalLayout = () => {
  return (
    <Stack screenOptions={{ 
              headerShown:false, 
              contentStyle:{
                backgroundColor:Colors.background
              }
            }}          
    >
      <Stack.Screen name="index" />
    </Stack>
  )
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <IniitalLayout />
      </ClerkLoaded>
    </ClerkProvider>
  )
}
