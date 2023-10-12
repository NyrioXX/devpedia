let string = "felipe";

//.includes(o que eu to procurando, a partir de onde procurar)retorna true ou false
console.log(string.includes("e", 0)); //true
//.indexOf(o que eu to procurando, a partir de onde): retorna o numero onde está o que esta sendo procurado, não achar retorn -1
console.log(string.indexOf("e")); //1
//.lastIndexOf(o que eu to procurando, a partir de onde) // mesma coisa do indexof() mas faz a pesquisa de tras para a frente
console.log(string.lastIndexOf("e", 2)); //1
//.slice(numero onde começa o corte, numero onde termina o corte): serve para 'fatiar' o string e pegar um pedaço dele.
// Se o numero indicado for negativo o corte é feito do fim para o começo; Não muda o original
console.log(string.slice(2)); //lipe
//.replace(o que achar, o que trocar) esse metodo cria uma copia e altera ela. NÃO ALTERA O TEXTO ORIGINAL
//quando quiser trocar todas as ocorrencias usar /'ocorrencia'/g
console.log(string.replace("f", "p")); //pelipe
console.log(string.replace(/e/g, "i")); //filipi
//.toUpperCase() ou .toLowercase(): esse metodo cria uma copia e altera ela. NÃO ALTERA O TEXTO ORIGINAL
console.log(string.toUpperCase()); //FELIPE
console.log(string.toLowerCase()); //felipe
//.trim(): remove espaços em branco no inicio e no fim de um string
console.log(string.trim()); //felipe
//.padStart ou .padEnd(tamanho do preenchimento, 'o que concatenar'): preenche a string com o texto escolhido ate o tamanho definido
console.log(string.padStart(4, "*")); //
//.split(o que vai ser buscado): quebra a string onde o que for buscado for encontrado
console.log(string.split("l")); //['fe','ipe']
//.charAt(indice): retorna a string do indice escolhido
console.log(string.charAt(2)); //l
