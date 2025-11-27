import { View, Text, StyleSheet } from 'react-native';

export default function Pagina2() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Você está na Página 2!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 22,
    fontWeight: 'bold',
  }
});