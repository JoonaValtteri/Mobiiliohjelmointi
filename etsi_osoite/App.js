import React,  { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Text, Dimensions, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  
  const [keyword, setKeyword] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);


  const fetchLocation = () => {
    fetch('http://www.mapquestapi.com/geocoding/v1/address?key=2c6TCggUyqeulLC5UofLHGGyIGGGanci&location=' + keyword)
    .then(response => response.json())
    .then((responseJson) => {
      setLatitude(responseJson.results[0].locations[0].latLng.lat)
      setLongitude(responseJson.results[0].locations[0].latLng.lng)
    })
  }

  return (
    <View style={styles.container}>
    <View>
     <MapView style={styles.map} >
      <Marker 
      coordinate={{latitude: latitude, longitude: longitude}} />
     </MapView>
    </View>
    <View style={styles.search}>
    <TextInput
      style={{fontSize: 18, width: 200}}
      placeholder='Address' onChangeText={text => setKeyword(text)}
      />
      <Button title='Search' onPress={fetchLocation}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    marginTop: 30,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2,
  },
  search: {
    marginTop: 10,
  }
});
