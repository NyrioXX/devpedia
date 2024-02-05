# Métodos para Manipulação de Strings em JavaScript

```javascript
let string = "felipe";
```

# .includes()

```javascript
// Verifica se a string inclui o que está sendo procurado a partir de uma posição específica
console.log(string.includes("e", 0)); // true
```

# .indexOf()

```javascript
// Retorna o índice onde está o que está sendo procurado; retorna -1 se não encontrar
console.log(string.indexOf("e")); // 1
```

# .lastIndexOf()

```javascript
// Mesmo princípio do indexOf(), mas realiza a pesquisa de trás para a frente
console.log(string.lastIndexOf("e", 2)); // 1
```

# .slice()

```javascript
// "Fatiar" a string para pegar um pedaço dela; não altera a original
console.log(string.slice(2)); // lipe
```

# .replace()

```javascript
// Substitui o que for encontrado por outra coisa; cria uma cópia e não altera a original
// Quando quiser trocar todas as ocorrências, usar /'ocorrência'/g
console.log(string.replace("f", "p")); // pelipe
console.log(string.replace(/e/g, "i")); // filipi
```

# .toUpperCase() e .toLowerCase()

```javascript
// Converte a string para maiúsculas ou minúsculas; cria uma cópia e não altera a original
console.log(string.toUpperCase()); // FELIPE
console.log(string.toLowerCase()); // felipe
```

# .trim()

```javascript
// Remove espaços em branco no início e no fim da string; cria uma cópia e não altera a original
console.log(string.trim()); // felipe
```

# .padStart() e .padEnd()

```javascript
// Preenche a string até o tamanho definido com o texto escolhido
console.log(string.padStart(4, "*"));
```

# .split()

```javascript
// Quebra a string onde o que for buscado for encontrado
console.log(string.split("l")); // ['fe', 'ipe']
```

# .charAt()

```javascript
// Retorna o caractere da string no índice escolhido
console.log(string.charAt(2)); // l
```
