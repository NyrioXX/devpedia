# Documentação sobre Watch Mode, tsconfig.json e Tipos em TypeScript

## Watch Mode

O Watch Mode é uma funcionalidade no TypeScript que permite observar e recompilar automaticamente seus arquivos TypeScript quando ocorrem alterações. Isso é extremamente útil durante o desenvolvimento, pois reduz a necessidade de recompilar manualmente após cada modificação. Para usar o Watch Mode, basta adicionar a flag `--watch` ao seu comando de compilação:

```bash
tsc --watch
```

Com isso, o TypeScript ficará em modo de observação, recompilando automaticamente os arquivos conforme são alterados.

## tsconfig.json

O arquivo `tsconfig.json` é utilizado para configurar as opções do compilador TypeScript. Ele permite que o usuario defina diversas configurações, como o alvo da versão do ECMAScript, o diretório de saída, configurações de módulos, entre outros. Aqui está um exemplo básico de um `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es6",
    "outDir": "./dist",
    "module": "commonjs"
    // outras opções...
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Tipos de Informações e Validações em TypeScript

O TypeScript é um superset de JavaScript que adiciona tipagem estática ao código. Aqui estão alguns dos tipos básicos e recursos de validação disponíveis:

### Tipos Básicos (Primitives)

- `number`: Números inteiros ou de ponto flutuante.
- `string`: Cadeias de caracteres.
- `boolean`: Valores verdadeiro ou falso.
- `null` e `undefined`: Tipos para representar a ausência de valor.
- `void`: Usado em funções que não retornam valor.

### BigInt

O tipo `bigint` é usado para representar números inteiros arbitrariamente grandes.

```typescript
let bigIntValue: bigint = 9007199254740991n + 1n;
```

### Symbol

O tipo `symbol` é usado para criar identificadores únicos e é frequentemente usado como chave em objetos.

```typescript
const mySymbol: symbol = Symbol("description");
```

### Designação de Tipos

O usuario pode definir seus próprios tipos usando a palavra-chave `type` ou `interface`.
Os tipos de são:
string = "Alice";
number = 25;
boolean = true
null = null;
undefined = undefined;
unknown = unknown;
void = function exibirMensagem(): void {console.log("Olá, TypeScript!");} -> Usado para funções que não retornam nenhum valor
bigint = 9007199254740991n; -> numeros muito grandes
symbol = Symbol("descricao");
object = { chave: "valor" };
(array): number[] = [1, 2, 3];
(tupla): [string, number] = ["typescript", 3];
any = "qualquer valor";

Por exemplo:

```typescript
type MeuTipo = {
  nome: string;
  idade: number;
  apresentar: fun;
};

interface OutroTipo {
  prop1: string;
  prop2: boolean;
}
```

## Union, Enum e Literals

### Union

Union permite que uma variável aceite múltiplos tipos:

```typescript
let numeroOuString: number | string;
numeroOuString = 10; // Válido
numeroOuString = "Dez"; // Também válido
```

### Enum

Enum permite definir um conjunto nomeado de constantes:

```typescript
enum DiasDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
}

let diaAtual: DiasDaSemana = DiasDaSemana.Quarta;
console.log(diaAtual); // Saída: 3 (índice baseado em zero)
```

### Literals

Literais são valores específicos que representam um subconjunto de seus tipos:

```typescript
let numeroLiteral: 1 | 2 | 3;
numeroLiteral = 2; // Válido
// numeroLiteral = 4; // Inválido
```

## Tuples e Desconstrução de Tuple

### Tuples

Tuples são arrays com um número fixo de elementos, onde cada elemento pode ter um tipo diferente:

```typescript
let tupla: [string, number, boolean];
tupla = ["typescript", 3, true];
```

### Desconstrução de Tuple

Desconstrução de tuples permite atribuir valores a variáveis individuais:

```typescript
let [curso, duracao, online] = tupla;
console.log(curso, duracao, online); // Saída: typescript 3 true
```

## Alias, Funções e Arrow Functions

### Alias

Aliases ajudam a nomear tipos complexos:

```typescript
type Coordenadas = [number, number];

