# **Arrays**

```typescript
let numeros: number[] = [1, 2, 3, 4];
```

## **_Arrays Readonly e com Funções_**

- Arrays que não podem ser alterados, apenas lidos

```typescript
let numerosReadonly: ReadonlyArray<number> = [1, 2, 3, 4];
```

## **_Array com função_**

```javascript
let arrayComFuncao: {
  items: string[],
  adicionarItem: (item: string) => void,
} = {
  items: ["item1", "item2"],
  adicionarItem: function (item: string) {
    this.items.push(item);
  },
};
```

## **_Construtor de Arrays_**

O usuario pode utilizar construtores para inicializar arrays com valores predefinidos:

```typescript
let arrayConstrutor: number[] = new Array(3).fill(0); // Inicializa um array com três elementos, todos iguais a 0.
```

## **_Desconstrução de Arrays_**

Desconstrução permite atribuir valores de um array a variáveis individuais:

```typescript
let [primeiro, segundo, terceiro] = arrayConstrutor;
console.log(primeiro, segundo, terceiro); // Saída: 0 0 0
```
