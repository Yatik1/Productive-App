import { Stack, useRouter } from 'expo-router'
import { useUser } from '@clerk/clerk-expo'

export default function AuthRoutesLayout() {
  const router = useRouter()
  const {isSignedIn} = useUser()

  if(isSignedIn) {
    router.push("/home")
  }

  return <Stack />
}