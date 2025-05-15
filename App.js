import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

const parseNumber = (str) => parseFloat(str.replace(',', '.')) || 0;

const classifyIMC = (imc) => {
  if (imc < 18.5) return { label: 'Abaixo do peso', color: '#e67e22' };
  if (imc < 25) return { label: 'Peso normal', color: '#2ecc71' };
  if (imc < 30) return { label: 'Sobrepeso', color: '#f1c40f' };
  if (imc < 35) return { label: 'Obesidade grau I', color: '#e74c3c' };
  if (imc < 40) return { label: 'Obesidade grau II', color: '#c0392b' };
  return { label: 'Obesidade grau III', color: '#8e44ad' };
};

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [erroPeso, setErroPeso] = useState('');
  const [erroAltura, setErroAltura] = useState('');

  const validar = () => {
    let valido = true;
    setErroPeso('');
    setErroAltura('');

    const p = parseNumber(peso);
    const h = parseNumber(altura);

    if (!peso.trim()) {
      setErroPeso('Informe o peso');
      valido = false;
    } else if (isNaN(p) || p <= 0) {
      setErroPeso('Peso inválido');
      valido = false;
    }

    if (!altura.trim()) {
      setErroAltura('Informe a altura');
      valido = false;
    } else if (isNaN(h) || h <= 0) {
      setErroAltura('Altura inválida');
      valido = false;
    }

    return { valido, p, h };
  };

  const calcular = () => {
    const { valido, p, h } = validar();
    if (!valido) return;

    const classification = classifyIMC(p / (h * h));
    setImc({
      value: (p / (h * h)).toFixed(1),
      ...classification,
    });
  };

  const limpar = () => {
    setPeso('');
    setAltura('');
    setImc(null);
    setErroPeso('');
    setErroAltura('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>Calculadora de IMC</Text>

          <View style={styles.inputGroup}>
            <TextInput
              style={[styles.input, erroPeso && styles.inputError]}
              placeholder="Peso (kg)"
              placeholderTextColor="#95a5a6"
              keyboardType="decimal-pad"
              value={peso}
              onChangeText={(t) => {
                setPeso(t);
                setErroPeso('');
              }}
              autoCorrect={false}
            />
            {erroPeso ? <Text style={styles.errorText}>{erroPeso}</Text> : null}
          </View>

          <View style={styles.inputGroup}>
            <TextInput
              style={[styles.input, erroAltura && styles.inputError]}
              placeholder="Altura (m)"
              placeholderTextColor="#95a5a6"
              keyboardType="decimal-pad"
              value={altura}
              onChangeText={(t) => {
                setAltura(t);
                setErroAltura('');
              }}
              autoCorrect={false}
            />
            {erroAltura ? <Text style={styles.errorText}>{erroAltura}</Text> : null}
          </View>

          <View style={styles.buttonGroup}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={calcular}
            >
              <Text style={styles.buttonText}>Calcular</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.clearButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={limpar}
            >
              <Text style={styles.buttonText}>Limpar</Text>
            </Pressable>
          </View>

          {imc && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultValue}>Seu IMC: {imc.value}</Text>
              <Text style={[styles.resultLabel, { color: imc.color }]}>
                {imc.label}
              </Text>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 32,
    letterSpacing: 0.5,
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    height: 56,
    borderWidth: 2,
    borderColor: '#dfe6e9',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#2c3e50',
    backgroundColor: '#ffffff',
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    }),
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  errorText: {
    color: '#e74c3c',
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  buttonGroup: {
    gap: 12,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: '#95a5a6',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.75,
  },
  resultContainer: {
    marginTop: 32,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  resultValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 8,
  },
  resultLabel: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});