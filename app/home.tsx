import React from 'react'
import { View } from 'react-native'
import style from '@/utils/style'
import useTheme from '@/hooks/useTheme'
import Home from '@/screen/Home'

const home = () => {

  const theme = useTheme()

  return (
    <View style={[style.styles.container, theme.container]}>
     <Home />
    </View>
  )
}

export default home