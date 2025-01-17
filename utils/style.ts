import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding:10,
      gap:10
    },
    heading: {
      fontSize:30,
      fontWeight:"bold",
    },
    text: {
      fontSize:18,
      fontStyle:"italic"
    },
    button: {
      display:"flex",
      flexDirection:"row",
      paddingVertical: 15,
      paddingHorizontal: 23,
      width: 100,
      marginTop: 50,
      borderRadius: 8,
      alignItems: "center",
      justifyContent:"center",
    },
    buttonText: {
      fontSize: 18,
    },
    
  });

const lightTheme = StyleSheet.create({
  container:{
    backgroundColor: 'white',
  },
  heading:{
    color:"black",
  },
  text:{
    color:"gray",
  },
  button:{
    backgroundColor: 'black',
  },
  buttonText:{
    color: 'white',
  }
})

const darkTheme = StyleSheet.create({
  container:{
    backgroundColor: 'black',
  },
  heading:{
    color:"white",
  },
  text:{
    color:"gray",
  },
  button:{
    backgroundColor: 'white',
  },
  buttonText:{
    color: 'black',
  }
})

export default {styles,lightTheme,darkTheme}