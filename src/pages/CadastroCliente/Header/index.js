import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.bannerTopo}>
            <Feather name="lock" size={14} color="#6B21A8" style={styles.bannerIcone} />
            <View style={styles.bannerTextoContainer}>
                <Text style={styles.bannerTitulo}>Ambiente seguro e criptografado</Text>
                <Text style={styles.bannerSubtitulo}>Seus dados pessoais estão protegidos.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bannerTopo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FDF4FF',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FAE8FF',
    },
    bannerIcone: {
        marginRight: 10,
    },
    bannerTextoContainer: {
        flex: 1,
    },
    bannerTitulo: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#6B21A8',
    },
    bannerSubtitulo: {
        fontSize: 10,
        color: '#71717A',
    },
})