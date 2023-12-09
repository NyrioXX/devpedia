# REST API: Principais Conceitos, Padrões e Características

## Introdução

Uma API (Interface de Programação de Aplicações) REST (Representational State Transfer) é um conjunto de princípios arquiteturais e padrões que definem como os recursos podem ser definidos e acessados via web. As REST APIs são amplamente utilizadas para facilitar a comunicação entre sistemas e aplicativos distribuídos. Abaixo estão alguns dos principais conceitos, padrões e características associados a uma REST API.

## Conceitos Principais

### 1. **Recursos (Resources):**

- Representam entidades ou objetos manipulados pela API.
- São identificados por URLs (Uniform Resource Locators).

### 2. **Métodos HTTP:**

- GET: Recuperar dados.
- POST: Criar um novo recurso.
- PUT: Atualizar um recurso existente.
- DELETE: Remover um recurso.

### 3. **URI (Uniform Resource Identifier):**

- Identificador único para um recurso.
- Consiste em URL e URN (Uniform Resource Name).

### 4. **Representação:**

- Os recursos podem ser representados em diferentes formatos, como JSON ou XML.

## Padrões

### 1. **RESTful:**

- Adere aos princípios REST.
- Usa métodos HTTP de maneira apropriada.
- Utiliza URIs para identificar recursos.

### 2. **HATEOAS (Hypermedia As The Engine Of Application State):**

- Os clientes interagem com a aplicação exclusivamente através de hiperlinks fornecidos de forma dinâmica pelos aplicativos servidores.

### 3. **Stateless (Sem Estado):**

- Cada solicitação do cliente para o servidor deve conter todas as informações necessárias para entender e processar a solicitação.
- A sessão do cliente é armazenada no cliente, não no servidor.

## Características

### 1. **Comunicação Sem Estado:**

- Cada solicitação do cliente para o servidor é independente.
- Não há informações de estado mantidas no servidor entre solicitações.

### 2. **Mensagens Autocontidas:**

- Cada mensagem contém toda a informação necessária para entender e processar a solicitação.

### 3. **Arquitetura Cliente-Servidor:**

- Separação clara entre as responsabilidades do cliente e do servidor.

### 4. **Cacheabilidade:**

- Respostas podem ser marcadas como cacheáveis ou não cacheáveis.

### 5. **Interface Uniforme:**

- Recursos são manipulados de maneira consistente usando um conjunto comum de operações (métodos HTTP).

### 6. **Segurança:**

- Utilização de mecanismos padrão como HTTPS.
- Autenticação e autorização são implementadas conforme necessário.
