# Consumo de API de Terceiros com Axios

## Biblioteca Utilizada

- **axios**: Biblioteca para realizar requisições HTTP.

## Exemplo de Consumo de API de Terceiros

### Instalação do Axios

Antes de começar, certifique-se de ter o `axios` instalado. Caso não tenha, o usuario pode instalá-lo utilizando o seguinte comando:

```bash
npm install axios
```

### Exemplo de Requisição GET

#### Método: `getDadosDaAPI`

```javascript
const axios = require("axios");

const getDadosDaAPI = async () => {
  try {
    // Realiza uma requisição GET para a API de exemplo
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    // Extrai os dados da resposta
    const dados = response.data;

    // Retorna os dados obtidos da API
    return dados;
  } catch (error) {
    // Trata erros que possam ocorrer durante a requisição
    console.error("Erro ao obter dados da API:", error.message);
    throw error; // Pode ser tratado de acordo com a necessidade do seu aplicativo
  }
};

module.exports = getDadosDaAPI;
```

### Exemplo de Requisição POST

#### Método: `enviarDadosParaAPI`

```javascript
const axios = require("axios");

const enviarDadosParaAPI = async (dados) => {
  try {
    // Realiza uma requisição POST para a API de exemplo
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      dados
    );

    // Extrai os dados da resposta
    const dadosResposta = response.data;

    // Retorna os dados obtidos da API após o envio
    return dadosResposta;
  } catch (error) {
    // Trata erros que possam ocorrer durante a requisição
    console.error("Erro ao enviar dados para a API:", error.message);
    throw error; // Pode ser tratado de acordo com a necessidade do seu aplicativo
  }
};

module.exports = enviarDadosParaAPI;
```

### Uso nos Arquivos Principais

Para utilizar os métodos criados nos seus arquivos principais, o usuario pode fazer o seguinte:

```javascript
// Importando os métodos de consumo de API
const getDadosDaAPI = require("./getDadosDaAPI");
const enviarDadosParaAPI = require("./enviarDadosParaAPI");

// Exemplo de uso
async function exemploDeUso() {
  try {
    // Consumindo dados da API
    const dadosObtidos = await getDadosDaAPI();
    console.log("Dados obtidos da API:", dadosObtidos);

    // Enviando dados para a API
    const dadosParaEnviar = {
      title: "Exemplo de Título",
      body: "Conteúdo de exemplo",
    };
    const respostaEnvio = await enviarDadosParaAPI(dadosParaEnviar);
    console.log("Resposta do envio para a API:", respostaEnvio);
  } catch (error) {
    console.error("Erro geral:", error.message);
  }
}

// Chamada da função de exemplo
exemploDeUso();
```

**Observação**: Certifique-se de ajustar as URLs e os dados conforme a API de terceiros que o usuario estiver utilizando.
