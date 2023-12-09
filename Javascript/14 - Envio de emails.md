# Documentação - Envio de E-mail com Handlebars no Node.js

O envio de e-mails é uma funcionalidade comum em muitas aplicações. O Handlebars é uma engine de templates que permite criar e-mails dinâmicos de forma eficiente. Este guia abordará como configurar o envio de e-mails no Node.js, utilizando o Handlebars, com exemplos de implementação.

## Configuração Básica

### 1. **Instalação dos Pacotes Necessários**

Certifique-se de ter os pacotes necessários instalados. Utilize os seguintes comandos:

```bash
npm install nodemailer handlebars
```

### 2. **Configuração do Handlebars**

Crie um diretório para armazenar seus modelos de e-mail com o Handlebars. Dentro deste diretório, crie um arquivo `.hbs` para o seu modelo.

Exemplo de modelo (`email-template.hbs`):

```handlebars
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Template</title>
  </head>
  <body>
    <p>Olá, {{nome}}!</p>
    <p>Este é um exemplo de e-mail com Handlebars.</p>
  </body>
</html>
```

## Implementação do Envio de E-mail

### 1. **Uso do Nodemailer e Handlebars no Código**

Crie um arquivo para gerenciar o envio de e-mails (`sendEmail.js`):

```javascript
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");

// Configurações do Nodemailer
const transporter = nodemailer.createTransport({
  service: "seu_servico_de_email", // Ex: Gmail, Yahoo, etc.
  auth: {
    user: "seu_email@gmail.com",
    pass: "sua_senha",
  },
});

// Função para ler e compilar o template do Handlebars
const compilarTemplate = async (caminhoTemplate, dados) => {
  const conteudoTemplate = fs.readFileSync(caminhoTemplate, "utf8");
  const templateCompilado = handlebars.compile(conteudoTemplate);
  return templateCompilado(dados);
};

// Função para enviar e-mail
const enviarEmail = async (destinatario, assunto, caminhoTemplate, dados) => {
  try {
    // Compilar o template
    const corpoEmail = await compilarTemplate(caminhoTemplate, dados);

    // Configurações do e-mail
    const opcoesEmail = {
      from: "seu_email@gmail.com",
      to: destinatario,
      subject: assunto,
      html: corpoEmail,
    };

    // Enviar e-mail
    await transporter.sendMail(opcoesEmail);

    console.log("E-mail enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error.message);
    throw error; // Pode ser tratado de acordo com a necessidade do seu aplicativo
  }
};

module.exports = enviarEmail;
```

### 2. **Uso no Seu Código Principal**

Utilize a função `enviarEmail` no seu código principal:

```javascript
const enviarEmail = require("./sendEmail");

// Dados para o template Handlebars
const dadosTemplate = {
  nome: "Usuário Exemplo",
};

// Parâmetros para enviar o e-mail
const destinatario = "destinatario@example.com";
const assunto = "Assunto do E-mail";
const caminhoTemplate = "./caminho/para/email-template.hbs";

// Chamada da função de envio de e-mail
enviarEmail(destinatario, assunto, caminhoTemplate, dadosTemplate);
```

Lembre-se de substituir as configurações do Nodemailer pelos dados do seu serviço de e-mail.
