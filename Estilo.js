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
      fontSize:48
    },
    texto1: {
      fontWeight:'bold', 
      fontSize:48,
      color: 'red',
    },
    logo: {
      width: 50,
      height: 50,
      borderRadius: 100,
    }
  });

  export default Estilo;