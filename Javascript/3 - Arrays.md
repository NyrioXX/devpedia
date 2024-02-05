# Métodos de Array

# Array de Números e Nomes

```javascript
const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayDeNomes = ["maria", "jose", "joao", "marta"];
let teste;
```

# .shift()

Remove o primeiro item do array e o retorna.

```javascript
console.log(arrayDeNumeros.shift());
```

# .unshift()

Adiciona algo ao primeiro item do array.

```javascript
console.log(arrayDeNumeros.unshift(0));
```

# .pop()

Remove o último item do array.

```javascript
console.log(arrayDeNomes.pop());
```

# .push()

Adiciona um item ao final do array.

```javascript
console.log(arrayDeNumeros.push(10));
```

# .indexOf()

Retorna o índice do item procurado; se não encontrar, retorna -1.

```javascript
console.log(arrayDeNomes.indexOf("jose"));
```

# .includes()

Retorna um booleano se o item procurado está presente.

```javascript
console.log(arrayDeNomes.includes("felipe"));
```

# .reverse()

Inverte a ordem do array (altera o array original).

```javascript
console.log(arrayDeNumeros.reverse());
```

# .join()

Junta os itens do array em uma string, separando-os com o especificado.

```javascript
console.log(arrayDeNomes.join(" "));
```

# .concat()

Junta vários arrays em um só.

```javascript
console.log(arrayDeNumeros.concat(arrayDeNomes));
```

# .slice()

Retira um pedaço do array, começando do primeiro número especificado e terminando no segundo.

```javascript
console.log(arrayDeNomes.slice(1, 3));
```

# .splice()

Altera o conteúdo do array, removendo e/ou adicionando itens.

```javascript
console.log(arrayDeNomes.splice(0, arrayDeNomes.length, "felipe"));
```

# .every()

Testa se todos os elementos do array são verdadeiros.

```javascript
console.log(arrayDeNumeros.every(Number));
```

# .some()

Testa se algum elemento do array é verdadeiro.

```javascript
console.log(arrayDeNomes.some(isNaN));
```

# .find()

Retorna o primeiro elemento do array que atende à condição.

```javascript
console.log(
  arrayDeNomes.find((nome) => {
    return nome === "marta";
  })
);
```

# .findIndex()

Encontra o índice do primeiro elemento correspondente à função.

```javascript
console.log(
  arrayDeNomes.findIndex(function (nome) {
    return nome === "marta";
  })
);
```

# .filter()

Cria um novo array com os itens que atendem às condições do filtro.

```javascript
console.log(
  (teste = arrayDeNomes.filter((nome) => {
    return nome === "maria";
  }))
);
```

# .map()

Executa a função em cada elemento do array.

```javascript
arrayDeNumeros.map((numero) => {
  return console.log(numero);
});
```

# .sort()

Ordena o array de acordo com a tabela Unicode. Pode ser usado com uma função para ordenação personalizada.

```javascript
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
```

# .toLocaleString()

Converte o array de números em uma string formatada.

```javascript
console.log(arrayDeNumeros.toLocaleString());
```

# .reduce()

Executa uma função em todos os elementos do array e retorna um resultado.

```javascript
console.log(
  arrayDeNumeros.reduce((acumulador, valorAtual, indiceAtual) => {
    return acumulador + valorAtual * indiceAtual;
  })
);
```

# .reduce() com Condição Opcional

Pode usar uma condição opcional.

```javascript
console.log(
  arrayDeNumeros.reduce((acumulador, valorAtual, indiceAtual) => {
    return acumulador + valorAtual * indiceAtual;
  }, 10)
);
```

# Como Reduzir Vários Arrays

Usando `reduce` para reduzir vários arrays.

```javascript
const arrayReduzido = array.reduce((acumulador, elementoAtual) => {
  return [...acumulador, ...elementoAtual];
}, []);
```
