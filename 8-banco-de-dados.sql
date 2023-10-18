/*Conceitos
 Queries => sao trechos de codigos sql que representam instruções a serem executadas em bancos de dados --> 
 Comandos do banco de dados: no beekeeper:
 and, or, between, is null, is not null*/
/*-------------------------------------------------------------------------------------------------------------*/
--> CRIAR BANCO DE DADOS
create database nomeDoBancoDeDados;
/*-------------------------------------------------------------------------------------------------------------*/
--> APAGAR BANCO DE DADOS
drop database nomeDoBancoDeDados;
/*-------------------------------------------------------------------------------------------------------------*/
--> SELECT: serve para selecionar registros na tabela  
select *
from musicas;
/*-------------------------------------------------------------------------------------------------------------*/
select id,
    composicao
from musicas;
/*-------------------------------------------------------------------------------------------------------------*/
--> DISTINCT: seleciona diferenciando de acordo com o que for passado. OBS.: considera unico a combinação dos fatores que forem condições do filtro  
select distinct composicao
from musicas;
/*-------------------------------------------------------------------------------------------------------------*/
--> WHERE: como se fosse o se no js  
select *
from musicas
where tempo < 100;
--> LIKE e ILIKE: usado para comparar um valor numa clausula where e permite usar 'coringas' para comparar partes de uma correspondencia
--> A diferença entre like e ilike é que o like é case sensitive enquanto o ilike não Coringas: 
--> % : qualquer quantidade de caracteres até sua posição;
select *
from musicas
where composicao like 'Violin Sonata No 1 in G minor';
--> dessa forma retorna apenas os que tiverem a string completa  
select *
from musicas
where composicao like '%in G minor';
--> dessa forma vai retornar todos os que tiverem 'in G minor' independente do inicio da string  
select *
from musicas
where composicao like 'Violin Sonata No%';
--> dessa forma vai retornar todos os que tiverem 'Violin Sonata No' independente do inicio da string  
--> _ : apenas um caractere em sua posição  
select *
from musicas
where composicao like '__ano Quartet No 1 in G minor';
--> dessa forma sera ignorada qual é a letra e o resultado será baseado se tem palavras com 2 letras no lugar do __  
select *
from musicas
where composicao like '__ano%%G minor';
--> esse exemplo vai retornar todas as 'Piano in G minor'  
/*-------------------------------------------------------------------------------------------------------------*/
--> LIMIT: limita a quantidade de resultados contando do primeiro registro de acordo com a ordenação  
select *
from musicas
where tempo < 100
limit 3;
/*-------------------------------------------------------------------------------------------------------------*/
--> OFFSET: ignora a quantidade de registros definidos, começando a contar do primeiro e retorna os outros  
select *
from musicas
where tempo < 100 offset 3;
/*-------------------------------------------------------------------------------------------------------------*/
--> ORDER BY: serve para ordenar a lista. Pode ser asc -> ascendente ou desc -> decrescente  
select *
from musicas
order by id asc;
-->
select *
from musicas
where tempo < 100
order by id desc
limit 5;
-->
select *
from musicas
order by compositor asc,
    ritmo desc;
-->
--> Funções SQL 
--> COUNT: serve para contar os registros de acordo com a condição passada
select count(*)
from usuarios
where idade >= 18;
--> ALIAS: serve para criar uma nova referencia na tabela como um 'apelido'
--> ps.: usar string para criar colunas
select name as nomecompleto
from usuarios
where idade >= 18;
-->fazer isso vai criar uma nova coluna, com todos os nomes que tiverem mais de 18 anos e o nome da coluna será nomecompleto
/*-------------------------------------------------------------------------------------------------------------*/
--> CONCAT: serve para concatenar campos
select concat(name, ' - ', email, ' - ', phone) as "Nome - Email - Telefone"
from usuarios
select name || ' - ' || email as nome - email
from usuarios;
-->Essa é outra forma de usar o concat (forma menos recomendada)
/*-------------------------------------------------------------------------------------------------------------*/
--> AVG e ROUND: Avg serve para tirar a media aritimetica. Round serve para arredondadar um numero
select avg (idade)
from usuarios;
-->
select round(avg (idade))
from usuarios;
-->
select round(avg (idade), 2)
from usuarios;
--> dessa forma define o numero de casas decimais
/*-------------------------------------------------------------------------------------------------------------*/
--> MIN e MAX: serve para pegar o maior ou menor valor
select max(idade)
from usuarios;
-->
select min(idade)
from usuarios;
-->
select max(name)
from usuarios
select min(name)
from usuarios;
--> ao utilizar com nomes a função ordena alfabeticamente e traz o primeiro registro
select max(cadastro)
from usuarios;
--> com datas o max traz o mais novo
select min(cadastro)
from usuarios;
--> com datas o min traz o mais antigo
/*-------------------------------------------------------------------------------------------------------------*/
--> SUM: serve para fazer somas; não funciona com nomes, apenas numeros (ah vá, é mesmo?)
select sum(idade)
from usuarios;
/*-------------------------------------------------------------------------------------------------------------*/
--> CAST: serve para converter tipos de dados. Tipos de dados: text, integer, date
--> Considerações sobre a conversão de data:
--> Só o "date" vai retornar a data (dia,mes,ano); Só o "time" vai retornar o horario; Se usar "timestamp" retorna data e hora
--> Se for feita um operação matematica entre um texto e um numero o postgres automaticamente converte o texto em numero
select '123' + 4;
--> vai retornar 127
select idade::text
from usuarios --> forma de usar com o operador ::
select cast (idade as text)
from usuarios;
--> forma de usar com o cast()
/*-------------------------------------------------------------------------------------------------------------*/
--> NOW: serve para mostrar um determinado momento
select now();
--> vai mostrar o momento atual da requisição
select *
from agendamentos
where data::date > now();
--> vai retornar todos os agendamentos maiores que a data atual, perceba que houve a conversão do campo data para o tipo data
--> AGE: serve para retornar o tempo entre duas datas
--> Se for passado apenas 1 data ele compara automaticamente com a data atual mas a data passada deve ser convertida
select age ('2024-08-01 00:00:00'::date);
select age ('2024-08-01 00:00:00', now());
--> nesse caso como a segunda data foi especificada ele converteu a primeira automatcamente
--> Obs.: se estiver comparando uma data com uma data futura o valor virá negativo
select *,
    age (agendamentos::timestamp)
