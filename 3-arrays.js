const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayDeNomes = ["maria", "jose", "joao", "marta"];
let teste;
//METODOS DE ARRAY

//.shift(): remove o primeiro item do array e o retorna
console.log(arrayDeNumeros.shift());
//.unshift(): adiciona algo ao primeiro item do array
console.log(arrayDeNumeros.unshift(0));
//.pop(): remove o ultimo item do array
console.log(arrayDeNomes.pop());
//.push(): adiciona um item ao ultimo item da lista
console.log(arrayDeNumeros.push(10));
//.indexOf(): retorna o indice daquilo que foi procurado, se nao encontrar retorna -1
console.log(arrayDeNomes.indexOf("jose"));
//.includes(): retorna um booleano se há ou não o que estou procurand
console.log(arrayDeNomes.includes("felipe"));
//.reverse(): inverte a ordem do array -> altera o array original
console.log(arrayDeNumeros.reverse());
//.join(): junta os itens do array em forma de string separando-os com o que for passado entre parenteses
console.log(arrayDeNomes.join(" "));
//.concat(): junta varios arrays em 1 só
console.log(arrayDeNumeros.concat(arrayDeNomes));
//.slice(): retira um pedaço do array, começa do primeiro numero no parenteses e termina no segundo (se n especificar o segundo termina no fim do array)
console.log(arrayDeNomes.slice(1, 3));
//.splice(indice inical, quantos itens deletar(se n especificar vai ate o fim do array), o que adicionar)
//altera o conteudo de uma lista, removendo itens e tendo a opção de adicionar novos no lugar
//altera o array original
//retorna a lista do que foi deletado
console.log(arrayDeNomes.splice(0, arrayDeNomes.length, "felipe"));
//.every(funcao): serve para testar todos os elementos de um array são verdadeiros
console.log(arrayDeNumeros.every(Number));
//.some(funcao): serve para testar se algum elemento do array é valido
console.log(arrayDeNomes.some(isNaN));
//.find(funcao): retorna o primeiro elemento do array que for encontrado no array de acordo com a condicao
console.log(
  arrayDeNomes.find((nome) => {
    return nome === "marta";
  })
);
//.findIndex(funcao): encontra o indice do primeiro elemento correspondente a funcao

//FUNÇÕES CALLBACK

console.log(
  arrayDeNomes.findIndex(function (nome) {
    return nome === "marta";
  })
);

//.filter(funcao): cria um novo array com aos itens que atendem as condições do filtro
console.log(
  (teste = arrayDeNomes.filter((nome) => {
    return nome === "maria";
  }))
);

//.map(funcao) //executa a funcao em cada elemento do array (mesmo principio do for of)
arrayDeNumeros.map((numero) => {
  return console.log(numero);
});

//.sort('funcao opcional'): ordena o proprio array (muda o original) de acordo com a tabela unicode
// ordem unicode: numeros -> letra minuscula-> letra maiuscula
//se o sort for usado com uma função, se negativo o primeiro vem antes do segundo, se for positivo o inverso
// array.sort((a,b)=>{if (a<b){return -1}) array.sort((a,b)=>{if (a>b){return 1}) //ordem crescente
// array.sort((a,b)=>{if (a<b){return 1}) array.sort((a,b)=>{if (a>b){return -1}) //ordem decrescente
// array.sort((a,b)=>{return a.localeCompare(b)})
console.log(
  (teste = arrayDeNumeros.sort((a, b) => {
    return a - b;
  }))
);
console.log(
  (teste = arrayDeNomes.sort((a, b) => {
    return a.toLocaleString(b);
  }))
);
//.localeCompare(string referencia)
console.log(arrayDeNumeros.toLocaleString());

//.reduce(acumulador,valor atual,indice atual, array completo) //executa uma função em todos os elementos do array e retorna 1 resultado
// //pode usar uma condição opcional: array.reduce(acumulador,valor atual,indice atual, array completo) =>{return acumulador + valor atual},10->esse 10 é o valor do acumulador)
// // como reduzir varios array usando reduce:
// const arrayReduzido array,reduce((acumulador,elemento atual)=>{return [...acumulador,...elemento atual]})
console.log(
  arrayDeNumeros.reduce((acumulador, valorAtual, indiceAtual) => {
    return acumulador + valorAtual * indiceAtual;
  })
);

module.exports = (arrayDeNumeros, arrayDeNomes);
