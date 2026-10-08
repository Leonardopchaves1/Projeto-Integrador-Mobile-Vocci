import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import Termos from '../Termos';

export default function Formulario() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [showSenha, setShowSenha] = useState(false);
    const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);
    const [nascimento, setNascimento] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.secaoHeader}>
                    <View style={styles.secaoIconeBg}>
                        <Feather name="user" size={16} color="#6B21A8" />
                    </View>
                    <View>
                        <Text style={styles.secaoTitulo}>Dados do Cliente</Text>
                        <Text style={styles.secaoSubtitulo}>Pessoa física titular responsável pelo cadastro.</Text>
                    </View>
                </View>

                <View style={styles.campoGroup}>
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Nome completo</Text>
                        <Text style={styles.obrigatorio}>Obrigatório</Text>
                    </View>
                    <View style={styles.inputBox}>
                        <Feather name="user" size={16} color="#6B21A8" />
                        <TextInput
                            style={styles.input}
                            value={nome}
                            onChangeText={setNome}
                            placeholder="Digite seu nome"
                            placeholderTextColor="#A0A0A0"
                        />
                    </View>
                </View>

                <View style={styles.campoGroup}>
                    <Text style={styles.label}>CPF</Text>
                    <View style={styles.inputBox}>
                        <Feather name="credit-card" size={16} color="#6B21A8" />
                        <TextInput
                            style={styles.input}
                            value={cpf}
                            onChangeText={setCpf}
                            keyboardType="numeric"
                            placeholder="Digite seu cpf"
                            placeholderTextColor="#A0A0A0"
                        />
                    </View>
                </View>

                <View style={styles.campoGroup}>
                    <Text style={styles.label}>Data de nascimento</Text>
                    <View style={styles.inputBox}>
                        <Feather name="calendar" size={16} color="#6B21A8" />
                        <TextInput
                            style={styles.input}
                            value={nascimento}
                            onChangeText={setNascimento}
                            keyboardType="numeric"
                            placeholder="Digite sua data de nascimento"
                            placeholderTextColor="#A0A0A0"
                        />
                    </View>
                </View>

                <View style={styles.campoGroup}>
                    <Text style={styles.label}>Telefone / WhatsApp</Text>
                    <View style={styles.inputBox}>
                        <Feather name="message-square" size={16} color="#6B21A8" />
                        <TextInput
                            style={styles.input}
                            value={whatsapp}
                            onChangeText={setWhatsapp}
                            keyboardType="phone-pad"
                            placeholder="Digite seu telefone"
                            placeholderTextColor="#A0A0A0"
                        />
                    </View>
                </View>

                <View style={styles.campoGroup}>
                    <Text style={styles.label}>E-mail</Text>
                    <View style={styles.inputBox}>
                        <Feather name="mail" size={16} color="#6B21A8" />
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholder="Digite o seu email"
                            placeholderTextColor="#A0A0A0"
                        />
                    </View>
                </View>

                <View style={styles.campoGroup}>
                    <Text style={styles.label}>Senha de acesso</Text>
                    <View style={styles.inputBox}>
                        <Feather name="lock" size={16} color="#6B21A8" />
                        <TextInput
                            style={styles.input}
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={!showSenha}
                            placeholder="Digite a senha"
                            placeholderTextColor="#A0A0A0"
                        />
                        <TouchableOpacity onPress={() => setShowSenha(!showSenha)}>
                            <Feather name={showSenha ? 'eye-off' : 'eye'} size={16} color="#71717A" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.campoGroup}>
                    <Text style={styles.label}>Confirmar senha</Text>
                    <View style={styles.inputBox}>
                        <Feather name="refresh-cw" size={16} color="#6B21A8" />
                        <TextInput
                            style={styles.input}
                            value={confirmarSenha}
                            onChangeText={setConfirmarSenha}
                            secureTextEntry={!showConfirmarSenha}
                            placeholder="Confirme a senha"
                            placeholderTextColor="#A0A0A0"
                        />
                        <TouchableOpacity onPress={() => setShowConfirmarSenha(!showConfirmarSenha)}>
                            <Feather name={showConfirmarSenha ? 'eye-off' : 'eye'} size={16} color="#71717A" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Termos */}
            <Termos />
        </View>
    );
}

const styles = StyleSheet.create({
    secaoHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    secaoIconeBg: {
        width: 28,
        height: 28,
        borderRadius: 6,
        backgroundColor: '#F3E8FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    secaoTitulo: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#18181B',
    },
    secaoSubtitulo: {
        fontSize: 10,
        color: '#71717A',
    },
    campoGroup: {
        marginBottom: 12,
    },
    labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    label: {
        fontSize: 11,
        fontWeight: '600',
        color: '#27272A',
        marginBottom: 4,
    },
    obrigatorio: {
        fontSize: 10,
        color: '#6B21A8',
        fontWeight: '500',
    },
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8FA',
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 40,
        borderWidth: 1,
        borderColor: '#F1F1F4',
    },
    input: {
        flex: 1,
        fontSize: 12,
        color: '#18181B',
        marginLeft: 8,
    },
});