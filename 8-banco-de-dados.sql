--> Conceitos
Queries => sao trechos de codigos sql que representam instruções a serem executadas em bancos de dados  

--> Comandos do banco de dados: no beekeeper:

and; or; between; is null; is not null  

create database nomeDoBancoDeDados; --> cria um banco de dados  

//drop database nomeDoBancoDeDados; --> apaga um banco de dados  

--> Select: serve para selecionar registros na tabela  
select * from musicas; --> seleciona todos os registros, com todas as colunas, da tabela musicas. o * significa "todos" (select * = select todos)  
select id, composicao from musicas --> seleciona todos os registros com id e composição da tabela musicas  

--> Distinct: seleciona diferenciando de acordo com o que for passado. OBS.: considera unico a combinação dos fatores que forem condições do filtro  
select distinct composicao from musicas;

--> Where: como se fosse o se no js  
select * from musicas where tempo < 100

--> Like e ILike: usado para comparar um valor numa clausula where e permite usar 'coringas' para comparar partes de uma correspondencia
A diferença entre like e ilike é que o like é case sensitive enquanto o ilike não
Coringas:
% -> qualquer quantidade de caracteres até sua posição;  
select * from musicas where composicao like 'Violin Sonata No 1 in G minor'--> dessa forma retorna apenas os que tiverem a string completa  
select * from musicas where composicao like '%in G minor'--> dessa forma vai retornar todos os que tiverem 'in G minor' independente do inicio da string  
select * from musicas where composicao like 'Violin Sonata No%'--> dessa forma vai retornar todos os que tiverem 'Violin Sonata No' independente do inicio da string  
--> _ -> apenas um caractere em sua posição  
select * from musicas where composicao like '__ano Quartet No 1 in G minor'--> dessa forma sera ignorada qual é a letra e o resultado será baseado se tem palavras com 2 letras no lugar do __  
select * from musicas where composicao like '__ano%%G minor'--> esse exemplo vai retornar todas as 'Piano in G minor'  


--> Limit: limita a quantidade de resultados contando do primeiro registro de acordo com a ordenação  
select  * from musicas where tempo < 100 limit 3

--> Offset: ignora a quantidade de registros definidos, começando a contar do primeiro e retorna os outros  
select * from musicas where tempo < 100 offset 3

--> Order by: serve para ordenar a lista. Pode ser asc -> ascendente ou desc -> decrescente  
select * from musicas order by id asc;
select * from musicas where tempo < 100 order by id desc limit 5;
select  * from musicas order by compositor asc, ritmo desc

--> Funções SQL 
--> Count: serve para contar os registros de acordo com a condição passada
select count(*) from usuarios where idade >= 18

--> Alias: serve para criar uma nova referencia na tabela como um 'apelido'
--> ps.: usar string para criar colunas
select name as nomecompleto from usuarios where idade >=18 -->fazer isso vai criar uma nova coluna, com todos os nomes que tiverem mais de 18 anos e o nome da coluna será nomecompleto

--> Concat: serve para concatenar campos
select concat(name,' - ',email,' - ', phone) as "Nome - Email - Telefone" from usuarios
select name || ' - ' || email as nome-email from usuarios -->Essa é outra forma de usar o concat (forma menos recomendada)

--> Avg e Round: Avg serve para tirar a media aritimetica. Round serve para arredondadar um numero
select avg (idade) from usuarios;
select round(avg (idade)) from usuarios;
select round(avg (idade),2) from usuarios; --> dessa forma define o numero de casas decimais

--> Min e Max: serve para pegar o maior ou menor valor
select max(idade) from usuarios;
select min(idade) from usuarios;
select max(name) from usuarios; --> ao utilizar com nomes a função ordena alfabeticamente e traz o ultimo registro
select min(name) from usuarios; --> ao utilizar com nomes a função ordena alfabeticamente e traz o primeiro registro
select max(cadastro) from usuarios; --> com datas o max traz o mais novo
select min(cadastro) from usuarios; --> com datas o min traz o mais antigo

--> Sum: serve para fazer somas; não funciona com nomes, apenas numeros (ah vá, é mesmo?)
select sum(idade) from usuarios;

--> Cast: serve para converter tipos de dados. Tipos de dados: text, integer, date
--> Considerações sobre a conversão de data:
--> Só o "date" vai retornar a data (dia,mes,ano); Só o "time" vai retornar o horario; Se usar "timestamp" retorna data e hora
--> Se for feita um operação matematica entre um texto e um numero o postgres automaticamente converte o texto em numero
select '123' + 4; --> vai retornar 127
select idade::text from usuarios --> forma de usar com o operador ::
select cast (idade as text) from usuarios; --> forma de usar com o cast()

--> Now: serve para mostrar um determinado momento
select now(); --> vai mostrar o momento atual da requisição
select * from agendamentos where data :: date > now(); --> vai retornar todos os agendamentos maiores que a data atual, perceba que houve a conversão do campo data para o tipo data

--> Age: serve para retornar o tempo entre duas datas
--> Se for passado apenas 1 data ele compara automaticamente com a data atual mas a data passada deve ser convertida
select age ('2024-08-01 00:00:00'::date);
select age ('2024-08-01 00:00:00',now()); --> nesse caso como a segunda data foi especificada ele converteu a primeira automatcamente
--> Obs.: se estiver comparando uma data com uma data futura o valor virá negativo
select *, age (agendamentos::timestamp) from agendamento where agendamentos::timestamp > now();

--> Coalesce: serve para substituir um valor nulo por outro valor desejado
select * from usuarios


