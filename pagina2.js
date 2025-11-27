import { View, Text, StyleSheet } from 'react-native';

export default function Pagina2() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá Richard esse codigo a "ia" me ajudou a fazer mais eu não copiei completamente, somete os codiguinhos que eu não sabia(:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d44e42ff',
    
  },
  texto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000ff',
  }
});