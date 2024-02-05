- [**Containers**](#containers)
  - [**Docker**](#docker)
  - [**Amazon Elastic Container Registry (Amazon ECR)**](#amazon-elastic-container-registry-amazon-ecr)
  - [**Amazon Elastic Container Service (Amazon ECS)**](#amazon-elastic-container-service-amazon-ecs)
  - [**Kubernetes**](#kubernetes)
  - [**Amazon Elastic Kubernetes Service (Amazon EKS)**](#amazon-elastic-kubernetes-service-amazon-eks)
  - [**AWS Fargate**](#aws-fargate)
    - [**Desafios do uso de containers**](#desafios-do-uso-de-containers)

# **Containers**

- Assim como as máquinas virtuais virtualizam o hardware, os contêineres virtualizam um sistema operacional. O Amazon Elastic Compute Cloud (Amazon EC2) executa máquinas virtuais, nas quais um sistema operacional completo, como Linux ou Microsoft Windows, foi virtualizado

- Os contêineres são menores e não contêm um sistema operacional completo. Em vez disso, eles compartilham um sistema operacional virtualizado e são executados como processos de recurso isolados, o que garante implantações rápidas, confiáveis e consistentes

- Os contêineres mantêm tudo o que o software precisa para ser executado, como bibliotecas, ferramentas do sistema, código e tempo de execução

- Os contêineres fornecem consistência ambiental porque o código, as configurações e as dependências do aplicativo são empacotados em um único objeto

- Os contêineres funcionam como um componente básico que pode ser implantado em qualquer recurso de computação, independentemente das configurações de software, sistema operacional ou hardware

- Os contêineres também fornecem isolamento de processos

- Não há dependências compartilhadas nem incompatibilidades porque cada contêiner fica isolado um do outro

- Tudo o que o usuario empacotar localmente como um contêiner será implantado e executado da mesma forma, em testes ou na produção

- O isolamento de processos oferece eficiência operacional. Os contêineres também permitem que o usuario execute vários aplicativos na mesma instância

- O usuario pode especificar a quantidade exata de memória, espaço em disco e unidade central de processamento (CPU) que um contêiner usará em uma instância

- Os contêineres inicializam rapidamente e o espaço reduzido permite que o usuario crie e encerre com rapidez aplicativos ou tarefas encapsulados em um contêiner

- Esses recursos permitem que o usuario aumente ou reduza verticalmente os aplicativos com rapidez

- Os contêineres aumentam a produtividade do desenvolvedor ao remover dependências e conflitos entre os serviços

- Cada componente de aplicativo pode ser dividido em contêineres diferentes que executam um microsserviço distinto

- Os contêineres são isolados entre si. Por isso, o usuario não precisa se preocupar em sincronizar bibliotecas ou dependências para cada serviço

- Os desenvolvedores podem atualizar cada serviço de forma independente porque não há conflitos entre as bibliotecas
- Os contêineres permitem que o usuario controle as versões de seu código de aplicativo e as respectivas dependências
- As imagens de contêiner do Docker têm um arquivo manifesto (Dockerfile) que permite:
  1. Manter e monitorar facilmente as versões de um contêiner
  2. Inspecionar diferenças entre versões
  3. Reverter para versões anteriores

## **Docker**

- O Docker é uma plataforma de software que empacota programas de software (como aplicativos) em unidades chamadas contêineres

- Essa plataforma de software agiliza a criação, o teste e a implantação de aplicativos

- Os contêineres mantêm tudo o que o software precisa para funcionar

- O Docker é instalado em cada servidor que hospedará os contêineres e fornece comandos simples que o usuario pode usar para criar, iniciar ou interromper contêineres

- Os contêineres do Docker incluem apenas o que um aplicativo precisa para ser executado. Portanto, isso permite que os aplicativos sejam movidos entre os ambientes com rapidez e facilidade

- O Docker é mais adequado como solução quando o usuario deseja:

  1. Padronizar ambientes
  2. Reduzir conflitos entre pilhas de linguagem e versões
  3. Usar contêineres como serviço
  4. Executar microsserviços usando implantações de código padronizadas
  5. Exigir portabilidade para o processamento de dados

- O usuario pode optar por gerenciar a infraestrutura do Kubernetes por conta própria executando-a em instâncias do EC2. Ou o usuario pode usar um plano de controle do Kubernetes provisionado e gerenciado automaticamente com o Amazon EKS

- O Amazon EKS facilita a implantação, o gerenciamento e o dimensionamento de aplicativos conteinerizados por meio do Kubernetes. Ele executa a infraestrutura de gerenciamento do Kubernetes para o usuario em várias Zonas de Disponibilidade da AWS para eliminar os pontos únicos de falha

- O Amazon EKS até ao certificado do Kubernetes para que o usuario possa usar todos os plugins e ferramentas existentes de parceiros da AWS e da comunidade do Kubernetes

  - Os aplicativos que são executados em qualquer ambiente padrão do Kubernetes são totalmente compatíveis e podem ser migrados para o Amazon EKS

- `Como o Amazon EKS funciona`:

1. Provisionamento de um cluster do Amazon EKS
   - O Amazon EKS implanta automaticamente nós do plano de controle do Kubernetes
2. Implantação de nós de operador
   - Adiciona o número de nós de operador necessários para seu cluster do Amazon EKS
3. Conecta-se ao Amazon EKS
   - Aponta suas ferramentas preferidas do Kubernetes para o cluster do Amazon EKS
4. Executa os aplicativos do Kubernetes
   - Implanta seus aplicativos do Kubernetes em seu cluster do Amazon EKS

## **Amazon Elastic Container Registry (Amazon ECR)**

## **Amazon Elastic Container Service (Amazon ECS)**

- O Amazon Elastic Container Service (Amazon ECS) é um serviço de gerenciamento de contêineres altamente dimensionável e de alto desempenho compatível com contêineres do Docker

- Ele permite que o usuario execute aplicativos em um cluster gerenciado de instâncias do EC2

- Ele oferece programação flexível

- O Amazon ECS usa um planejador integrado ou usa programador de terceiros, como o Apache Mesos

- O usuario também pode executar a programação de tarefas, serviços ou daemon

- As interfaces de programação de aplicativo do Amazon ECS facilitam a integração de soluções de terceiros, como planejadores, ou apoiam seu processo de entrega de software

- O Amazon ECS executa seus contêineres em sua própria nuvem privada virtual (VPC), o que permite que o usuario use security groups de sua VPC e listas de controle de acesso de rede (ACLs de rede)

  - Nenhum recurso de computação é compartilhado com outros clientes
  - O usuario pode atribuir permissões granulares de acesso a cada um dos contêineres, O usuario pode usar o AWS Identity and Access Management (IAM) para restringir o acesso a cada serviço e configurar quais recursos um contêiner pode acessar
  - Esses recursos de isolamento configuráveis do Amazon ECS foram projetados para ajudar o usuario a criar aplicativos seguros e confiáveis

- O usuario pode usar o Amazon ECS para iniciar dezenas (ou dezenas de milhares) de contêineres do Docker em segundos sem complexidades adicionais

- As tarefas do Amazon ECS são definidas por meio de um modelo declarativo JavaScript Object Notation (JSON) denominado definição de tarefa. Com esse modelo, o usuario pode especificar um ou mais contêineres necessários para sua tarefa, incluindo:

  1. O repositório e a imagem do Docker
  2. Requisitos de memória e CPU
  3. Volumes de dados compartilhados
  4. Como os contêineres são vinculados entre si

- O usuario pode executar quantas tarefas quiser com base em uma única definição de tarefa, que o usuario registra com o serviço

- O Amazon Elastic Container Registry (Amazon ECR) é um registro de contêiner do Docker totalmente gerenciado

- Com o Amazon ECR, os desenvolvedores podem armazenar, gerenciar e implantar facilmente imagens de contêiner do Docker

- Como ele e é integrado ao Amazon ECS, o usuario pode armazenar, executar e gerenciar imagens de contêiner para aplicativos executados no Amazon ECS. Basta especificar o repositório do Amazon ECR em sua definição de tarefa que o Amazon ECS recupera as imagens apropriadas para seus aplicativos

- O Amazon ECR é compatível com a API HTTP do Docker Registry versão 2, que permite que o usuario interaja com o Amazon ECR usando comandos da CLI do Docker ou suas ferramentas preferidas do Docker. Assim, o usuario pode manter seu fluxo de trabalho de desenvolvimento atual

- O Amazon ECR pode ser acessado de qualquer ambiente do Docker, seja na nuvem, no local ou em sua máquina local

- `O Amazon ECR armazena suas imagens de contêiner no Amazon Simple Storage Service (Amazon S3)` para aproveitar a alta disponibilidade e durabilidade do Amazon S3

- O usuario pode definir e organizar repositórios em seu registro do Amazon ECR usando namespaces. Desse modo, o usuario pode organizar seus repositórios com base nos fluxos de trabalho existentes de sua equipe

- É também possível definir as ações de API que outro usuário pode executar em seu repositório. Dessa forma, o usuario pode compartilhar facilmente seus repositórios com diferentes usuários e contas da AWS

- O Amazon ECR usa o AWS Identity and Access Management (IAM) para controle de acesso

  - Isso permite que o usuario controle quem e o quê (por exemplo, instâncias do EC2) podem acessar suas imagens de contêiner por meio de políticas definidas

- O usuario pode transferir suas imagens de contêiner do e para Amazon ECS via HTTPS. Suas imagens também são automaticamente criptografadas em repouso usando a criptografia do lado do servidor do Amazon S3

- Por fim, o Amazon ECR também é compatível com integrações de terceiros

-

## **Kubernetes**

- O Kubernetes é um software de orquestração de contêineres de código aberto. Ele permite que o usuario implante e gerencie aplicativos conteinerizados em escala

- Com o Kubernetes, o usuario pode executar qualquer tipo de aplicativo conteinerizado usando o mesmo conjunto de ferramentas no local e na nuvem

- O Kubernetes funciona por meio do gerenciamento de um cluster de instâncias de computação

- Ele executa o agendamento de contêineres no cluster com base no local em que os recursos de computação estão disponíveis. Esse agendamento também leva em conta os requisitos de recurso de cada contêiner que o usuario executará para atender aos aplicativos

- Os contêineres são executados em agrupamentos lógicos denominados pods, e o usuario pode executar e dimensionar um ou vários contêineres ao mesmo tempo como um pod

- O software de plano de controle do Kubernetes decide quando e onde executar seus pods. Ele gerencia o roteamento de tráfego e dimensiona seus pods com base na utilização ou em outras métricas definidas por o usuario

- O Kubernetes inicia automaticamente os pods em seu cluster com base em seus requisitos de recurso. Ele reiniciará automaticamente os pods se eles, ou as instâncias em que estão em execução, falharem

- Cada pod recebe um endereço IP e um único Domain Name System (DNS)

- O Kubernetes usa esse nome para conectar seus serviços entre si e com o tráfego externo

- O Kubernetes permite que o usuario defina aplicativos conteinerizados complexos e os execute em escala em um cluster de servidores

- Os aplicativos podem ser movidos de forma transparente de máquinas locais de desenvolvimento para implantações de produção na nuvem por meio das mesmas ferramentas operacionais

- Uma das principais vantagens do Kubernetes é que o usuario pode usá-lo para executar seus aplicativos baseados em contêiner em qualquer lugar sem precisar alterar as ferramentas operacionais

- Como é um projeto de código aberto, é fácil adicionar novas funcionalidades ao Kubernetes
  - Uma grande comunidade de desenvolvedores e empresas cria extensões, integrações e plugins que ajudam os usuários do Kubernetes a fazer mais

## **Amazon Elastic Kubernetes Service (Amazon EKS)**

## **AWS Fargate**

- O AWS Fargate é uma tecnologia para o Amazon ECS que permite que o usuario execute contêineres sem precisar gerenciar servidores nem clusters

- O Amazon ECS pode usar contêineres provisionados pelo Fargate para dimensionar, balancear a carga e gerenciar automaticamente o agendamento de seus contêineres para oferecer disponibilidade
  - Esse método facilita a criação e operação de aplicativos conteinerizados
  - Ele elimina a necessidade de escolher tipos de servidor e de decidir quando dimensionar os clusters ou otimizar o agrupamento de clusters
- Todos os clusters do Amazon ECS são heterogêneos

- O usuario pode executar tarefas do Fargate e do Amazon ECS no mesmo cluster

- Os recursos do Fargate estão disponíveis nativamente no Amazon ECS

- O Fargate é disponibilizado com 50 combinações diferentes de CPU e memória para atender às necessidades de seus aplicativos

  - O usuario pode usar 2 GB por vCPU ou até 8 GB por vCPU para várias configurações
  - O usuario pode atender aos seus requisitos de carga de trabalho de uso geral, computação ou otimização de memória

- O usuario paga pelo tamanho da tarefa e apenas pelo tempo durante o qual os recursos são consumidos

  - `O preço da CPU e da memória é cobrado por segundo. A cobrança mínima é de um minuto`

- Primeiro, o Amazon ECS lida com o agendamento e a orquestração indicadas pela definição de tarefa criada pelo usuário

- Quando uma definição de tarefa é executada, o Amazon ECS a expõe como tarefa

- Quando o Fargate é usado, o titular da conta da AWS, ou o usuário, continua gerenciando esses componentes. O que muda é o fato de que o Fargate gerencia o mecanismo de colocação, o gerenciamento de clusters e a infraestrutura, bem como agentes, imagens Amazon Machine Image (AMIs) etc

- O Amazon ECS tem dois modos:

  1. Tipo de inicialização do EC2
  2. Tipo de inicialização do AWS Fargate

- Com o tipo de inicialização do Fargate, suas tarefas são mínimas

  - O usuario só precisa empacotar seu aplicativo em contêineres, especificar os requisitos de CPU e memória, definir Políticas de IAM e de redes e iniciar o aplicativo
  - O Fargate gerencia o scaling e infraestrutura necessários para executar seus contêineres de uma forma altamente disponível

- A decisão sobre executar contêineres Fargate ou Amazon EC2 dependerá do tempo de execução

- Nenhum plugin adicional é necessário para executar seus contêineres como Fargate

### **Desafios do uso de containers**

- Tendo em vista as várias vantagens oferecidas pelos contêineres, esses benefícios também apresentam alguns desafios, como
  - O uso de contêineres está aumentando rapidamente
  - A expansão de contêineres ocorre quando o número de contêineres em sua infraestrutura aumenta significativamente e a distribuição de contêineres não é gerenciada corretamente
  - Outro problema é o monitoramento de diferenças de versão de um contêiner
  - Propriedade do contêiner
- O Amazon ECS permite controlar a colocação de tarefas em diferentes instâncias de contêiner por meio da construção de clusters e execuções direcionadas

- Essa estrutura fornece controle de versão e propriedade sobre tarefas específicas

- O uso de um repositório do Amazon Elastic Container Registry (Amazon ECR) nas definições de tarefas permite anexar o `AmazonEC2ContainerServiceForec2Role` às suas instâncias. Desse modo, o Amazon EC2 pode recuperar as imagens apropriadas para os aplicativos que são gerenciados com repositórios do Amazon ECR em que os proprietários e o controle de versões são mantidos

- Alguns outros desafios:

- Podem ocorrer problemas de empacotamento do compartimento quando você tem pouco espaço disponível nos hosts em que os contêineres podem ser executados

  - Você precisa escolher a melhor colocação de cada contêiner para maximizar o desempenho do aplicativo

- Você também pode executar contêineres que não são mais necessários, muitas vezes chamados de contêineres zumbi

  - Contêiner zumbi é um contêiner do Docker que se recusa a parar quando um comando é emitido
  - Os contêineres normais são encerrados normalmente quando recebem um comando -stop de uma console ou API

- Pode ser que você experimente o problema de ter os contêineres de que precisa, mas que não estão mais em execução; eles são conhecidos como contêineres que desaparecem
