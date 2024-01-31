# Uso de Variáveis de Ambiente na Cyclic

As variáveis de ambiente são essenciais para configurar e personalizar o comportamento do seu aplicativo, especialmente durante o deploy na Cyclic. Este guia mostrará como utilizar variáveis de ambiente no Node.js, especificamente ao fazer o deploy na Cyclic.

## Configuração Básica

### 1. **Instalação do Pacote `dotenv`**

Certifique-se de incluir o pacote `dotenv` no seu projeto. Caso ainda não o tenha instalado, utilize o seguinte comando:

```bash
npm install dotenv
```

### 2. **Criação do Arquivo `.env`**

Na raiz do seu projeto, crie um arquivo chamado `.env` para armazenar suas variáveis de ambiente. Inclua as configurações necessárias:

```env
PORT=3000
DATABASE_URL=sua_url_de_producao
API_KEY=sua_chave_secreta
```

### 3. **Uso do Pacote `dotenv` no Código**

No seu arquivo principal (por exemplo, `index.js` ou `app.js`), adicione o seguinte código para carregar as variáveis de ambiente:

```javascript
require("dotenv").config();
```

Isso garantirá que as variáveis do arquivo `.env` sejam carregadas no objeto `process.env`.

## Uso no Código

Após a configuração, o usuario pode acessar as variáveis de ambiente no seu código da seguinte forma:

```javascript
const porta = process.env.PORT || 3000;
const urlDoBancoDeDados = process.env.DATABASE_URL;
const chaveAPI = process.env.API_KEY;
```

## Deploy na Cyclic

Ao fazer o deploy na Cyclic, o usuario pode configurar suas variáveis de ambiente diretamente no painel de controle.

1. **Acesse o Painel de Controle da Cyclic:**

   - Faça login na sua conta na [Cyclic](https://cyclic.sh/).
   - Navegue até o projeto desejado.

2. **Configuração de Variáveis de Ambiente:**

   - Dentro do painel do projeto, vá para a seção de configurações ou deploy.
   - Encontre a opção para adicionar variáveis de ambiente.

3. **Adicione Suas Variáveis de Ambiente:**

   - Insira as variáveis necessárias, seguindo o formato chave-valor.
   - Certifique-se de adicionar as mesmas variáveis presentes no seu arquivo `.env`.

4. **Salve as Configurações:**
   - Após adicionar as variáveis, salve as configurações.

Isso garantirá que suas variáveis de ambiente estejam configuradas corretamente durante o deploy na Cyclic.

**Observação:** Sempre proteja suas variáveis de ambiente e não as compartilhe publicamente. Mantenha o arquivo `.env` fora do controle de versão e configure adequadamente as variáveis no ambiente de produção durante o deploy.
