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
app.get("/", async (req, res) => {
  try {
    const query = `select emp.id as empresaID,
    fil.id as filialID,
    fil.pais
    from empresas emp
    join filiais fil on emp.id = fil.empresa_id
    join pessoas pes on emp.id = pes.empresa_id
    order by emp.id asc;`;

    const resultado = await pool.query(query);
    res.json(resultado.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Erro ao consultar o banco de dados" });
  }
});

app.listen(3000, () => {
  console.log("Servidor ouvindo na porta 3000");
});
