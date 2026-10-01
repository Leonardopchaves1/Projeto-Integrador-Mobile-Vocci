import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header({ navigation }) {
  const insets = useSafeAreaInsets();

  function irParaPerfil() {
    navigation?.navigate('Perfil');
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
      <Image
        source={require('../../../assets/VocciLogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.textos}>
        <Text style={styles.titulo}>VOCCI</Text>
        <Text style={styles.subtitulo}>CUIDADO & SEGURANÇA</Text>
      </View>

      <TouchableOpacity style={styles.perfil} onPress={irParaPerfil}>
        <Ionicons name="person" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#FDF6F3',
  },
  logo: {
    width: 90,
    height: 40,
  },
  textos: {
    flex: 1,
    marginLeft: 12,
  },
  titulo: {
    fontSize: 13,
    fontWeight: '800',
    color: '#2B2B2B',
  },
  subtitulo: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2B2B2B',
  },
  perfil: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A0F6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});