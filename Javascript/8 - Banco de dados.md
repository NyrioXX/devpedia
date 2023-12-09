**Conceitos**

Queries são trechos de códigos SQL que representam instruções a serem executadas em bancos de dados. Comandos do banco de dados no Beekeeper incluem `and`, `or`, `between`, `is null`, `is not null`.

---

**Criar Banco de Dados**

```sql
-- CRIAR BANCO DE DADOS
create database nomeDoBancoDeDados;
```

---

**Apagar Banco de Dados**

```sql
-- APAGAR BANCO DE DADOS
drop database nomeDoBancoDeDados;
```

---

**SELECT: Serve para selecionar registros na tabela**

```sql
-- SELECT ALL
select *
from musicas;

-- SELECT COM COLUNAS ESPECÍFICAS
select id,
    composicao
from musicas;
```

---

**DISTINCT: Seleciona diferenciando de acordo com o que for passado**

```sql
select distinct composicao
from musicas;
```

---

**WHERE: Como se fosse o "if" no JS**

```sql
select *
from musicas
where tempo < 100;
```

---

**LIKE e ILIKE: Usado para comparar um valor numa cláusula WHERE e permite usar 'coringas'**

```sql
-- LIKE
select *
from musicas
where composicao like 'Violin Sonata No 1 in G minor';

-- LIKE COM CORINGAS
select *
from musicas
where composicao like '%in G minor';

-- LIKE COM CORINGAS
select *
from musicas
where composicao like 'Violin Sonata No%';
```

---

**LIMIT: Limita a quantidade de resultados contando do primeiro registro de acordo com a ordenação**

```sql
select *
from musicas
where tempo < 100
limit 3;
```

---

**OFFSET: Ignora a quantidade de registros definidos, começando a contar do primeiro e retorna os outros**

```sql
select *
from musicas
where tempo < 100 offset 3;
```

---

**ORDER BY: Serve para ordenar a lista. Pode ser "asc" (ascendente) ou "desc" (decrescente)**

```sql
-- ORDENAÇÃO ASCENDENTE
select *
from musicas
order by id asc;

-- ORDENAÇÃO DESCENDENTE COM FILTRO
select *
from musicas
where tempo < 100
order by id desc
limit 5;

-- ORDENAÇÃO MÚLTIPLA
select *
from musicas
order by compositor asc,
    ritmo desc;
```

---

**Funções SQL**

**COUNT: Serve para contar os registros de acordo com a condição passada**

```sql
select count(*)
from usuarios
where idade >= 18;
```

---

**ALIAS: Serve para criar uma nova referência na tabela como um 'apelido'**

```sql
select name as nomecompleto
from usuarios
where idade >= 18;
```

---

**CONCAT: Serve para concatenar campos**

```sql
select concat(name, ' - ', email, ' - ', phone) as "Nome - Email - Telefone"
from usuarios;
```

---

**AVG e ROUND: AVG serve para tirar a média aritmética. ROUND serve para arredondar um número**

```sql
-- MÉDIA
select avg(idade)
from usuarios;

-- ARREDONDAMENTO
select round(avg(idade))
from usuarios;

-- ARREDONDAMENTO COM CASAS DECIMAIS
select round(avg(idade), 2)
from usuarios;
```

---

**MIN e MAX: Serve para pegar o maior ou menor valor**

```sql
select max(idade)
from usuarios;

select min(idade)
from usuarios;
```

---

**SUM: Serve para fazer somas; não funciona com nomes, apenas números**

```sql
select sum(idade)
from usuarios;
```

---

**CAST: Serve para converter tipos de dados**

```sql
-- OPERADOR ::
select idade::text
from usuarios;

-- FUNÇÃO CAST()
select cast(idade as text)
from usuarios;
```

---

**NOW: Serve para mostrar um determinado momento**

```sql
select now();
```

---

**AGE: Serve para retornar o tempo entre duas datas**

```sql
select age('2024-08-01 00:00:00'::date);

select age('2024-08-01 00:00:00', now());
```

---

**COALESCE: Serve para substituir um valor nulo por outro valor desejado**

```sql
select id,
    Coalesce(Telefone, email, 'Não possui') as contato
from usuarios;
```

---

**GROUP BY: Serve para agrupar, geralmente usado em conjunto com uma função**

```sql
select idade,
    count(id)
from usuarios
GROUP BY idade
ORDER BY idade ASC;
```

---

**C.R.U.D: CREATE - READ - UPDATE - DELETE**

**CREATE**

```sql
-- DELETAR BANCO DE DADOS (CUIDADO)
drop database produtos;

-- CRIAR BANCO DE DADOS
CREATE DATABASE produtos;

-- CRIAR TABELA
CREATE TABLE IF NOT EXISTS produtos (
    id serial PRIMARY KEY,
    nome text,
    descricao text,
    preco integer,
    categoria text
);

-- INSERIR REGISTROS
INSERT into produtos (nome, descricao, preco, categoria)
values ('Camisa', null, 4990, 'Roupas'),
    ('Calça', null, 11990, 'Roupas'),
    ('Bermuda', null, 8998, 'Roupas');

-- ATUALIZAR REGISTRO
UPDATE produtos
set nome = 'Camisa preta',
    valor = 13458
where id = 2;

-- ALTERAR TABELA
ALTER table categorias
add column descricao text;

ALTER table categorias drop column descricao;

alter table categorias
alter column descricao type varchar(100);
```

---

**DELETE: Apaga os registros do banco de dados**

```sql
DELETE from produtos
where id >= 6
    and id <= 7;
```

---

**JOIN: Permite agrupar duas ou mais tabelas em uma única consulta**

**INNER JOIN**

```sql
select emp.id as empresaID,
    fil.id as filialID
from empresas emp
    join filiais fil on emp.id = fil.empresa_id;
```

---

**LEFT JOIN: Permite que sejam exibidos todos os resultados da esquerda e somente os que atendem à condição da direita**

```sql
SELECT *
from empresas emp
    left join filiais fil on emp.id = fil.id;
```

---

**RIGHT JOIN: Permite que sejam exibidos todos os resultados da direita e somente os que atendem à condição da esquerda**

```sql
SELECT *
from empresas emp
    RIGHT join filiais fil on emp.id = fil.id;
```

---

**FULL JOIN: Junta todas as tabelas mesmo que não haja relação entre as tabelas**

```sql
SELECT emp.id as empresaID,
    fil.id as
```
