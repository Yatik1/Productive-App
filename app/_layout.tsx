import { Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { tokenCache } from "@/cache";


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if(!publishableKey) {
    throw new Error("Publishable key is not available or is invalid")
}

export default function RootLayout() {
    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
            <ClerkLoaded>
            <Stack 
            screenOptions={{headerShown:false}}
            initialRouteName={"index"}
        >
            <Stack.Screen name="home" />
        </Stack>
             </ClerkLoaded>
        </ClerkProvider>
    )
}
