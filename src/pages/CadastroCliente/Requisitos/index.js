import { View, Text, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Requisitos() {
  return (
    <View>
      <View style={styles.alertaSeguranca}>
        <Text style={styles.alertaTitulo}>REQUISITOS DE SEGURANÇA</Text>
        <View style={styles.listaRequisitos}>
          <View style={styles.itemRow}>
            <View style={styles.circle}>
              <Feather name="check" size={13} color="#6B21A8" />
            </View>
            <Text style={styles.itemTexto}>Mínimo de 8 caracteres</Text>
          </View>
          <View style={styles.itemRow}>
            <View style={styles.circle}>
            <Feather name="check" size={13} color="#6B21A8" />
            </View>
            <Text style={styles.itemTexto}>Pelo menos uma letra</Text>
          </View>
          <View style={styles.itemRow}>
            <View style={styles.circle}>
            <Feather name="check" size={13} color="#6B21A8"  />
            </View>
            <Text style={styles.itemTexto}>Pelo menos um número</Text>
          </View>
        </View>
      </View>
      <View style={styles.validados}>
        <MaterialCommunityIcons
          name="shield-check-outline"
          size={20}
          color="#6B21A8"
          style={styles.icon}
        />
        <View style={styles.conteudoTexto}>
          <Text style={styles.itemDados}>Dados validados com segurança</Text>
          <Text style={styles.dadostext}>
            Seus dados estão protegidos conforme a LGPD e as diretrizes de privacidade da VOCCI.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alertaSeguranca: {
    backgroundColor: '#FAF5FF',
    borderRadius: 12,
    padding: 12,
    marginTop: 6,
    marginBottom: 12,
  },
  alertaTitulo: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#6B21A8',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  listaRequisitos: {
    gap: 4,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle:{
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F4D9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5

  },
  itemTexto: {
    fontSize: 11,
    color: '#3F3F46',
  },
  validados: {
    flexDirection: 'row',
    backgroundColor: '#F4F4F6',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  icon: {
    marginRight: 10,
    marginTop: 1,
  },
  conteudoTexto: {
    flex: 1,
  },
  itemDados: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#6B21A8',
    marginBottom: 2,
  },
  dadostext: {
    fontSize: 10,
    color: '#71717A',
    lineHeight: 14,
  },
})