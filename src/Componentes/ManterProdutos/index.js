import { View, TouchableOpacity, Text, Alert } from "react-native";
import { TextInput, HelperText } from 'react-native-paper';
import { estilos } from "./estilos";
import { useState } from "react";
import { cadastrarProdutos, atualizarProdutos } from "../../servicos/firestore";

export function ManterProdutos({ navigation, route }) {
    const [nomeCantor, setnomeCantor] = useState(route?.params?.nomeCantor)
    const [Musica, setMusica] = useState(route?.params?.Musica)
    const [idadeCantor, setidadeCantor] = useState(route?.params?.idadeCantor)
    const [statusErro, setStatusErro] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')
    async function salvarProduto() {
        if (nomeCantor == '') {
            setStatusErro('Descricao')
            setMensagemErro('O cantor não pode estar vazio')
        } else if (Musica == '') {
            setStatusErro('Preco')
            setMensagemErro('Deve conter o nome da música')
        } else if (idadeCantor == '') {
            setStatusErro('Idade')
            setMensagemErro('A idade deve ter um valor')
        } else {
            setStatusErro('')
            let resultado = ''
            if (route?.params) {
                resultado = await atualizarProdutos(route?.params?.id, { nomeCantor, Musica, idadeCantor })
            }
            else {
                resultado = await cadastrarProdutos({ nomeCantor, Musica, idadeCantor })
            }
            if (resultado == 'erro') {
                Alert.alert('Erro ao cadastrar produto')
            } else {
                setnomeCantor('')
                setMusica('')
                setidadeCantor('')
                navigation.navigate('ListarProdutos')
            }
        }
    }
    return (
        <View style={estilos.container}>
            <TextInput
                label="Nome do Cantor"
                value={nomeCantor}
                onChangeText={setnomeCantor}
                mode="outlined"
                error={statusErro == 'Descricao'}
                style={estilos.input} />
            {statusErro == 'Descricao' ? <HelperText type="error" visible={statusErro == 'Descricao'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Nome da musica"
                value={Musica}
                keyboardType="numeric"
                onChangeText={setMusica}
                mode="outlined"
                style={estilos.input} />
            {statusErro == 'Preco' ? <HelperText type="error" visible={statusErro == 'Preco'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Idade do Cantor"
                value={idadeCantor}
                keyboardType="numeric"
                onChangeText={setidadeCantor}
                mode="outlined"
                style={estilos.input} />
            {statusErro == 'Idade' ? <HelperText type="error" visible={statusErro == 'Idade'}>
                {mensagemErro}
            </HelperText> : null}
            <TouchableOpacity
                style={estilos.botao} onPress={() => salvarProduto()}>
                <Text style={estilos.texto}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}