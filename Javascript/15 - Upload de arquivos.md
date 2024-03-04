# Upload de Arquivos para o Amazon S3 no Node.js

O Amazon S3 (Simple Storage Service) é um serviço de armazenamento de objetos escalável oferecido pela Amazon Web Services (AWS). Este guia aborda como realizar o upload de arquivos para o Amazon S3 utilizando o Node.js, com exemplos práticos.

# Configuração Básica

# 1. **Instalação dos Pacotes Necessários**

Certifique-se de ter o pacote `aws-sdk` instalado para interagir com o Amazon S3:

```bash
npm install aws-sdk
```

# 2. **Configuração das Credenciais da AWS**

Antes de começar, configure as credenciais da AWS. o usuario pode fazer isso de várias maneiras:

- **Arquivo de Configuração `~/.aws/credentials`:**
  Crie um arquivo em `~/.aws/credentials` com as seguintes informações:

  ```
  [default]
  aws_access_key_id = SUA_ACCESS_KEY
  aws_secret_access_key = SUA_SECRET_KEY
  ```

- **Variáveis de Ambiente:**
  Configure as variáveis de ambiente `AWS_ACCESS_KEY_ID` e `AWS_SECRET_ACCESS_KEY` no seu ambiente de execução.

- **Perfil no Código (Não Recomendado para Produção):**
  Configure diretamente no seu código (evite isso em ambientes de produção por razões de segurança):

  ```javascript
  const aws = require("aws-sdk");

  const endpoint = new aws.Endpoint(process.env.ENDPOINT_S3);

  const s3 = new aws.S3({
    endpoint,
    credentials: {
      accessKeyId: process.env.KEY_ID,
      secretAccessKey: process.env.APP_KEY,
    },
  });
  ```

# Implementação do Upload para o Amazon S3

# 1. **Uso do SDK AWS no Código**

Crie um arquivo para gerenciar o upload para o Amazon S3 (`uploadS3.js`):

```javascript
const AWS = require("aws-sdk");
const fs = require("fs");

// Função para realizar o upload retornando a url
const uploadArquivo = async (path, buffer, mimetype) => {
  const arquivoUpload = await s3
    .upload({
      Bucket: process.env.BACKBLAZE_BUCKET,
      Key: path, //nome do arquivo
      Body: buffer, //buffer do arquivo
      ContentType: mimetype, //tipo do arquivo
    })
    .promise();
  const url = arquivoUpload.Location;
  return url;
};

// Configurações do upload no controlador. arquivo esta no req.file vindo do multer
const produto_imagem = await uploadArquivo(
  arquivo.originalname,
  arquivo.buffer,
  arquivo.mimetype
);

// Resultado do upload para o S3
console.log("Arquivo enviado com sucesso:", produto_imagem.Location);
```

Este exemplo é uma base para a implementação de upload de arquivos para o Amazon S3 no Node.js. Personalize conforme as necessidades específicas do seu aplicativo.
