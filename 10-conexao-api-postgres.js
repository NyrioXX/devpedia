// Definindo a variável -> quando usar client lembre de fechar a conexao depois de executar
const { Pool } = require("pg");

// Criando a api
const express = require("express");
const app = express();
app.use(express.json());
//Fazendo login na base de dados
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cubos_academy",
  password: "gglimas01",
  port: 5432,
});
//Criando a rota
app.get("/:quantidade/:pagina", async (req, res) => {
  try {
    const { quantidade, pagina } = req.params;

    const offset = pagina === "1" ? 0 : (pagina - 1) * quantidade;

    const query = `SELECT emp.id AS empresaID,
      fil.id AS filialID,
      fil.pais
      FROM empresas AS emp
      JOIN filiais AS fil ON emp.id = fil.empresa_id
      JOIN pessoas AS pes ON emp.id = pes.empresa_id
      ORDER BY emp.id ASC
      LIMIT $1 OFFSET $2;`;

    const resultado = await pool.query(query, [quantidade, offset]);
    res.json(resultado.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Erro ao consultar o banco de dados" });
  }
});

app.listen(3000);

//KNEX

//CONFIGURANDO O KNEX
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "gglimas01",
    database: "cubos_academy",
  },
});
module.exports = knex;

//COMANDOS KNEX

//Debug
const debug = await knex("*").from("usuarios").debug();
//Ao usar o debug o knex gera um log no terminal ao ser executado
//Knex raw
const raw = await knex.raw("select * from usuarios");
//Metodo de query bruta/manual, serve para escrever a query a ser utilizada manualmente

//CRUD COM KNEX

//Create
knex.insert([{ nome: "nyrio", telefone: "98765-1234" }]).into("usuarios");

//Read
const select = await knex("*").from("usuarios");
const select2 = await knex("id", "nome").from("usuarios");

//Update
knex("usuarios").update({ email: "nyriomail@gmail.com" }).where({ id: 5 }); // vale ressaltar que como passa um objeto, podem ser feitas varias inserções

//Delete
knex("usuarios").delete().where({ id: 5 });

//METODOS DO KNEX

//Buscar apenas o primeiro registro
const primeiroRegistro = knex("usuarios").where({ id: 5, nome: nyrio }).first();
//Filtro
const registroFiltrado = knex("usuarios")
  .where({ id: 5, nome: nyrio })
  .select("telefone", "cpf")
  .first();
//Ordenar
const orderBy = knex("usuarios").orderBy("idade"); //ascendente
const orderByDescending = knex("usuarios").orderByDescending("idade"); //descendente
//Distinct
const distinct = knex("usuarios").distinct("nome");
//Group by
const groupBy = knex("usuarios").groupBy("nome");
//Limit e Offset
const limitOffset = knex("usuarios").limit(4).offset(6);
//Count
const count = knex("usuarios").count("* as totalUsuarios");
const countAdicional = knex("usuarios")
  .select("email")
  .groupBy("email")
  .count("* as totalUsuarios");
//Sum
const sum = knex("usuarios").sum("salario");
//Avg
const avg = knex("usuarios").avg("salario");
//Max
const max = knex("usuarios").max("salario");
//Min
const min = knex("usuarios").min("salario");

//Where
const select_where = knex("usuarios").where("id", "!=", [id, id2]); //Pode usar assim. Perceba uma condição antes do valor
const select_where2 = knex("usuarios").where({ id: 5, nome: nyrio }); //pode usar assim tbm
//Nulo
const nulos = knex("usuarios").whereNull("data_nascimento");
//Não nulo
const naoNulos = knex("usuarios").whereNotNull("data_nascimento");
//Between
const between = knex("usuarios").whereBetween("id", [4, 6]);

//JOIN
const join = knex.join("usuarios", "empresas.nome", "=", "usuarios.id"); //Explicado a query: usuarios é a refencia, empresas.nome é o que eu quero unir, = é a condição (opcional), usuarios.id é a definição da condição
