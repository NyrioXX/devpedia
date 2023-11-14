//COMECE POR AQUI!

//ESSE PROJETO FOI CRIADO NO INTUITO DE GUARDAR O CONHECIMENTO. UMA ENCICLIPEDIA LIVRE E UMA MANUAL DE CONSULTA!

//COMANDOS E OPERADORES BASICOS
//Tipos de variavel
let variavelMutavel; //O uso do let permite mudar o valor da variavel quando quiser
const constante = "valor"; //o uso de const é apropriado quando o valor ou tipo n deve ser alterado
var variavelMovel; // o uso do var não é recomendado pois as eleva para o inicio do codigo durante a execução e pode gerar problemas

//Comparar conteudos
const conteudo1 = "1";
const conteudo2 = "b";
const conteudo3 = ["a"];
//Para comparar apenas o conteudo usa == ou !=
//Para comparar o conteudo e tipo usa === ou !==
//Para operações matematicas usa o comando Math.
//Para fixar a quantidade de casas decimais usa o .tofixed(n de casas)
//Para pegar ums string de uma posição especifica
//Comparadores -> if; if else; ternarios
if (conteudo1 == conteudo2) {
} //Uso do if
else {
} //Uso do else para dar uma segundo opção para a comparação
const igualOuDiferente =
//Repetidores -> for, for de C, while, do while
//Uso do for: é preciso definir uma variavel dentro do for para que ela assuma o valor de cada elemento a ser executado
const arrayDeNumeros = require("./3-arrays");
let index = 0;
for (let numero of arrayDeNumeros) {
}
//Uso do for de C: declara os 3 passos na repetição. O que fazer primeiro (criar index), a condição de repetição (index < tamanho do array) e o que fazer depois de repetir (somar ao index)
for (let index = 0; index < arrayDeNumeros.length; index++) {
}
//Uso do while: especifica a condição gatilho da repetiçao
while (index < arrayDeNumeros.length) {
}
//Uso do do while: mesma coisa dos anterior com uma estrutura diferente
do {
  index++;
} while (index < 5);
