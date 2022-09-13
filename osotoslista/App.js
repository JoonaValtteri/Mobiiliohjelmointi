import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


export default function App() {
  //testi
  const [ostos, setOstos] = React.useState('');
  const [data, setData] = useState([]);

  const buttonPressedAdd = () => {
    setOstos('');
    setData([...data, ostos]);
  }

  const buttonPressedClear = () => {
    setData([]);
  }

  return (
    
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={ostos => setOstos(ostos)} value={ostos} />

      <View style={styles.buttons}>
      
      <View style={styles.button1}>
      <Button onPress={buttonPressedAdd} title="add" />
      </View>
      
      <View style={styles.button2}>
      <Button onPress={buttonPressedClear} title="clear" />
      </View>
        </View>

    <View style={styles.list}>
      <Text>Shopping List: </Text>
      <FlatList
      data={data} renderItem={({item}) =>
      <Text>{item}</Text>}/>
    </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
  button1: {
    flexDirection: 'row',
    margin: 7,
    justifyContent: 'space-around'
  },
  button2: {
    flexDirection: 'row',
    margin: 7,
    justifyContent: 'space-around'
  },
  list: {
    alignItems: 'center',
    flex: 2,
  }
});