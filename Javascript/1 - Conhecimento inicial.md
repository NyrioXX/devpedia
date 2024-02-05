# Projeto de Armazenamento de Conhecimento

Este projeto foi criado com o objetivo de ser uma enciclopédia livre e um manual de consulta.

# Comandos e Operadores Básicos

# Tipos de Variáveis

- `let variavelMutavel;`: O uso do `let` permite mudar o valor da variável quando necessário.
- `const constante = "valor";`: O uso de `const` é apropriado quando o valor ou tipo não devem ser alterados.
- `var variavelMovel;`: O uso de `var` não é recomendado, pois eleva a variável para o início do código durante a execução e pode gerar problemas.

# Comparar Conteúdos

```javascript
const conteudo1 = "1";
const conteudo2 = "b";
const conteudo3 = ["a"];

// Para comparar apenas o conteúdo, usa == ou !=
// Para comparar o conteúdo e tipo, usa === ou !==
// Para operações matemáticas, usa o comando Math.
// Para fixar a quantidade de casas decimais, usa o .toFixed(n de casas)
// Para obter uma substring de uma posição específica

// Comparadores
if (conteudo1 == conteudo2) {
  // Uso do if
} else {
  // Uso do else para dar uma segunda opção para a comparação
}

const igualOuDiferente =
  conteudo1 == conteudo2 ? console.log(conteudo1) : console.log(conteudo2);
```

# Repetidores

# Uso do `for`

```javascript
const arrayDeNumeros = require("./3-arrays");
let index = 0;

for (let numero of arrayDeNumeros) {
  // Código a ser executado
}
```

# Uso do `for` de C

```javascript
for (let index = 0; index < arrayDeNumeros.length; index++) {
  // Código a ser executado
}
```

# Uso do `while`

```javascript
while (index < arrayDeNumeros.length) {
  // Código a ser executado
}
```

# Uso do `do while`

```javascript
do {
  index++;
} while (index < 5);
```
