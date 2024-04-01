# **HTML**

- Um html é composto por etiquetas hiper texto
- Uma etiqueta é formada por comando, atributos e valores. Exemplo:
- É possivel validar htmls pelo portal: https://validator.w3.org/

```html
<img src="imagens/gato.png" />
```

- _img_ é o comando
- _src_ é o atributo
- _"imagens/gato.png"_ é o valor

## **Comandos html**

- Cabeçalho da pagina
  - <head></head>
- Titulo da pagina
  - <title></title>
- Corpo da pagina
  - <body></body>
- Titulos do corpo (N varia de 1 a 6 sendo 1 o maior e 6 o menor)
  - <h'N'></h'N'>
- Paragrafos
  - <p></p>
- Etiquetas (label)
  - <label></label>
- Quebra de linha
  - <br/>
- Links (são ancorados com a e referenciados com href)
  - <a href="www.site.com">Nome do link para clicar na pagina</a>
- Imagens
  - <img src="./Arquivos/cachorro no teclado.png" alt="Nome da imagem como referencia"/>
- Linha horizontal
  - <hr/>
- Paragrafo estruturado (a diferença para o p normal é que a pagina mantem a formatação definida no html)
  - <pre></pre>
- Tabelas
  - Inserir tabela
  - Para inserir conteudo na tabela usa o comando tr **para cada adição**
  - Para inserir o cabeçalho da tabela usa o comando th dentro do tr
  - Para inserir conteudo nas linhas usa o comando td dentro do tr
    - <table>  
      <tr>
        <th>Nome</th>
        <th>Apelido</th>
      </tr>
      <tr>
        <td>Shaolin</td>
        <td>Matador de porco</td>
      </tr>
- Listas
  - Para inserir linhas usa o comando li
  - Lista não ordenada
    - <ul>
       <li>Item 1</li>
       <li>Item 2</li>    
      </ul>
  - Lista ordenada
  - <ol>
      <li>Item 1</li>
      <li>Item 2</li>    
     </ol>
- Elementos especiais (são aplicados por codigo do elemento ex: &#8594)
  - <span style="font-size: 10px">&#8594;</span>
- Divisões
  - <div></div>

## Facilitando a vida com Emmet abreviations no VSCode

- Comandos podem ser aplicados de forma aninhada usando Emmet
- Ao escrever abreviações o vs code já mostra a pre visualização do resultado
- Apertar tab é melhor que enter, e apertar tab após a criação leva até o proximo item a ser personalizado
- A abreviação **! ou html:5** cria a base do documento html
- Para aninhar comandos usa o sinal **>**, exemplo:
  ```html
  div>h1
  ```
- Para aninhar mais de 1 comando usar o sinal **+**, exemplo:
  ```html
  div>h1+p
  ```
- Para criar comandos ja preenchidos usa **{}**, exemplo:
  ```html
  div>h1{Titulo escolhido}
  ```
- Para repetir a criação de um comando usa **asterisco(\*)**
  ```html
  div>p\*3 (cria 3 paragrafos)
  ```
- Para inserir ids diretamente usa **#nome do id**
  ```html
  div>li#id
  ```
- Para numerar sequencialmente usa **$**
  ```html
  div>h$\*3 (variar criar h1,h2,h3)
  ```
- Para usar o filtro de comentario usa **|c** depois da abreviação toda
  ```html
  div*5#id>h1{titulo$}+p{conteudo}|c
  ```

## Outros truques e dicas

- É possivel usar o Lorem Ipsum direto no VS code usando **lorem'N'**, onde N é o numero de palavras que deseja adicionar

  ```html
  <p>lorem5</p>
  ```

# **CSS**

- O CSS serve para estilizar a pagina
- Os estilos css podem ser aplicados de 3 formas:
  1. Importado de arquivo
  2. Aplicado no header
  3. Aplicado direto na tag

```html
<!DOCTYPE html>

<html lang="pt-BR">
  <head>
    <title>Aula de Css</title>
    <link rel="stylesheet" href="./Arquivos/estilo.css"> <!--Estilo em arquivo externo-->
    <!--Classes e propriedades são definidas dentro do comando style-->
    <style>
    #propriedade{background-color: purple;}
    .nomeDaClasse{color:green}
    table,th,td {border: 1px solid black;align-self: center;text-align: center;}
    h1 {color: greenyellow;text-align: center;}
    p {color: red; border: solid tomato;text-align: center;}
    </style> <!--Estilo definido direto no cabeçalho-->

  </head>

  <body >
    <div>
    <h1 style="border: 2px  blue; text-align: left;color: green;background-color: yellow;">Titulo 1</h1><!--Alteração aplicada diretamente, essas alterações sobrepoem as definidas no header-->
    <p>Paragrafo 1</p>
    <h1 id="propriedade">Titulo 2</h1><!--Alteração definido por propriedade-->
    <p>Paragrafo 2</p>
    </div>
    <table style="text-align: center;margin: auto;"> <!--margin serve para estilizar a tabela e deve acompanhar o texto-->
        <tr>
            <th>Nome</th>
            <th>Apelido</th>
        </tr>
        <tr>
            <td>Shaolin</td>
            <td>Matador de porco</td>
        </tr>
    </table>
    <p class="nomeDaClasse">Esse paragrafo é estilizado por uma classe</p><!--Alteração feita atraves de class-->
    </body>
  </body>
</html>
```

## **Bootstrap**

- O bootstrap serve para personalizar htmls tornar as paginas responsivas
- A documentação do se encontra em [www.w3schools.com](www.w3schools.com)
- Os elementos são agrupados em containers
  - Containers podem ter largura fixa, mantendo as proporções esqueda e direita
  - Containers podem ter largura fluida, se ajusta ao tamanho da pagina, preenchendo-a
