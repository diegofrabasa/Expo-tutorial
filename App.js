import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ ...styles.container, ...styles.backgroundColor }}>
      <View>
        <Text style={styles.title}>Welcome!!!</Text>
      </View>
      <Text style={styles.text}>Happy to see you here</Text>
      <Button color={'#555'} title='Click Me' onPress={() => alert('Button Clicked')} />
      <StatusBar backgroundColor='orange' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontStyle: 'italic',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundColor: {
    backgroundColor: '#444',
  },
  title: {
    fontStyle: 'italic',
    fontSize: 40,
  },
  text: {
    margin: 16,
    color: '#fff',
    borderWidth: 1,
    borderColor: 'red',
    padding: 8,
  },
});
