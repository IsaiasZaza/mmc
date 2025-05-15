# 📱 Calculadora de IMC - React Native

![GitHub](https://img.shields.io/github/license/seu-usuario/react-native-imc-calculator)
![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue)

Um aplicativo móvel moderno para cálculo de Índice de Massa Corporal (IMC), com interface intuitiva e feedback visual imediato.

<p align="center">
  <img src="screenshot.png" width="300" alt="App Screenshot">
</p>

---

## ✨ Funcionalidades

- Cálculo instantâneo do IMC
- Classificação automática com cores diferentes para cada categoria
- Validação em tempo real dos campos de entrada
- Design responsivo e adaptável a diferentes tamanhos de tela
- Interface moderna com animações e feedback tátil
- Suporte a números com vírgula ou ponto decimal
- Botão para limpar todos os campos

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- JavaScript (ES6+)
- React Hooks (`useState`)
- Styled Components com `StyleSheet`
- Compatibilidade cross-platform (Android/iOS)

---

## 🚀 Instalação e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/IsaiasZaza/react-native-imc-calculator.git
cd react-native-imc-calculator
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o projeto:**

```bash
npm start
```

> Certifique-se de ter o ambiente React Native configurado corretamente. Veja: [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup)

---

## 📸 Captura de Tela

<p align="center">
  <img src="screenshot.png" width="300" alt="App Screenshot">
</p>

## 🔍 Explicação do Código

O aplicativo é uma calculadora de IMC (Índice de Massa Corporal) construída com **React Native**, utilizando `useState` para manipular os estados da aplicação e `StyleSheet` para o estilo.

### Principais componentes:

- **`parseNumber`**: Converte o texto digitado para número, aceitando tanto vírgula quanto ponto decimal.
- **`classifyIMC`**: Retorna a classificação do IMC com base no valor calculado, junto com uma cor associada à categoria.

### Estado gerenciado por `useState`:

- `peso`, `altura`: Entradas fornecidas pelo usuário.
- `imc`: Objeto com o valor calculado e sua classificação.
- `erroPeso`, `erroAltura`: Mensagens de erro mostradas abaixo dos campos.

### Validação (`validar`):

Verifica se os campos foram preenchidos corretamente e se os valores são válidos (números positivos).

### Cálculo (`calcular`):

Após validação, calcula o IMC usando a fórmula:

```js
IMC = peso / (altura * altura)
```

Armazena o resultado com uma classificação, como "Peso normal" ou "Obesidade grau I".

### Limpar (`limpar`):

Reseta todos os campos e mensagens de erro, além de limpar o resultado.

### Estilização:

- Utiliza `StyleSheet` do React Native com suporte a sombra no iOS e elevação no Android.
- Usa cores diferentes para indicar a classificação do IMC (ex: verde para "Peso normal", vermelho para "Obesidade").

### Layout:

- `KeyboardAvoidingView`: Garante que os campos não fiquem escondidos ao abrir o teclado.
- `ScrollView`: Permite rolagem em telas menores.
- `SafeAreaView`: Garante segurança em dispositivos com notch.

---

## 🙋‍♂️ Autor

Feito com 💙 por **Isaías Gonçalves de Azevedo**  
🔗 [github.com/IsaiasZaza](https://github.com/IsaiasZaza)