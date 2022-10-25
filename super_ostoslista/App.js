import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Header, Icon, Button, Input, ListItem } from 'react-native-elements';

const db = SQLite.openDatabase('coursedb.db');

export default function App() {
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [shopping, setShopping] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists shoppinglist (id integer primary key not null, product text, amount text);');
    }, null, updateList);
  }, []);

  const saveItem = () => {
    db.transaction(tx => {
      tx.executeSql('insert into shoppinglist (product, amount) values (?, ?);', [product, amount]);
    }, null, updateList
    )
    setAmount('');
    setProduct('');
  }

  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from shoppinglist;', [], (_, { rows }) =>
        setShopping(rows._array)
      );
    });
  }

  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from shoppinglist where id = ?;`, [id]);
      }, null, updateList
    )
  }


  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: 'SHOPPING LIST', style: { color: '#fff' } }}
      />
      <Input placeholder='Type The Product' label='Product'
        onChangeText={(product) => setProduct(product)}
        value={product} />
      <Input placeholder='Type The Amount' label='Amount'
        onChangeText={(amount) => setAmount(amount)}
        value={amount} />
      <Button raised icon={{ name: 'save', color: 'white' }} onPress={saveItem} title="Save" />
      <FlatList
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) =>
          <ListItem style={styles.listcontainer} bottomDivider>
            <ListItem.Content>
              <View style={{ flexDirection: 'row' }}>
                <View >
                  <ListItem.Title>{item.product}</ListItem.Title>
                  <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
                </View>
                <View>
                  <Icon type="material" color="red" name="delete" onPress={() => deleteItem(item.id)} />
                </View>
              </View>
            </ListItem.Content>
          </ListItem>
        }
        data={shopping}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 26,
  },
  listcontainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
  },
  icons: {
    justifyContent: 'center'
  },
});