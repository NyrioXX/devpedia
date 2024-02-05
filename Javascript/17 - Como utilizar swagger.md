# Documentação do Swagger Autogen (openapi: 3.0.0) com JavaScript (com e sem anotações Swagger)

O Swagger Autogen oferece suporte tanto para a geração automática da documentação Swagger utilizando anotações no código quanto para a definição manual das informações. A seguir, apresentaremos um tutorial abrangente que cobre ambos os métodos.

# Instalação

Certifique-se de ter o Node.js instalado em seu sistema. Em seguida, execute o seguinte comando para instalar o Swagger Autogen e outras dependências:

```bash
npm install --save swagger-autogen express
```

# Configuração Básica

# Com Anotações Swagger

Crie um arquivo `swaggerConfig.js` na raiz do seu projeto para configurar a geração automática da documentação Swagger utilizando anotações.

```javascript
// swaggerConfig.js

const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app.js"]; // Substitua pelo caminho do seu arquivo principal

swaggerAutogen(outputFile, endpointsFiles);
```

# Sem Anotações Swagger

Se preferir não usar anotações Swagger, o usuario pode definir manualmente as informações de documentação no mesmo arquivo `swaggerConfig.js`.

```javascript
// swaggerConfig.js

const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const outputFile = "./swagger-output.json";

const endpoints = [
  {
    route: "/api/users",
    method: "GET",
    responses: {
      200: {
        description: "Sucesso",
      },
    },
  },
  // Adicione mais definições conforme necessário
];

swaggerAutogen(outputFile, endpoints);
```

# Gerando a Documentação Swagger

Execute o script `swaggerConfig.js` para gerar o arquivo JSON da documentação Swagger.

```bash
node swaggerConfig.js
```

Isso criará ou atualizará o arquivo chamado `swagger-output.json` na raiz do seu projeto.

# Inicializando o Swagger UI

Para visualizar a documentação Swagger, o usuario pode usar o Swagger UI. Crie um novo arquivo chamado `swagger-ui.js`:

```javascript
// swagger-ui.js

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const documentation = require("./swagger-output.json"); // Substitua pelo caminho do seu arquivo de saída

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(documentation));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Swagger UI disponível em http://localhost:${PORT}/api-docs`);
});
```

Agora, execute o script `swagger-ui.js`:

```bash
node swagger-ui.js
```

# Configuração Básica com OpenAPI 3.x

Crie um arquivo `swaggerConfig.js` na raiz do seu projeto para configurar a geração automática da documentação Swagger utilizando OpenAPI 3.x.

```javascript
// swaggerConfig.js

const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    version: "", // por padrão: '1.0.0'
    title: "", // por padrão: 'REST API'
    description: "", // por padrão: ''
  },
  servers: [
    {
      url: "", // por padrão: 'http://localhost:3000'
      description: "", // por padrão: ''
    },
    // { ... }
  ],
  tags: [
    {
      name: "", // Nome da tag
      description: "", // Descrição da tag
    },
    // { ... }
  ],
  components: {}, // por padrão: objeto vazio
};

const outputFile = "./swagger-output.json";
const routes = ["./path/userRoutes.js", "./path/bookRoutes.js"];

swaggerAutogen(outputFile, routes, doc);
```

# Parâmetros da Função Principal

- **outputFile**: (Obrigatório) - Arquivo de saída. Será o arquivo gerado pelo módulo contendo a documentação no formato identificado pelo Swagger.
- **routes**: (Obrigatório) - Se estiver usando o express Router, passe no 'routes' apenas o arquivo raiz onde a rota começa, como index.js, app.js, routes.js, etc. Caso contrário, são os arquivos que contêm métodos como get, post, put, use, etc., por exemplo: route.use('/v1', ...) ou app.get('/path', ...).

- **doc**: (Não Obrigatório) - Um objeto contendo os detalhes da documentação. Se não for informado, ou se algum parâmetro do objeto estiver faltando, serão utilizados os valores padrão.

# Construindo a Documentação

Para construir a documentação, adicione o seguinte script no arquivo `package.json` do seu projeto:

```json
"scripts": {
  "swagger": "node ./swaggerConfig.js"
}
```

E execute o seguinte comando:

```bash
npm run swagger
```

# Construindo a Documentação na Inicialização do Projeto

Para construir a documentação antes do início do projeto e imediatamente iniciá-lo, modifique a função `swaggerAutogen(...)` no seu arquivo `swaggerConfig.js` da seguinte forma:

```javascript
swaggerAutogen(outputFile, routes, doc).then(() => {
  require("./index.js"); // Arquivo raiz do seu projeto
});
```

Onde `index.js` é o arquivo raiz do seu projeto. Altere o script de início no arquivo `package.json` do seu projeto para apontar para o arquivo `swaggerConfig.js`. Se estiver usando o Visual Studio Code, ajuste a referência no seu arquivo `launch.json` da mesma maneira. Agora, basta executar o seu projeto como de costume. Assim, a documentação será gerada automaticamente assim que o projeto for iniciado.

Visite `http://localhost:3000/api-docs` no seu navegador para explorar a documentação Swagger gerada automaticamente para a sua API, independentemente de ter utilizado anotações no código ou não.
