// CORS - serve para acessar a api de dominio diferentes e deve ser configurado antes do deploy
//npm i cors

//No arquivo index.js deve criar uma instancia do CORS
//Para usar em qualquer dominio:
const cors = require("cors");
app.use(cors());
//Para usar em um dominios especificos
const cors = require("cors");
app.use(
  cors({ origin: ["https://meudominio.com", "https://meuoutrodominio.com"] })
);

//Deploy de banco de dados no elephantSql - passo a passo
//1-Criar o conta e banco de dados no elephant para pegar os dados de conexão
//2-Cria o banco de dados local utilizando o host e senha que o elephant fornecer
//3-Alimentar o arquivo env com dados host e senha fornecidos pelo elephant
