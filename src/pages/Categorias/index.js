import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Categorias() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Categorias</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: '700' },
});
