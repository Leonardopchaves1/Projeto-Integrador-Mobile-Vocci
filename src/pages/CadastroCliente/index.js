
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from './Header';
import Etapas from './Etapas';
import Formulario from './Formulario';


export default function CadastroCliente() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDF4FF" />
      {/* Banner de Topo - Ambiente Seguro */}


      <Header />

      <ScrollView contentContainerStyle={styles.conteudo} showsVerticalScrollIndicator={false}>

        {/* Etapas de progresso */}

        <Etapas />


        {/* Formulario */}

        <View style={styles.caixaFormulario}>
          <Formulario />
        </View>

        <Text style={styles.termosEntrar}>
          Já possui uma conta? <Text style={styles.termosLink}>Entrar</Text>
        </Text>

        <View style={styles.rodapeVocciContainer}>
          <Feather name="check-circle" size={12} color="#71717A" style={{ marginRight: 4 }} />
          <Text style={styles.Vocci}>VOCCI • CUIDADO & SEGURANÇA</Text>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  caixaFormulario: {
    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    width: 380,
    borderColor: '#DDD4E2',
    borderRadius: 20,
    padding: 15
  },

  container: {
    flex: 1,
    backgroundColor: '#FCF9F8',
  },
  conteudo: {
    padding: 16,
    paddingBottom: 24,
  },
  termosEntrar: {
    fontSize: 13,
    color: '#3F3F46',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  termosLink: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#5B2A7A',
    fontSize: 12,
  },
  rodapeVocciContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  Vocci: {
    fontSize: 10,
    color: '#71717A',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },


}
);