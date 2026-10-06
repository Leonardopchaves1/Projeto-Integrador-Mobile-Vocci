import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro1() {
  const navigation = useNavigation();

  return (
    
       navigation.goBack()} style={styles.backButton}>
        ← Voltar
      
      
      Crie sua conta
      Etapa 1 de 2: Dados pessoais
      
      Nome completo
      

      CPF
      

       navigation.navigate('Cadastro2')}>
        Continuar para endereço →
      
    
  );
}

// Poderá reutilizar o mesmo StyleSheet do Login aqui
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', padding: 20, paddingTop: 50 },
  backButton: { marginBottom: 20 },
  backText: { fontSize: 16, color: '#5B2C6F' },
  title: { fontSize: 22, fontWeight: 'bold' },
  subtitle: { color: '#777', marginBottom: 20 },
  label: { fontWeight: 'bold', marginBottom: 5, color: '#333' },
  input: { backgroundColor: '#F1F1F1', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#ddd' },
  button: { backgroundColor: '#5B2C6F', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});