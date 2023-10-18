--> TIPOS DE DADOS NUMERICOS
-->
--> NUMEROS INTEIROS:
- smallint --> 2 bytes
- integer --> 4 bytes
- biginteger --> 8 bytes
-->
--> NUMEROS DE PRECISAO ARBITRARIA: a precisao é especificada pelo usuario
- numeric;
- decimal (7, 4) --> (precisao,escala) significa que o numero terá no maximo 7 digitos onde apos a virgula so podera haver 4 digitos, se não informar vai até o limite do sistema
-->
--> NUMEROS COM PONTO FLUTUANTE: são numeros inexatos, não recomendado para calculos monetarios ou casos em que precise de numeros exatos
- real --> 4 bytes, até 6 digitos decimais
- double precision --> 8 bytes, 15 digitos decimais
-->
--> TIPOS SERIAIS: não aceita valor negativo nem zero, autoincrementavel 
- smallserial --> 2 bytes
- serial --> 4 bytes
- bigserial --> 8 bytes
-->
--> TIPOS PARA CARACTERES:
- varchar(n) --> o n define o tamanho em bytes que ele suporta, se não definir o n ele vai suportar indefinidamente
- char(n) --> igual ao anterior mas com um limite de caracteres fixo (sem espaços vazios no final), tem comprimento fixo
- text --> armazena sem limite
-->
--> VALORES LÓGICOS (BOOLEAN): armazena apenas valores TRUE ou FALSE.
- boolean --> 1 byte
--> verdadeiro: true, t, yes, on, 1
--> falso: false, f, no, off, 0
-->
--> VALORES DE DATA E HORA: 
- timestamp --> 8 bytes, armazena data e hora sem fuso horario
- timestamptz --> 8 bytes, armazena data e hora com fuso horario
- date --> 4 bytes, armazena somente data
- time --> 8 bytes, armazena somente hora
- timetz --> 12 bytes, armazena hora sem data + fuso horario
-->
--> CONSTRAINTS OU RESTRIÇÕES
--> são regras que aplicamos em colunas de uma tabela para controlar os dados armazenados
PRIMARY KEY -- indentificador unico de cada registro
FOREIGN KEY -- chave estrangeira, relacionamento entre tabelas
UNIQUE -- define que o valor da coluna seja unico entre os registros
NOT NULL -- nao permite inserir um valor null naquela linha/coluna
CHECK -- restrição personalizada, exige que o valor atenda a alguma condição
DEFAULT -- padrao predefinido para as linhas novas
/*-------------------------------------------------------------------------------------------------------------------------*/