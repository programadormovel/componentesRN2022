import React, {useState} from 'react';
import { View, Text, Image, 
    TextInput, Alert, ScrollView } from 'react-native';

import estilo from './Estilo';

const App = () => {
  // Estado
  const [mensagem, setMensagem] = useState();
  const [nome, setNome] = useState('Adriano');

  return (
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.texto}>
        {nome}
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
          style={estilo.caixa}
          multiline
          require
          numberOfLines={5}
          defaultValue={'texto exemplo'}
          onChangeText={setNome}
      />

      <Text style={estilo.texto1}>
        Mais um Hello World!</Text>
    </View>
    </ScrollView>
  )
}

export default App;