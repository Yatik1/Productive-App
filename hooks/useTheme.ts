import { useColorScheme } from 'react-native'

import style from '@/utils/style'

const useTheme = () => {
  const colorTheme = useColorScheme()
  
  const theme = colorTheme === 'light' ? style.lightTheme : style.darkTheme
  return theme
}

export default useTheme