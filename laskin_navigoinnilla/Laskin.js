import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { createNativeStackNavigator } from'@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


export default function Laskin({ navigation }) {
 
  const [numero1, setNumero1] = React.useState(0);
  const [numero2, setNumero2] = React.useState(0);
  const [result, setResult] = React.useState();
  const [data, setData] = useState([]);

  const buttonPressedPlus = () => {
    setResult(parseInt(numero1) + parseInt(numero2));
    setData([...data, parseInt(numero1) + '+' + parseInt(numero2) + '=' + (parseInt(numero1) + parseInt(numero2))]);
  }

  const buttonPressedMinus = () => {
    setResult(numero1 - numero2);
    setData([...data, numero1 + '-' + numero2 + '=' + (numero1 - numero2)]);
  }

  return (
    <View style={styles.container}>

      <Text>
        Tulos: {result}
      </Text>
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} keyboardType='numeric' onChangeText={numero1 => setNumero1(numero1)} value={numero1} />
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} keyboardType='numeric' onChangeText={numero2 => setNumero2(numero2)} value={numero2} />

      <View style={styles.buttons}>
        <View style={styles.button1}>
          <Button onPress={buttonPressedPlus} title='+' />
        </View>
        <View style={styles.button2}>
          <Button onPress={buttonPressedMinus} title='-' />
        </View>
        <View style={styles.button3}>
           <Button title='Historia'
           onPress={() => navigation.navigate('Historia', {data})} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    margin: 7,
  },
  button1: {
    justifyContent: 'space-around',
    margin: 5,
  },
  button2: {
    justifyContent: 'space-around',
    margin: 5,
  },
  button3: {
    justifyContent: 'space-around',
    margin: 5,
  },
  list: {
    alignItems: 'center',
    flex: 2,
  }
});