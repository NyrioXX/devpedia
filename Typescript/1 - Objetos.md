# Objetos

```typescript
let pessoa: { nome: string; idade: number } = {
  nome: "João",
  idade: 25,
};
```

# **_Objetos Readonly_**

- É um mobjeto que não pode ser alterado, apenas lido

```typescript
let pessoaReadOnly: Readonly<{ nome: string; idade: number }> = {
  nome: "Maria",
  idade: 30,
};
```

# **_Objetos Nested_**

- É um objeto dentro de um objeto

```typescript
let detalhes: { endereco: { rua: string; cidade: string } } = {
  endereco: {
    rua: "Rua ABC",
    cidade: "Cidade XYZ",
  },
};
```

# **_Objetos com Funções_**

```typescript
let objetoComFuncao: {
  nome: string;
  saudacao: () => void;
} = {
  nome: "Alice",
  saudacao: function () {
    console.log("Olá, " + this.nome);
  },
};
```
