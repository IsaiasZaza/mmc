
# 📱 Calculadora de IMC (Índice de Massa Corporal)

Aplicativo mobile criado com **React Native** para calcular o **IMC (Índice de Massa Corporal)** com base no **peso (kg)** e **altura (m)** informados pelo usuário. O app oferece uma interface moderna com **tema escuro**, validação de dados e classificação de acordo com a tabela da OMS.

---

### Funcionalidades principais

- Inserção de **peso** e **altura** em campos numéricos.
- Cálculo do IMC com exibição da **classificação de saúde**.
- Validação de campos vazios ou inválidos (números negativos, letras etc).
- Botão para **limpar os campos** e reiniciar a calculadora.
- Interface com **tema escuro** (dark mode) e responsiva.

---

### Classificações de IMC utilizadas

| IMC (kg/m²)        | Classificação         |
|--------------------|-----------------------|
| Menor que 18.5     | Abaixo do peso        |
| 18.5 a 24.9        | Peso normal           |
| 25.0 a 29.9        | Sobrepeso             |
| 30.0 a 34.9        | Obesidade Grau I      |
| 35.0 a 39.9        | Obesidade Grau II     |
| 40.0 ou mais       | Obesidade Grau III    |

---

### Explicação das Funções

#### `calcularIMC`
Calcula o IMC com base nos valores de peso e altura inseridos:
```js
const imc = peso / (altura * altura)
```
- **Valida os campos** antes de calcular (ex: se estão preenchidos e se são números maiores que zero).
- Usa `parseFloat` para converter valores de string para número (aceita vírgula).
- Classifica o IMC com base na tabela da OMS.
- Atualiza os estados `resultado` e `classificacao` com o valor e sua respectiva faixa.

#### `limparCampos`
Limpa os campos de entrada e resultado:
```js
setPeso('');
setAltura('');
setResultado(null);
setClassificacao('');
```
Permite ao usuário reiniciar o processo com facilidade.

#### Hooks utilizados:
- `useState`: usado para controlar os estados de:
  - `peso`: peso digitado pelo usuário.
  - `altura`: altura digitada pelo usuário.
  - `resultado`: valor final do IMC.
  - `classificacao`: texto com a classificação.

---

### Estilização

Utiliza `StyleSheet` para:
- Estilizar os campos de entrada, botões e textos.
- Aplicar um **tema escuro** com cores mais suaves aos olhos (`#121212`, `#333`, etc).
- Garantir responsividade com paddings e margens bem definidas.

---

### Como executar

1. Clone o repositório:
```bash
git clone https://github.com/seuusuario/imc-calculator.git
```

2. Acesse o diretório:
```bash
cd imc-calculator
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o app (emulador ou dispositivo):
```bash
npx react-native run-android
# ou
npx react-native run-ios
```

---

### Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- JavaScript
- Hooks (`useState`)
- StyleSheet
