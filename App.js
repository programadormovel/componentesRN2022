import React from 'react';
import { View, Text, Image } from 'react-native';

import estilo from './Estilo';

const App = () => {
  return (
    <View style={estilo.container}>
      <Text style={estilo.texto}>
        Hello World!
      </Text>

      <Image 
        style={estilo.logo}
        source={require('./assets/icon.png')}
      />

      <Image
        style={estilo.logo}
        source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

      <TextInput 
        
      />

      <Text style={estilo.texto1}>
        Mais um Hello World!</Text>
    </View>
  )
}

export default App;