# Leitura e Escrita de Arquivos em JavaScript utilizando o módulo `fs`

O Node.js fornece o módulo `fs` (File System) para realizar operações de leitura e escrita de arquivos. Este módulo oferece métodos síncronos e assíncronos para lidar com operações de arquivo. Abaixo, apresento um guia básico sobre como realizar leitura e escrita de arquivos em JavaScript utilizando o módulo `fs`.

## Leitura de Arquivos

### Síncrona

```javascript
const fs = require("fs");

try {
  // Lê o conteúdo do arquivo de forma síncrona
  const data = fs.readFileSync("caminho/do/arquivo.txt", "utf-8");
  console.log("Conteúdo do arquivo:", data);
} catch (err) {
  console.error("Erro ao ler o arquivo:", err);
}
```

### Assíncrona

```javascript
const fs = require("fs");

// Lê o conteúdo do arquivo de forma assíncrona
fs.readFile("caminho/do/arquivo.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }
  console.log("Conteúdo do arquivo:", data);
});
```

## Escrita de Arquivos

### Síncrona

```javascript
const fs = require("fs");

try {
  // Escreve no arquivo de forma síncrona
  fs.writeFileSync(
    "caminho/do/novo-arquivo.txt",
    "Conteúdo a ser escrito",
    "utf-8"
  );
  console.log("Arquivo criado com sucesso!");
} catch (err) {
  console.error("Erro ao escrever no arquivo:", err);
}
```

### Assíncrona

```javascript
const fs = require("fs");

// Escreve no arquivo de forma assíncrona
fs.writeFile(
  "caminho/do/novo-arquivo.txt",
  "Conteúdo a ser escrito",
  "utf-8",
  (err) => {
    if (err) {
      console.error("Erro ao escrever no arquivo:", err);
      return;
    }
    console.log("Arquivo criado com sucesso!");
  }
);
```

Lembre-se de substituir `'caminho/do/arquivo.txt'` e `'caminho/do/novo-arquivo.txt'` pelos caminhos reais dos seus arquivos. Além disso, trate os erros apropriadamente para garantir uma execução segura do código.

Espero que este guia seja útil para suas operações de leitura e escrita de arquivos em JavaScript utilizando o módulo `fs`.
