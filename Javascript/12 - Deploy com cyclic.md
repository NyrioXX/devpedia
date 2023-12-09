# Deploy na Cyclic sem CLI e Utilizando o CORS na API

## Cyclic Deployment sem CLI

A Cyclic oferece opções para realizar o deploy sem a necessidade do CLI, utilizando alternativas como integração contínua (CI/CD) ou diretamente no painel de controle da plataforma. A seguir, estão os passos básicos para realizar o deploy sem usar o CLI:

1. **Integração Contínua (CI/CD):**

   - Configurar um pipeline CI/CD na sua plataforma de escolha (por exemplo, GitHub Actions, GitLab CI, Bitbucket Pipelines).
   - No pipeline, incluir etapas para instalar dependências, construir o aplicativo e realizar o deploy na Cyclic.

2. **Painel de Controle da Cyclic:**
   - Acesse o painel de controle da Cyclic.
   - Crie um novo projeto ou selecione o projeto existente.
   - Navegue até a seção de configuração do projeto e configure as opções de build e deploy.

Lembre-se de ajustar as configurações conforme as necessidades específicas do seu projeto.

## Configuração do CORS na API

O CORS (Cross-Origin Resource Sharing) é uma medida de segurança implementada nos navegadores para controlar solicitações HTTP feitas a partir de origens diferentes. Para permitir solicitações de origens específicas, como frontend hospedado em domínio diferente, você pode configurar o CORS na sua API.

### Exemplo de Configuração do CORS com Express (Node.js)

1. **Instalação do Pacote CORS:**

   Antes de tudo, instale o pacote `cors` usando o seguinte comando:

   ```bash
   npm install cors
   ```

2. **Uso do CORS na API:**

   Adicione o middleware CORS ao seu aplicativo Express. Exemplo:

   ```javascript
   const express = require("express");
   const cors = require("cors");

   const app = express();

   // Configuração do CORS
   app.use(cors());

   // Restante das configurações e rotas do seu aplicativo...

   // Inicia o servidor
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Servidor iniciado na porta ${PORT}`);
   });
   ```

   Este exemplo permite todas as origens, mas você pode configurar opções mais restritivas conforme necessário.

3. **Configuração Específica do CORS:**

   Para configurações mais específicas, você pode passar um objeto de opções para o middleware CORS. Exemplo:

   ```javascript
   const corsOptions = {
     origin: "https://seu-frontend.com", // Substitua pelo seu domínio frontend
     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
     credentials: true,
     optionsSuccessStatus: 204,
   };

   // Uso específico do CORS
   app.use(cors(corsOptions));
   ```

   Lembre-se de ajustar as configurações de acordo com as necessidades do seu aplicativo.

**Observação:** Certifique-se de que o middleware CORS está configurado corretamente no seu servidor antes de fazer o deploy. Isso garantirá que as solicitações do frontend sejam tratadas adequadamente.
