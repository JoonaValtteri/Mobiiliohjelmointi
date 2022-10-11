import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';


export default function App() {
  const speak = () => {
    const thingToSay = words;
    Speech.speak(thingToSay);
    console.log(thingToSay)
  };

  const [words, setWords] = React.useState('');

  return (
    <View style={styles.container}>

      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={words => setWords(words)} value={words} />
      <View style={styles.buttons}>
      <Button onPress={speak} title="Press to speak" />
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
    margin: 10,
    justifyContent: 'space-between'
  },
});