let ponto: Coordenadas = [10, 20];
```

### Funções

Declaração de função tradicional:

```typescript
function soma(a: number, b: number): number {
  return a + b;
}
```

### Arrow Functions

Arrow functions são formas mais concisas de expressar funções:

```typescript
let multiplicacao = (a: number, b: number): number => a * b;
```

## Funções Anônimas e Construtor

### Funções Anônimas

Funções anônimas são aquelas sem um nome associado:

```typescript
let funcaoAnonima = function (x: number, y: number): number {
  return x + y;
};
```

### Construtor de Função

O usuario pode usar a função construtora para criar funções dinamicamente:

```typescript
let minhaFuncao = new Function("x", "y", "return x + y");
console.log(minhaFuncao(3, 5)); // Saída: 8
```

## Casting

Casting é a conversão explícita de um tipo para outro:

```typescript
let valor: any = "123";
let comprimento: number = (valor as string).length;
```

## Classes

As classes são uma parte fundamental da programação orientada a objetos no TypeScript. Elas permitem definir estruturas de dados complexas e encapsular lógica relacionada. Aqui estão os principais conceitos relacionados a classes no TypeScript:

## Declaração de Classe

A declaração de uma classe segue o seguinte formato:

```typescript
class Animal {
  // Propriedades
  nome: string;
  idade: number;

  // Construtor
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  // Métodos
  fazerBarulho(): void {
    console.log("Fazendo barulho...");
  }
}
```

## Instância de Classe

Para criar uma instância da classe, o usuario utiliza a palavra-chave `new`:

```typescript
let meuAnimal: Animal = new Animal("Fido", 3);
```

## Herança

Classes podem herdar de outras classes para compartilhar comportamentos e propriedades:

```typescript
class Cachorro extends Animal {
  // Novas propriedades ou métodos específicos de Cachorro
  raca: string;

  constructor(nome: string, idade: number, raca: string) {
    super(nome, idade); // Chama o construtor da classe pai
    this.raca = raca;
  }

  latir(): void {
    console.log("Latindo...");
  }
}
```

## Modificadores de Acesso

O TypeScript suporta modificadores de acesso para controlar a visibilidade de propriedades e métodos:

- `public`: A propriedade ou método é acessível de qualquer lugar (padrão se não especificado).
- `private`: A propriedade ou método é acessível somente dentro da própria classe.
- `protected`: A propriedade ou método é acessível dentro da

```typescript
  private modelo: string;
  public velocidade: number;
  protected ano: number;

  constructor(modelo: string, velocidade: number, ano: number) {
    this.modelo = modelo;
    this.velocidade = velocidade;
    this.ano = ano;
  }

  acelerar(): void {
    this.velocidade += 10;
    console.log("Acelerando...");
  }
}
```

## Getters e Setters

Os getters e setters permitem controlar o acesso às propriedades de uma classe:

```typescript
class Pessoa {
  private _idade: number;

  constructor(idade: number) {
    this._idade = idade;
  }

  get idade(): number {
    return this._idade;
  }

  set idade(novaIdade: number) {
    if (novaIdade > 0) {
      this._idade = novaIdade;
    }
  }
}
```

## Métodos Estáticos

Métodos estáticos pertencem à classe, não às instâncias. São invocados diretamente na classe, não em uma instância:

```typescript
class Utilidades {
  static dobrarNumero(numero: number): number {
    return numero * 2;
  }
}

let resultado: number = Utilidades.dobrarNumero(5);
```

## Abstract Classes

Classes abstratas não podem ser instanciadas diretamente; elas são projetadas para serem subclasses:

```typescript
abstract class Forma {
  abstract calcularArea(): number;
}

class Retangulo extends Forma {
  ladoA: number;
  ladoB: number;

  constructor(a: number, b: number) {
    super();
    this.ladoA = a;
    this.ladoB = b;
  }

  calcularArea(): number {
    return this.ladoA * this.ladoB;
  }
}
```

As classes no TypeScript oferecem uma estrutura poderosa para organizar e reutilizar código. Elas são essenciais para a criação de aplicativos escaláveis e orientados a objetos. Para mais detalhes, consulte a documentação oficial do TypeScript sobre [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html).

Esse é apenas um guia introdutório. Para obter mais informações e detalhes, consulte a documentação oficial do TypeScript em [Documentação TypeScript](https://www.typescriptlang.org/docs/).
