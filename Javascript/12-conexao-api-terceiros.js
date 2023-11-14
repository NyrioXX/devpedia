//Axios -> O axios funciona mais ou menos como o express, usa os verbos para realizar as ações
// e é o responsavel por conectar as APIs
//Criar instancia do axios
const axios = require("axios");
const apiKey = require("./apiKey");

const instanciaAxios = axios.create({
  baseURL: "https://api.stripe.com/v1",
  headers: {
    authorization: `Bearer ${apiKey}`,
    "Content-type": "application/x-www-form-urlencoded",
  },
});

module.exports = instanciaAxios;
//