from agendamento
where agendamentos::timestamp > now();
/*-------------------------------------------------------------------------------------------------------------*/
--> COALESCE: serve para substituir um valor nulo por outro valor desejado
--> funciona assim (valor nulo, o que substituir 1, o que substituir 2 (caso n haja o 1))
select id,
    Coalesce (Telefone, email, "Não possui")
from usuarios;
--> nesse exemplo vai tentar substituir pelo email caso o telefone seja nulo, caso tambem seja nulo vai escrever 'nao possui'
/*-------------------------------------------------------------------------------------------------------------*/
--> GROUP BY: serve para agrupar, ele é geralmente usado em conjunto com uma função
select idade,
    count (id)
from usuarios
GROUP BY idade
ORDER BY idade ASC;
--> retorna as idades e a quantidade de pessoas de cada idade;
/*-------------------------------------------------------------------------------------------------------------*/
--> C.R.U.D: CREATE - READ - UPDATE - DELETE
-->
--> CREATE
drop database produtos;
--> deleta o banco de dados caso haja. CUIDADO AO USAR!;
CREATE DATABASE produtos;
CREATE TABLE IF NOT EXISTS produtos (
    id serial PRIMARY KEY,
    nome text,
    descricao text,
    preco integer,
    categoria text
);
--> INSERT: pode inserir vairios registros de uma vez. 
INSERT into produtos (nome, descricao, preco, categoria)
values ('Camisa', null, 4990, 'Roupas'),
    ('Calça', null, 11990, 'Roupas'),
    ('Bermuda', null, 8998, 'Roupas');
--> UPDATE: pode alterar varios campos ao mesmo tempo
UPDATE produtos
set nome = 'Camisa preta',
    valor = 13458
where id = 2;
--> ALTER: altera a tabela
ALTER table categorias
add column descricao text;
--> adiciona a coluna descrição na tabela categorias;
ALTER table categorias drop column descricao;
--> remove a coluna descrição
alter table categorias
alter column descricao type varchar(100);
--> altera o tipo da coluna descrição
alter table
add CONSTRAINTS telefone_editoras FOREIGN KEY (editora_id) references editoras(id) -->
    --> DELETE: apaga os registros do banco de dados
DELETE from produtos
where id >= 6
    and id <= 7;
/*-------------------------------------------------------------------------------------------------------------*/
--> JOIN: Permite agrupar duas ou mais tabelas em uma unica consulta;
--> INNER JOIN: pode usar só JOIN ou usar INNER JOIN;
--> Truque do poderoso guido: para evitar ficar escrevendo o nome inteiro da tabela pode dar um apelido logo a frente do nome da tabela (exemplo abaixo: empresas 'e' / filiais 'f');
select emp.id as empresaID,
    fil.id as filialID
from empresas emp
    join filiais fil on emp.id = fil.empresa_id;
--> LEFT JOIN: permite que sejam exibidos todos os resultados da esquerda e somente os que atendem à condição da direita
SELECT *
from empresas emp
    left join filiais fil on emp.id = fil.id;
--> RIGHT JOIN: permite que sejam exibidos todos os resultados da direita e somente os que atendem à condição da esquerda
SELECT *
from empresas emp
    RIGHT join filiais fil on emp.id = fil.id;
--> FULL JOIN: junta todas as tabelas mesmo que não haja relação entre as tabelas
SELECT emp.id as empresaID,
    fil.id as filialIDm,
    emp.nome,
    fil.pais
from empresas emp
    full join filiais fil on emp.id = fil.empresa_id;