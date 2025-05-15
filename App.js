import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (!peso || !altura) {
      Alert.alert('Erro', 'Por favor, insira peso e altura válidos.');
      return;
    }

    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    const imc = pesoNum / (alturaNum * alturaNum);
    const imcFixed = imc.toFixed(1);
    setResultado(imcFixed);

    let classificacaoIMC = '';

    if (imc < 18.5) classificacaoIMC = 'Abaixo do peso';
    else if (imc < 25) classificacaoIMC = 'Peso normal';
    else if (imc < 30) classificacaoIMC = 'Sobrepeso';
    else if (imc < 35) classificacaoIMC = 'Obesidade grau I';
    else if (imc < 40) classificacaoIMC = 'Obesidade grau II';
    else classificacaoIMC = 'Obesidade grau III';

    setClassificacao(classificacaoIMC);
  };

  const limparCampos = () => {
    setPeso('');
    setAltura('');
    setResultado(null);
    setClassificacao('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
        <TextInput
          style={styles.input}
          placeholder="Altura (m)"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={calcularIMC}>
        <Text style={styles.botaoTexto}>Calcular</Text>
      </TouchableOpacity>

      {resultado && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto}>IMC: {resultado}</Text>
          <Text style={styles.classificacaoTexto}>{classificacao}</Text>
        </View>
      )}

      <TouchableOpacity style={[styles.botao, styles.botaoLimpar]} onPress={limparCampos}>
        <Text style={styles.botaoTexto}>Limpar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: '#1e1e1e',
    color: '#fff',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#0a84ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoLimpar: {
    backgroundColor: '#444',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultadoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  resultadoTexto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  classificacaoTexto: {
    fontSize: 20,
    marginTop: 5,
    color: '#ccc',
  },
});
