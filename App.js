import React, {useState, useEffect} from 'react';
import { View, Text, Image, 
    TextInput, Alert, ScrollView, TouchableOpacity, Switch } from 'react-native';

import estilo from './Estilo';

const App = () => {
  // Estado
  const [mensagem, setMensagem] = useState();
  const [nome, setNome] = useState('Adriano');
  const [clique, setClique] = useState(false);
  const toggleSwitch = () => setClique(previousState => !previousState);

  function clicou () {
    console.log(clique);
    (clique) ? Alert.alert('clicou na imagem!')
    : Alert.alert('FALSO CLIQUE');
  }

  useEffect(() => {
    //clicou();
  }, [clique]);

  return (
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.texto}>
        {nome}
      </Text>

      <TouchableOpacity 
        onPress={setClique}>
        <Image 
          style={estilo.logo}
          source={require('./assets/icon.png')}
        />
      </TouchableOpacity>

      <Switch
        trackColor={{false: "#f00", true: "#000"}}
        thumbColor={clique ? "#0ef" : "#0f0"}
        ios_backgroundColor="#ccc"
        onValueChange={toggleSwitch}
        value={clique}
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