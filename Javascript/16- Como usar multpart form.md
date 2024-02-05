# Documentação do Multer

O Multer é um middleware para o Node.js que facilita o upload de arquivos em aplicativos web. Ele é especialmente útil quando o usuario precisa lidar com formulários que contêm campos de arquivo. Nesta documentação, o usuario aprenderá como usar o Multer para gerenciar o upload de arquivos em seu aplicativo Node.js.

# Instalação

Antes de começar, certifique-se de ter o Node.js instalado em seu sistema. Em seguida, instale o Multer usando o npm (Node Package Manager):

```bash
npm install multer
```

# Uso Básico

1. Importe o Multer em seu aplicativo:

```javascript
const multer = require("multer");
```

2. Configure o Multer com as opções desejadas. Aqui está um exemplo simples:

```javascript
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
```

Neste exemplo, os arquivos serão armazenados na pasta 'uploads/' e terão um nome único baseado na data atual e no nome original do arquivo.

2.1 Caso não deseje configurações especificas

```javascript
const multer = require("multer");

module.exports = multer({});
```

3. Adicione o middleware de upload à rota desejada em seu aplicativo:

```javascript
app.post("/upload", upload.single("arquivo"), (req, res) => {
  // O arquivo está disponível em req.arquivo
  res.send("Arquivo enviado com sucesso!");
});
//.single para um formulario ou .array para multiplos
```

A rota `/upload` agora aceitará arquivos enviados através do formulário.

# Opções Avançadas

O Multer oferece várias opções avançadas para personalizar o comportamento do upload, como o limite de tamanho de arquivo, o número máximo de arquivos, entre outros. Consulte a [documentação oficial do Multer](https://www.npmjs.com/package/multer) para obter detalhes sobre essas opções.

# Conclusão

Com esta documentação, o usuario deve ser capaz de começar a usar o Multer em seu aplicativo Node.js para facilitar o upload de arquivos. Certifique-se de verificar a documentação oficial para obter mais informações e opções disponíveis.
