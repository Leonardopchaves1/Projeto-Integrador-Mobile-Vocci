import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Requisitos from '../Requisitos';

export default function Termos() {

    const [agreed, setAgreed] = useState(true);
    return (
        <View>
            <Requisitos />
            <View>
                <TouchableOpacity
                    style={styles.termosBox}
                    onPress={() => setAgreed(!agreed)}
                    activeOpacity={0.7}
                >
                    <View style={[styles.checkbox, agreed && styles.checkboxAtivo]}>
                        {agreed && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                    <Text style={styles.termosTexto}>
                        Li e aceito os <Text style={styles.termosLink}>Termos de Uso</Text> e a{' '}
                        <Text style={styles.termosLink}>Política de Privacidade</Text> da VOCCI.
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoSubmit} activeOpacity={0.8}>
                    <Text style={styles.botaoTexto}>Continuar para endereço</Text>
                    <Feather name="arrow-right" size={16} color="#FFFFFF" style={{ marginLeft: 8 }} />
                </TouchableOpacity>
            </View>
        </View>



    );
}

const styles = StyleSheet.create({

    termosBox: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    checkbox: {
        width: 16,
        height: 16,
        borderRadius: 3,
        backgroundColor: '#5B2A7A',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        marginTop: 1,
    },
    checkboxAtivo: {
        backgroundColor: '#5B2A7A',
    },
    checkmark: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 'bold',
    },
    termosTexto: {
        flex: 1,
        fontSize: 12,
        color: '#3F3F46',
        lineHeight: 15,
    },
    termosEntrar: {
        fontSize: 13,
        color: '#3F3F46',
        textAlign: 'center',
        marginBottom: 16,
        marginTop: 8,
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
    termosLink: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: '#5B2A7A',
        fontSize: 12,
    },
    botaoSubmit: {
        backgroundColor: '#5B2A7A',
        height: 44,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoTexto: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: 'bold',
    },
});
