//Variaveis de ambiente
//São variaveis sensiveis que devem permanecer no servidor mas devem ser configuradas para uso da api
//As variaveis são armazenadas num arquivo .env
//Para usar arquivos env utiliza a biblioteca npm dotenv (vide lib)
//Deve ser importado para a api. Exemplo abaixo
require("dotenv").config(); //utiliza dessa forma se o arquivo env estiver na pasta raiz da api(mesmo nivel que o package.json)
require("dotenv").config({
  path: "./src/.env",
}); //essa é a forma de configurar o local caso o env esteja em outra pasta
const express = require("express");
const app = express();
app.use(express.json());
//O ARQUIVO ENV NÃO DEVE SER ENVIADO PARA O GITHUB (ADICIONAR SEMPRE AO GITIGNORE)
//AS variaveis devem ser adicionadas da seguinte forma (convenção utiliza caixa alta para as variaveis)
//EXEMPLO:
API_KEY = 1234567890;
PORT = 3000;
//Como o arquivo env não deve ir ao github um arquivo modelo deve ser criado para deixar de modelo para outros usuarios
//Exemplo:
//arquivo: modelo.env
API_KEY = 0;
PORT = 0;
//P.s.: quando houver variaveis de texto lembrar das aspas
