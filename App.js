import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={style.welcomeText}>Bem vindo a seu app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cec6c6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeText:{
    fontSize: 24,
    paddingBottom: 850,
    fontWeight: 'bold',
    color: '#000000ff',
    textAlign: 'center',

  }
});
