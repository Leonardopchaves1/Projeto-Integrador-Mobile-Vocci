import { View, Text, StyleSheet } from 'react-native';

export default function Etapas() {
  return (
    <>
      <Text style={styles.tagline}>CLIENTE VOCCI</Text>
      <Text style={styles.titulo}>Crie sua conta</Text>
      <Text style={styles.descricao}>
        Preencha seus dados para começar a usar o VOCCI com todo o cuidado e segurança.
      </Text>


      <View style={styles.card}>
        <View style={styles.progressoTopo}>
          <Text style={styles.progressoTexto}>
            Etapa 1 de 2: <Text style={{ fontWeight: 'bold' }}>Dados pessoais</Text>
          </Text>
          <View style={styles.badge}>
            <Text style={styles.badgeTexto}>50% concluído</Text>
          </View>
        </View>

        <View style={styles.etapasContainer}>
          {/* A linha vem primeiro para ficar no fundo */}
          <View style={styles.linhaEtapa} />

          {/* Etapa 1 */}
          <View style={styles.etapaItem}>
            <View style={[styles.etapaCirculo, styles.etapaAtiva]}>
              <Text style={styles.etapaNumeroAtivo}>1</Text>
            </View>
            <Text style={styles.etapaNomeAtivo}>Dados pessoais</Text>
          </View>

          {/* Etapa 2 */}
          <View style={styles.etapaItemSegundo}>
            <View style={styles.etapaCirculo}>
              <Text style={styles.etapaNumero}>2</Text>
            </View>
            <Text style={styles.etapaNome}>Endereço</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  tagline: {

    fontSize: 10,
    fontWeight: 'bold',
    color: '#6B21A8',
    letterSpacing: 0.8,
    marginTop: 4,

  },

  titulo: {

    fontSize: 22,
    fontWeight: 'bold',
    color: '#18181B',
    marginTop: 2,

  },

  descricao: {

    fontSize: 12,
    color: '#71717A',
    marginTop: 4,
    marginBottom: 16,
    lineHeight: 16,

  },

  card: {

    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E4E4E7',

  },

  progressoTopo: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,

  },

  progressoTexto: {

    fontSize: 12,
    color: '#27272A',

  },

  badge: {

    backgroundColor: '#F3E8FF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,

  },

  badgeTexto: {

    fontSize: 10,
    fontWeight: 'bold',
    color: '#6B21A8',

  },

  etapasContainer: {

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'between',
    paddingHorizontal: 18,
    position: 'relative', // Obrigatório para a linha absoluta se basear neste container

  },

  etapaItem: {

    alignItems: 'center',
    zIndex: 1, // Garante que o item da etapa fique na frente da linha

  },
  etapaItemSegundo: {

    marginLeft: 180,
    alignItems: 'center',
    zIndex: 1, // Garante que o item da etapa fique na frente da linha

  },

  etapaCirculo: {

    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F4F4F5', // Fundo sólido igual ao padrão para "apagar" a linha que passa por trás
    alignItems: 'center',
    justifyContent: 'center',

  },

  etapaAtiva: {

    backgroundColor: '#6B21A8', // Fundo sólido ativo

  },

  etapaNumero: {

    fontSize: 12,
    color: '#71717A',

  },

  etapaNumeroAtivo: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',

  },

  etapaNome: {

    fontSize: 10,
    color: '#71717A',
    marginTop: 4,

  },

  etapaNomeAtivo: {

    fontSize: 10,
    color: '#6B21A8',
    fontWeight: 'bold',
    marginTop: 4,

  },

  linhaEtapa: {

    position: 'absolute',     // Faz a linha flutuar no fundo
    top: 14,                  // Metade da altura do círculo (28 / 2 = 14) para alinhar perfeitamente no centro
    left: 45,                 // Distância da borda esquerda do container para começar logo após o 1º círculo
    right: 45,                // Distância da borda direita para terminar antes do último círculo
    height: 2,                // Espessura da linha
    backgroundColor: '#E4E4E7', // Cor da linha
    zIndex: 0,                // Fica atrás dos itens

  },

})
