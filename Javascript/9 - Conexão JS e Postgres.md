## Configuração da Conexão com o Banco de Dados PostgreSQL

### Variável de Conexão com o Pool do PostgreSQL

```javascript
const { Pool } = require("pg");

// Definindo a variável -> quando usar client lembre de fechar a conexao depois de executar
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cubos_academy",
  password: "gglimas01",
  port: 5432,
});
```

## Configuração da API Express

```javascript
const express = require("express");
const app = express();
app.use(express.json());
```

## Rota para Consulta no Banco de Dados

```javascript
// Criando a rota
app.get("/:quantidade/:pagina", async (req, res) => {
  try {
    const { quantidade, pagina } = req.params;

    const offset = pagina === "1" ? 0 : (pagina - 1) * quantidade;

    const query = `
      SELECT emp.id AS empresaID,
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
```

## Configuração do KNEX (Query Builder para PostgreSQL)

```javascript
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
```

## Comandos Básicos com KNEX

### Debug

```javascript
const debug = await knex("*").from("usuarios").debug();
// Ao usar o debug o knex gera um log no terminal ao ser executado
```

### Knex Raw

```javascript
const raw = await knex.raw("select * from usuarios");
// Método de query bruta/manual, serve para escrever a query a ser utilizada manualmente
```

## Operações CRUD com KNEX

### Create

```javascript
knex.insert([{ nome: "nyrio", telefone: "98765-1234" }]).into("usuarios");
```

### Read

```javascript
const select = await knex("*").from("usuarios");
const select2 = await knex("id", "nome").from("usuarios");
```

### Update

```javascript
knex("usuarios").update({ email: "nyriomail@gmail.com" }).where({ id: 5 });
// Vale ressaltar que como passa um objeto, podem ser feitas várias inserções
```

### Delete

```javascript
knex("usuarios").delete().where({ id: 5 });
```

## Métodos Adicionais do KNEX

### Buscar apenas o primeiro registro

```javascript
const primeiroRegistro = knex("usuarios")
  .where({ id: 5, nome: "nyrio" })
  .first();
```

### Filtro

```javascript
const registroFiltrado = knex("usuarios")
  .where({ id: 5, nome: "nyrio" })
  .select("telefone", "cpf")
  .first();
```

### Ordenação

```javascript
const orderBy = knex("usuarios").orderBy("idade"); // Ascendente
const orderByDescending = knex("usuarios").orderByDescending("idade"); // Descendente
```

### Distinct

```javascript
const distinct = knex("usuarios").distinct("nome");
```

### Group By

```javascript
const groupBy = knex("usuarios").groupBy("nome");
```

### Limit e Offset

```javascript
const limitOffset = knex("usuarios").limit(4).offset(6);
```

### Count

```javascript
const count = knex("usuarios").count("* as totalUsuarios");
const countAdicional = knex("usuarios")
  .select("email")
  .groupBy("email")
  .count("* as totalUsuarios");
```

### Sum, Avg, Max, Min

```javascript
const sum = knex("usuarios").sum("salario");
const avg = knex("usuarios").avg("salario");
const max = knex("usuarios").max("salario");
const min = knex("usuarios").min("salario");
```

### Where

```javascript
const select_where = knex("usuarios").where("id", "!=", [id, id2]); // Pode usar assim. Perceba uma condição antes do valor
const select_where2 = knex("usuarios").where({ id: 5, nome: "nyrio" }); // Pode usar assim também
```

### Nulo e Não Nulo

```javascript
const nulos = knex("usuarios").whereNull("data_nascimento");
const naoNulos = knex("usuarios").whereNotNull("data_nascimento");
```

### Between

```javascript
const between = knex("usuarios").whereBetween("id", [4, 6]);
```

### JOIN

```javascript
const join = knex.join("usuarios", "empresas.nome", "=", "usuarios.id");
// Explicado a query: usuarios é a referência, empresas.nome é o que eu quero unir, = é a condição (opcional), usuarios.id é a definição da condição
```
