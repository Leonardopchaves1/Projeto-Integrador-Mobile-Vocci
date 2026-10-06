import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    
      
        VOCCI
        Bem-vindo ao VOCCI
        Entre na sua conta para continuar
      

      E-mail
      

      Senha
      

       alert('Login!')}>
        Entrar →
      

      
        Ainda não possui uma conta?
         navigation.navigate('Cadastro1')}>
          Criar conta
        
      
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', padding: 20, justifyContent: 'center' },
  header: { alignItems: 'center', marginBottom: 30 },
  logo: { fontSize: 24, fontWeight: 'bold', color: '#5B2C6F' },
  title: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  subtitle: { color: '#777', marginTop: 5 },
  label: { fontWeight: 'bold', marginBottom: 5, color: '#333' },
  input: { backgroundColor: '#F1F1F1', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#ddd' },
  button: { backgroundColor: '#5B2C6F', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  footer: { marginTop: 30, alignItems: 'center' },
  outlineButton: { borderWidth: 1, borderColor: '#5B2C6F', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center', marginTop: 10 },
  outlineButtonText: { color: '#5B2C6F', fontWeight: 'bold' }
});