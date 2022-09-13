import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';


export default function App() {
 
  const [arvaus, setArvaus] = React.useState(0);
  const [message, setMessage] = React.useState("Guess number between 1 - 100");
  const [result, setResult] = React.useState(Math.floor(Math.random() * 100) + 1);
  const [count, setCount] = React.useState(1);

  const newNumber = () => {
    setResult(Math.floor(Math.random() * 100) + 1);
  }

  const buttonPressed = () => {
    if (parseInt(arvaus) > parseInt(result)) {
      setMessage("Your guess " + arvaus + " was too high");
      setArvaus();
      setCount(count + 1);
    }
    if (parseInt(arvaus) < parseInt(result)) {
      setMessage("Your guess " + arvaus + " was too low");
      setArvaus();
      setCount(count + 1);
    }
    if (parseInt(arvaus) == parseInt(result)) {
      Alert.alert("You guessed the number in " + count + " guesses");
      newNumber();
      setCount(1);
      setArvaus();
      setMessage("Guess number between 1 - 100");
    }

  }

  return (
    <View style={styles.container}>

      <Text>
        {message}
      </Text>

      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} keyboardType="numeric" onChangeText={arvaus => setArvaus(arvaus)} value={arvaus} />

      <View style={styles.buttons}>
        <Button onPress={buttonPressed} title="Make a guess" />
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
