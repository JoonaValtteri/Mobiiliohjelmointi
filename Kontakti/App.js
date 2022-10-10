import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {

  const [contact, setContact] = useState({});
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync(
        { fields: [Contacts.Fields.PhoneNumbers] }
      );
        setContacts(data);
    }
  }

  return (

    <View style={styles.container}>

      <Text>{contact.name}</Text>
      <Button onPress={getContacts} title="Set contacts" />

      <FlatList
        data={contacts} renderItem={({ item }) =>
        <View style={styles.contact}>
          <Text>{item.name}</Text>
           <Text>{item.phoneNumbers[0].number}</Text>
          </View>
          } />


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
  contact: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});