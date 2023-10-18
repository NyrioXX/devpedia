// Definindo a variável -> quando usar client lembre de fechar a conexao depois de executar
const { Pool } = require("pg");

// Criando a api
const express = require("express");
const app = express();
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cubos_academy",
  password: "gglimas01",
  port: 5432,
});
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const query = `Update empresas set site = $2 where id = $1`;
    const params = [id, "www.cakewalk.com"];
    const resultado = await pool.query(query, params);
    res.json(resultado.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Erro ao consultar o banco de dados" });
  }
});

app.listen(3000, () => {
  console.log("Servidor ouvindo na porta 3000");
});
