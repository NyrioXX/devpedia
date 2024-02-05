- [**API e Rest**](#api-e-rest)
  - [**Principios do design REST**](#principios-do-design-rest)
  - [**Solicitações REST**](#solicitações-rest)

# **API e Rest**

- A AWS Command Line Interface (AWS CLI) é uma ferramenta que fornece acesso direto às APIs públicas dos serviços da AWS
- Algumas APIs seguem os princípios de transferência de estado representacional (REST)

- As APIs REST se comunicam por meio de HTTP. As APIs baseadas na web que seguem os princípios de design REST são chamadas de RESTful

- REST é um design de API muito conhecido que substituiu amplamente o Simple Object Access Protocol (SOAP) como padrão para serviços da web

## **Principios do design REST**

- O REST segue seis princípios de design

1. O cliente deve ter uma interface simples e uniforme para acessar o servidor. Uma solicitação deve ser feita para um único endpoint ou Uniform Resource Identifier (URI) quando ele interage com cada recurso diferente que faz parte do serviço. A interface não define a estrutura do que é retornado quando o cliente faz uma solicitação

2. Os serviços RESTful também são stateless. Stateless significa que o servidor não monitora quais solicitações o cliente da conexão fez ao longo do tempo. Significa ainda que ele não acompanha qual etapa o cliente pode ter concluído com relação a uma série de ações. Na verdade, todas as informações da sessão sobre o cliente são conhecidas apenas pelo cliente

3. O servidor não conhece o estado do cliente e o cliente não conhece o estado do servidor

4. Os clientes REST devem poder armazenar em cache as respostas recebidas do servidor REST

5. Os serviços RESTful comportam sistemas em camadas, o que significa que o cliente pode se conectar a um servidor intermediário. Esse design permite que o servidor REST seja distribuído e, desse modo, comporte balanceamento de carga

6. Opcionalmente, os serviços RESTful podem comportar código sob demanda. Código sob demanda significa que o servidor pode passar um código (que pode ser executado) para o cliente, como algum JavaScript. Esse recurso estende a funcionalidade do cliente REST

## **Solicitações REST**

- Uma solicitação REST inclui vários componentes:

  - **_Endpoint_**

    - Quando você faz uma solicitação para um servidor REST, precisa conhecer o endpoint. O formato do endpoint é um URL. O URL permite que o cliente notifique o servidor sobre os recursos com os quais deseja interagir

  - **_Método_**

    - Cada recurso exposto na API REST comporta um ou mais métodos,que incluem:

    - GET: o servidor é solicitado a recuperar um recurso
    - POST: o servidor é solicitado a criar um novo recurso
    - PUT: o servidor é solicitado a editar ou atualizar um recurso existente
    - DELETE: o servidor é solicitado a excluir um recurso

  - **_Cabeçalho_**

    - O cabeçalho contém os metadados da solicitação

  - **_Corpo da solicitação_**

    - O corpo de uma solicitação são os dados que o cliente envia ao servidor. Uma solicitação POST ou PUT normalmente contém um corpo. Por exemplo, se você invocar um método PUT, é bem provável que precise incluir detalhes na solicitação que indiquem como um recurso existente deve ser atualizado. No entanto, as solicitações GET raramente incluem um corpo

- `Exemplo de solicitação com curl`

  ```bash
  curl -i \
  -x POST \
  -d @file.json \
  -H "Content-Type:application/json" \
  https://www.exemplo.com/algumrecurso
  ```

  No exemplo:

  - –i indica que a resposta deve incluir os cabeçalhos de resposta
  - –X indica o método que você está invocando; por exemplo, POST
  - –d costuma ser usado com os métodos POST ou PUT e fornece os dados (corpo) que estão sendo enviados ao servidor REST. Nesse caso, os dados estão em um arquivo chamado file.json.
  - –H transmite as informações de cabeçalho. O cabeçalho pode conter informações, como o tipo de conteúdo, que uma resposta aceitável incluirá

- Uma solicitação também deve fornecer as credenciais para a autenticação no cabeçalho da solicitação. As credenciais de autenticação não são exibidas no exemplo

- O exemplo de resposta está no formato JavaScript Object Notation (JSON)
