import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import { users } from './src/users';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.names}>LIST OF GUESTS</Text>
        {users.map((user) => {
          return (
            <View>
              <Text style={styles.names}>{user.name.lastname}, {user.name.firstname}{user.name.middlename ? `, ${user.name.middlename}.` : ''}</Text>
              <Text style={styles.town_province}>{user.town}, {user.province}</Text>
            </View>
          )
        })}
      </ScrollView>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 220,
  },
  names: {
    flexDirection:'row',
    fontFamily: 'Tahoma',
    fontSize: 15,
    fontWeight: 'bold',
    width: 340,
    marginTop: '18px',
  },
  town_province: {
    fontFamily: 'Tahoma',
    fontSize: 13,
  }
});
