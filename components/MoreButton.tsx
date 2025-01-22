import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { Colors } from '@/constants/Colors';
// import * as DropdownMenu from 'zeego/dropdown-menu';




type MoreButtonProps = {
  pageName: string;
};

const MoreButton = ({ pageName }: MoreButtonProps) => {
  // const copyToClipboard = async () => {
  //   const path = `todoapp://(authenticated)/(tabs)/${pageName.toLowerCase()}`;
  //   toast.success(`Page Link copied to your clipboard`);
  // };

  // 
  return(
    <View>
      <Text>More Button</Text>
    </View>
  )
};

export default MoreButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 4,
  },
});