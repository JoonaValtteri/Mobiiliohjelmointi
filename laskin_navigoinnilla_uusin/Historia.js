import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Stack = createNativeStackNavigator();

export default function Historia({route, navigation}) {
    const{ data } = route.params;
    return (
        <View style={styles.list}>
            <Text>Historia: </Text>
            <FlatList
                data={data} renderItem={({ item }) =>
                    <Text>{item}</Text>} />
        </View>
    );
}
const styles = StyleSheet.create({
    list: {
        alignItems: 'center',
        flex: 2,
      }
    });