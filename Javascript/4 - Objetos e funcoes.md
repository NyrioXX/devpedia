# Funções e Métodos em JavaScript

## Funções

### Função Padrão

```javascript
// O parâmetro da função se comporta como uma variável
function nomeDaFunc(parametro) {
  "código executado";
}
```

### Arrow Function

```javascript
// Outra forma de escrever a função, chamada arrow function
const nomeDafunc = (parametro) => {
  "código executado";
};
```

## Métodos

### Método em Objeto

```javascript
// Método é uma função que está dentro de um objeto. Como usar um método:
// O this dentro serve para remeter ao próprio objeto
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
```

## Temporizadores

### setTimeout()

```javascript
// Para atrasar a execução em um tempo determinado
setTimeout("função, tempo em milissegundos");
```

### setInterval()

```javascript
// Para executar a função em intervalos de tempo
setInterval("função, tempo em milissegundos");
```

### clearInterval()

```javascript
// Para parar a execução de um intervalo: identificador é uma variável que retém o setInterval
clearInterval("identificador do setInterval");
```
