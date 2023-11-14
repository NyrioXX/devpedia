// o parametro da funcao se comporta como uma variavel
function nomeDaFunc(parametro) {
  "codigo executado";
}

// Outra forma de escrever a função, chamada arrow function
const nomeDafunc = (parametro) => {
  "codigo executado";
};

//Metodo - é uma função que está dentro de um objeto. Como usar um metodo:
// o this dentro serve para remeter ao proprio objeto
const pessoa = {
  nome: "Felipe",
  idade: 29,
  profissao: "Jesus sabe",
  apresentar: function () {
    const faixaEtaria = determinarFaixaEtaria(this.idade);
    console.log(
      `Sou ${this.nome}, sou um ${faixaEtaria} de ${this.idade} e sou ${this.profissao}`
    );
  },
};
pessoa.apresentar();
//Para atrasar a execuçao em um tempo determinado
setTimeout("funçao, tempo em milisegundos");
//Para executar a funcao em intervalos de tempo
setInterval("funcao, tempo em milisegundos");
//Para parar a execução de um intervalo: identificador é uma variavel que retem o set interval
clearInterval("identificador do set interval");
