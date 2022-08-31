import { StyleSheet } from "react-native";

const Estilo = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    texto: {
      fontWeight:'bold', 
      fontSize:48,
      
    },
    texto1: {
      fontWeight:'bold', 
      fontSize:48,
      color: 'red',
      backgroundColor: '#ff00cc',
      borderRadius:32,
      padding: 16,
      elevation: 8,
      shadowColor: 'yellow',
      borderWidth:1
    },
    logo: {
      width: 50,
      height: 50,
      borderRadius: 100,
    },
    caixa: {
      minWidth:200,
      borderWidth:1,
      borderRadius: 8,
      marginTop: 32,
      marginBottom: 32,
      elevation: 4,
      color: 'red',
      backgroundColor: "#c9c9c9",
      padding: 16,
    }
  });

  export default Estilo;