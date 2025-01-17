import { View, Text, StyleSheet, Pressable } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const Landing = () => {
  return (
<View style={styles.container}>
      <Text style={styles.heading}>Accomplish your goals!</Text>
      <Text style={styles.text}>Organize it</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Let's go</Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </Pressable>  
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      padding:10,
      gap:10
    },
    heading: {
      color:"white",
      fontSize:30,
      fontWeight:"bold",
    },
    text: {
      color:"gray",
      fontSize:18,
      fontStyle:"italic"
    },
    button: {
      backgroundColor: 'white',
      display:"flex",
      flexDirection:"row",
      paddingVertical: 15,
      paddingHorizontal: 23,
      width: 150,
      marginTop: 50,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent:"center",
      gap:10
    },
    buttonText: {
      fontSize: 18,
      color: 'black',
    },
  });

export default Landing