import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert, Image } from 'react-native';

export default function App() {

  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);

  const fetchRepositories = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + keyword)
    .then(response => response.json())
    .then(data => setData(data.meals))
    .catch(err => Alert.alert('Error', err))
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };


  return (
    <View style={styles.container}>
      <FlatList style={{width: '100%'}}
      data={data}
      ItemSeparatorComponent={listSeparator}
      renderItem={({item}) =>
        <View style={{margin: 5}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.strMeal}</Text>
          <Image style={{width:100,height:100}} source={{uri: item.strMealThumb}}></Image>
        </View>
      }
      />
      <TextInput
      style={{fontSize: 18, width: 200}}
      placeholder='Keyword'
      onChangeText={text => setKeyword(text)}
      />
      <Button title='Search' onPress={fetchRepositories}/>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
