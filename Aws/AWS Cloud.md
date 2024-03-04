- [**AWS**](#aws)
  - [**AWS Cloud Adoption Framework (AWS CAF)**](#aws-cloud-adoption-framework-aws-caf)
- [**Infraestrutura AWS**](#infraestrutura-aws)
  - [**Zonas de disponibilidade** (Região conjunta de data centers)](#zonas-de-disponibilidade-região-conjunta-de-data-centers)
  - [**Regiões AWS** (Região conjunta de zonas de disponibilidade)](#regiões-aws-região-conjunta-de-zonas-de-disponibilidade)
  - [**Pontos de presença** (Rede de entrega de conteudo)](#pontos-de-presença-rede-de-entrega-de-conteudo)
- [**Well archtected design**](#well-archtected-design)
  - [**Ambiente tradicional VS Ambiente de nuvem**](#ambiente-tradicional-vs-ambiente-de-nuvem)
    - [**_Ambiente tradicional_**](#ambiente-tradicional)
    - [**_Ambiente em nuvem_**](#ambiente-em-nuvem)
- [**Modelo de responsabilidade compartilhada**](#modelo-de-responsabilidade-compartilhada)
  - [**Responsabilidade do cliente**](#responsabilidade-do-cliente)
    - [**`Segurança na nuvem`** (Responsabilidade do cliente)](#segurança-na-nuvem-responsabilidade-do-cliente)
  - [**Responsabilidade da AWS**](#responsabilidade-da-aws)
    - [**`Segurança da nuvem`** (Responsabilidade da AWS)](#segurança-da-nuvem-responsabilidade-da-aws)
  - [**Caracteristicas do serviço e responsabilidade de segurança**](#caracteristicas-do-serviço-e-responsabilidade-de-segurança)
- [**Preços**](#preços)
  - [**3 fatores fundamentais de custos na AWS**](#3-fatores-fundamentais-de-custos-na-aws)
  - [**Caracteristicas da precificação na AWS**](#caracteristicas-da-precificação-na-aws)
  - [**Gerenciamento de custos**](#gerenciamento-de-custos)
  - [**Painel de faturamento AWS**](#painel-de-faturamento-aws)
  - [**AWS Bills**](#aws-bills)
  - [**AWS Cost Explorer**](#aws-cost-explorer)
  - [**Orçamentos da AWS (AWS Budgets)**](#orçamentos-da-aws-aws-budgets)
  - [**AWS Cost Usage Report**](#aws-cost-usage-report)
  - [**Integração com Cloudwatch**](#integração-com-cloudwatch)
  - [**Redução de custos**](#redução-de-custos)
  - [**Uso do Trusted advisor para reduzir custos**](#uso-do-trusted-advisor-para-reduzir-custos)
- [**Confiabilidade e alta disponibilidade**](#confiabilidade-e-alta-disponibilidade)
  - [**Confiabilidade**](#confiabilidade)
  - [**Confiabilidade VS Disponibilidade**](#confiabilidade-vs-disponibilidade)
  - [**Disponibilidade**](#disponibilidade)
- [**Programa de conformidade**](#programa-de-conformidade)
  - [**Conformidade da AWS**](#conformidade-da-aws)
    - [1. **Gerenciamento de riscos empresariais**](#1-gerenciamento-de-riscos-empresariais)
    - [2. **Ambiente de controle e automação**](#2-ambiente-de-controle-e-automação)
    - [3. **Segurança da informação**](#3-segurança-da-informação)
  - [**Conformidade do cliente**](#conformidade-do-cliente)
- [**Recursos de segurança**](#recursos-de-segurança)
- [**Praticas recomendadas**](#praticas-recomendadas)
  - [**Não use o usario raiz da conta**](#não-use-o-usario-raiz-da-conta)
  - [**Autenticação de 2 fatores - MFA**](#autenticação-de-2-fatores---mfa)
  - [**Ativar o AWS Cloudtrail**](#ativar-o-aws-cloudtrail)
  - [**Ativar um relatorio de faturamento, como o AWS Cost and Usage Report**](#ativar-um-relatorio-de-faturamento-como-o-aws-cost-and-usage-report)
  - [**Outras praticas recomendadas**](#outras-praticas-recomendadas)
- [**CloudFormation e ferramentas Dev**](#cloudformation-e-ferramentas-dev)
  - [**AWS Tools for PowerShell**](#aws-tools-for-powershell)
    - [**_Comandos powershell_**](#comandos-powershell)
  - [**AWS CloudFormation**](#aws-cloudformation)
    - [**Como funciona**](#como-funciona)
    - [**Projeto de modelos**](#projeto-de-modelos)
  - [**Ops Works**](#ops-works)
- [**Visão geral de banco de dados**](#visão-geral-de-banco-de-dados)
  - [**Desafios de executar um banco de dados relacional no local**](#desafios-de-executar-um-banco-de-dados-relacional-no-local)
  - [**Vantagens dos bancos de dados na AWS**](#vantagens-dos-bancos-de-dados-na-aws)
  - [**Escolha do banco de dados**](#escolha-do-banco-de-dados)
  - [**Tipos de serviço**](#tipos-de-serviço)
    - [**SQL**](#sql)
    - [**NoSQL**](#nosql)
  - [**Bancos gerenciados VS Bancos não gerenciados**](#bancos-gerenciados-vs-bancos-não-gerenciados)
    - [**Não gerenciados**](#não-gerenciados)
    - [**Gerenciados**](#gerenciados)
  - [**Casos de uso**](#casos-de-uso)
  - [**Recomendações**](#recomendações)
- [**Visão geral de cloud storage**](#visão-geral-de-cloud-storage)
  - [**Visão geral de armazenamento**](#visão-geral-de-armazenamento)
  - [**Como o armazenamento na nuvem funciona?**](#como-o-armazenamento-na-nuvem-funciona)
  - [**Serviços de armazenamento**](#serviços-de-armazenamento)
  - [**Tipos de armazenamento**](#tipos-de-armazenamento)
  - [**Casos de uso**](#casos-de-uso-1)
- [**Serviços - Well architected framework**](#serviços---well-architected-framework)
  - [**_1. Excelência operacional_**](#1-excelência-operacional)
    - [**_Princípios de design de excelencia operacional_**](#princípios-de-design-de-excelencia-operacional)
  - [**_2. Segurança_**](#2-segurança)
    - [**_Princípios de design de segurança na nuvem_**](#princípios-de-design-de-segurança-na-nuvem)
  - [**_3. Confiabilidade_**](#3-confiabilidade)
    - [**_Princípios de design de confiabilidade_**](#princípios-de-design-de-confiabilidade)
  - [**_4. Eficiência de desempenho_**](#4-eficiência-de-desempenho)
    - [**_Princípios de design de eficiencia de desempenho_**](#princípios-de-design-de-eficiencia-de-desempenho)
  - [**_5. Otimização de custos_**](#5-otimização-de-custos)
    - [**_Princípios de design de otimização de custos_**](#princípios-de-design-de-otimização-de-custos)
  - [**_6. Sustentabilidade_**](#6-sustentabilidade)
    - [**_Princípios de design de sustentabilidade_**](#princípios-de-design-de-sustentabilidade)
- [**Serviços - System manager**](#serviços---system-manager)
  - [**Recursos do System Manager**](#recursos-do-system-manager)
- [**Serviços - AWS Config**](#serviços---aws-config)
  - [**Como funciona?**](#como-funciona-1)
- [**Serviços - Cloudwatch**](#serviços---cloudwatch)
  - [**Metricas**](#metricas)
  - [**Componentes de metrica**](#componentes-de-metrica)
  - [**Paineis automaticos**](#paineis-automaticos)
  - [**Cloudwatch events**](#cloudwatch-events)
  - [**Cloudwatch Logs**](#cloudwatch-logs)
- [**Serviços - Trusted advisor**](#serviços---trusted-advisor)
  - [**Recursos do Trusted Advisor**](#recursos-do-trusted-advisor)
- [**Serviços - Amazon Organizations**](#serviços---amazon-organizations)
  - [**Segurança com o Organizations**](#segurança-com-o-organizations)
  - [**Configuração do Organizations**](#configuração-do-organizations)
  - [**Regras de nomeclatura**](#regras-de-nomeclatura)
  - [**Acesso ao Organizations**](#acesso-ao-organizations)
- [**Serviços - Amazon IAM**](#serviços---amazon-iam)
  - [**Tipos de credenciais de segurança**](#tipos-de-credenciais-de-segurança)
  - [**Multi-factor authentication (MFA)**](#multi-factor-authentication-mfa)
  - [**Funcionamento do IAM**](#funcionamento-do-iam)
  - [**Grupos IAM**](#grupos-iam)
  - [**Funções do IAM**](#funções-do-iam)
  - [**Tipos de politica do IAM**](#tipos-de-politica-do-iam)
  - [**_Politicas baseadas em identidade_**](#politicas-baseadas-em-identidade)
  - [**_Politicas baseadas em recursos_**](#politicas-baseadas-em-recursos)
- [**Serviços - Amazon VPC**](#serviços---amazon-vpc)
  - [**Comando CLI para criar uma VPC**](#comando-cli-para-criar-uma-vpc)
  - [**Endereços de rede reservados para AWS**](#endereços-de-rede-reservados-para-aws)
  - [**Recurso de atribuição automática de sub-rede IP pública**](#recurso-de-atribuição-automática-de-sub-rede-ip-pública)
  - [**Tabela de rotas (ACL)**](#tabela-de-rotas-acl)
  - [**Interface de rede elastica(NIC)**](#interface-de-rede-elasticanic)
  - [**VPC Padrão**](#vpc-padrão)
  - [**DNS**](#dns)
  - [**Opções de conectividade**](#opções-de-conectividade)
  - [**Network address translation (NAT)**](#network-address-translation-nat)
  - [**Caracteristicas do gateway NAT**](#caracteristicas-do-gateway-nat)
  - [**Emparelhamento de VPC (Peering)**](#emparelhamento-de-vpc-peering)
  - [**Como fazer**](#como-fazer)
  - [**Comando CLI para conexão de emparelhamento**](#comando-cli-para-conexão-de-emparelhamento)
  - [**Limitações**](#limitações)
  - [**AWS Direct Connect plus VPN**](#aws-direct-connect-plus-vpn)
  - [**AWS VPN CloudHub**](#aws-vpn-cloudhub)
  - [**AWS Site-to-site VPN**](#aws-site-to-site-vpn)
  - [**VPC endpoints (Private Link)**](#vpc-endpoints-private-link)
  - [**AWS Transit gateway**](#aws-transit-gateway)
  - [**Segurança de rede**](#segurança-de-rede)
  - [**Host Bastion**](#host-bastion)
  - [**Solução de problemas de rede mais comuns**](#solução-de-problemas-de-rede-mais-comuns)
  - [**Problemas ao conectar com o EC2**](#problemas-ao-conectar-com-o-ec2)
  - [**Problemas ao conectar com o EC2 pela internet**](#problemas-ao-conectar-com-o-ec2-pela-internet)
  - [**Problema de conexão por SSH**](#problema-de-conexão-por-ssh)
  - [**Problema com NAT**](#problema-com-nat)
  - [**Problemas com Peering**](#problemas-com-peering)
- [**Serviços - Security groups**](#serviços---security-groups)
- [**Serviços - Route 53**](#serviços---route-53)
  - [**DNS e elastic load balancer**](#dns-e-elastic-load-balancer)
  - [**Politicas de roteamento**](#politicas-de-roteamento)
- [**Serviços - Elastic Load balancing**](#serviços---elastic-load-balancing)
  - [**Tipos de balanceadores de carga**](#tipos-de-balanceadores-de-carga)
  - [**_Application Load Balancer_**](#application-load-balancer)
  - [**_Network Load Balancer_**](#network-load-balancer)
  - [**_Classic Load Balancer_**](#classic-load-balancer)
  - [**Listeners**](#listeners)
  - [**Como funciona**](#como-funciona-2)
- [**Serviços - CloudFront**](#serviços---cloudfront)
  - [**Custos**](#custos)
- [**Serviços - Amazon Elastic Compute Cloud (EC2)**](#serviços---amazon-elastic-compute-cloud-ec2)
  - [**9 Passos para implantar um instancia EC2**](#9-passos-para-implantar-um-instancia-ec2)
  - [1. **_Selecionar uma AMI_**](#1-selecionar-uma-ami)
  - [2. **_Tipo de instância_**](#2-tipo-de-instância)
  - [3. **_Configurações de rede_**](#3-configurações-de-rede)
  - [4. **_Função do IAM (Opcional)_**](#4-função-do-iam-opcional)
  - [5. **_Dados do usuário (Opcional)_**](#5-dados-do-usuário-opcional)
  - [6. **_Opções de armazenamento_**](#6-opções-de-armazenamento)
  - [7. **_Tags_**](#7-tags)
  - [8. **_Security group_**](#8-security-group)
  - [9. **_Par de chaves_**](#9-par-de-chaves)
  - [**Ciclo de vida de uma instancia**](#ciclo-de-vida-de-uma-instancia)
  - [**Status das instancias**](#status-das-instancias)
  - [**Modelos de preço**](#modelos-de-preço)
  - [**Como funciona**](#como-funciona-3)
  - [**EC2 Auto Scaling**](#ec2-auto-scaling)
  - [**_Escalabilidade_**](#escalabilidade)
  - [**_Dimensionamento com base em um cronograma_**](#dimensionamento-com-base-em-um-cronograma)
  - [**_Dimensionamento dinâmico_**](#dimensionamento-dinâmico)
  - [**Estrategias de construção de AMIs**](#estrategias-de-construção-de-amis)
  - [**Criação de AMIs**](#criação-de-amis)
  - [**Criando AMIs Windows**](#criando-amis-windows)
  - [**Copiando AMIs**](#copiando-amis)
  - [**Modelo de inicialização EC2**](#modelo-de-inicialização-ec2)
- [**Serviços - Elastic Bean Stalk**](#serviços---elastic-bean-stalk)
- [**Serviços - Lambda**](#serviços---lambda)
  - [**Como implementar**](#como-implementar)
  - [**Camadas do lambda**](#camadas-do-lambda)
  - [**Limites do lambda**](#limites-do-lambda)
- [**Serviços - Api Gateway**](#serviços---api-gateway)
- [**Serviços - CloudTrail**](#serviços---cloudtrail)
  - [**Praticas recomendadas**](#praticas-recomendadas-1)
  - [**Configuração de trilha CloudTrail**](#configuração-de-trilha-cloudtrail)
  - [**Monitoramento e segurança**](#monitoramento-e-segurança)
- [**Serviços - Amazon S3**](#serviços---amazon-s3)
  - [**Vantagens do S3**](#vantagens-do-s3)
  - [**Classes de armazenamento**](#classes-de-armazenamento)
  - [**Preços**](#preços-1)
  - [**Fatores que estimam o custo**](#fatores-que-estimam-o-custo)
  - [**Hospedagem de site estatico no S3**](#hospedagem-de-site-estatico-no-s3)
  - [**_Dominio_**](#dominio)
  - [**Controle de versão**](#controle-de-versão)
  - [**Politicas de acesso**](#politicas-de-acesso)
  - [**Bloqueio de objetos**](#bloqueio-de-objetos)
  - [**Notificações de eventos S3**](#notificações-de-eventos-s3)
  - [**Amazon S3 e CLI**](#amazon-s3-e-cli)
  - [_Comandos gerais_](#comandos-gerais)
  - [_Criar um objeto com uma classe de armazenamento específica_](#criar-um-objeto-com-uma-classe-de-armazenamento-específica)
  - [_Comando S3 API_](#comando-s3-api)
  - [**Recursos adicionais do S3**](#recursos-adicionais-do-s3)
  - [**Gerenciamento do ciclo de vida de objetos**](#gerenciamento-do-ciclo-de-vida-de-objetos)
- [**Serviços - Amazon Glacier**](#serviços---amazon-glacier)
  - [**Acesso**](#acesso)
  - [**Como funciona**](#como-funciona-4)
  - [**Acesso**](#acesso-1)
  - [**Politicas de ciclo de vida**](#politicas-de-ciclo-de-vida)
  - [**Criptografia**](#criptografia)
  - [**Segurança**](#segurança)
  - [**Comparação entre S3 e Glacier**](#comparação-entre-s3-e-glacier)
- [**Serviços - Amazon RDS**](#serviços---amazon-rds)
  - [**Alta disponibilidade**](#alta-disponibilidade)
  - [**Replicas de leitura**](#replicas-de-leitura)
  - [**Scaling do RDS**](#scaling-do-rds)
  - [**Notas sobre o RDS**](#notas-sobre-o-rds)
  - [**Comandos CLI para o RDS**](#comandos-cli-para-o-rds)
- [**Serviços - Amazon Aurora**](#serviços---amazon-aurora)
  - [**Volumes Cluster do Aurora**](#volumes-cluster-do-aurora)
  - [**Casos de uso**](#casos-de-uso-2)
  - [**Recuperação de falhas**](#recuperação-de-falhas)
- [**Serviços - Amazon Redshift**](#serviços---amazon-redshift)
  - [**Data warehouse**](#data-warehouse)
  - [**Processamento paralelo**](#processamento-paralelo)
  - [**Casos de uso**](#casos-de-uso-3)
- [**Serviços - Amazon Athena**](#serviços---amazon-athena)
- [**Serviços - DynamoDB**](#serviços---dynamodb)
  - [**Benefícios e Funcionamento**](#benefícios-e-funcionamento)
  - [**Conceitos basicos**](#conceitos-basicos)
- [**Serviços - Amazon Elastic Block Store**](#serviços---amazon-elastic-block-store)
  - [**Tipos de volume do EBS**](#tipos-de-volume-do-ebs)
  - [**Snapshots**](#snapshots)
  - [**Ciclo de vida do snapshot**](#ciclo-de-vida-do-snapshot)
  - [**Casos de uso**](#casos-de-uso-4)
  - [**Comandos CLI**](#comandos-cli)
- [**Serviços - Elastic file system**](#serviços---elastic-file-system)
  - [**Modo de desempenho**](#modo-de-desempenho)
  - [**Classe de armazenamento**](#classe-de-armazenamento)
  - [**Etapas para configurar um sistema de arquivos do Amazon EFS e torná-lo acessível a uma instância do EC2**](#etapas-para-configurar-um-sistema-de-arquivos-do-amazon-efs-e-torná-lo-acessível-a-uma-instância-do-ec2)
  - [**Etapas de implantação**](#etapas-de-implantação)
  - [**Recursos do Amazon EFS**](#recursos-do-amazon-efs)
  - [**Casos de uso**](#casos-de-uso-5)
- [**Serviços - Armazenamento de instancias**](#serviços---armazenamento-de-instancias)
  - [**Volumes**](#volumes)
  - [**Casos de uso**](#casos-de-uso-6)
- [**Serviços - Amazon Storage Gateway**](#serviços---amazon-storage-gateway)
  - [**Como o Gateway de armazenamento faz interface com a Nuvem AWS**](#como-o-gateway-de-armazenamento-faz-interface-com-a-nuvem-aws)
  - [**Gateway de volume**](#gateway-de-volume)
  - [**Gateway de fita**](#gateway-de-fita)
  - [**Casos de uso**](#casos-de-uso-7)
- [**Serviços - Database migration**](#serviços---database-migration)
  - [**Migração de dados**](#migração-de-dados)
  - [**Tipos de migrações de banco de dados**](#tipos-de-migrações-de-banco-de-dados)
  - [**Como funciona**](#como-funciona-5)
  - [**Ferramenta de conversão de Schema ou AWS Schema Conversion Tool(AWS SCT)**](#ferramenta-de-conversão-de-schema-ou-aws-schema-conversion-toolaws-sct)
  - [**Replicação de bancos**](#replicação-de-bancos)
  - [**Consolidação de dados**](#consolidação-de-dados)
  - [**Arquitetura do DMS**](#arquitetura-do-dms)
- [**Serviços - AWS Step functions**](#serviços---aws-step-functions)
  - [**Como funciona**](#como-funciona-6)
  - [**Ciclo de vida**](#ciclo-de-vida)
  - [**Casos de uso**](#casos-de-uso-8)
- [**Serviços - Containers na AWS**](#serviços---containers-na-aws)
  - [**Containers**](#containers)
  - [**Docker**](#docker)
  - [**Amazon Elastic Container Registry (Amazon ECR)**](#amazon-elastic-container-registry-amazon-ecr)
  - [**Amazon Elastic Container Service (Amazon ECS)**](#amazon-elastic-container-service-amazon-ecs)
  - [**Kubernetes**](#kubernetes)
  - [**Amazon Elastic Kubernetes Service (Amazon EKS)**](#amazon-elastic-kubernetes-service-amazon-eks)
  - [**AWS Fargate**](#aws-fargate)
  - [**Desafios do uso de containers**](#desafios-do-uso-de-containers)

# **AWS**

A aws é um provedor de serviços web. Um serviço da web é qualquer parte do software disponibilizada pela Internet. Ele usa um formato padronizado, como XML ou JavaScript Object Notation (JSON), para solicitação e resposta de uma interação de uma interface de programação de aplicativo (API).

Existem 3 formas de interagir com a AWS:

1. **Console Web**: Interface gráfica
2. **AWS Command Line Interface (CLI)**: Interface de linha de comando
3. **Amazon SDKs, APIs e bibliotecas**: Kits de programação de interface (API's), bibliotecas e SDK's

## **AWS Cloud Adoption Framework (AWS CAF)**

- O AWS CAF oferece orientações e práticas recomendadas para ajudar as organizações a criar uma abordagem abrangente de computação em nuvem em toda a organização e durante todo o ciclo de vida da TI para acelerar a adoção bem-sucedida da nuvem
- O AWS CAF está estruturado em torno de seis perspectivas. Essas perspectivas consistem em conjuntos de recursos

  1. **_`Negocios`_** -> Recurso empresarial

  - É necessário garantir que a TI esteja alinhada com as necessidades empresariais e que os investimentos em TI possam ser relacionados a resultados de negócios demonstráveis
  - Principais recursos em foco são: `finanças de TI, estrategia de TI, realização de beneficios, gerenciamento de riscos empresariais`

  2. **_`Pessoas`_** -> Recurso empresarial

  - É necessário priorizar o treinamento, a equipe e as mudanças organizacionais para criar uma organização ágil
  - Principais recursos em foco são: `gerenciamento de recursos, gerenciamento de incentivos, gerenciamento de carreiras, gerenciamento de treinamento, gerenciamento de mudanças organizacionais`

  3. **_`Governança`_** -> Recurso empresarial

  - É necessário garantir que as habilidades e os processos alinhem a estratégia e as metas de TI com a estratégia e as metas empresariais para que a organização possa maximizar o valor comercial de seu investimento em TI e minimizar os riscos empresariais
  - Principais recursos em foco são: `gerenciamento de portifolio, gerenciamento de programas e projetos, medição de desempenho dos negocios, gerenciamento de licença`

  4. **_`Plataforma`_** -> Recurso tecnico

  - É necessário compreender e comunicar a natureza dos sistemas de TI e as relações entre eles. Devemos ter capacidade para descrever a arquitetura do ambiente do estado de destino em detalhes
  - Principais recursos em foco são: `provisionamento de computação, provisionamento de rede, posicionamento de armazenamento, provisionamento de banco de dados, arquitetura de sistemas e soluções, desenvolvimento de aplicativos`

  5. **_`Segurança`_** -> Recurso tecnico

  - É necessário garantir que a organização atenda aos seus objetivos de segurança
  - Principais recursos em foco são: `gerenciamento de identidade de acesso, controle de detecção, segurança da infraestrutura, proteção de dados, resposta a incidentes`

  6. **_`Operações`_** -> Recurso tecnico

  - Alinhar e apoiar as operações da empresa e definimos como os negócios serão conduzidos a cada dia, trimestre e ano
  - Principais recursos em foco são: `Monitoramento de serviços, monitoramento de desempenho de aplicativos, gerenciamento de inventario de recursos, gerenciamento de versões ou alterações, relatorios e analise, continuidade dos negocios ou recuperação de desastres, catalogo dos serviços de TI`

- A responsabilidade sobre os recursos fica a cargo dos **`stakeholders`**

# **Infraestrutura AWS**

- Os data centers são a base da infraestrutura da AWS. Data center é um local onde os dados físicos reais residem e o processamento de dados ocorre. Os data centers da AWS são construídos em clusters em várias Regiões globais

- Os data centers são projetados com segurança, com vários fatores em mente

- A Infraestrutura global da AWS foi projetada e construída para oferecer um ambiente de computação em nuvem **`flexível, confiável, dimensionável e seguro com desempenho de rede global de alta qualidade e tolerante a falhas`**.
- Cada local é cuidadosamente avaliado para mitigar os riscos ambientais
- Os data centers têm um design redundante que prevê e tolera falhas enquanto mantém os níveis de serviço
- Para garantir a disponibilidade, os backups dos componentes essenciais do sistema são feitos em vários locais isolados, conhecidos como Zonas de Disponibilidade
- Para garantir a capacidade, AWS monitora continuamente o uso dos serviços para implantar uma infraestrutura compatível com os compromissos e os requisitos de disponibilidade
- Os locais dos data centers não são divulgados e todo o acesso a eles é restrito
- Em caso de falha, os processos automatizados desviam o tráfego de dados do cliente para fora da área afetada
- Um único data center normalmente abriga de 50.000 a 80.000 servidores físicos. Todos os data centers ficam on-line e atendem aos clientes; nenhum data center fica off-line

## **Zonas de disponibilidade** (Região conjunta de data centers)

- Cada Zona de Disponibilidade é composta de um ou mais data centers
- Projetada para isolamento de falhas
- Interconectada com outras Zonas de Disponibilidade por meio de links privados de alta velocidade
- O usuario escolhe suas Zonas de Disponibilidade
- A AWS recomenda replicar entre Zonas de Disponibilidade para fins de resiliência

## **Regiões AWS** (Região conjunta de zonas de disponibilidade)

- Uma Região da AWS é uma área geográfica
- A AWS tem 24 regiões ao redor do mundo
- Cada Região é composta de duas ou mais Zonas de Disponibilidade
- O usuario habilita e controla a replicação de dados entre Regiões
- A comunicação entre as Regiões usa a estrutura de conexões de rede da infraestrutura da AWS

o usuario deve considerar alguns fatores ao selecionar a Região ou as Regiões ideais para armazenar dados e usar os serviços da AWS.

- Uma consideração essencial é a **_governança de dados e os requisitos legais_**. As leis locais podem exigir que determinadas informações sejam mantidas dentro de limites geográficos. Essas leis podem restringir as Regiões onde é possível oferecer conteúdo ou serviços.
- Se todos os demais fatores permanecerem inalterados, será desejável executar os aplicativos e armazenar os dados em uma Região que esteja mais próxima possível do usuário e dos sistemas que os acessarão. Isso ajudará o usuario a reduzir a **`latência`**. O CloudPing é um site que pode ser usado para testar a latência entre sua localização e em todas as Regiões AWS.
- Lembre-se de que nem todos os serviços estão disponíveis em todas as Regiões. Para saber mais, consulte a página AWS Regional Services.
- Por fim, **`há alguma variação no custo da execução de serviços, que pode depender da Região escolhida`**.

## **Pontos de presença** (Rede de entrega de conteudo)

- A AWS fornece uma rede global de 216 locais de pontos de presença.
- Consiste em 205 locais de borda e 11 caches de borda regionais
- Usado com o Amazon CloudFront, uma rede de entrega de conteúdo (CDN) distribui conteúdo aos usuários finais com latência reduzida
- Caches de borda regionais usados para conteúdo com acesso pouco frequente

# **Well archtected design**

- O Well-Architected identifica um conjunto de princípios gerais de design para simplificar projetos de boa qualidade na nuvem
  1. Parar de adivinhar suas necessidades de capacidade
  2. Testar os sistemas em escala de produção
  3. Automatizar para facilitar experimentos de arquitetura
  4. Permitir que as arquiteturas evoluam
  5. Impulsionar arquiteturas orientadas por dados
  6. Aprimorar por meio de simulações

## **Ambiente tradicional VS Ambiente de nuvem**

### **_Ambiente tradicional_**

- `Capacidade`
  - Estimar a capacidade antes de implantar um sistema, pode resultar recursos caros ociosos
  - Lidar com as implicações da capacidade limitada no desempenho
- `Testes`
  - Normalmente, a criação de um ambiente duplicado apenas para testes envolve um custo proibitivo
  - A maioria dos ambientes de teste não é testada em níveis reais de demanda de produção
- `Automação`
  - Os ambientes locais têm estruturas e componentes separados que exigem mais trabalho para automatizar (não existe API comum para todas as partes da infraestrutura)
- `Evolução`
  - Muitas vezes, as decisões sobre arquitetura são implementadas como eventos estáticos e únicos
  - Um sistema pode ter poucas versões principais durante sua vida útil
  - As decisões tomadas por uma empresa em sua fase inicial podem impedi-la de cumprir novos requisitos empresariais à medida que ela muda
- `Orientada por dados`
  - Muitas vezes, as decisões sobre arquitetura são tomadas de acordo com padrões organizacionais
  - Geralmente, não é possível gerar conjuntos de dados
  - É provável que o usuario use modelos e suposições para dimensionar a arquitetura
- `Simulações`
  - O usuario usa o runbook somente quando ocorre algo ruim na produção

### **_Ambiente em nuvem_**

- `Capacidade`
  - Elimina as suposições sobre as necessidades de capacidade de infraestrutura
  - Capacidade máxima ou mínima necessária e aumentar e reduzir verticalmente de maneira automática
- `Testes`
  - Crie um ambiente duplicado sob demanda, conclua o teste e desative os recursos
  - Pague pelo ambiente de teste apenas quando ele estiver em execução para poder simular o ambiente ao vivo por uma fração do custo dos testes no local
- `Automação`
  - Crie e replique seus sistemas por um baixo custo (sem esforço manual)
  - Monitore alterações na automação, audite o impacto e rever
- `Evolução`
  - A possibilidade de automatizar e testar sob demanda reduz o risco do impacto decorrente de alterações de design
  - Os sistemas podem evoluir ao longo do tempo para que as empresas tenham oportunidade de aproveitar as inovações recentes como uma prática padrão
- `Orientada por dados`
  - Colete dados sobre como as opções de arquitetura afetam o comportamento das cargas de trabalho
  - Tome decisões baseadas em fatos sobre como aprimorar a carga de trabalho
  - Use esses dados para embasar opções e aprimoramentos de arquitetura ao longo do tempo.
- `Simulações`
  - Teste a operação da arquitetura e dos processos programando testes aleatórios para simular eventos em produção

# **Modelo de responsabilidade compartilhada**

## **Responsabilidade do cliente**

- Dados do cliente
- Aplicativos, IAM
- Sistema operacional, rede e configuração de firewall
- Criptografia e autenticação da integridade de dados no lado do cliente
- Criptografia no lado do servidor (sistema de arquivos ou dados)
- Proteção de trafego de rede

### **`Segurança na nuvem`** (Responsabilidade do cliente)

- Sistema operacional da instância do Amazon Elastic Compute Cloud (Amazon EC2)
  - Incluindo aplicação de patches, manutenção
- Aplicativos
  - Senhas, acesso baseado em função e outros
- Configuração do security group
- Firewalls baseados em host ou no sistema operacional – Incluindo sistemas de prevenção ou detecção de intrusão
- Configurações de rede
- Gerenciamento de contas
  - Configurações de permissão e login para cada usuário

## **Responsabilidade da AWS**

- Serviços fundamentais (computação, armazenamento, banco de dados, redes)
- Infraestrutura global (regiões, zonas de disponibilidade, locais de borda)

### **`Segurança da nuvem`** (Responsabilidade da AWS)

- Segurança física dos data centers: Acesso controlado e baseado em necessidades
- Infraestrutura de hardware e de software:
  Desativação de armazenamento, registro em log de acesso ao sistema operacional do host e auditoria
- Infraestrutura de rede: Detecção de intrusão
- Infraestrutura de virtualização: Isolamento de instância

A proteção dessa infraestrutura é a prioridade número um da AWS. Não é possível visitar os data centers ou escritórios da AWS para conferir essa proteção pessoalmente. No entanto, a Amazon oferece vários relatórios de auditores de terceiros que verificaram a conformidade da AWS com várias de normas e regulamentos de segurança de computadores.

## **Caracteristicas do serviço e responsabilidade de segurança**

- **_IaaS_** (`Ex: EC2, EBS, VPC`)
  - O cliente tem mais flexibilidade em relação a configuração de rede e armazenamento
  - O cliente é responsavel por gerenciar mais aspectos de segurança
  - O cliente configura os controles de acesso
- **_PaaS_** (`Ex: AWS Lambda, Amazon RDS`)
  - O cliente não precisa gerenciar a infraestrutura subjacente
  - A AWS gerencia o sistema operacional, patches, patches em bancos de dados, configuração de firewall e recuperação de desastres
  - O cliente se concentra no gerenciamento do codigo ou dados
- **_SaaS_** (`Ex: AWS trusted advisor, AWS shield, Amazon Chime`)
  - O software é hospedado de maneira centralizada
  - Licenciado em um modelo de assinatura ou pagamento
  - Os serviços normalmente são acessados por meio de um navegador web, aplicativo movel ou API
  - Os clientes não precisam gerenciar a infraestrutura que oferece suporte ao serviço

# **Preços**

## **3 fatores fundamentais de custos na AWS**

1. Computação: é cobrado por hora/minuto e varia com o tipo de instancia (somente linux)
2. Armazenamento: Cobrado, normamente, por GB
3. Transferência de dados: Saida é agregada e cobrada, a **`entrada não tem cobrança`** (possui excessões), cobrado normalmente por GB

## **Caracteristicas da precificação na AWS**

- Os **`pagamentos são feitos conforme o uso`**, possuem desconto em caso de reservas e tendem a diminuir com o crescimento da AWS. É possível calcular custos com a calculadora da própria AWS.
- Não são necessarios contratos de longo prazo para o uso dos serviços, portanto podem ser cancelados a qualquer momento
- A AWS também possui desconto por volume e frequencia de uso. Quanto maior o uso maior o desconto
- Existe ainda a possibilidade de negociar preços personalizados para projetos de alto volume e com necessidades exclusivas

  - No que tange as reservas existem 3 tipos:

  1. **AURI** → Instancias reservadas com pagamento antecipado total são as que possuem maior desconto
  2. **PURI →** Instancias reservadas com pagamento parcial antecipado possuem desconto menor que a modalidade anterior
  3. **NURI** → Instancias reservadas sem pagamento antecipado que possuem menor desconto

- Alguns serviços da AWS são gratuitos por um ano para novos clientes (micro instância T2, EC2, S3, EBS, …)
- A AWS também oferece vários serviços e recursos sem custo adicional. (VPC, IAM, Cobrança consolidada, AWS beanstalk, AWS cloudformation, auto scaling, AWS opsworks). Embora não haja cobrança por esses serviços, pode haver cobranças associadas a outros serviços da AWS usados com esses serviços. Por exemplo, quando o usuario dimensionar automaticamente instâncias do EC2 adicionais, haverá cobranças por essas instâncias.
- A calculadora de preços da aws ajuda a estimar o valor da fatura de acordo com os serviços escolhidos, alem de fornecer detalhes de custo dos serviços. É possivel criar modelos de serviços e analisar qual tem melhor custo-beneficio, identificando possibilidade de otimização de custos
- O custo total de propriedade (TCO) é a estimativa financeira que ajuda a identificar custos diretos e indiretos de um sistema. Serve para comparar custos de um infraestutura interna com a utilização do serviço em nuvem
  - Considerações sobre o TCO:
  1. Custos de servidor: hardware (equipamentos, manutenção, sinistros), software (licenças, updates, patchs, assinaturas), instalações (espaço, energia, refrigeração)
  2. Custos de armazenamento: hardware (equipamentos, manutenção, sinistros), administração de armazenamento, instalações (espaço, energia, refrigeração)
  3. Custos de rede: hardware, administração de armazenamento, instalações (espaço, energia, refrigeração)
  4. Custo de mão de obra: equipe de administração de TI

## **Gerenciamento de custos**

- As ferramentas e os serviços de gerenciamento de custos da AWS para ajudá-lo a acessar, organizar, compreender, controlar e otimizar os seus custos e o uso da AWS

- O usuario pode acessar o status geral dos seus custos e uso da AWS no painel de faturamento da AWS. O painel fornece uma página Contas que mostra as informações mais atualizadas sobre seus custos e uso. Essas informações incluem sua fatura mensal e um detalhamento detalhado dos serviços da AWS que o usuario usa. o usuario também pode usar a página Relatórios de custos e uso da AWS para gerar um relatório que mostra os dados mais detalhados sobre os seus custos e uso da AWS. Esse relatório permite que o usuario analise e entenda melhor os custos da AWS e as ofertas de produtos específicos e os valores de uso subjacentes a esses custos

- O AWS Cost Explorer permite uma análise detalhada dos dados de custos e de uso, com o AWS Cost Explorer, para identificar tendências, indicar os fatores determinantes dos custos e detectar anomalias. Esse serviço fornece uma interface intuitiva que permite criar rapidamente relatórios personalizados (incluindo gráficos e dados tabulares). o usuario pode usar esses relatórios para analisar seus dados de custo e uso, tanto em alto nível quanto para solicitações específicas

- O usuario pode definir metas de custos e de orçamentos de uso personalizados com os Orçamentos da AWS. O serviço, então, alerta quando esses limites são excedidos

- O usuario pode monitorar as suas cobranças de uso com o Amazon CloudWatch. o usuario cria alarmes para notificá-lo quando as suas cobranças de uso excederem um limite especificado

## **Painel de faturamento AWS**

- O painel de faturamento da AWS permite que o usuario visualize o status das despesas da AWS acumuladas no mês

- O usuario também pode usá-lo para identificar os serviços que representam a maior parte das suas despesas gerais

- O usuario também pode usar o painel de faturamento da AWS para obter uma compreensão de alto nível de como seus custos estão em alta

- Um dos gráficos no painel é o Spend Summary (Resumo de gastos)

- Ele mostra quanto o usuario gastou no mês passado, o custo do uso da AWS no mês até o momento e uma previsão de quanto o usuario provavelmente gastará este mês

- Outro gráfico é o gráfico Month-to-Date Spend by Service (Gastos acumulados no mês por serviço). Ele mostra os principais serviços que o usuario mais usa e a proporção de seus custos atribuídos a esse serviço

- O usuario pode acessar várias outras ferramentas de gerenciamento de custos no painel de faturamento

- O usuario pode usar essas ferramentas para estimar e planejar seus custos da AWS, incluindo contas da AWS, o AWS Cost Explorer, os orçamentos da AWS e os relatórios de custo e uso da AWS

## **AWS Bills**

- A página AWS Bills lista os custos que o usuario incorreu no último mês para cada serviço da AWS. Ela também inclui um detalhamento adicional por região da AWS e conta vinculada

- Essa ferramenta fornece acesso às informações mais atualizadas sobre seus custos e uso, incluindo sua fatura mensal e a análise detalhada dos serviços da AWS que o usuario usa.

## **AWS Cost Explorer**

- O AWS Cost Explorer permite visualizar os seus custos e o uso, além de analisá-los para identificar tendências

- O usuario pode filtrar e agrupar dados ao longo de várias dimensões, como serviço, tipo de instância e tag

- O Cost Explorer fornece dois tipos de relatórios padrão:

  1. **Relatórios de custo e uso**

  - Esses relatórios permitem que o usuario entenda seus custos e uso de todos os serviços
  - Por exemplo, o relatório Custos mensais por serviço (exibidos na captura de tela) mostra os custos dos últimos 3 meses, agrupados por serviço
  - Os cinco principais serviços são mostrados por eles mesmos, e o restante é agrupado em uma barra (rotulada Outros)

  2. **Relatórios de Instância Reservada (IRS)**

  - Esses relatórios são específicos para o uso de Instâncias Reservadas
  - Eles fornecem uma compreensão dos seus custos de utilização comparativos para instâncias reservadas em comparação a instâncias sob demanda

- O usuario pode visualizar dados até dos últimos 13 meses, prever quanto provavelmente gastará nos próximos 3 meses e obter recomendações sobre quais instâncias reservadas para comprar.

- Se o usuario tiver muitas contas e tiver habilitado o faturamento consolidado para o AWS Organizations, poderá usar o AWS Cost Explorer para visualizar os custos em todas as contas vinculadas. o usuario também pode monitorar os gastos individuais diários e mensais de cada conta vinculada

## **Orçamentos da AWS (AWS Budgets)**

- O Orçamentos da AWS permite que o usuario defina orçamentos personalizados que enviam alertas quando o uso ou os custos excedem (ou têm previsão de exceder) o valor orçado

- O AWS Budgets usa a visualização de custos fornecida pelo Cost Explorer para mostrar o status dos seus orçamentos e fornecer previsões dos custos estimados

- O usuario também pode usar os Orçamentos para criar notificações quando ultrapassarem os valores previstos em orçamento ou quando seus custos previstos ultrapassarem seus orçamentos

- Os orçamentos podem ser rastreados nos níveis mensal, trimestral ou anual

- O usuario pode personalizar as datas de início e término

- Os alertas de orçamento podem ser enviados por e-mail ou por meio de um tópico do Amazon Simple Notification Service (Amazon SNS)

## **AWS Cost Usage Report**

- A página Relatórios de custo e uso da AWS é um local único para acessar informações abrangentes sobre os custos e o uso da AWS

- O usuario pode usá-lo para gerar relatórios que contenham itens de linha para cada combinação exclusiva de produtos da AWS, tipo de uso e operação que o usuario usa na sua conta da AWS

- O usuario pode personalizar os relatórios gerados para agregar as informações por hora ou por dia

- O usuario também pode publicar seus relatórios de faturamento da AWS em um bucket do Amazon Simple Storage Service (Amazon S3), e a AWS atualizará os relatórios no bucket uma vez por dia

## **Integração com Cloudwatch**

- O usuario pode monitorar as suas cobranças estimadas da AWS ao usar o Amazon CloudWatch para gerar um alerta quando as suas cobranças excederem um limite especificado

- Quando o usuario habilitar o monitoramento de estimativas de cobrança para sua conta da AWS, as estimativas de cobrança serão calculadas e enviadas várias vezes por dia para o CloudWatch como dados de métrica

- Os dados de métricas de faturamento são armazenados na região Leste dos EUA (Virgínia do Norte) e representam cobranças em todo o mundo. Esses dados incluem as estimativas de cobrança para cada serviço da AWS que o usuario usa, além do total geral estimado das suas cobranças da AWS

- O alarme é acionado quando o faturamento da conta excede o limite que o usuario especificar

- Ele é acionado somente quando o faturamento real excede o limite

- Ele não usa projeções baseadas no seu uso durante o mês

- Se o usuario criar um alerta de faturamento quando as suas cobranças já tiverem excedido o limite, o alarme mudará para o estado de ALARME imediatamente

- As notificações de alarme são enviadas para um endereço de e-mail por meio de um tópico do SNS

## **Redução de custos**

![reduzir-custos](./Arquivos/redução%20de%20custos.png)

- Outra técnica eficaz de redução de custos é encontrar e eliminar desperdícios

  - Por exemplo, a facilidade de criar recursos às vezes pode levar a situações em que recursos desnecessários são mantidos em execução. o usuario pode usar as métricas do Amazon CloudWatch e os alarmes do CloudWatch para encontrar essas instâncias ociosas de longa execução e desativá-las

- O usuario também pode usar o AWS Cost Explorer para encontrar os custos associados a projetos inteiros ou a iniciativas

  - O AWS Cost Explorer pode ajudar a identificar os projetos mais caros e a priorizar quais projetos devem ser examinados primeiro para oportunidades de redução de custos

- Escrever e usar um script stopinator é uma técnica para automatizar o desligamento de instâncias. Um stopinator é um termo genérico para qualquer script ou aplicativo escrito na Nuvem AWS e que procura e interrompe instâncias não utilizadas

- Normalmente, esses scripts são configurados para executar durante a noite e nos fins de semana

- Usar um stopinator pode resultar em economias significativas de custos para uma organização, o que pode liberar seu orçamento de computação na nuvem para novos projetos

- Ele também é um script utilitário de função dupla útil porque normalmente é projetado para permitir que o usuario inicie recursos quando o usuario precisar deles (por exemplo, no início do dia de trabalho)

- O usuario não precisa criar ou usar uma instância do Amazon Elastic Compute Cloud (Amazon EC2) para executar um stopinator

- Um design simples e eficiente é usar uma combinação de uma função do Lambda e um evento do Amazon CloudWatch Events em uma solução sem servidor

- A lógica para interromper e iniciar uma instância é implementada como uma função Lambda

- Essa função é acionada por um evento do CloudWatch Events conforme a programação desejada

## **Uso do Trusted advisor para reduzir custos**

- O AWS Trusted Advisor é um recurso online que ajuda a reduzir custos, aumentar a performance e melhorar a segurança ao otimizar o seu ambiente da AWS

- O AWS Trusted Advisor analisa seu ambiente da AWS e fornece recomendações para as práticas recomendadas em cinco categorias:

  - **Otimização de custos** — Conselhos sobre como o usuario pode economizar dinheiro eliminando recursos não utilizados e ociosos ou assumindo compromissos com a capacidade reservada

  - **Desempenho** — Conselhos sobre como melhorar o desempenho dos seus serviços verificando os limites de serviço, garantindo o uso da taxa de transferência provisionada e monitorando instâncias superutilizadas

  - **Segurança** — Conselhos sobre como melhorar a segurança dos seus aplicativos, fechando lacunas, habilitando vários recursos de segurança da AWS e examinando suas permissões

  - **Tolerância a falhas** — Conselhos sobre como aumentar a disponibilidade e a redundância dos seus aplicativos da AWS usando escalabilidade automática, verificações de integridade, implantação multi-AZ e recursos de backup

  - **Limites de serviço** — Conselhos sobre os serviços cujo uso excede 80% do limite de serviço

- O usuario pode usar o AWS Trusted Advisor para identificar recursos ociosos, como instâncias do EC2, balanceadores de carga e volumes subutilizados e endereços IP elásticos não utilizados

- O Trusted Advisor também é uma boa ferramenta para otimização de custos. Ele fornece verificações e recomendações que permitem que o usuario obtenha economia de custos

- O AWS Trusted Advisor oferece planos de suporte de alto nível — Business Support e Enterprise Support — que fornecem verificações e recomendações adicionais

# **Confiabilidade e alta disponibilidade**

## **Confiabilidade**

- Probabilidade de que o sistema como um todo funcione por um período específico
- Inclui hardware, firmware e software
- Medida de quanto tempo o item executa a função pretendida
- Duas medidas comuns de confiabilidade:
  1. Tempo médio entre falhas (MTBF): tempo total em serviço/número de falhas
  2. Taxa de falhas: número de falhas/tempo total em serviço

## **Confiabilidade VS Disponibilidade**

- `Confiabilidade` é a medida do tempo durante o qual um recurso executa a função pretendida

- `Disponibilidade` é a medida da porcentagem do tempo durante o qual um recurso opera normalmente
  - Porcentagem do tempo de atividade (como 99,9%) durante um período (geralmente um ano)
  - Disponibilidade = tempo de operação normal/tempo total
    - Abreviação comum:Indica apenas o número de noves
    - Por exemplo, 5 noves equivale a 99,999% de disponibilidade

## **Disponibilidade**

- Garantir que o tempo de inatividade do aplicativo seja minimizado o máximo possível sem a necessidade de intervenção humana
- O objetivo da alta disponibilidade é garantir que os sistemas funcionem e fiquem acessíveis na maior parte do tempo
- O tempo de inatividade seja minimizado
- Necessidade mínima de intervenção humana
- Os fatores que contribuem para a HA (high availability) incluem:
  1. `Tolerância a falhas`
  - Redundância integrada dos componentes de um aplicativo e sua capacidade de permanecer operacional
  2. `Escalabilidade`
  - Capacidade de um aplicativo acomodar o crescimento sem precisar de alteração no design
  3. `Capacidade de recuperação`
  - Processo, políticas e procedimentos relacionados à restauração do serviço após um evento catastrófico.
- Na TI local tradicional, a HA é cara e é adequada apenas para aplicativos essenciais para a operação
- Na nuvem:
  1. Vários servidores
  2. Data centers isolados redundantes em cada Zona de Disponibilidade
  3. Dentro de cada Região AWS há várias Zonas de Disponibilidade
  4. Várias Regiões ao redor do mundo
  5. Serviços tolerantes a falhas

# **Programa de conformidade**

## **Conformidade da AWS**

- **_`Responsabilidade AWS`_**
  1. Fornecer ambiente seguro e controlado
  2. Fornecer variedade de recursos de segurança
- A AWS compartilha informações de segurança obtendo certificações do setor (computação em nuvem), publicando praticas de segurança e controle, e através do fornecimento de documentação diretamente por meio de acordos de confidencialidade
  (NDAs)

  - A AWS, os orgãos de certificação e os auditores independentes fornecem certificações e declarações, leis/regulamentos e privacidade e frameworks para alinhamento e governança do setor

- AWS fornece informações sobre seu programa de conformidade e riscos para permitir que os clientes incorporem os controles da AWS em sua estrutura de governança. Essas informações podem ajudar os clientes a documentar um framework completo de controle e governança com a AWS incluída como parte importante desse framework.

- O programa de conformidade e riscos da AWS é composto por três elementos:

### 1. **Gerenciamento de riscos empresariais**

- **_Plano de negocios_**
  - Inclui gerenciamento de riscos
  - Plano reavaliado pelo menos semestralmente
- **_Responsabilidade do cliente_**
  - Identificação de riscos
  - Implementar medidas adequadas para enfrentar riscos
  - Avaliar riscos internos e externos
- **_Politicas e frameworks de segurança de TI_**
  - Control Objectives for Information and related Technology (COBIT)
  - American Institute of Certified Public Accountants (AICPA)
  - National Institute of Standards and Technology (NIST)
- **_Responsabilidades AWS_**
  - Manter a politica de segurança
  - Fornecer treinamento de segurança para seus funcionarios
  - Executar avaliações de segurança de aplicativos
    - Confiabilidade, integridade e disponibilidade de dados
    - Conformidade com a politica de IS
    - A AWS verifica regularmente vulnerabilidade em IPs publicos de endpoint de serviços dentro das instancias EC2 do cliente e notifica sugerindo correções
  - Avaliações de ameaça e vulnerabilidade tambem são feitas por empresas terceiras, contratadas pela AWS, a fim de validar a integridade da estrutura. **_`Essas avaliações não substituem as verificações do proprio cliente para garantir a conformidade e os clientes podem solicitar suas proprias verificações desde que se limitem a suas instancias e não violem a politica de uso da AWS`_**

### 2. **Ambiente de controle e automação**

- **_Controle de acesso ao ambiente_**
  - Inclui políticas, processos e atividades de controle
  - Protege a entrega de ofertas de serviços da AWS
- **_`Componentes`_**
  1. Pessoas
  2. Processos
  3. Tecnologia
- **_`Funcionalidade`_**
  - Oferece suporte à eficácia operacional do framework de controle da AWS
  - Integra controles identificados por órgãos de nuvem líderes do setor
  - Monitora ideias de práticas líderes para gerenciar o ambiente de controle

### 3. **Segurança da informação**

- **_`Protege`_**
  - Confidencialidade
  - Integridade
  - Disponibilidade
- Publica documento técnico de segurança

## **Conformidade do cliente**

- **_`Responsabilidae do cliente`_**

  1. Configurar o TI

- **_Requesitos de conformidade do cliente_**
  - Manter a governança em todo o ambiente de controle de TI
  - Compreender:
    - Os objetivos de conformidade necessários
    - A tolerância de risco baseada em validação
  - Estabelecer um ambiente de controle que atenda aos objetivos
  - Verificar a eficácia do ambiente de controle
  - Usar a abordagem básica de conformidade:
    - Revisão
    - Design
    - Identificar
    - Verificar

# **Recursos de segurança**

As equipes de conta da AWS fornecem um primeiro ponto de contato que pode orientar a implantação e implementação e indicar os recursos certos para resolver problemas de segurança

- **_AWS Entreprise Suport_**

  - Tempo de resposta inferior a 15 minutos em interrupções criticas para os negocios
  - Disponivel 24h por telefone, email ou chat
  - `Technical account manager (TAM) dedicado`

- **_AWS professional services e rede de parceiros da AWS_**
  - `A rede de parceiros AWS (APN)` é um grupo de fornecedores de software e serviços de nuvem
    - **_`Parceiros da APN`_** ajudam os clientes a implementar e gerenciar uma implantação da nuvem AWS, desenvolver políticas de segurança, cumprir os requisitos de conformidade
    - Incluem integradores de sistemas e provedores de serviços gerenciados
    - Existe tambem os **_`parceiros de tecnologia da APN`_**. Eles fornecem ferramentas de software e serviços hospedados ou executados na AWS (`Incluem provedores independentes de software (ISVs) e provedores de software como serviço (SaaS)`)
- Consultorias e boletins fornecidos sobre vulnerabilidades e ameaças atuais. Os clientes trabalham com especialistas para lidar com:

  1. Denúncias de abuso
  2. Vulnerabilidades
  3. Teste de penetração

- A AWS fornece um roteiro de aprendizado para auditores bem como um guia de conformidade
  roteiro de aprendizado -> https://aws.amazon.com/compliance/auditor-learning-path/
  guia de conformidade -> https://aws.amazon.com/compliance/resources/

# **Praticas recomendadas**

## **Não use o usario raiz da conta**

1. Criar um usario IAM
2. Criar grupos IAM
   - Dar ao grupo permissões de administrador
3. Adicionar o usuario criado ao grupo
4. Logar com o usuario credenciado
5. Armazenar as credencias num local seguro
6. Se tiver chaves de acesso de usuario raiz da conta, desative-as e remova-as

## **Autenticação de 2 fatores - MFA**

1. Exigir MFA para o usuario raiz da conta e para todas as contas de usuario
2. Use o MFA para controlar o acesso às interfaces de programação de aplicativos (APIs) de serviços

## **Ativar o AWS Cloudtrail**

1. Criar a trilha
   - Dar o nome
   - Aplicar a todas as regiões
   - Inserir um nome para um novo bucket onde os logs serão armazenados
2. Certifique-se que o bucket escolhido tenha acesso restrito apenas para pessoal autorizado

## **Ativar um relatorio de faturamento, como o AWS Cost and Usage Report**

1. Ativar o relatorio de faturamento
   - O relatório fornece cobranças estimadas associadas à sua conta da AWS, por hora ou por dia
2. Certifique-se que o bucket escolhido tenha acesso restrito apenas para pessoal autorizado

## **Outras praticas recomendadas**

- Use preferencialmente funções de usuario ao invés de compartilhar credenciais
- Remova os usuários e as credenciais desnecessários
- Use as funções para aplicativos que são executados em instâncias do Amazon EC2
- Delegue usando as funções em vez de compartilhar credenciais
- Conceda acesso com base no menor privilégio
- Configure uma política de senha forte
- Ative a MFA para usuários privilegiados
- Use as condições de política para segurança extra
- Alterne as credenciais regularmente
- Monitore a atividade em sua conta da AWS

# **CloudFormation e ferramentas Dev**

## **AWS Tools for PowerShell**

- Permite criar scripts para operações nos recursos da AWS por meio da linha de comando do PowerShell

- Ferramentas para executar muitas das mesmas ações disponíveis no AWS Software Development Kit (SDK) do .NET

- É possivel usar na linha de comando para tarefas rápidas, como:

1. Criação e configuração de grupos de segurança
2. Execução de instâncias
3. Criação e exclusão de buckets do Amazon Simple Storage Service (Amazon S3)
4. Executar tarefas do AWS Identity and Access Management (IAM), como atribuir uma função a um usuário
5. Publicação de métricas do Amazon CloudWatch

- O AWS Tools for PowerShell fornece um conjunto de cmdlets, que são comandos usados em um ambiente do Microsoft Windows PowerShell para executar uma ação
- O AWS Tools for PowerShell oferece suporte ao mesmo conjunto de serviços e regiões compatíveis com os SDKs da AWS

### **_Comandos powershell_**

- `Executar uma instancia EC2`

  ```bash
  PS C:\> New-EC2Instance -ImageId ami-c49c0dac -MinCount 1 -MaxCount 1 -KeyName myPSKeyPair -SecurityGroups myPSSecurityGroup -InstanceType t1.micro
  ```

- `Mostrar detalhes EC2 filtrados no ID reserva`

  ```bash
  PS C:\> $reservation = New-Object 'collections.generic.list[string]’ $reservation.add("r-5caa4371") $filter_reservation = New-Object
  Amazon.EC2.Model.Filter -Property @{Name = "reservation-id"; Values = $reservation} (Get-EC2Instance -Filter $filter_reservation).Instances
  ```

- `Criar um novo bucket S3`

  ```bash
  PS C:\> New-S3Bucket -BucketName website-example -Region us-west-1
  ```

- `Criar um grupo do IAM`

  ```bash
  PS C:\> New-IAMGroup -Path "/ps-created-groups/" -GroupName "powerUsers"
  ```

- `Criar um usuario IAM`

  ```bash
  S C:\> New-IAMUser -Path "/ps-created-users/" -UserName "myNewUser"
  ```

- `Adicionar usuario do IAM ao grupo`

  ```bash
    PS C:\> Add-IAMUserToGroup -UserName myNewUser -GroupName powerUsers
  ```

## **AWS CloudFormation**

- O AWS CloudFormation é outra ferramenta útil que permite a um usuário criar, atualizar ou excluir implantações completas de infraestrutura da AWS de forma previsível e repetida

- A infraestrutura inteira pode ser modelada em um único arquivo de texto escrito em JavaScript Object Notation (JSON) ou YAML Ain't Markup Language (YAML)

- O modelo de arquivo de texto pode ser usado para definir todos os recursos da AWS necessários para uma pilha

- Uma pilha do AWS CloudFormation é um conjunto de recursos da AWS que pode ser gerenciado como uma unidade única

- É possivel criar, atualizar ou excluir uma coleção de recursos criando, atualizando ou excluindo pilhas

- Os recursos na pilha podem incluir instâncias do EC2, instâncias do Amazon Relational Database Service (Amazon RDS), Virtual Private Clouds (VPCs) e muitos outros recursos criados a partir de serviços da AWS

- O AWS CloudFormation também permite que os usuários visualizem como as alterações propostas em uma pilha podem afetar seus recursos em execução, como as alterações excluirão ou substituirão recursos críticos

- `O AWS CloudFormation só faz as alterações na pilha depois que o usuário decide executá-las`

- Outro recurso do AWS CloudFormation é a detecção de desvios

  - A execução de uma operação de detecção de desvio em uma pilha determina se a configuração real da pilha difere, ou se desviou, da configuração de modelo esperada
  - Considera-se que um recurso foi desviado se algum dos seus valores reais de propriedade for diferente dos valores de propriedade esperados ou se a propriedade ou recurso tiver sido excluído
  - Considera-se que uma pilha se desviou se um ou mais dos seus recursos tiverem sido desviados
  - Se o recurso na pilha for compatível com a detecção de desvios, a operação de detecção retornará informações detalhadas sobre o status do desvio desse recurso

- O AWS CloudFormation também oferece suporte a extensões personalizadas para seu modelo de pilha que podem ser criadas usando o AWS Lambda

- É possível escrever o provisionamento personalizado em uma função do Lambda e configurar uma pilha do AWS CloudFormation para acionar essa função ao criar a pilha

  - Por exemplo, o usuario pode escrever uma lógica de provisionamento personalizada para tarefas, como procurar os IDs mais recentes da imagem de máquina da Amazon (AMI) para que o usuario possa usá-los nas suas pilhas

### **Como funciona**

- Um modelo é uma especificação dos recursos da AWS a serem provisionados

- Uma pilha é uma coleção de recursos da AWS que foram criados a partir de um modelo

- O usuario pode provisionar (criar) uma pilha várias vezes

- Quando uma pilha é provisionada, os recursos da AWS especificados pelo modelo de pilha são criados

- Todas as cobranças incorridas pelo uso desses serviços começarão a ser geradas quando forem criadas como parte da pilha do AWS CloudFormation

- Quando uma pilha é excluída, os recursos associados a essa pilha são excluídos

- A ordem de exclusão é determinada pelo AWS CloudFormation

- O usuario não tem controle direto sobre o que e quando é excluído

- Se um erro for encontrado quando o usuario iniciar um modelo do AWS CloudFormation, todos os recursos serão revertidos por padrão

  - O usuario pode alterar essa opção na linha de comando

- O AWS CloudFormation garante que todos os recursos de pilha sejam criados ou excluídos, conforme apropriado

- Como o AWS CloudFormation trata os recursos da pilha como uma única unidade, eles devem ser criados ou excluídos com êxito para que a pilha seja criada ou excluída

- Se um recurso não puder ser criado, o AWS CloudFormation reverterá a pilha e excluirá automaticamente todos os recursos criados

- Se um recurso não pode ser excluído, todos os recursos restantes são mantidos até que a pilha possa ser excluída com êxito

- Para preservar um volume do Amazon Elastic Block Store (Amazon EBS), defina seu atributo **DeleteOnTermination** como **Falso**

- Para preservar um recurso, defina o atributo **DeletionPolicy** como **Reter**

- Alguns recursos podem não ser excluídos quando uma pilha é excluída, como um bucket do S3
  - Opcionalmente, o usuario também pode habilitar a proteção contra encerramento em uma pilha

![modelo](./Arquivos/Estrutura%20de%20modelo%20cloudformation.png)

### **Projeto de modelos**

- O AWS CloudFormation Designer é uma ferramenta visual que permite criar e modificar modelos do AWS CloudFormation usando uma interface de arrastar e soltar

- O usuario pode facilmente adicionar, modificar ou remover recursos e o JSON subjacente será alterado de acordo

- Se o usuario modificar um modelo que seja associado a uma pilha em execução, o usuario poderá alterar a pilha de modo que ela fique de acordo com o modelo

- Ferramentas de terceiros também podem fornecer soluções para ajudá-lo a projetar modelos do AWS CloudFormation

## **Ops Works**

- O AWS OpsWorks é um serviço de gerenciamento de configuração que fornece instâncias gerenciadas do Chef e do Puppet

- O Chef e o Puppet são plataformas de automação que permitem usar um código para automatizar as configurações de servidores

- Com o AWS OpsWorks, o usuario pode usar o Chef e o Puppet para automatizar como os servidores são configurados, implantados e gerenciados nas suas instâncias do EC2 ou ambientes de computação locais.

- O AWS OpsWorks tem três ofertas:

  1. AWS OpsWorks for Chef Automate
  2. AWS OpsWorks for Puppet Enterprise
  3. AWS OpsWorks Stacks

# **Visão geral de banco de dados**

## **Desafios de executar um banco de dados relacional no local**

- Alguns dos desafios que o usuario pode enfrentar podem incluir:
  1. Manutenção do servidor e consumo de energia
  2. Instalação de software e patches
  3. Backups de banco de dados e alta disponibilidade Limites de escalabilidade
  4. Segurança de dados Instalação e patches do sistema operacional (SO)

## **Vantagens dos bancos de dados na AWS**

- `Com propósito específico `

  - Os 15 mecanismos de banco de dados especificamente criados incluem bancos de dados relacionais, de chave-valor, de documentos, na memória, gráficos, de séries temporais e de livros contábeis

- `Performance em grande escala`

  - Os serviços de banco de dados relacional são projetados para alto desempenho

- `Totalmente gerenciado`

  - O monitoramento quase contínuo de clusters mantém as cargas de trabalho funcionando com armazenamento de recuperação automática e dimensionamento automático

- `Desenvolvido para cargas de trabalho críticas para os negócios`
  - Eles são projetados para alta disponibilidade, confiabilidade e segurança

## **Escolha do banco de dados**

- A escolha do serviço de banco de dados correto exige uma boa compreensão dos recursos do serviço e das necessidades do aplicativo

  - Por exemplo, alguns mecanismos de banco de dados usam o modelo relacional e são adequados para aplicativos transacionais
  - Outros mecanismos de banco de dados estão em conformidade com o modelo NoSQL e são destinados a aplicativos na escala da Internet
  - Outros tipos diferentes de mecanismos de banco de dados funcionam bem para cargas de trabalho em tempo real que exigem um armazenamento de dados na memória para armazenamento em cache

- Portanto, é importante combinar os requisitos da carga de trabalho do aplicativo com os recursos do serviço de banco de dados

- Algumas das principais características da carga de trabalho a considerar incluem a forma dos dados, seu tamanho e requisitos computacionais, e seus padrões de acesso e necessidades de desempenho

- Tais fatores podem ajudá-lo a encontrar o banco de dados certo para as suas necessidades

## **Tipos de serviço**

- A AWS oferece vários serviços de banco de dados totalmente gerenciados para oferecer suporte às necessidades de diferentes tipos de aplicativos

### **SQL**

- Na categoria SQL, o Amazon Relational Database Service (Amazon RDS) fornece soluções gerenciadas para oferecer suporte ao banco de dados relacional

  - O Amazon RDS oferece a opção de `seis` mecanismos de banco de dados populares:

  1. Amazon Aurora
  2. MySql
  3. PostgreSql
  4. MariaDB
  5. Oracle
  6. SQL Server

- O `Amazon Redshift` fornece soluções gerenciadas para armazenamento de dados

  - Ele funciona bem para aplicativos transacionais
  - O Amazon Redshift atende às necessidades de cargas de trabalho de análise de dados fornecendo uma solução de data warehousing rápida, escalável e econômica

### **NoSQL**

- A AWS também fornece aplicativos NoSQL com serviços como Amazon DynamoDB, Amazon Neptune e Amazon ElastiCache

- O `Amazon DynamoDB` oferece soluções de banco de dados para cargas de trabalho transacionais

  - Ele suporta documentos, modelos de armazenamento de chave-valor e cargas de trabalho transacionais

- O `Amazon Neptune` fornece soluções de banco de dados para aplicativos de análise de dados

  - É um serviço de banco de dados gráfico que suporta aplicativos que manipulam conjuntos de dados altamente conectados
  - Alguns dos principais recursos do Amazon Neptune incluem:
    1.  Backup quase contínuo para o Amazon Simple Storage Service (Amazon S3)
    2.  Recuperação point-in-time com replicação entre Zonas de disponibilidade

- Por fim, o `Amazon ElastiCache` oferece soluções para aplicativos que exigem armazenamento em cache na memória

  - É uma solução de cache de dados na memória que suporta os mecanismos Redis e Memcached de código aberto
  - Alguns dos principais recursos do Amazon ElastiCache incluem:
    1. A possibilidade de configurar e executar nós de cache por meio do Console de gerenciamento da AWS
    2. Compatível com Memcached e Redis

## **Bancos gerenciados VS Bancos não gerenciados**

### **Não gerenciados**

- O usuario provisiona serviços não gerenciados
- O usuario gerencia a escalabilidade, a tolerância a falhas e a disponibilidade

### **Gerenciados**

- Os serviços gerenciados exigem apenas que o usuário os configure
- O dimensionamento, a tolerância a falhas e a disponibilidade geralmente são incorporados ao serviço

- `Responsabilidade do usuario`

  - Otimização de aplicativos

- `Responsabilidade da AWS`
  - Instalação e patches do sistema operacional (SO) Instalação e patches de software de banco de dados
  - Backups de banco de dados
  - Alta disponibilidade
  - Escalabilidade
  - Potência, rack e pilha
  - Manutenção do servidor

## **Casos de uso**

![Usos](arquivos/Casos%20de%20uso%20de%20banco%20de%20dados.png)

## **Recomendações**

![Recomendação](arquivos/Recomendacoes%20de%20banco%20de%20dados.png)

# **Visão geral de cloud storage**

## **Visão geral de armazenamento**

- O armazenamento na nuvem é um modelo de computação na nuvem que armazena dados na Internet por meio de um provedor de computação na nuvem, que gerencia e opera o armazenamento de dados como um serviço

## **Como o armazenamento na nuvem funciona?**

- O armazenamento na nuvem é adquirido de um fornecedor de nuvem terceirizado, que possui e opera a capacidade de armazenamento de dados e a entrega pela Internet em um modelo de pagamento conforme o uso

- Esses fornecedores de armazenamento na nuvem gerenciam capacidade, segurança e durabilidade para tornar os dados acessíveis aos seus aplicativos de todo o mundo.

## **Serviços de armazenamento**

- Ele tem três grandes categorias:

1. `Armazenamento de instâncias (ou armazenamento temporário), Amazon EBS e Amazon Simple Storage Service (Amazon S3)`

   - O armazenamento de instâncias, ou armazenamento temporário, é um armazenamento temporário que é adicionado à sua instância do Amazon Elastic Compute Cloud (Amazon EC2)

2. `O Amazon EBS`

- É um armazenamento persistente e montável
- Um volume do EBS pode ser montado como um dispositivo para uma instância do EC2, mas somente se ambos estiverem na mesma zona de disponibilidade

3. `Amazon S3`

- É um armazenamento persistente
- No entanto, ele pode ser acessado de qualquer lugar

## **Tipos de armazenamento**

- Os principais serviços de armazenamento na nuvem da AWS estão agrupados em quatro categorias:

1. `Armazenamento em bloco`

   - O Amazon Elastic Block Store (Amazon EBS) fornece recursos de armazenamento em bloco altamente disponíveis e de baixa latência para cargas de trabalho que exigem armazenamento persistente acessível a partir de uma instância do Amazon Elastic Compute Cloud (Amazon EC2)

2. `Armazenamento de objetos`

   - O `Amazon Simple Storage Service (Amazon S3)` foi projetado para armazenar objetos de qualquer tipo de forma segura, durável e escalável e torná-los acessíveis pela Internet
   - O `Amazon Simple Storage Service Glacier` fornece armazenamento de objetos de baixo custo e altamente durável para backup e arquivamento de longo prazo de qualquer tipo de dados

3. `Armazenamento de arquivos`

   - O `Amazon Elastic File System (Amazon EFS)` fornece um sistema de arquivos simples, escalável e elástico para cargas de trabalho baseadas no Linux
   - O `Amazon FSx for Windows File Server` fornece um sistema de arquivos nativo do Microsoft Windows totalmente gerenciado para oferecer suporte a aplicativos do Windows executados na AWS

4. `Armazenamento na nuvem híbrida`

   - O AWS Storage Gateway fornece um link que conecta seu ambiente local aos serviços de armazenamento na nuvem da AWS de maneira resiliente e eficiente

## **Casos de uso**

- Análise de big data
- Data warehouses
- Bancos de dados
- Backup e arquivo

![Armazenamento](./Arquivos/Cenarios%20e%20soluções%20de%20armazenamento.png)

# **Serviços - Well architected framework**

- Os arquitetos de nuvem devem usar o AWS Well-Architected para:
  1. Aumentar os níveis de conscientização sobre as práticas recomendadas de arquitetura
  2. Abordar áreas fundamentais frequentemente negligenciadas,
  3. Abordar áreas fundamentais frequentemente negligenciadas
- O AWS Well-Architected Framework não fornece:
  1. Detalhes da implementação
  2. Padrões de arquitetura
- No entanto, oferece:
  1. Perguntas cujo principal objetivo é oferecer uma compreensão criteriosa das decisões de arquitetura
  2. Serviços e soluções relevantes para cada pergunta
  3. Referências a recursos relevantes
- AWS Well-Architected Framework tem base em `seis` diferentes perspectivas ou pilares

## **_1. Excelência operacional_**

- Capacidade de monitorar sistemas
- Entregar valor comercial
- Para aprimorar continuamente processos e procedimentos de suporte
- Gerenciar e automatizar alterações
- Responder a eventos
- Responder às alterações

### **_Princípios de design de excelencia operacional_**

- Executar operações como código
- Anotar a documentação
- Prever falhas
- Fazer alterações frequentes, pequenas e reversíveis
- Refinar os procedimentos de operações com frequência
- Aprender com todos os eventos e falhas operacionais

## **_2. Segurança_**

- Monitorar e proteger
  - Informações
  - Sistemas
  - Ativos
- Avaliações de riscos
- Estratégias de mitigação
- Proteger e monitorar sistemas
- Identificar e gerenciar quem pode fazer o quê
- Estabelecer controles para detectar eventos de segurança
- Proteger sistemas e serviços
- Proteger a confidencialidade e integridade dos dados
- Gerenciamento de identidade e acesso
- Controles de detecção
- Proteção de infraestrutura
- Proteção de dados
- Resposta a incidentes

### **_Princípios de design de segurança na nuvem_**

- Implementar a segurança em todas as camadas
- Habilitar a rastreabilidade
- Implementar o princípio do privilégio mínimo
- Concentrar-se na proteção de seu sistema
- Automatizar
  - Por exemplo, crie e salve uma imagem fortalecida e corrigida de um servidor virtual para que, quando precisar de uma imagem, possa usá-la automaticamente para criar uma nova instância. Outra prática recomendada é automatizar a resposta a eventos de segurança habituais e anômalos.

## **_3. Confiabilidade_**

- Recuperar-se de falhas de infraestrutura ou serviços
- Adquirir dinamicamente recursos de computação para atender à demanda
- Mitigar interrupções como:
  - Configurações incorretas
  - Problemas de rede temporários
- Fundamentos
  - Para obter confiabilidade, sua arquitetura e sistema devem ter uma base bem planejada que possa lidar com alterações na demanda ou com requisitos, além de detectar falhas e se corrigir automaticamente
- Gerenciamento de alterações
- Gerenciamento de falhas

### **_Princípios de design de confiabilidade_**

- Testar os procedimentos de recuperação
- Recuperar automaticamente
- Dimensionar a escala horizontalmente
- Parar de tentar adivinhar a capacidade
- Gerenciar alterações na automação

## **_4. Eficiência de desempenho_**

- Usar recursos de computação com eficiência para cumprir requisitos de sistema
- Manter essa eficiência à medida que a demanda muda e as tecnologias evoluem
- Selecionar soluções personalizáveis
- Revisar para inovar continuamente
- Monitorar serviços da AWS
- Considerar as compensações

### **_Princípios de design de eficiencia de desempenho_**

- Democratizar tecnologias avançadas
- Obter alcance global em minutos
- Usar arquitetura sem servidor
- Experimentar com maior frequência
- Ter afinidade mecânica

## **_5. Otimização de custos_**

- Custos desnecessários
- Recursos subótimos
- Usar recursos que ofereçam custo-benefício
- Equiparar a oferta com a demanda
- Aumentar a conscientização sobre despesas
- Otimizar ao longo do tempo

### **_Princípios de design de otimização de custos_**

- Adotar um modelo de consumo
- Medir a eficiência geral
- Reduzir os gastos com operações do data center
- Analisar e atribuir despesas Usar serviços gerenciados

## **_6. Sustentabilidade_**

- Escolha de região
- Padrões de comportamento do usuário
- Padrões de software e arquitetura
- Padrões de dados
- Padrões de hardware
- Processo de desenvolvimento e implantação

### **_Princípios de design de sustentabilidade_**

- Compreenda seu impacto
- Estabeleça metas de sustentabilidade
- Maximize a utilização
- Antecipe e adote ofertas de hardware e software novos e mais eficientes
- Use serviços gerenciados
- Reduza o impacto posterior de suas workloads na nuvem

# **Serviços - System manager**

- O AWS Systems Manager é um serviço de gerenciamento que ajuda o usuário a:

  1. Coletar inventário de software
  2. Aplicar patches do sistema operacional (SO)3. Criar imagens do sistema
  3. Configurar os sistemas operacionais Microsoft Windows e Linux

- O Systems Manager foi projetado para ser altamente focado na automação para permitir a configuração e o gerenciamento de sistemas executados no local ou na AWS

- O usuário pode selecionar as instâncias que deseja gerenciar e definir as tarefas de gerenciamento que deseja executar

  - Por exemplo, o recurso Executar comando permite executar scripts e programas remotamente

  - O State Manager garante que suas instâncias do Amazon Elastic Compute Cloud (Amazon EC2) sejam inicializadas com software específico na inicialização

  - É possivel usar o gerente de inventário para coletar e consultar informações sobre a configuração e o inventário das suas instâncias do EC2 e o software instalado nelas

  - Com a Janela de manutenção, o usuario pode definir uma janela de tempo recorrente para executar tarefas administrativas e de manutenção nas suas instâncias

## **Recursos do System Manager**

- **_`Automação`_**

  - O recurso de automação no Systems Manager permite definir tarefas comuns de TI como uma coleção de etapas em um documento do AWS Systems Manager (documento SSM)

  - O recurso de automação pode executar todas as etapas do documento em uma coleção inteira de recursos da AWS

    - Por exemplo, o usuario pode definir uma automação para corrigir instâncias inacessíveis, criar imagens de máquina da Amazon (AMIs) douradas ou corrigir instâncias

  - Automações personalizadas também podem ser criadas em JavaScript Object Notation (JSON)

  - O Amazon CloudWatch Events também pode ser configurado para acionar automações do Systems Manager

  - `Uma abordagem sugerida para desenvolver e testar uma automação do Systems Manager é:`

    1. Criar um documento de automação, ou usar um modelo de automação existente, que inclua etapas e parâmetros sequenciais executados pelo Systems Manager
    2. Executar a automação usando o Systems Manager, que:

    - Iniciar uma instância
    - Fazer um snapshot
    - Marcar instâncias
    - Excluir imagens antigas
    - Encerrar uma instância

    3. Monitorar o fluxo de trabalho de automação (por exemplo, usando o console de gerenciamento da AWS). Após a conclusão da automação, confirme se os resultados esperados foram obtidos. Por exemplo, o usuario pode executar uma instância de teste a partir de uma AMI que foi atualizada por uma automação do Systems Manager para verificar se ela tem as características esperadas

- **_`Run command`_**

  - Use comandos predefinidos
  - Crie seus próprios
  - Escolha instâncias ou tags
  - Escolha controles ou programações
  - Execução

  - O Run Command do Systems Manager fornece uma maneira simples de executar comandos predefinidos em instâncias do EC2. Um comando executado pelo Run Command reduz a sobrecarga de gerenciamento, pois um usuário pode gerenciar instâncias sem configurar hosts bastion ou gerenciar chaves e certificados Secure Shell (SSH)

  - Por meio da integração com o AWS Identity and Access Management (IAM), é possível aplicar permissões granulares para controlar as ações que os usuários podem executar nas instâncias

  - Todas as ações realizadas com o Systems Manager também podem ser registradas pelo AWS CloudTrail, que permite que um usuário audite as alterações em todo o ambiente

- **_`Session manager`_**

  - O recurso Gerenciador de sessões no Systems Manager permite que um usuário gerencie suas instâncias do EC2 por meio de um shell interativo baseado no navegador no Console de gerenciamento da AWS

  - O Gerenciador de sessões fornece gerenciamento de instâncias seguro e auditável sem a necessidade de abrir portas de entrada nos grupos de segurança, manter instâncias de host bastion em sub-redes do EC2 ou gerenciar chaves SSH (Secure Shell)

  - O Gerenciador de sessões também simplifica a conformidade com políticas corporativas que exigem acesso controlado a instâncias, práticas rigorosas de segurança e logs auditáveis que contêm detalhes de acesso à instância. Esses benefícios podem ser obtidos ao mesmo tempo em que ainda fornece acesso às instâncias do EC2 aos usuários finais

- **_`Gerenciador de patches`_**

  - Existem vários desafios associados à aplicação de patches de servidores e instâncias:

  1. O tempo necessário para corrigir várias instâncias do EC2 ou máquinas locais
  2. A natureza repetitiva da tarefa
  3. Como os erros podem resultar em tempo de inatividade
  4. Questões de compatibilidade

  - _`Para usar o Systems Manager Patch Manager para automatizar a aplicação de patches:`_

  1. Crie uma linha de base de patch, que contém regras que aprovam ou rejeitam patches automaticamente
  2. Defina uma janela de manutenção e agrupe instâncias para aplicação de patches
  3. Aplique patches na janela de manutenção e reinicie todas as instâncias no grupo de patches
  4. Analise os resultados e os detalhes da conformidade do patch

- **_`Janela de manutenção`_**

  - O recurso Janelas de manutenção do Systems Manager permite que um usuário agende tarefas regulares, como patches, para serem executadas automaticamente

  - Um usuário pode definir limites para execuções simultâneas de tarefas e taxas de erro permitidas

  - _`As etapas para implementar uma janela de manutenção são:`_

  1. Criar uma janela de manutenção
  2. Atribuir destinos
  3. Atribuir tarefas a serem executadas nesses destinos

     - _`Os tipos de tarefas que podem ser executadas incluem:`_

     1. Comandos executados pelo Run Command do Systems Manager
     2. Fluxos de trabalho do Systems Manager Automation
     3. Fluxos de trabalho do AWS Step Functions
     4. Funções do AWS Lambda

  4. Revise o status das tarefas após a conclusão delas

- **_`Gerenciador de estados`_**

  - O Gerenciador de estados do AWS Systems Manager é um serviço seguro e escalável de gerenciamento de configuração que automatiza o processo de manutenção da infraestrutura, híbrida e do EC2, em um estado definido

  - É possível instalar um software ao criar instâncias do EC2, fazer download e atualizar agentes, definir configurações de rede, ingressar em um domínio do Windows, aplicar patches a instâncias com atualizações de software e executar scripts em instâncias gerenciadas do Linux e do Windows

  - _`Como funciona:`_

  1. Primeiro, crie um documento do AWS Systems Manager (SSM) ou identifique um documento existente que defina as ações que o Systems Manager executará nas suas instâncias gerenciadas
  2. Os documentos são criados em JavaScript Object Notation (JSON) ou YAML Ain't Markup Language (YAML) e incluem as etapas e os parâmetros que o usuario especifica
  3. Em seguida, associe suas instâncias gerenciadas ao documento do SSM. Ao criar a associação, o usuario define o programação de quantas vezes aplicar o estado configurado
  4. Por fim, é possível optar por gravar a saída dos comandos em um bucket do Amazon Simple Storage Service (Amazon S3) ao criar uma associação

- **_`Parameter Store`_**

  - Em vez de armazenar dados confidenciais em arquivos de configuração ou codificá-los no código-fonte, o usuario pode usar o Armazenamento de parâmetros do Systems Manager para armazenar esses parâmetros e em seguida, fazer referência a essas informações em aplicativos ou scripts

  - Use o Parameter Store para armazenar informações de configuração, como:

  1. Senhas
  2. Chaves
  3. Códigos de licença
  4. Strings de banco de dados

  - Atualmente, os documentos SSM `não oferecem` suporte a referências a parâmetros de cadeia de caracteres seguros

  - Isso significa que, para usar parâmetros de string seguros com (por exemplo) Executar comando, ele deve recuperar o valor do parâmetro antes de passar o parâmetro para Executar comando.

- **_`Inventario`_**

  - O recurso de inventário do Systems Manager pode coletar informações de inventário sobre instâncias do EC2 e o software instalado nelas, como:

  1. Dados do aplicativo
  2. Configurações de rede
  3. Funções do servidor
  4. Arquivos
  5. Atualizações
  6. Serviços do Windows
  7. Propriedades do sistema

  - O recurso de inventário do Systems Manager pode fornecer uma compreensão abrangente das configurações do sistema e dos aplicativos instalados em várias instâncias, sem a necessidade de fazer login em cada instância individualmente
  - Os dados coletados suportam o gerenciamento de ativos de aplicativos, o rastreamento de licenças, o monitoramento da integridade dos arquivos, a descoberta de aplicativos que não foram instalados por um instalador tradicional e mais

- **_`Insights`_**

  - O recurso Insights integrados do AWS Systems Manager agrega e exibe dados operacionais de cada grupo de recursos por meio de um painel

  - Esse painel reduz a necessidade de navegar por vários consoles de serviço da AWS para visualizar dados operacionais

  - Um usuário pode visualizar:

  1. Chamadas de interface de programação de aplicativos (API) do CloudTrail
  2. Alterações na configuração de recursos do AWS Config
  3. Inventário de software
  4. Status de conformidade de patch por grupo de recursos

  - Um usuário também pode integrar seus painéis do Amazon CloudWatch, notificações do Trusted Advisor e alertas de desempenho e disponibilidade do Personal Health Dashboard ao painel do Insights

# **Serviços - AWS Config**

- O AWS config é um serviço totalmente gerenciado que permite avaliar, analisar e fazer auditoria da configuração dos seus recursos da AWS

- Monitoramento quase contínuo
- Avaliação quase contínua
- Gerenciamento de alterações
- Solução de problemas operacionais
- Fornece o inventario de recursos AWS, o historico das configurações e notifica alteração de configuração
- Fornece detalhes sobre todas as alterações de configuração, historico de modificações e notificações de alteração de configuração
- Fornece detalhes sobre todas as alterações de configuração
- Combina-se com o AWS Cloudtrail
- Permite:
  1. Auditoria de conformidade
  2. Análise de segurança
  3. Rastreamento de alterações de recursos
  4. Solução de problemas
- No que tange auditoria e segurança o AWS config provê:
  1. **_`Detecção`_**
     - Permite criar controle de detecção e identificar a analise de anomalias
  2. **_`Conformidade`_**
     - Permite criar regras que avaliam a conformidade dos recursos e auxilia no alinhamento com as certificações SOC
  3. **_`Controle de acesso`_**
     - Permite aplica IAM no AWS config concedendo permissões ao AWS config para acessar recursos (exemplo buckets S3)
     - Permite criar funções vinculadas ao serviço AWS config que permitam chamar outros serviços AWS
  4. **_`Criptografia/Dados em repouso`_**
     - O AWS Config cria um item de configuração sempre que detecta uma alteração em um tipo de recurso que está registrando. Os componentes de um item de configuração incluem metadados, atributos, relações, configuração atual e eventos relacionados
- O AWS config possui um sistema de regras. Essas regras podem ser da propria AWS, outros usuarios ou mesmo personalizadas atraves do AWS Lambda
- É possivel criar e direcionar regras especificas a tipos especificos de recursos ou recursos particulares. As regras são executadas quando esses recursos são criados ou executados e são avaliados periodicamente (por hora, por dia,etc)
  - `Exemplos de regras`:
    - Os volumes do Amazon Elastic Block Store (Amazon EBS) sejam criptografados
    - As instâncias estejam sendo criadas apenas de imagens de máquina da Amazon (AMIs) aprovadas

## **Como funciona?**

1. Ocorre uma alteração em um de seus recursos da AWS.
2. O mecanismo do AWS Config registra e normaliza essa alteração em um formato consistente.
3. O registro da alteração é, então, entregue a um bucket do Amazon Simple Storage Service (Amazon S3), onde pode ser acessado por meio das interfaces de programação de aplicativo (APIs) do AWS Config. A alteração também pode ser enviada por meio de um serviço de notificação, como o Amazon Simple Notification Service (Amazon SNS).
4. Se uma regra do AWS Config tiver sido definida para o recurso afetado, o AWS Config verificará se a alteração não viola a regra. O AWS Config exibe o resultado da avaliação em um painel. O resultado também pode ser enviado ao Amazon SNS

# **Serviços - Cloudwatch**

- O amazon cloudwatch tem a função de monitorar os recursos do usuario e gerar insights para melhorar a eficiencia

- A principal função do Amazon CloudWatch para monitorar o desempenho e a integridade dos seus recursos e aplicativos da AWS

- O usuario também pode usar o CloudWatch para coletar e monitorar arquivos de log de instâncias do EC2, AWS CloudTrail, Amazon Route 53 e outras fontes

- O Amazon CloudWatch é um sistema distribuído de coleta de estatísticas

- Ele coleta e monitora as métricas dos seus aplicativos

- O usuario também pode criar e usar suas próprias métricas personalizadas e receber notificações quando um alarme disparar

- O CloudWatch tem duas opções de monitoramento diferentes:

  1. Monitoramento básico para instâncias do Amazon EC2:

     - Sete métricas pré-selecionadas em uma frequência de 5 minutos e três métricas de verificação de status em uma frequência de 1 minuto, sem custo adicional

  2. Monitoramento detalhado para instâncias do Amazon EC2:

     - Todas as métricas que estão disponíveis para o Monitoramento básico em uma frequência de 1 minuto, por um custo adicional
     - As instâncias com monitoramento detalhado habilitado fornecem agregação de dados pelo Amazon EC2, ID da Amazon Machine Image (AMI) e tipo de instância

- O CloudWatch retém métricas por 15 meses, gratuitamente. As métricas do CloudWatch agora são compatíveis com as seguintes três programações de retenção:

  1. Pontos de dados de 1 minuto estão disponíveis por 15 dias
  2. Pontos de dados de cinco minutos ficam disponíveis por 63 dias
  3. Pontos de dados de uma hora ficam disponíveis por 455 dias

- O usuario pode criar um alarme do CloudWatch que acompanha uma única métrica do CloudWatch ou o resultado de uma expressão matemática baseada em várias métricas do CloudWatch

- O alarme executa uma ou mais ações com base no valor da métrica ou na expressão relativa a um limite por alguns períodos

- Um alarme tem três estados possíveis:

  1. OK

  - A métrica está dentro do limite definido

  2. ALARM

  - A métrica esta fora do limite definido

  3. INSUFFICIENT_DATA

  - O alarme acabou de ser acionado, a métrica não está disponível ou não há dados suficientes para que a métrica determine o estado do alarme

- OBSERVAÇÃO: ALARM é apenas um nome que é dado ao estado e não necessariamente sinaliza uma condição de emergência que exija atenção imediata. Isso significa que a métrica monitorada é igual, maior ou menor que um valor limite especificado. o usuario poderia, por exemplo, definir um alarme que informa quando o CPUCreditBalance para uma determinada instância T2 está ficando em baixa. Em seguida, talvez o usuario possa processar essa notificação programaticamente para suspender um trabalho com uso intensivo da CPU na instância até que o saldo de créditos T2 fique novamente cheio

## **Metricas**

- As métricas são os conceitos fundamentais no CloudWatch

- A métrica representa um conjunto ordenado de pontos de dados publicados no CloudWatch

- Considere uma métrica como uma variável a ser monitorada, e os pontos de dados que representam os valores dessa variável ao longo do tempo

- Por exemplo, o uso da CPU de uma instância do EC2 específica é uma métrica que o Amazon EC2 fornece

- Os pontos de dados em si podem ser provenientes de qualquer aplicativo ou atividade de negócios de onde o usuario colete dados

- As métricas são definidas exclusivamente por um nome, um namespace e zero ou mais dimensões

- Cada ponto de dados tem um carimbo de data/hora e, opcionalmente, uma unidade de medida

- Quando o usuario solicita estatísticas, o stream de dados retornado é identificado por namespace, nome da métrica, dimensão e (opcionalmente) a unidade

- As métricas existem apenas na região em que são criadas

- As métricas padrão do CloudWatch são agrupadas por serviço

  - Por exemplo, se o usuario abrir o Console de gerenciamento da AWS e acessar a tela do serviço do CloudWatch, poderá clicar em um link para visualizar todas as métricas do Amazon EC2. As métricas são exibidas graficamente para que possam ser comparadas

- Para visualizar as métricas disponíveis usando a AWS CLI, use o comando list-metrics para listá-las

  - Por exemplo, executar o comando aws cloudwatch list-metrics --namespace AWS/S3 listará todas as métricas padrão disponíveis do Amazon S3

- Não é possível excluir métricas, mas elas expirarão automaticamente depois de 15 meses se novos dados não forem publicados nelas

- Os pontos de dados com mais de 15 meses expiram numa base rotativa

- À medida que novos pontos de dados chegam, os dados com mais de 15 meses são descartados

- Serviços da AWS enviam métricas ao CloudWatch

- O usuario também pode publicar suas próprias métricas no CloudWatch usando a AWS CLI, uma interface de programação de aplicativos (API) ou um agente do CloudWatch

- As métricas personalizadas são agrupadas pelo namespace que o usuario define ao criá-las

- Um uso comum do Amazon CloudWatch é para monitorar recursos da conta para detectar atividades suspeitas

  - Por exemplo, gerar alertas com base em dados de faturamento é uma boa maneira de detectar uma possível violação de segurança da sua conta da AWS. Alguns clientes não sabem que as suas credenciais ou chaves de acesso do AWS Identity and Access Management (IAM) foram comprometidas até receberem uma fatura de milhares de dólares de cobranças inesperadas. Para detectar isso de forma proativa, o usuario pode habilitar alertas de pagamento nas suas preferências da sua conta e, em seguida, definir alarmes do CloudWatch para alertá-lo se as cobranças de faturamento estimadas para o mês excederem um limite especificado

- Por padrão, as instâncias do EC2 são habilitadas para o monitoramento básico do CloudWatch, com dados disponíveis em incrementos de 5 minutos como parte do nível gratuito da AWS

- No entanto, o usuario também pode habilitar o monitoramento detalhado a um custo adicional

- Depois que o monitoramento detalhado for habilitado, os dados de monitoramento são disponibilizados em incrementos de 1 minuto

## **Componentes de metrica**

- Um **namespace** é um contêiner para as métricas do CloudWatch

- As métricas em namespaces diferentes são isoladas umas das outras, de forma que as métricas de aplicativos diferentes não são agregadas por engano nas mesmas estatísticas

- Os namespaces da AWS usam a convenção de nomenclatura AWS/<service>

  - Por exemplo, o Amazon EC2 usa o namespace AWS/EC2

- Uma **dimensão** é um par de nome-valor que identifica uma métrica de forma exclusiva

- O usuario pode atribuir até 10 dimensões a uma métrica

- Cada métrica tem características específicas que a descrevem, e o usuario pode considerar dimensões como categorias para essas características

- As dimensões lhe ajudam a projetar uma estrutura para o seu plano de estatísticas

- O usuario pode usar dimensões para filtrar os resultados retornados pelo CloudWatch

  - Por exemplo, ao pesquisar por métricas, o usuario pode obter estatísticas para uma determinada instância do EC2, especificando a dimensão InstanceId

- Um **período** é o tempo associado a uma estatística específica do CloudWatch

- Os períodos são definidos pela contagem de segundos

- O usuario pode ajustar como os dados são agregados alterando a extensão do período

- O período mais curto pode ser de 1 segundo ou ir até 1 dia (86.400 segundos)

## **Paineis automaticos**

- Os painéis do Amazon CloudWatch são páginas de início personalizáveis no console do CloudWatch que o usuario pode usar para monitorar os seus recursos em uma única visualização

- O usuario pode criar visualizações personalizadas das métricas e alarmes para os seus recursos da AWS

- O usuario pode obter visualizações agregadas da integridade e desempenho de todos os recursos da AWS por meio dos painéis automáticos do CloudWatch

- Esse recurso permite monitorar e explorar visualizações de métricas e alarmes baseadas em contas e recursos

- O usuario pode detalhar para descobrir a causa raiz dos problemas de desempenho

- Os painéis automáticos são predefinidos com as melhores práticas recomendadas para os serviços da AWS

- Eles permanecem atentos sobre os recursos e são atualizados dinamicamente para refletir o estado mais recente de métricas de desempenho importantes

- Na captura de tela do console, a área superior esquerda mostra uma lista de serviços da AWS que estão sendo usados nessa conta

- Isso também mostra o estado dos alarmes configurados para esses serviços

- A área superior direita mostra todos os alarmes recentes que foram acionados

- O número de alarmes exibidos aqui dependerá de se os alarmes foram ou não configurados e acionados

- A parte inferior do painel permite, opcionalmente, adicionar métricas sobre seus próprios serviços ou aplicativos personalizados à página de visão geral

- O usuario também pode apresentar métricas importantes adicionais dos serviços da AWS que o usuario mais deseja monitorar

- Por padrão, a parte inferior do painel automático mostra as Métricas do painel de serviços variados

- No entanto, este é um link para Criar um novo painel Cloudwatch-Default

- Se o usuario nomear o novo painel como CloudWatch-Default, ele será exibido na página principal do painel CloudWatch: Visão geral

## **Cloudwatch events**

- O Amazon CloudWatch Events oferece um streaming quase em tempo real de eventos do sistema que descrevem as alterações feitas aos recursos da AWS

- Com regras simples que o usuario pode configurar, é possível corresponder eventos e roteá-los para um ou mais streams ou funções de destino

- O CloudWatch Events torna-se ciente das alterações operacionais à medida que ocorrem

- Ele responde a essas mudanças operacionais enviando mensagens, ativando funções, fazendo alterações e capturando informações de estado

- O usuario pode usar o CloudWatch Events para programar ações automatizadas que sejam acionadas automaticamente em determinados momentos usando as expressões cron ou rate

- Antes de usar o CloudWatch Events, o usuario deve compreender os seguintes conceitos:

  1. **Eventos**

  - Um evento indica uma alteração no ambiente da AWS
  - Os recursos da AWS podem gerar eventos quando o seu estado é alterado
    - Por exemplo, o Amazon Elastic Compute Cloud (Amazon EC2) gera um evento quando o estado de uma instância do EC2 muda de pendente para em execução
  - O usuario pode gerar eventos personalizados no nível do aplicativo e publicá-los no CloudWatch Events
  - O usuario também pode configurar eventos programados a serem gerados periodicamente

  2. **Destinos**

  - Um destino processa eventos
  - Os destinos de exemplo incluem instâncias do EC2, funções do AWS Lambda, tópicos do Amazon Simple Notification Service (Amazon SNS) e filas do Amazon Simple Queue Service (Amazon SQS)

  3. **Regras**

  - Uma regra faz a correspondência de eventos de entrada e os encaminha aos destinos para o processamento
  - Uma única regra pode encaminhar para vários destinos, todos processados paralelamente
  - Isso permite que diferentes partes de uma organização procurem e processem os eventos que as interessam

## **Cloudwatch Logs**

- O usuario pode usar o Amazon CloudWatch Logs para monitorar, armazenar e acessar os seus arquivos de log de instâncias do Amazon EC2, do AWS CloudTrail, do Amazon Route 53 e de outras origens

- O usuario pode recuperar os dados de log associados ao CloudWatch Logs

- É possível monitorar os seus logs praticamente em tempo real, em busca de frases, valores ou padrões específicos

  - Por exemplo, o usuario pode definir um alarme para o número de erros que ocorrem nos logs do sistema em uma ou mais de suas instâncias do EC2. o usuario também pode ver gráficos que visualizam a latência de solicitações da Web de logs de aplicativos em suas instâncias do EC2. Depois disso, é possível exibir os dados de log originais para ver a origem do problema

- Os dados de log podem ser armazenados e acessados indefinidamente, bem como armazenados externamente em instâncias do EC2, para que o usuario não precise se preocupar com o preenchimento de discos rígidos

- O usuario pode pensar no processo de análise de log como tendo três fases distintas:

  1. **Configurar**

  - Decida quais informações o usuario precisa capturar em seus logs e onde e como elas serão armazenadas

  2. **Coletar**

  - As instâncias são provisionadas e removidas em um ambiente de nuvem
  - O usuario precisa de uma estratégia para fazer upload de arquivos de log de um servidor periodicamente para que essas informações valiosas não sejam perdidas quando uma instância for eventualmente encerrada

  3. **Analisar**

  - Depois que todos os dados são coletados, é hora de analisar
  - O uso de dados de log lhe oferece maior visibilidade sobre a integridade diária dos seus sistemas
  - Ele também pode fornecer informações sobre as próximas tendências no comportamento do cliente, além de insight sobre como os clientes estão usando o seu sistema no momento

- O CloudWatch Logs lhe permite coletar logs automaticamente de um dos serviços compatíveis, como de instâncias do Amazon EC2

- O usuario deve instalar o novo agente unificado do CloudWatch (ou o agente mais antigo do CloudWatch Logs) em qualquer instância do EC2 da qual o usuario desejar coletar dados de log

- Em seguida, o usuario pode agregar dados de várias instâncias diferentes do EC2 nos chamados grupos de logs

- Cada grupo de logs deve representar um tipo específico de log com um formato definido

- O agente do CloudWatch em cada instância do EC2 coleta dados do log que o usuario especifica (como um log de aplicativo) e os envia ao grupo de logs apropriado

- Um administrador então poderá criar filtros em um grupo de logs para procurar strings específicos ou padrões de string

- Cada correspondência recebe um valor numérico, que é usado para incrementar uma métrica personalizada do CloudWatch

- Os administradores podem usar essa métrica — como fariam com qualquer outra métrica personalizada do CloudWatch — para criar alarmes do CloudWatch ou enviar notificações

- O CloudWatch Logs Insights é uma parte do serviço do CloudWatch que fornece uma linguagem de consulta para uso específico com alguns comandos simples, mas poderosos

- Ele fornece amostras de consultas, descrições de comandos, preenchimento automático de consultas e descoberta de campo de log para ajudá-lo a começar a usar rapidamente

- As amostras de consultas estão incluídas para diversos tipos de logs de serviço da AWS

# **Serviços - Trusted advisor**

- O trusted advisor fornece praticas recomendadas ou verificações em 5 categorias:
  1. Custo
  2. Desempenho
  3. Segurança
  4. Tolerancia a falhas
  5. Limites de serviço
- Status de verificações

  1. Vermelho - ação recomendada
  2. Amarelo - investigação recomendada
  3. Verde - nenhum problema detectado

- As seguintes verificações do Trusted Advisor estão disponíveis para todos os clientes sem nenhum custo:

1. Limites de serviço
2. Security groups: portas específicas sem restrição
3. Uso do AWS Identity and Access Management (IAM)
4. Autenticação multifator (MFA) em conta raiz
5. Snapshots públicos do Amazon Elastic Block Store (Amazon EBS)
6. Snapshots públicos do Amazon Relational Database Service (Amazon RDS)

- O conjunto completo de verificações e orientação está disponível nos planos de suporte Business e Enterprise.
- Usando esse recurso, é possivel melhorar o desempenho e a confiabilidade do sistema, aumentar a segurança e procurar oportunidades de economizar dinheiro.

## **Recursos do Trusted Advisor**

- `Notificações do Trusted Advisor`: atualizado com a implantação de recursos da AWS. Notificado por uma mensagem de e-mail semanal ao optar por este serviço.
- `AWS Identity and Access Management (IAM)`: controle o acesso a verificações ou categorias de verificações específicas.
- `Interface de programação de aplicativo (API) do AWS Support`: recupera e atualiza os resultados do Trusted Advisor programaticamente.
- `Links de ação`: hiperlinks em itens em um relatório do Trusted Advisor que o levam diretamente à console. No console, o usuario pode implementar as recomendações do Trusted Advisor.
- `Alterações recentes`: monitore as alterações recentes do status da verificação no painel do console. As alterações mais recentes aparecem na parte superior da lista para chamar sua atenção.
- `Excluir itens`: personalize o relatório do Trusted Advisor. É possivel excluir itens do resultado da verificação se eles não forem relevantes.
- `Atualizar tudo`: atualiza verificações individuais ou todas as verificações de uma só vez selecionando Atualizar tudo no canto superior direito do painel de resumo. Uma verificação pode ser atualizada de 5 em 5 minutos

# **Serviços - Amazon Organizations**

- O AWS Organizations é um serviço de gerenciamento de contas que permite consolidar várias contas da AWS em uma organização que o usuario cria e gerencia de forma centralizada

- O AWS Organizations inclui recursos de faturamento consolidado e gerenciamento de contas, que ajudam a atender melhor às necessidades orçamentárias, de segurança e de compatibilidade da sua empresa

- Uma organização consiste em contas que são organizadas em unidades organizacionais (UOs)

- Uma UO é um contêiner para várias contas em uma raiz

- Uma UO também pode conter outras UOs, o que permite criar uma hierarquia que se parece com uma árvore de cabeça para baixo

- A árvore tem uma raiz no topo e galhos de UOs que se estendem para baixo, terminando em contas que são as folhas da árvore

- Quando o usuario anexa uma política a um dos nós na hierarquia, ela flui para baixo e afeta todas as ramificações e folhas

- A organização também tem várias políticas que são associadas a algumas das UOs ou diretamente a contas

- Uma UO pode ter apenas um pai e, atualmente, cada conta pode ser membro de exatamente uma UO. Uma conta é uma conta padrão da AWS que contém seus recursos da AWS

- O usuario pode anexar uma política a uma conta para aplicar controles apenas a essa conta

- Os principais benefícios do AWS Organizations são:

  - Políticas de acesso gerenciadas centralmente em várias contas da AWS
  - Acesso controlado aos serviços da AWS
  - Automatizou a criação e o gerenciamento de contas da AWS
  - Faturamento consolidado em várias contas da AWS

## **Segurança com o Organizations**

- O AWS Organizations não substitui a associação de políticas do AWS Identity and Access Management (IAM) a usuários, grupos e funções em uma conta da AWS

- As políticas do IAM permitem que o usuario permita ou negue acesso a serviços da AWS — como Amazon Simple Storage Service (Amazon S3) — e a recursos individuais da AWS (como um bucket específico do S3) ou operações individuais de interface de programação de aplicativos (API) (como s3:CreateBucket)

- Uma política do IAM pode ser aplicada apenas a usuários, grupos ou funções do IAM e nunca pode restringir o usuário raiz da conta da AWS

- Por outro lado, com o Organizations, o usuario usa políticas de controle de serviço (SCPs) para permitir ou negar acesso a determinados serviços da AWS para contas individuais da AWS ou para grupos de contas em uma UO

- As ações especificadas de uma SCP anexada afetam todos os usuários, grupos e funções do IAM de uma conta, incluindo o usuário raiz da conta da AWS

## **Configuração do Organizations**

- Para criar e configurar uma organização, siga estas etapas:

  - _Etapa 1_: cria sua organização com sua conta da AWS atual como a conta de gerenciamento. Esse processo pressupõe que o usuario tenha permissões de administrador na sua conta atual. Depois de criar uma organização, o usuario pode adicionar contas a ela criando novas contas ou convidando contas existentes para ingressar usando a conta de gerenciamento

  - _Etapa 2_: crie unidades organizacionais (UOs) na sua nova organização e mova as contas de membro para essas UOs

  - _Etapa 3_: crie políticas de controle de serviço (SCPs), que permitem aplicar restrições a quais ações que podem ser delegadas a usuários e funções nas contas-membro. Uma SCP é um tipo de política de controle da organização

  - _Etapa 4_: para testar as políticas da sua organização, entre como usuário para cada função em suas UOs e veja como as políticas de controle de serviço afetam o acesso à conta. Como alternativa, o usuario pode usar o simulador de políticas do IAM para testar e solucionar problemas do IAM e de políticas baseadas em recursos anexadas a usuários, grupos ou funções do IAM em sua conta da AWS

## **Regras de nomeclatura**

![nomeclarutra](../Arquivos/nomeclatura%20organizations.png)

## **Acesso ao Organizations**

- O AWS Organizations é disponibilizado para todos os clientes da AWS sem cobranças adicionais

- Ele pode ser gerenciado por meio de diferentes interfaces:

  1. O **Console de gerenciamento da AWS** é uma interface baseada em navegador que o usuario pode usar para gerenciar sua organização e seus recursos da AWS. o usuario pode executar qualquer tarefa da sua organização usando o console

  2. A **AWS Command Line Interface (AWS CLI)** permite que o usuario emita comandos para executar tarefas do AWS Organizations e da AWS. A AWS CLI pode ser mais rápida e mais conveniente do que usar o console

  3. o usuario também pode usar os **kits de desenvolvimento de software (SDKs)** da AWS para lidar com tarefas como assinatura criptográfica de solicitações, gerenciamento de erros e novas tentativas de solicitações automaticamente. Os SDKs da AWS consistem em bibliotecas e códigos de exemplo para várias linguagens de programação e plataformas, como Java, Python, Ruby,.NET, iOS e Android

  4. A **API de consulta HTTPS do AWS Organizations** oferece acesso programático ao AWS Organizations e à AWS. Ela permite que o usuario emita solicitações HTTPS diretamente para o serviço. Quando o usuario usa a API HTTPS, deve incluir o código para assinar digitalmente solicitações usando suas credenciais

# **Serviços - Amazon IAM**

- O AWS Identity and Access Management (IAM) permite gerenciar o acesso aos serviços e recursos da AWS com segurança. Ao usar o IAM, o usuario pode criar e gerenciar usuários e grupos da AWS (para auxiliar na autenticação) e usar permissões para permitir e negar acesso aos recursos da AWS (para auxiliar na autorização).
- O IAM usa conceitos de controle de acesso, como usuários, grupos e permissões, para que seja possível especificar quais usuários podem acessar serviços específicos

- Oferecido gratuitamente como um recurso da conta AWS
- O IAM é global
- Cria `usuarios, grupos e funções`
- Aplica `politicas` às entidades para controlar o acesso aos recursos da AWS
- O IAM é usado para autenticação controla quem pode acessar os recursos. Tambem é usado por aplicativos e outros serviços para autenticação
- Outro uso é autorização pois pode estabelecer quais recursos estão disponiveis para determinado usuario através de politicas de acesso que definem permissões. Reduz a necessidade de compartilhar senhas e chaves de acesso por conceder acesso pelas politicas
- O IAM tambem pode estabelecer politicas de uso para ações especificas. Por exemplo: quem pode terminar uma instancia EC2
- Usuario raiz da conta AWS tem acesso total aos recursos. A AWS não recomenda o uso do usuario raiz para o cotidiano, em vez disso recomenda-se a criação de usuario com acesso total pelo IAM logo que a conta AWS é criada e através desse usuario controlar a conta
  - Se houverem varios usuarios com necessidade de controle total essa pratica exclui a necessidade de compartilhar a senha da conta com todos
- **_`O Principio do privilegio minimo`_** é uma recomendação AWS que incentiva que os usuarios tenham acesso apenas aos recursos que são estritamente necessarios e nenhum excedente
- Quando um usuario IAM é criado ele não tem credenciais padrão, estas devem ser criadas pelo controlador e anexadas/distribuidas com suas respectivas politicas
- Um usuário do IAM é somente uma identidade com permissões associadas. É possivel criar um usuário do IAM para representar um aplicativo que precisa de credenciais para fazer solicitações à AWS. Um aplicativo pode ter sua própria identidade em sua conta e seu próprio conjunto de permissões, da mesma forma que os processos têm suas próprias identidades e permissões em um sistema operacional, como Microsoft Windows ou Linux.

## **Tipos de credenciais de segurança**

1. **_Endereço de email e senha_** - associado a conta raiz da AWS
2. **_Nome de usuario e senha_** - usados para acessar o console de gerenciamento da AWS
3. **_Chaves de acesso e chaves de acesso secretas_** - normalmente usados para CLIs, APIs e SDKs
4. **_Multi-factor authentication (MFA)_** - camada extra de segurança que pode ser usada (e é extremamente recomendada) por usuarios raiz e IAM
5. **_Pares de chaves_** - usados apenas para serviços AWS especificos, como amazon EC2

## **Multi-factor authentication (MFA)**

- A autenticação de 2 fatores pode ser feita com hardware ou software de autenticação (ex: google authenticator, Authy...) ou com codigo via SMS
- O AWS security token service (STS) tambem permite gerar credenciais temporarias de permissão limitada

## **Funcionamento do IAM**

- Autentica o ID de chave de acesso e a chave de acesso secreta
- Fornece acesso a interface de programação de aplicativos (API), AWS Command Line Interface (AWS CLI), kits de desenvolvimento de software (SDKs) e outras ferramentas de desenvolvimento
- Usa o ID da conta ou alias, nome de usuário do IAM e senha
- Se ativada, a MFA solicita o código de autenticação

## **Grupos IAM**

- Um grupo é um conjunto de usuarios IAM
- Grupos IAM não podem ser aninhados (grupos não podem conter outros grupos)
- Usuarios podem pertencer a varios grupos
- Um grupo permite especificar permissões para o conjunto, facilitando o gerenciamento de permissões
- Não existe um grupo padrão que inclua todos os usuarios, caso deseje fazer isso deve o usario com controle total deve criar e atribuir todos os novos usarios a ele
- É uma pratica recomendada atribuir permissões ao grupo em vez de atribuir a mesma permissão a varios usuarios

## **Funções do IAM**

- Delegar acessos
- Fornecer acesso temporario
- Definir permissões

  - Permissões podem ser atribuidas a **_`funções`_**
  - O uso das funções é ideal para situações em que existem usuarios federados (temporarios). Nesse caso não é preciso criar um usuario IAM e sim atribuir aos federados uma função, dessa forma não é preciso compartilhar credenciais nem criar um usuario IAM especifico
  - A função contem suas permissões especificas e podem ser atribuidas para aplicativos tambem
  - `Funções possuem 2 politicas que devem ser atribuidas:`

  1. **_Politica de confiança_** - especifica quem tem permissão de assumir tal função, como principal ou entidade confiavel
  2. **_Politica de acesso_** - define quais ações e recursos o principal pode usar. O principal pode ser:
     - Conta da AWS
     - Serviço da AWS
     - Provedor de security assertion markup language (SAML)
     - Provedor de identidade (IDP) que pode incluir login with amazon, google, facebook
     - Usuario, grupo ou função do IAM de outras contas AWS (podem ser de outros usuarios)

- Como as políticas são armazenadas no formato JavaScript Object Notation (JSON), o usuario pode usá-las com um sistema de controle de versão.
- Quando o usuario determina se as permissões são concedidas, o IAM primeiro verifica se há uma política de negação explícita. Se não houver, ele vai então conferir se há uma política de permissão explícita. Caso não haja uma política de permissão nem de negação explícita, o IAM reverterá para o padrão: negação implícita.

## **Tipos de politica do IAM**

## **_Politicas baseadas em identidade_**

- As políticas baseadas em identidade são políticas de permissões que o usuario pode anexar a um principal ou uma identidade, como um usuário, uma função ou um grupo do IAM. Essas políticas controlam quais ações essa identidade pode realizar, em quais recursos e em que condições. As políticas baseadas em identidade podem ser categorizadas como:

  - **_Políticas gerenciadas_**: políticas independentes baseadas em identidade que o usuario pode anexar a vários usuários, grupos e funções em sua conta da AWS
  - **_Políticas em linha_**: políticas que o usuario cria e gerencia e que são incorporadas diretamente em um único usuário, grupo ou função

## **_Politicas baseadas em recursos_**

É possivel usar o simulador de políticas do IAM para testar e solucionar problemas do IAM e políticas baseadas em recursos

- Políticas com base em recursos são documentos de política JSON anexados a um recurso, como um bucket do Amazon Simple Storage Service (Amazon S3). Essas políticas controlam quais ações uma entidade principal pode realizar nesse recurso e em quais condições.
- As políticas baseadas em recurso são políticas em linha. Não há políticas baseadas em recurso gerenciadas
  - As permissões no nível do recurso nem sempre permitem todas as ações
  - Para instâncias do EC2, por exemplo, ações como Reiniciar, Iniciar, Parar e Terminar podem ser especificadas

# **Serviços - Amazon VPC**

- Uma VPC é uma rede virtual privada. Por definição funciona da mesma que uma rede convencional só que em nuvem

- Uma VPC é dedidaca a uma conta AWS

- Pertenca a **_`apenas uma região AWS`_**

- Pode abranger varias zonas de disponibilidade

- Esta logicamente isolada de outras VPCs

- É possivel criar varias VPC em 1 conta AWS

- É possivel criar sub-redes em uma VPC mas não é recomendado varias sub-redes a fim de reduzir a complexidade da rede

- Ao criar uma VPC é possivel especificar o intervalo de endereços IPV4 escolhendo um bloco CIDR

  - O intervalo pode ser /16 (65.536 endereços) ou /28(16 endereços)
  - Os endereços não podem ser alterados depois que a VPC é criada

- As VPCs possuem um roteador implícito que roteia todo o tráfego na VPC

- Os endereços não podem se sobrepor aos endereços de outras redes na qual a VPC esteja conectada

- Numa VPC pode ser criado: sub-redes, tabela de rotas, security group, lista de controle de acesso à rede (ACL de rede)

## **Comando CLI para criar uma VPC**

```bash
$ aws ec2 create-vpc --cidr-block 10.0.0.0/16
```

## **Endereços de rede reservados para AWS**

![Endereços](../Arquivos/Endereços%20reservados%20AWS.png)

## **Recurso de atribuição automática de sub-rede IP pública**

- Somente instâncias executadas em uma Amazon VPC padrão recebem um endereço IP público durante a criação

- As instâncias criadas em VPCs personalizadas exigem a substituição da configuração padrão para receber endereços IP públicos

- Como alternativa, defina as configurações Modificar atribuição automática de IP em sub-redes para atribuir automaticamente endereços IP públicos às instâncias

- Diferentemente dos endereços IP elásticos, os endereços IP públicos não são estáticos

## **Tabela de rotas (ACL)**

- Uma tabela de rotas é um mecanismo usado para rotear o tráfego originado de uma sub-rede associada em uma VPC

- Ela contém um conjunto de regras (também chamado de rotas) que determinam para onde o tráfego é enviado

- As rotas em uma tabela de rotas consistem em uma orientação e um destino

- O roteador lê a rota assim: "Qualquer tráfego que vai para a orientação deve ser roteado por meio do destino"

- Um destino pode ser um ID de instância específico, um ID de interface de rede elástica, um gateway de Internet ou um gateway privado virtual

- Quando uma VPC é criada, uma tabela de rotas padrão também é criada

- Essa tabela de rotas padrão tem uma regra que roteia o tráfego local para qualquer lugar dentro do intervalo de endereços IP da VPC

  - O usuario pode adicionar mais rotas à tabela de rotas padrão

- Quando o usuario cria uma sub-rede, ela é automaticamente associada à tabela de rotas padrão da VPC
  - Se o usuario não quiser usar essa tabela de rotas, em vez disso, poderá criar uma tabela de rotas personalizada e associá-la à sub-rede

## **Interface de rede elastica(NIC)**

- Uma interface de rede elástica, também chamada de interface de rede (NIC), é uma interface de rede virtual (NIC) anexada a um EC2 instância

- Ela fornece o ponto de conexão que permite que uma instância se comunique com uma rede

- Cada interface de rede tem um endereço IP primário, além de endereços IP secundários adicionais

- Ele também tem seu próprio endereço de media access control (MAC) e grupos de segurança

- Cada instância em uma VPC tem uma NIC padrão, a interface de rede primária, que recebe um endereço IPv4 privado do intervalo de endereços IPv4 da VPC

  - Não é possível desanexar uma interface de rede primária de uma instância

- O usuario pode criar e anexar NICs adicionais a uma instância

  - O número de NICs que o usuario pode anexar varia de acordo com o tipo de instância

  - Uma NIC adicional pode ser anexada a uma instância, desanexada dessa instância e anexada a outra instância

  - Os atributos da NIC o seguem quando eles são anexados ou desconectados das instâncias

  - Quando o usuario move uma NIC de uma instância para outra, o tráfego de rede é redirecionado para a nova instância.

## **VPC Padrão**

- Quando o usuario cria uma conta da AWS, a AWS cria automaticamente uma VPC padrão para o usuario com um bloco CIDR de 172.31.0.0/16

- Essa VPC fornece até 65.536 endereços IPv4 privados no intervalo 172.31.0.0—172.31.255.255

- A AWS também cria automaticamente os seguintes componentes na VPC padrão:
  - Um gateway de Internet para permitir a comunicação com a Internet
  - Uma tabela de rotas padrão com regras para enviar tráfego para endereços IP no intervalo de endereços da VPC para uma rota local
  - Ela também envia tráfego para qualquer outro endereço IP para o gateway da Internet
  - Uma sub-rede pública em cada zona de disponibilidade com um tamanho /20, que fornece até 4.096 endereços
    - A opção Atribuir IP público automaticamente está habilitada para essas sub-redes
    - Qualquer instância executada na VPC padrão obtém automaticamente um endereço IP público. Elas são sub-redes públicas porque estão associadas à tabela de rotas padrão, que tem uma regra que permite o tráfego por meio de um gateway da Internet

## **DNS**

- Um servidor DNS (Domain Name System) é usado para resolver um nome de host DNS (como www.example.com) para seu endereço IP correspondente (como 192.0.2.1)

- Quando o usuario cria uma VPC, a AWS atribui automaticamente um servidor DNS (fornecido pela Amazon) a ela para resolver nomes de host na VPC

  - A partir de dezembro de 2018, esse servidor DNS passa a ser chamado de resolvedor do Amazon Route 53
  - Por padrão, o resolvedor responde diretamente a consultas de DNS para nomes de domínio dentro da VPC
  - Ele realiza pesquisas recursivas em servidores de nomes públicos para todos os outros nomes de domínio

- Se o usuario quiser usar um servidor DNS diferente para uma VPC, as opções disponíveis são:

  1.  Usar o seu próprio servidor DNS

      - Essa opção exige a especificação de um conjunto especial de opções do Dynamic Host Configuration Protocol (DHCP – Protocolo de configuração de host dinâmico) para a VPC

  2.  Usar uma zona hospedada privada do Amazon Route 53

            - Uma zona hospedada é um contêiner que contém informações sobre como o Amazon Route 53 roteia o tráfego para os domínios em uma VPC
            - Uma zona hospedada pública permite que o Amazon Route 53 roteie o tráfego da Internet para recursos dentro de uma VPC
            - Por exemplo, um cliente pode visualizar o site da empresa, que está sendo executado em uma instância do EC2. O Amazon Route 53 usa uma zona hospedada privada para rotear o tráfego dentro de uma ou mais VPCs sem expor recursos à Internet
            - Um caso de uso comum para criar um DNS de zona hospedada privada é chamado de DNS com omissão de rotas
            - Um DNS de omissão de rotas emparelha um DNS de zona hospedada privada com um DNS de zona hospedada pública
            - Com essa implementação, um determinado nome de host DNS resolve de forma diferente, dependendo se a pesquisa vem de dentro ou de fora da VPC
            - Se uma pesquisa for iniciada de dentro da VPC, o nome do host DNS resolverá para um endereço IP especificado. No entanto, se a pesquisa for originada fora da VPC, o mesmo nome de host DNS será resolvido para um endereço IP diferente. Um exemplo de cenário para usar um DNS com omissão de rotas é quando o usuario deseja manter uma versão interna e externa do mesmo site. O DNS com omissão de rotas permite que o usuario acesse a versão interna do site usando o mesmo nome de domínio usado para o site público

## **Opções de conectividade**

![Cenarios](../Arquivos/Cenarios%20e%20soluções%20de%20conectividade.png)

## **Network address translation (NAT)**

- O usuario pode usar um dispositivo NAT para habilitar uma instância em uma sub-rede privada para se conectar à Internet ou a outros serviços da AWS

- Isso também pode impedir a Internet de iniciar conexões com a instância

- Um dispositivo NAT encaminha o tráfego da instância que está na sub-rede privada para a Internet ou outros serviços da AWS. Em seguida, ele envia a resposta de volta para a instância

- Quando a solicitação vai para a Internet, o endereço IP de origem é substituído pelo endereço do dispositivo NAT

- Quando a resposta vai para a instância, o dispositivo NAT converte o endereço de volta para o endereço IP privado da instância

- A AWS oferece um gateway NAT e também uma instância NAT (que normalmente é uma instância do EC2 que executa o software NAT)

- Os gateways NAT são recomendados porque oferecem uma disponibilidade e largura de banda melhores em comparação com as instâncias NAT
  - O serviço NAT Gateway também é um serviço gerenciado da AWS que não exige administração manual

## **Caracteristicas do gateway NAT**

- Serviço gerenciado da AWS

- Redundância integrada dentro de uma zona de disponibilidade

- Exige um endereço IP elástico

- Compatível com os protocolos:

  - – Transmission Control Protocol (TCP – Protocolo de controle de transmissão)
  - User Datagram Protocol (UDP)
  - Internet Control Message Protocol (ICMP – Protocolo de mensagem de controle da Internet)

- Um gateway NAT é criado em uma Zona de disponibilidade específica e é implementado com redundância nessa zona

- Ele exige um endereço IP elástico (endereço IPv4 estático)

- Para criar um gateway NAT:

  1. Especifique a sub-rede em que o usuario deseja criá-la e selecione o ID de alocação de um endereço IP elástico para associar a ela
  2. Atualize as tabelas de rotas das sub-redes privadas para apontar o tráfego da Internet para ela. Isso permite que as instâncias nessas sub-redes se comuniquem com a Internet

## **Emparelhamento de VPC (Peering)**

- Para conectar duas VPCs juntas para trocar tráfego ou dados, o usuario pode criar uma conexão de emparelhamento da VPC

- Uma `conexão de emparelhamento` da VPC é uma conexão de redes entre duas VPCs que permite que o usuario direcione o tráfego entre elas usando endereços IP privados

- As VPCs podem estar na mesma região, em regiões diferentes ou até mesmo em contas diferentes da AWS

- Os dados que são trocados atravessam privadamente a estrutura dorsal da AWS, e nenhum gateway será necessário para o emparelhamento funcionar

- A conexão é controlada pelas tabelas de rotas, que fazem referência à conexão de emparelhamento como um destino para as rotas. Isso resulta em uma conexão sem ponto único de falhas para comunicação ou gargalos de largura de banda

  - Um exemplo de uso de emparelhamento da VPC é permitir que outras VPCs acessem recursos que o usuario possui em uma de suas VPCs. Por exemplo, imagine que uma conexão de emparelhamento de VPC é estabelecida entre duas VPCs em diferentes contas da AWS: Conta 1 e Conta 2. A conexão permite que os recursos da Conta 1 se comuniquem com os recursos na Conta 2 e vice-versa
  - Outro caso de uso para o emparelhamento da VPC é facilitar a transferência de dados. Por exemplo, se o usuario tiver mais de uma conta da AWS, poderá emparelhar as VPCs entre essas contas para criar uma rede de compartilhamento de arquivos

- O usuario pode criar uma conexão de emparelhamento da VPC usando o Console de gerenciamento da AWS

- O emparelhamento de VPC envolve o estabelecimento de uma conexão bidirecional que ambas as partes devem inicializar e aceitar

- Os proprietários de ambas as VPCs devem estabelecer rotas que permitam que o tráfego seja enviado entre as redes

  - Essa relação de roteamento significa que as duas redes não devem ter espaços de endereço sobrepostos

## **Como fazer**

- Para estabelecer uma conexão de emparelhamento da VPC:

  1. O proprietário da VPC solicitante envia um pedido ao proprietário da VPC receptora para criar uma conexão de emparelhamento da VPC

  2. O proprietário da VPC receptora aceita a conexão de emparelhamento da VPC. A aceitação ativa a conexão

  3. O proprietário de cada VPC adiciona uma rota para uma ou mais de suas tabelas de rotas da VPC

     - Essa rota aponta para o intervalo de endereços IP da outra VPC, conhecida como VPC de mesmo nível
     - Essa rota permite o fluxo de tráfego entre as VPCs usando endereços IP privados

  4. Se necessário, o usuario pode atualizar as regras do grupo de segurança associadas a instâncias em cada VPC

     - Essa atualização pode garantir que o tráfego de e para o emparelhamento da VPC não seja restrito
     - Se ambas as VPCs estiverem na mesma região, o usuario poderá fazer referência a um grupo de segurança comum como a origem ou o destino das regras do grupo de segurança

  5. Opcionalmente, é possivel habilitar a resolução de nome de host DNS para a sua conexão da VPC

  - Suponha que as instâncias em ambos os lados da conexão de emparelhamento da VPC se endereçam usando um nome de host DNS público, que é o comportamento padrão. No entanto, talvez o usuario queira que o nome do host seja resolvido para o endereço IP privado da instância em vez do endereço IP público. Nesse caso, a opção de resolução de nome de host DNS é necessária

## **Comando CLI para conexão de emparelhamento**

```bash
aws ec2 create-vpc-peering-connection --vpc-id vpc-1a2b3c4d --peer-vpc-id vpc-11122233
```

## **Limitações**

- As limitações de emparelhamento da VPC incluem:

1. `Sem sobreposição de intervalos de endereços IP privados`

   - Por exemplo, uma VPC com espaço de endereço IP privado 10.2.0.0/16 não pode emparelhar uma VPC com espaço de endereço IP privado 10.2.2.0/24

2. `Sem emparelhamento transitivo`

   - Se a VPC A estiver emparelhada à VPC B e a VPC B estiver emparelhada à VPC C, os recursos na VPC A não têm uma rota direta para os recursos na VPC C, ou vice-versa

3. `Sem roteamento transitivo de borda por meio do AWS Direct Connect`

   - Por exemplo, suponha que a VPC A e a VPC B estejam empatadas e a VPC A também esteja conectada ao seu data center por meio do AWS Direct Connect
   - Seu data center não poderá entrar em contato diretamente com os recursos na VPC B

4. `Sem acesso transitivo do gateway da Internet`

   - Se a VPC A e a VPC B estiverem emparelhadas, a VPC B não terá acesso ao gateway da Internet na VPC A. A VPC B deverá definir sua própria rota para a Internet

5. `Sem roteamento NAT entre VPCs`

   - A VPC A não pode rotear o tráfego por meio do servidor NAT na VPC B

6. `Não é possível resolver endereços IP privados`

   - Se o usuario estiver na VPC A e fizer uma pesquisa de DNS de um endereço privado na VPC B, ela não será resolvida

7. `Nenhuma referência cruzada de grupos de segurança entre regiões`

   - O usuario não pode azer referência ao grupo de segurança de uma VPC de mesmo nível que esteja em uma região diferente
   - Use o bloco CIDR (Classless Inter-Domain Routing) da VPC de emparelhamento no campo de origem ou de destino da regra do grupo de segurança

## **AWS Direct Connect plus VPN**

- Ao usar o AWS Direct Connect, o usuario pode criar uma conexão física entre o data center e a AWS

- Essa conexão cria um ponto de extremidade seguro e dedicado entre suas redes internas e sua rede na nuvem
- Uma extremidade do cabo está conectada ao roteador do seu data center. A outra extremidade está conectada a um roteador do AWS Direct Connect em um local do AWS Direct Connect

- Com essa conexão em vigor, o usuario cria interfaces virtuais para acessar diretamente serviços públicos da AWS ou VPCs

- A conexão ignora os provedores de serviços de Internet em seu caminho de rede

- Uma interface virtual pública permite o acesso a serviços voltados para o público (por exemplo, o Amazon Simple Storage Service ou o Amazon S3)

- Uma interface virtual privada permite o acesso a uma VPC e é anexada a um gateway privado virtual

- Ao combinar uma conexão do AWS Direct Connect com a AWS Site-to-Site VPN, o usuario adiciona a criptografia IPsec à conexão

## **AWS VPN CloudHub**

- Se o usuario tiver vários requisitos de conexão VPN entre a VPC e o site remoto, considere o uso de um modelo AWS VPN CloudHub para implementá-los de forma conveniente e econômica

- O AWS VPN CloudHub opera em um modelo simples de hub-and-spoke e pode incluir as conexões do AWS Site-to-Site e do AWS Direct Connect plus VPN

- O modelo permite que os seus sites remotos se comuniquem com a VPC e também entre si

- Para usar o AWS VPN CloudHub:

1. Crie um gateway privado virtual com vários gateways do cliente
2. Cada gateway do cliente é configurado para anunciar as suas rotas do Border Gateway Patrol (BGP) por meio da sua conexão da AWS Site-to-Site VPN
   - Esses anúncios de roteamento são recebidos e anunciados novamente para cada par do BGP. Agora, cada site pode enviar e receber dados dos outros sites e da VPC.

- Exemplo: a sede corporativa em Nova York tem uma conexão do AWS Direct Connect com a VPC. As filiais, o usuario liga conexões VPN de local para local com a VPC. As filiais em Los Angeles e Miami podem enviar e receber dados entre si e com a sede corporativa, sempre usando o AWS VPN CloudHub. Todos os sites estão usando o AWS VPN CloudHub

## **AWS Site-to-site VPN**

- Uma conexão AWS Site-to-Site VPN é uma conexão pela Internet entre sua VPC e sua rede remota

- Essa conexão usa IPsec para proteger a comunicação

- Dois componentes são necessários para estabelecer uma conexão:

  1. Um gateway privado virtual (gateway VPN) no lado da AWS da conexão VPN
  2. Um gateway do cliente no lado remoto da conexão VPN

- O AWS Direct Connect plus VPN combina os recursos do AWS Direct Connect com os recursos do AWS Site-to-Site VPN

## **VPC endpoints (Private Link)**

- Um ponto de extremidade de VPC permite que o usuario conecte de maneira privada a VPC aos serviços da AWS compatíveis e aos serviços de ponto de extremidade de VPC desenvolvidos pelo AWS PrivateLink

- Esse método não requer um gateway de Internet, dispositivo NAT, conexão VPN ou conexão do AWS Direct Connect

- As instâncias na VPC não precisam saber o endereço IP público dos recursos com os quais desejam se comunicar

- O tráfego entre a VPC e o produto da AWS não sai da rede da Amazon

- Dois tipos de ponto de extremidade de VPC estão disponíveis:

  1. `Ponto de extremidade da interface`

     - Um ponto de extremidade da interface é um componente virtual que permite que o usuario se conecte a um serviço exposto por meio do AWS PrivateLink
     - De forma específica, é uma interface de rede elástica, que é uma interface de rede virtual (NIC) que pode ser anexada a uma instância do Amazon EC2
     - Esse cartão virtual possui um endereço IP privado que serve como ponto de registro para o tráfego destinado ao serviço de destino
     - Muitos serviços da AWS podem ser alimentados pelo AWS Private Link
     - O usuario também pode criar seu próprio aplicativo e configurá-lo como um serviço desenvolvido pelo AWS PrivateLink. Esse tipo de serviço é conhecido como um serviço de ponto de extremidade de VPN

  2. `Ponto de extremidade do gateway`
     - Um ponto de extremidade do gateway fornece um mecanismo para acessar diretamente recursos no Amazon S3 e no Amazon DynamoDB sem precisar passar pela Internet
     - Ele é usado como destino em uma tabela de rotas: de uma rota para o recurso ao qual o usuario está se conectando

- O AWS PrivateLink permite que o usuario conecte com segurança VPCs a serviços da AWS compatíveis, serviços de terceiros no AWS Marketplace e aos seus próprios serviços na AWS

- O tráfego entre a VPC e o serviço de destino usa endereços IP privados e nunca sai da rede da AWS

- Para acessar um serviço usando o AWS PrivateLink, o usuario cria um ponto de extremidade da interface para ele na VPC do consumidor do serviço

- Esse ponto de extremidade cria uma interface de rede (NIC) na sub-rede do consumidor de serviços

- Ele tem um endereço IP privado que serve como ponto de entrada para o tráfego que vai para o serviço

- Os pontos de extremidade de serviço disponíveis no AWS PrivateLink aparecem nas sub-redes da VPC como interfaces de rede elástica com endereços IP privados

- A lista de serviços da AWS compatíveis que podem ser invocados usando um endpoint da interface inclui o Amazon EC2, o Elastic Load Balancing e o AWS Systems Manager

## **AWS Transit gateway**

- O AWS Transit Gateway permite que o usuario conecte VPCs e redes locais a um único gateway

- À medida que o número de VPCs no seu ambiente da Nuvem AWS cresce, a necessidade de interconectá-las torna-se cada vez mais desafiadora de implementar

- Com o AWS Transit Gateway, o usuario só precisa criar e gerenciar uma única conexão

- Essa conexão vai do gateway central para cada Amazon VPC, data center local ou escritório remoto em toda a rede

- O AWS Transit Gateway atua como um hub que controla como o tráfego é roteado entre todas as redes conectadas, que agem como spokes

  - Este modelo de hub-and-spoke simplifica significativamente o gerenciamento e reduz os custos operacionais porque cada rede só precisa se conectar ao gateway de trânsito e não a todas as outras redes
  - O usuario pode conectar qualquer nova VPC ao gateway de trânsito. Em seguida, ela fica automaticamente disponível para todas as outras redes que também estão conectadas ao gateway de trânsito

- O AWS Transit Gateway roteia pacotes IPv4 e IPv6 entre anexos usando tabelas de rotas do gateway de trânsito

- As rotas decidem o próximo salto, dependendo do endereço IP de destino do pacote

- O usuario pode configurar as VPCs e conexões VPN anexadas para propagar suas tabelas de rotas para as tabelas de rotas do gateway

- Quando um pacote surge de um anexo, ele é roteado para outro anexo usando a tabela de rotas que corresponde ao endereço IP de destino

- Uma conexão de gateway de trânsito é a origem e o destino dos pacotes

- O usuario pode anexar uma ou mais VPCs e uma ou mais conexões VPN a um gateway de trânsito

- Se as VPCs e as conexões VPN estiverem na mesma região que o gateway de trânsito

## **Segurança de rede**

- Sua rede virtual pode e deve ser protegida em vários níveis diferentes:

1. O nível de segurança com escopo mais amplo está no nível da tabela de rotas.Ter uma sub-rede privada sem caminho direto para a Internet é uma das melhores maneiras de proteger seus recursos de computação internos contra o acesso não autorizado

2. O segundo nível são as listas de controle de acesso à rede (ACLs de rede). As ACLs de rede permitem que o usuario defina o comportamento de segurança padrão para suas sub-redes. A segurança da VPC ou da camada de sub-rede geralmente é controlada pela equipe de segurança de rede

3. No terceiro nível, os security groups podem ser usados para controlar o comportamento no nível de uma instância ou interface de rede elástica. Geralmente administrados por desenvolvedores de aplicações

4. No quarto nível, o usuario pode optar por usar algum tipo de software de detecção baseado em host de terceiros que monitora instâncias individuais do Amazon Elastic Compute Cloud (Amazon EC2) em busca de ameaças específicas (como invasão de malware, bugs conhecidos do sistema operacional e auditoria de segurança)

## **Host Bastion**

- Um host bastion serve como um ponto de partida da Internet pública para as instâncias do Amazon Elastic Compute Cloud (Amazon EC2) e outros recursos em uma sub-rede privada

- Ao usar um bastion host, o usuario pode acessar recursos privados publicamente por meio da Internet de uma forma que ainda minimiza a superfície de ataque da sua sub-rede privada

- Os usuários devem ter chaves válidas para o bastion host e instâncias privadas

  - A AWS recomenda enfaticamente que o usuario use diferentes pares de chaves públicas/privadas para o host bastion e para os recursos na sub-rede privada
  - As chaves para os recursos de sub-rede privada não devem ser armazenadas no host bastion, porque qualquer usuário não autorizado que acessar seu host bastion teria acesso aos recursos na sua sub-rede privada

- Para instâncias do Linux, a maioria dos clientes do Secure Shell (SSH) oferece suporte ao que é conhecido como encaminhamento de agente

  - Esse recurso permite que seu programa SSH local, como PuTTY, passe sua chave privada do cliente por meio da conexão SSH com o host bastion. Em seguida, ele pode passá-lo para a conexão SSH com seus recursos de rede privada

- Para instâncias do Microsoft Windows, o usuario pode usar o console do Amazon EC2 para gerar uma senha de login usando a chave privada. Em seguida, use o programa do cliente de área de trabalho remota (RDP) para fazer login na instância privada com a senha gerada

## **Solução de problemas de rede mais comuns**

## **Problemas ao conectar com o EC2**

- Verifique se a instância está ativa e em execução

  - Verifique se ela foi aprovada nas verificações de Status do sistema e Status da instância

- Verifique se os security groups associados à instância permitem conexões para os protocolos e portas necessários

- Verifique se as ACLs de rede associadas à sub-rede permitem o tráfego das portas e protocolos necessários

- Verifique se a tabela de rotas associada à sub-rede tem regras de destino que apontam para os destinos apropriados

## **Problemas ao conectar com o EC2 pela internet**

- Verifique se o endereço IP público ou o nome DNS (Sistema de Nomes de Domínio) que o usuario está usando está correto

- Verifique se a instância tem um endereço IP público ou um endereço IP elástico

- Verifique se há um gateway da Internet anexado à VPC da instância

- Verifique se a tabela de rotas da sub-rede da instância tem uma regra de rota para o destino 0.0.0.0/0 por meio do gateway da Internet

## **Problema de conexão por SSH**

- Verifique as credenciais de conexão da instância:
  - Nome do usuário
  - Chave privada da instância

## **Problema com NAT**

- Instância NAT ou gateway NAT

  - Verifique se a tabela de rotas possui uma rota para a instância NAT ou o gateway NAT

- Instância NAT

  - Verifique se a Verificação de origem/destino está desativada
  - Reinicie a instância NAT
  - Verifique as regras do security group de entrada

## **Problemas com Peering**

- Certifique-se de que a solicitação de emparelhamento foi aprovada

- Verifique as regras do security group

  - Certifique-se de usar o intervalo de blocos CIDR (Classless Inter-Domain Routing) na VPC A para permitir o acesso da VPC B ou usar o ID do security group da VPC A

- Verificar as ACLs de rede
  - Verifique se as ACLs de rede negam todo o tráfego externo

# **Serviços - Security groups**

- Atua como um firewall integrado aos servidores virtuais e suas regras determinam quem tem acesso às instancias.

- O security group é **_`stateful`_**
  - `Stateful significa que o computador rastreia o estado da interação, geralmente definindo valores em uma configuração de armazenamento designada para essa finalidade`
- No modo mais basico serve como filtro de trafego, com configurações mais avançadas permite manter a rede totalmente privada ou totalmente publica
- As listas de controles de acesso à rede (ACLs de rede) atuam como um firewall para sub-redes associadas. Elas controlam o tráfego de entrada e de saída no nível da sub-rede
  - As ACLs são **_`stateless`_**
    - `Stateless significa que nenhuma informação é retida pelo remetente ou pelo destinatário. Cada solicitação de interação deve ser tratada inteiramente com base nas informações que a acompanham`

# **Serviços - Route 53**

- O Amazon Route 53 fornece um serviço Web de Domain Name System (DNS) na nuvem altamente disponível e escalável
- O Amazon Route 53 foi projetado para fornecer uma maneira confiável e econômica de rotear usuários finais a aplicativos da Internet
- Ele converte URLs —como www.example.com—em endereços IP numéricos que os computadores usam para se conectar uns com os outros, como 192.0.2.1

- O Amazon Route 53 conecta solicitações de usuários à infraestrutura em execução na AWS

  - Exemplos dessa infraestrutura são instâncias do Amazon Elastic Compute Cloud (Amazon EC2), balanceadores de carga do ELB ou buckets do Amazon Simple Storage Service (Amazon S3)
  - Ela também pode ser usada para rotear usuários para infraestruturas fora da AWS

- O usuario pode usar o Amazon Route 53 para configurar verificações de integridade do DNS. Dessa forma, ele pode rotear o tráfego para pontos de extremidade íntegros ou monitorar de forma independente a integridade do aplicativo e dos seus pontos de extremidade

- O Amazon Route 53 permite gerenciar o tráfego globalmente por meio de vários tipos de roteamento, incluindo roteamento baseado em latência, roteamento baseado em geoproximidade ou geolocalização e weighted round robin

- Esses tipos de roteamento podem ser combinados com failover de DNS para permitir uma variedade de arquiteturas de baixa latência e tolerantes a falhas

- O Amazon Route 53 também oferece registro de nome de domínio. ‒ o usuario pode comprar e gerenciar nomes de domínio, como example.com, e o Amazon Route 53 automaticamente definirá as configurações de DNS para os seus domínios.

## **DNS e elastic load balancer**

- Quando o usuario cria um balanceador de carga do ELB, ele recebe um nome DNS padrão. o usuario pode optar por usar o nome DNS padrão ou associar o seu próprio nome DNS, que pode ser gerenciado usando o Route 53

  - Por exemplo, o usuario pode registrar um nome de domínio, como example.com, para o seu site ou aplicativo da Web. Em seguida, o usuario poderia rotear o tráfego da Internet para os recursos em sua conta da AWS
  - Um registro CNAME pode redirecionar consultas DNS para qualquer registro DNS. Por exemplo, o usuario pode criar um registro CNAME que redireciona consultas de apex.example.com para acme.example.com ou acme.example.org
  - Um registro de alias só pode redirecionar consultas para recursos selecionados da AWS. Exemplos desses recursos podem ser buckets do S3, distribuições do Amazon CloudFront ou outro registro na zona hospedada do Route 53 em que o usuario cria o alias

## **Politicas de roteamento**

- O Amazon Route 53 oferece suporte a sete políticas de roteamento diferentes.

  1.  `Política de roteamento simples`: use para um único recurso que execute uma determinada função para o seu domínio, por exemplo, um servidor Web que oferece conteúdo para o site example.com

  2.  `Política de roteamento ponderado`: use para rotear o tráfego para vários recursos nas proporções que o usuario especificar

      - O roteamento ponderado do Amazon Route 53 desloca o tráfego do antigo sistema para o novo (**_`implantação azul e verde`_**)

      - Uma implantação azul/verde é uma implantação que reduz o risco de o site ou o aplicativo ficar indisponível porque o usuario executa dois ambientes de produção correspondentes. Um ambiente é conhecido como ambiente azul e o outro ambiente é conhecido como ambiente verde

      - Os dois ambientes paralelos, cada um com seu próprio balanceador de carga do ELB e configuração do Amazon EC2 Auto Scaling. O recurso de roteamento ponderado do Route 53 é então usado para começar a deslocar os usuários do ambiente existente (azul) para o novo ambiente (verde).

      - Esse processo pode ser feito para migrar usuários para o ambiente verde novo ou atualizado

      - Tecnologias como o Amazon CloudWatch e o Amazon CloudWatch Logs podem ser usadas para monitorar o ambiente verde

      - Se forem encontrados problemas em qualquer lugar do novo ambiente, o roteamento ponderado do Route 53 poderá ser implantado para transferir os usuários de volta para os servidores azuis em execução. Quando o novo ambiente verde estiver totalmente ativo e em execução sem problemas, o ambiente azul poderá ser gradualmente desligado. Devido à latência potencial dos registros DNS, um desligamento total do ambiente azul pode levar de um dia a uma semana

  3.  `Política de roteamento de latência`: use quando o usuario tiver recursos em várias regiões da AWS e quiser rotear o tráfego para a região que fornece a latência mais baixa

      - Suponha que o usuario queira distribuir a sua arquitetura de implantação entre várias regiões em todo o mundo e fornecer aos usuários o tempo de resposta mais rápido. Muitas vezes, mas nem sempre, a Região geograficamente mais próxima do usuário fornece os tempos de resposta mais rápidos

      - Para situações como essa, o usuario pode usar o Route 53 para executar o que é conhecido como _latency-based routing (LBR)_. O LBR permite que o usuario use o DNS para rotear solicitações de usuário para a região da AWS que fornecerá aos usuários a resposta mais rápida

      - Por exemplo, suponha que o usuario tenha load balancers na região Oeste dos EUA (Oregon) e na região Ásia-Pacífico (Sydney). o usuario criou um conjunto de registros de recursos de latência no Amazon Route 53 para cada load balancer. Um usuário em Barcelona, Espanha, insere o nome do seu domínio em um navegador, O DNS roteia a solicitação para um servidor de nomes do Route 53. O Route 53 refere-se a seus dados de latência entre as diferentes regiões e roteia a solicitação adequadamente

  4.  `Política de roteamento de failover`: use quando quiser configurar o failover ativo/passivo

  5.  `Política de roteamento de geolocalização`: use quando quiser rotear o tráfego com base na localização dos seus usuários

  6.  `Política de roteamento de geoproximidade`: use quando desejar rotear o tráfego com base na localização dos seus recursos e, opcionalmente, alternar o tráfego de recursos em uma localização para recursos em outra

  7.  `Roteamento de resposta com valores múltiplos`: use quando quiser que o Route 53 responda a consultas DNS com até oito registros íntegros selecionados aleatoriamente

# **Serviços - Elastic Load balancing**

- Distribui automaticamente o tráfego de aplicativos de entrada entre vários destinos, como instâncias do Amazon Elastic Compute Cloud (Amazon EC2), contêineres e endereços IP

- Um balanceador de carga distribui cargas de trabalho para vários recursos de computação, como servidores virtuais

- Os balanceadores de carga do ELB podem ser configurados na área de serviço do Amazon EC2 no Console de gerenciamento da AWS

- É possivel usar o serviço por meio da AWS Command Line Interface (AWS CLI) ou kits de desenvolvimento de software (SDKs).

- Os principais recursos dos load balancers do ELB incluem:

  - `Alta disponibilidade (HA)`
    - Os balanceadores de carga do ELB podem distribuir tráfego entre vários destinos, incluindo instâncias do EC2, contêineres e endereços IP —em uma única zona de disponibilidade ou em várias zonas de disponibilidade
  - `Verificações de integridade`
    - Os balanceadores de carga do ELB podem ser configurados para detectar destinos não íntegros, interromper o envio de tráfego para eles e, em seguida, distribuir a carga entre os destinos íntegros restantes
  - `Segurança`
    - O usuario pode criar e gerenciar grupos de segurança associados aos balanceadores de carga. o usuario também pode criar um load balancer interno (não voltado para a Internet)
  - `Terminação do Transport Layer Security (TLS)`
    - Os balanceadores de carga incluem gerenciamento integrado de certificados e descriptografia com Secure Sockets Layer (SSL). Assim, o usuario pode gerenciar centralmente as configurações de SSL do balanceador de carga e descarregar o trabalho intensivo da CPU dos seus aplicativos
  - `Balanceamento de carga da camada 4 ou 7`
    - O usuario pode balancear a carga de aplicativos Hypertext Transfer Protocol (HTTP) e Secure HTTP (HTTPS) para feições específicas da camada 7. Lembre-se de que a Camada 7 é a camada do aplicativo no modelo OSI (Open Systems Interconnection)
    - O usuario também pode optar por usar apenas o balanceamento de carga da camada 4 para aplicativos que dependem exclusivamente do TCP. **_`Lembre-se de que a Camada 4 é a camada de transporte no modelo OSI`_**
  - `Monitoramento operacional`
    - Os balanceadores de carga do ELB podem trabalhar com métricas do Amazon CloudWatch e rastreamento de solicitações. o usuario pode usar esses recursos para monitorar o desempenho do aplicativo em tempo real

- Um balanceador de carga é usado por vários motivos:

  1. Para proteger o acesso aos seus servidores Web por meio de um único ponto de acesso exposto
  2. Para desacoplar seu ambiente usando balanceadores de carga públicos e internos
  3. Para fornecer alta disponibilidade e tolerância a falhas com a capacidade de distribuir o tráfego entre várias zonas de disponibilidade
  4. Para aumentar a elasticidade e a escalabilidade com o mínimo de sobrecarga

## **Tipos de balanceadores de carga**

## **_Application Load Balancer_**

- Funciona no nível do aplicativo

- Oferece suporte ao roteamento baseado em conteúdo e aplicativos executados em contêineres

- Suporta um par de protocolos padrão abertos (WebSocket e HTTP/2) e pode fornecer visibilidade adicional sobre a integridade das instâncias e contêineres de destino

- Os `Application load balancers` fornecem roteamento avançado de solicitações que oferece suporte a arquiteturas modernas de aplicações, incluindo microsserviços e aplicações baseadas em contêiner

- Os balanceadores de carga de aplicativo são recomendados para todos os outros casos de uso do Amazon Virtual Private Cloud (Amazon VPC).

- Os sites e aplicativos móveis que são executados em contêineres ou em instâncias do EC2 podem se beneficiar do uso dos balanceadores de carga de aplicativo.

- Casos de uso:
  - Roteamento baseado em caminho e baseado em host
  - Suporte nativo ao IPv6
  - Portas dinâmicas
  - Protocolos de solicitação adicionais compatíveis
  - Proteção contra exclusão e rastreamento de solicitações
  - Métricas aprimoradas e logs de acesso
  - Verificações de integridade direcionadas

## **_Network Load Balancer_**

- Projetado para lidar com dezenas de milhões de solicitações por segundo, mantendo alta taxa de transferência com baixa latência

- Os balanceadores de carga de rede funcionam bem para o balanceamento de carga do tráfego do Transmission Control Protocol (TCP)

- O usuario pode usar a mesma interface de programação de aplicativos (API) para controlar programaticamente os balanceadores de carga de rede e os balanceadores de carga de aplicativo

  - A API inclui controle programático completo de grupos-alvo e destino

- O balanceador de carga de rede é ideal para tráfego TCP de balanceamento de carga

- Ele é otimizado para lidar com padrões de tráfego repentinos e voláteis ao usar um único endereço IP estático por zona de disponibilidade

- Os balanceadores de carga de rede são recomendados para o balanceamento de carga do tráfego TCP em uma VPC

- Caso de uso:
  1. Padrões de tráfego repentinos e voláteis
  2. Único endereço IP estático por zona de disponibilidade
  3. Funciona bem para aplicativos que exigem desempenho extremo
  4. Exibir respostas HTTP
  5. Veja o número de hosts íntegros e não íntegros
  6. Filtre métricas com base em zonas de disponibilidade ou balanceador de carga

## **_Classic Load Balancer_**

- Fornece balanceamento de carga básico entre várias instâncias do Amazon EC2

- Ele opera nos níveis de solicitação e conexão

- Os balanceadores de carga clássica se destinam a aplicativos criados dentro da rede EC2 Classic

- Os Classic load balancers são recomendados para redes clássicas

- Os Classic load balancers são recomendados para todos os outros casos de uso da Amazon VPC

- Casos de uso:
  1. Acesse servidores por meio de um único ponto
  2. Desacople o ambiente do aplicativo
  3. Ofereça alta disponibilidade e tolerância a falhas
  4. Aumente a elasticidade e a escalabilidade

## **Listeners**

- Um listener verifica as solicitações de conexão de clientes usando o protocolo e a porta que o usuario configurar

- As regras que o usuario define para um ouvinte determinam como o balanceador de carga roteia solicitações para seus destinos registrados

  - O ouvinte que define a porta e o protocolo nos quais o balanceador de carga escuta
  - Cada balanceador de carga precisa de pelo menos um ouvinte para aceitar o tráfego

- Cada regra consiste em uma prioridade, uma ou mais ações e uma ou mais condições

- Quando as condições de uma regra são atendidas, suas ações são executadas

- O usuario deve definir uma regra padrão para cada ouvinte e, opcionalmente, pode definir regras adicionais

- Até 50 ouvintes podem estar em um balanceador de carga

## **Como funciona**

- **_No balanceador de aplicação_**

  - Cada ouvinte verifica as solicitações de conexão de clientes usando o protocolo e a porta que o usuario configurar

  - O listener encaminha solicitações a um ou mais grupos de destino, com base nas regras definidas

  - Cada regra especifica um grupo de destino, condição e prioridade

  - Quando a condição é atendida, o tráfego é encaminhado ao grupo de destino

  - O usuario deve definir uma regra padrão para cada listener e pode adicionar regras que especificam diferentes grupos de destino com base no conteúdo da solicitação

  - Essa configuração também é conhecida como roteamento baseado em conteúdo

  - Cada grupo de destino roteia solicitações a um ou mais destinos registrados, como instâncias do EC2, usando o protocolo e o número de porta que o usuario especificar

  - O usuario pode registrar um destino com vários grupos de destino

  - O usuario pode configurar verificações de integridade em cada grupo de destino
    - As verificações de integridade são executadas em todos os destinos registrados a um grupo de destino especificado em uma regra de ouvintes para seu balanceador de carga
    - Observe que cada listener contém uma regra padrão e um listener contém outra regra que roteia solicitações para um grupo de destino diferente

- `Como criar um load balancer pelo CLI`

  ```bash
  aws elbv2 create-load-balancer \ --name my-load-balancer \ --subnets subnet-12345678 subnet-23456789 \ --security-groups sg-12345678
  ```

- `Como criar um grupo de destino para o load balancer pelo CLI`

  ```bash
  aws elbv2 create-target-group \ --name my-targets \ --protocol HTTP \ --port 80 \ --vpc-id vpc-12345678
  ```

- `Como registrar instancias EC2 no grupo de destino`

  ```bash
  aws elbv2 register-targets \ --target-group-arn targetgroup-arn \ --targets Id=i-12345678 Id=i-23456789
  ```

- `Como criar um ouvinte para o load balancer`

  ```bash
  aws elbv2 create-listener \ --load-balancer-arn loadbalancer-arn \ --protocol HTTP \ --port 80 \ --default-actions
  Type=forward,TargetGroupArn=targetgroup-arn
  ```

- `Como verificar a integridade dos destinos registrados`

  ```bash
  aws elbv2 describe-target-health --target-group-arn targetgroup-arn
  ```

# **Serviços - CloudFront**

- Serviço de entrega de conteudo (CDN)

- O Amazon CloudFront é um serviço Web que acelera a distribuição do conteúdo estático e dinâmico da Web, como arquivos .html, .css, .js e arquivos de imagem, para os usuários

- O Amazon CloudFront entrega conteúdo por meio de uma rede mundial de datacenters denominados pontos de presença

- Ao usar o CloudFront, o usuario pode usar vários locais em todo o mundo para entregar seu conteúdo. O uso de uma CDN permite que os usuários interajam com o aplicativo com menor latência. Como resultado, o CloudFront permite que o usuario dimensione, economize dinheiro e melhore o desempenho dos aplicativos

- O Amazon CloudFront oferece os seguintes benefícios:

  1. Construído com base na infraestrutura global da AWS em expansão, com uma rede de pontos de presença que permite que os aplicativos ofereçam alta disponibilidade, escalabilidade e desempenho

  2. Projetado para ser seguro, com proteção de rede e de nível de aplicativo

  3. Projetado para ser programável, para que o usuario possa executar seu código em locais da AWS em todo o mundo, permitindo que o usuario responda aos usuários com a menor latência

  4. Otimizado para baixa latência e alta velocidade de transferência de dados

  5. Custo efetivo porque o usuario paga apenas pela transferência de dados e pelas solicitações usadas para entregar conteúdo aos seus clientes

     - Com o CloudFront, não são exigidos pagamentos adiantados ou taxas fixas de plataforma, compromissos de longo prazo, taxas adicionais para conteúdo dinâmico e serviços profissionais para começar a usar
     - Se o usuario usar origens da AWS, como o Amazon Simple Storage Service (Amazon S3) ou o Elastic Load Balancing, pagará apenas pelos custos de armazenamento, e não pelos dados transferidos entre esses serviços e o CloudFront

  6. Funciona com outros serviços da AWS para que o usuario possa distribuir conteúdo para usuários finais com baixa latência, altas velocidades de transferência de dados e sem compromissos mínimos exigidos

## **Custos**

- Quando o usuario começa a estimar o custo do Amazon CloudFront, deve considerar a distribuição de tráfego, as solicitações e a transferência de dados para fora

1. `Distribuição de tráfego`
   - A transferência de dados e os preços das solicitações variam entre regiões geográficas. Além disso, os preços são baseados no ponto de presença de onde seu conteúdo é veiculado
2. `Solicitações`
   - O número e o tipo de solicitações (HTTP ou HTTPS) feitas e a região geográfica onde as solicitações são feitas
3. `Transferência de dados de saída`
   - A quantidade de dados transferida para fora dos pontos de presença do CloudFront

# **Serviços - Amazon Elastic Compute Cloud (EC2)**

- O EC2 é uma maquina virtual e seu uso mais comum é como servidor

- O EC2 é considerado um IaaS

- O EC2 permite controle total sobre o sistema operacional (windows ou linux) em cada instancia

- Instancias são inicializadas com **_`imagens de maquina da Amazon (AMIs)`_**, podem ter qualquer tamanho e estar em qualquer zona de disponibilidade. São implementadas com poucos cliques ou linha de codigo e são provisionadas em poucos minutos

- É possivel controlar o trafego de ida e de volta para as instancias

- A instancia pode ser implantada via interface grafica AWS ou por CLI

## **9 Passos para implantar um instancia EC2**

## 1. **_Selecionar uma AMI_**

- A AMI contem uma imagem de SO

- É possivel configurar quais contas AWS podem usar determinada AMI

- É possivel especificar quais volumes de bloco (armazenamento) serão anexados a instancia (se houver)

- É possivel configurar uma instancia e replica-la utilizando sua AMI, bem como recupera-la (serve como backup de maquina virtual)

- Pode ter software pré-instalado

- É possivel iniciar varias instancias com a mesma AMI

- `Modo quickstart`: possui uma imagem windows ou linux

- `Modo minhas AMIs`: possui AMIs criadas pelo usuario

- `Modo AWS Marketplace`: Catalogo de modelos de EC2 configurados por terceiros e validados pela AWS

- `Modo AMI de comunidade`: são AMIs criadas pela comunidade e deve ser usado por conta e risco do usuario

## 2. **_Tipo de instância_**

- O tipo de instancia determinará:

  1.Memoria RAM
  2.Capacidade de processamento (CPU)
  3.Espaço e tipo de disco (armazenamento)
  4.Desempenho de rede

- Categorias de tipo de instância:

1. Uso geral
2. Otimizadas para computação
3. Otimizadas para memória
4. Otimizadas para armazenamento
5. Computação acelerada

- Nomes da instancia
  - exemplo: t3.large -> **`T`** (nome da familia) **`3`** (geração) .**`large`** (tamanho)
- Quanto maior a geração mais potente e mais caro

## 3. **_Configurações de rede_**

- A largura de rede de uma instancia varia de acordo com o seu tipo

- Para otimizar o desempenho de rede e largura de banda:

  - Se o usuario tiver instâncias interdependentes, inicie-as em um grupo de colocação de cluster
  - Habilite a rede avançada

- Os tipos de rede são compativeis com a maioria dos tipos de instancia

- **_A Elastic Network Adapter_** é um tipo de rede avançada que comporta velocidades de até 100 Gbps

- Deve ser especificada em qual VPC, e opcionalmente a sub-rede, na qual a instancia EC2 será usada

- Definir se um IP publico deve ser usado. Por padrão a AWS atribui um IP publico caso a instancia não esteja numa sub-rede

- Uma outra parte da configuração de rede é o gateway da Internet

  - Um gateway da Internet é um componente de VPC dimensionado horizontalmente, redundante e altamente disponível que permite a comunicação entre as instâncias na sua VPC e na Internet

- Um gateway privado virtual é um componente opcional compatível com conexões VPN

  - O gateway privado virtual fica no lado da Amazon da conexão de rede privada virtual (VPN)
  - O usuario cria um gateway privado virtual e o anexa à VPC em que deseja criar a conexão de VPN
  - O lado do cliente da conexão VPN tem um gateway do cliente, que é um dispositivo físico ou aplicativo de software

- Cada grupo de segurança define um conjunto de regras de firewall para suas instâncias, que permitem ou bloqueiam o tráfego de entrada e saída

- Os security groups atuam no nível da instância, não no nível da subnet. Portanto, cada instância em uma sub-rede na VPC pode ser atribuída a um conjunto diferente de grupos de segurança

- Se um grupo em particular não for especificado no momento da execução, a instância será automaticamente atribuída ao grupo de segurança padrão da VPC

- Um `endereço IP privado` é sempre atribuído a cada instância quando ela é iniciada

  - É alocado para a instância do pool de endereços IP privados que estão disponíveis na sub-rede
  - Os endereços IP privados permitem a comunicação entre instâncias do EC2 na VPC

- Um `endereço IP público` pode ser atribuído opcionalmente a uma instância do EC2

  - É gerado dinamicamente a partir de um grupo de endereços IP públicos da AWS disponíveis
  - Os clientes podem usar o endereço IP público para se conectar à instância pela Internet
  - Se uma instância for interrompida e, em seguida, iniciada novamente, ela receberá um novo endereço IP público
  - No entanto, se o usuario reinicializar uma instância, ela manterá o mesmo endereço IP público

- Um `endereço IP elástico` é um endereço IP publicamente acessível, alocado a partir de um grupo de endereços IP públicos da AWS

  - Opcionalmente, um endereço IP elástico pode ser provisionado e, em seguida, atribuído a uma instância do EC2
  - Endereços IP elásticos são semelhantes a endereços IP públicos, exceto pelo fato de um endereço IP elástico ser estático
  - É possível reatribuir um endereço IP elástico a outra instância a qualquer momento

- Uma conexão entre duas ou mais VPCs é conhecida como conexão de emparelhamento

## 4. **_Função do IAM (Opcional)_**

- Caso a instancia precise interagir com outros serviços AWS uma função IAM apropriada deve ser anexada

- A função IAM anexada é mantida em um **`perfil de instancia`**

  - Um perfil de instancia é um container para IAM
  - Evita armazenar a chave de acesso e a chave secreta localmente no EC2
  - Permite anexar uma função do AWS Identity and Access Management (IAM) a uma instância do EC2
  - Propagação automática de chaves de acesso para instâncias
    - Rotação automática de chaves de acesso várias vezes ao dia
    - Use em várias instâncias (por exemplo, grupo do Auto Scaling)

- É possivel anexar uma função IAM a instancias já existentes

- `Nunca se deve armazenar credenciais AWS em uma instancia EC2`

## 5. **_Dados do usuário (Opcional)_**

- É possivel especificar um script de dados do usuario ao iniciar uma instancia. O script é usado na primeira execução

- Serve para personalizar o ambiente de tempo de execução da instancia

- Pode ser usado, por exemplo, para reduzir a quantidade de AMIs personalizadas

## 6. **_Opções de armazenamento_**

- Configurar o volume raiz onde o SO será instalado

- Anexar volumes adicionais (opcional)

- Especificar para cada volume

  1. Tamanho do disco (em GB)
  2. Tipo de volume (SSD ou HDD)
  3. Determinar se o volume será excluido quando a instancia for terminada
  4. Se a criptografia precisar ser usada

- Opções de armazenamento:

  1. Elastic block store (EBS) - é possivel interromper a instancia e os dados permanecerão
  2. Armazenamento de instancias EC2 - armazenamento temporario que é perdido caso a instancia seja interrompida

- Outras opções de armazenamento (não servem para ser volume raiz)
  1. Elastic file system
  2. Amazon S3

## 7. **_Tags_**

- É um rotulo que consiste em uma chave e um valor opcional

- Beneficios: filtragem, automação, alocação de custos e controle de acesso

- Serve para anexar metadados a uma instancia EC2

  - Dados sobre sua instância, que o usuario pode usar para configurar ou gerenciar a instância em execução

  - O serviço de metadados é fornecido para cada instância no seguinte endereço IP: 169.254.169.254

  - Metadados da instância de consulta
    1. ami-id
    2. ami-launch-index
    3. ami-manifest-path
    4. block-device-mapping/
    5. events/
    6. hostname
    7. iam/
    8. instance-action
    9. instance-id
    10. instance-type
    11. local-hostname
    12. ... continua (lista grande)

- Como ver os metadados

```bash
# criar uma variavel com o cURL
export INSTANCE_ID=$(curl http://169.254.169.254/latest/meta-data/instance-id)
# usa a variavel num comando
aws ec2 describe-instances --instance-id $INSTANCE_ID
```

## 8. **_Security group_**

- Configurar o conjunto de regras de firewall que controlam o trafego da instancia

- Configurar regras que definam as fontes, as portas e os protocolos (UTP,TCP,ICMP) que serão usadas

- Além de restringir por quais portas o tráfego pode fluir, também é possível restringir a partir de quais endereços IP o tráfego pode se originar

- Se o intervalo de endereços IP de origem for definido como 0.0.0.0/0, nessa porta será permitido tráfego a partir de qualquer origem. No entanto, o usuario também pode especificar um endereço IP específico, um intervalo de roteamento sem classe entre domínios (CIDR)

- Ou o usuario pode habilitar apenas fontes na Nuvem AWS que tenham um grupo de segurança específico atribuído a elas

- É possível atribuir vários grupos de segurança a uma única instância

  - Por exemplo, o usuario pode criar um grupo de segurança administrativo, que permitiria tráfego na porta TCP 22. o usuario também pode criar um grupo de segurança de servidor de banco de dados, que permitiria tráfego na porta TCP 3306. Em seguida, o usuario pode atribuir esses dois grupos de segurança a uma instância

- Se não existirem regras de saida entao por padrão nenhum trafego de saida será permitido

## 9. **_Par de chaves_**

- Especificar ou criar um par de chaves é fundamental para o uso da instancia e consiste em uma chave publica que a AWS armazena e uma chave privada que o usuario armazena

- O par permite conexões seguras com a instancia

- Para AMI Windows a chave serve para obter a senha do Admin necessaria para logar na instancia

- Para AMI Linux a chave serve para usar SSH e conectar com a instancia

- O Amazon EC2 incentiva o uso da criptografia de chave pública para criptografar e descriptografar informações de login

- A criptografia de chave pública usa uma chave pública para criptografar uma parte dos dados, como a senha

- O destinatário então usa uma chave privada para descriptografar os dados. As chaves pública e privada são conhecidas como par de chaves. É necessário um par de chaves para fazer login na instância

- O usuario precisa de um par de chaves conhecido e registrado nas configurações do Secure Shell (SSH) do sistema operacional ao qual o usuario está se conectando

- Normalmente, o usuario especifica o nome do par de chaves ao iniciar a instância pela primeira vez

- O usuario pode criar um novo par de chaves e baixá-lo como parte do processo de execução da instância. Ou, ao executar a instância, o usuario pode especificar um par de chaves ao qual o usuario já tem acesso

- Quando a instância é executada, a AWS cuida do processo de configuração da instância para aceitar o par de chaves que o usuario especificar

- Depois que a instância for inicializada e o usuario desejar se conectar a ela, será possível usar a chave privada para tal

  - As configurações padrão de SSH em instâncias do Linux não solicitam uma senha. Em vez disso, as instâncias do Linux esperam que o usuario use um par de chaves para fazer login, embora seja possível configurar esse processo com AMIs personalizadas
  - Em instâncias do Windows, normalmente um par de chaves é usado para descriptografar a senha de administrador e, em seguida, o login é realizado usando o Remote Desktop Protocol (RDP)

- A senha de usuário Administrador padrão para instâncias do Microsoft Windows e o ec2-user (ou outra senha de usuário padrão) em instâncias do Linux são pontos de partida. Cabe a o usuario definir sua própria segurança no nível da instância e decidir como concederá e revogará permissões para acesso à instância à medida que as pessoas ingressarem e saírem da sua organização

- Para instâncias do Microsoft Windows, use o AWS Directory Service para conceder e revogar acesso a máquinas com base em usuários e grupos existentes do Windows

- Para instâncias do Linux, várias opções de segurança estão disponíveis. Muitos administradores de sistemas optam por usar o `Kerberos`, um protocolo de autenticação de rede que usa criptografia de chave secreta para fornecer autenticação entre clientes e servidores

  - O Kerberos pode fazer parte de uma solução de Autenticação única (SSO)

- Outros administradores de sistemas Linux optam por usar ferramentas como o `ssh-keygen` para gerar seus próprios pares de chaves públicas/privadas para usuários que precisam acessar instâncias do EC2

  - Quando essa opção é escolhida, os detalhes da chave pública são configurados no arquivo.ssh/authorized_keys do usuário e a chave privada é distribuída ao usuário

- Cabe ao cliente da AWS elaborar uma estratégia para adicionar e remover permissões em uma infraestrutura de instâncias em execução

- O usuario pode criar AMIs que contenham todos os usuários atuais da sua empresa. No entanto, essa abordagem é um tanto inflexível e pode ser difícil de gerenciar até mesmo em algumas AMIs

- Aplicativos de gerenciamento de configuração (como o `Chef`, o `Puppet` e o `Ansible`) podem simplificar bastante o processo de concessão e revogação de acesso em um grande número de máquinas. Muitas vezes reduz o processo para alguns comandos

## **Ciclo de vida de uma instancia**

## **Status das instancias**

- **_Pendente_**

  - Quando uma instância é executada pela primeira vez em uma AMI ou quando o usuario inicia uma instância interrompida, ela entra no estado pendente no momento em que a instância é inicializada e implantada em um computador host

  - O tipo de instância que o usuario especificou na inicialização determina o hardware de computador host para sua instância

- **_Em execução_**

  - Quando a instância está totalmente inicializada e pronta, ela sai do estado pendente e entra no estado em execução

  - É possível se conectar à instância em execução pela Internet

  - Depois que o sistema operacional (SO) da instância for inicializado, a instância deverá passar por uma verificação de status do sistema e uma verificação de status da instância. Em seguida, a instância está em um estado em execução

- **_Reinicializando_**

  - Em vez de invocar uma reinicialização do sistema operacional convidado da instância, a AWS recomenda reinicializar a instância usando o console do Amazon EC2, a AWS Command Line Interface (AWS CLI) ou os Kits de Desenvolvimento de Software (SDKs) da AWS. Uma instância reinicializada permanece no mesmo host físico e mantém o mesmo nome de DNS público e o mesmo endereço IP público. Se a instância tiver volumes de armazenamento de instâncias, ela reterá os dados nesses volumes.

- **_Desligando_**

  - Este é um estado intermediário entre em execução e terminada

- **_Interrupção_**

  - As instâncias com suporte do Amazon EBS podem ser interrompidas. Eles entram no estado de interrupção antes de atingir o estado totalmente interrompido

- **_Interrompida ou encerrada_**

  - Uma instância interrompida não incorrerá no mesmo custo que uma instância em execução. Ao iniciar uma instância interrompida, o usuario a retorna ao estado pendente, o que a move para uma nova máquina host

  - De um estado em execução, uma instância pode ser interrompida

    - No entanto, as instâncias que usam um armazenamento de instâncias em vez de um volume durável do Amazon Elastic Block Store (Amazon EBS) para o volume raiz não podem ser interrompidas. Ela só pode ser encerrada
    - As instâncias que têm um volume raiz do EBS podem ser interrompidas ou encerradas. Durante o processo de encerramento, a instância será primeiramente interrompida e, em seguida, encerrada

- **_Terminada_**

  - Uma instância terminada permanece no console do Amazon EC2 por um tempo antes da exclusão da máquina virtual. Porém, não é possível conectar-se nem recuperar uma instância terminada

- **_Hibernação_**

  - Determinados tipos de instância oferecem suporte à hibernação

  - Quando o usuario hiberna uma instância, o sistema operacional convidado preserva os dados na memória, persistindo-os no disco

  - Todos os volumes do EBS permanecem anexados à instância

  - Quando a instância é reiniciada, ela é restaurada para o estado anterior

  - O conteúdo da RAM é recarregado e os processos que estavam sendo executados anteriormente na instância são retomados

  - Como interromper e reiniciar uma instância, o endereço IPv4 público original é liberado e um novo é atribuído quando o usuario o reiniciar

  - Da mesma forma, se a instância estiver hibernando, ela reterá qualquer endereço IP elástico associado

  - O usuario não será cobrado pelo uso de uma instância em hibernação quando ela estiver no estado interrompido

  - No entanto, o usuario será cobrado pelo armazenamento em todos os volumes do EBS, incluindo o armazenamento do conteúdo da memória que persiste no disco

  - Para habilitar a hibernação, ela deve ser configurada na inicialização usando o Console de gerenciamento da AWS ou a AWS Command Line Interface (AWS CLI)

    - `Não é possível habilitar a hibernação em uma instância existente que esteja em execução ou parada`

  - As imagens de máquina da Amazon (AMIs) compatíveis incluem o Amazon Linux AMI 2018.03 lançado em 16 de novembro de 2018 ou posterior

  - O volume raiz da instância deve ser um volume do EBS. O volume do EBS deve ser grande o suficiente para armazenar o conteúdo da RAM e acomodar o uso esperado, como o sistema operacional ou os aplicativos

  - Quando a hibernação é habilitada, é alocado um espaço no volume raiz na inicialização para armazenar a RAM

  - Por fim, o volume raiz do EBS deve ser criptografado para garantir a proteção do conteúdo confidencial na memória

  - Quando os dados da RAM são transferidos para o volume raiz do EBS, eles são sempre criptografados

  - A criptografia do volume raiz é imposta na execução da instância

    - Para garantir que o volume raiz seja um volume criptografado do Amazon EBS, a AMI usada para executar sua instância deve ser criptografada

  - O recurso de hibernação só está disponível para instâncias sob demanda, instâncias spot e instâncias reservadas

- **_Resumo_**
  |Estado|_Em execução_|_Interrompida_|_Encerrada_|_Hibernando_|
  |:------:|:-----:|:-----:|:-----:|:-----:|
  |**Cobrado**?|COBRADO|NÃO COBRADO|NÃO COBRADO|NÃO COBRADO|
  |**Armazenamento**|RETIDO|PERDIDO|PERDIDO|:----RETIDO|
  |**Volume EBS**|RETIDO|RETIDO|EXCLUIDO (se `deleteontermination` estiver habilitado)|RETIDO|
  |**Ip publico**|RETIDO|LANÇADO|LANÇADO|LANÇADO|
  |**Ip elastico**|RETIDO|RETIDO|DESASSOCIADO|RETIDO|

## **Modelos de preço**

- **_Instancias on-demand_** (Baixo custo e flexibilidade)
  - Pagamento por hora
  - Sem compromisso de longo prazo
  - Qualificado para o nivel gratuito da AWS
  - Possui a opção de cobrança por segundo
- **_Hosts dedicados_** (Atende requesitos regulatorios/conformidade)
  - Um servidor fisico com capacidade de instancia EC2 totalmente dedicado para uso
- **_Instancias dedicadas_**
  - Instancias que são executadas em uma VPC em hardware dedicado a um unico cliente
- **_Instancias reservadas_** (Baixo custo e previsibilidade)
  - Pagamento total, parcial ou não antecipado para a instancia que o cliente reservar
  - Desconto na cobrança por hora
  - Periodo de 1 a 3 anos
  - Possui a opção de cobrança por segundo
- **_Instancias reservadas programadas_** (Baixo custo e previsibilidade)
  - Compra uma reserva de capacidade que estará disponivel no periodo escolhido pelo cliente
  - Periodo de 1 ano
- **_Instancias Spot_**(Dinamica, larga escala, custo competitivo)
  - As instancias são executadas desde que estejam disponiveis e a sua sugestão de preço seja superior ao preço da instancia spot
  - Podem ser interrompidas pela AWS com uma notificação de 2 minutos
  - Pode ser interrompida, hibernada ou terminada
  - Os preços podem ser bem menores que as instancias on-demand
  - Boa opção quando se tem flexibilidade sobre quando os aplicativos podem ser executados
  - É feito o pagamento pela programação de uso mesmo que não aconteça
  - Permite que o usuario faça sugestões de preço em instâncias do EC2 não utilizadas, o que pode reduzir seus custos do significativamente. O preço por hora de uma instância spot varia de acordo com a oferta e a demanda. A instância spot é executada sempre que sua sugestão de preço excede o preço de mercado atual.

## **Como funciona**

- As instâncias do EC2 são executadas como máquinas virtuais em computadores host localizados nas zonas de disponibilidade da AWS

- Cada máquina virtual executa um sistema operacional (SO), como Amazon Linux ou Microsoft Windows

- É possível instalar e executar aplicativos no sistema operacional em cada máquina virtual ou até mesmo executar aplicativos empresariais que abrangem várias máquinas virtuais

- As máquinas virtuais são executadas sobre uma camada de hipervisor, que é mantida pela AWS

  - O hipervisor é a camada de plataforma operacional que fornece às instâncias do EC2 acesso ao hardware real que as instâncias precisam executar
  - Esse hardware inclui processadores,memória e armazenamento
  - Cada instância do EC2 recebe um número específico de CPUs virtuais para processamento e uma quantidade de memória ou RAM

- Algumas instâncias do EC2 usam um armazenamento de instâncias

  - O armazenamento de instâncias também é conhecido comoarmazenamento temporário
  - É um armazenamento fisicamente conectado ao computador host e fornece armazenamento temporário em nível de bloco para uso com uma instância
  - Os dados em um armazenamento de instâncias persistem apenas durante o tempo de vida da instância à qual estão associados
  - Se uma instância for reinicializada, os dados no armazenamento de instâncias persistirão
  - Se a instância for interrompida ou encerrada, os dados no armazenamento de instâncias serão perdidos e não poderão ser recuperados

- Muitas instâncias do EC2 usam o Amazon Elastic Block Store (Amazon EBS) para o disco de inicialização e outras necessidades de armazenamento, em vez de um armazenamento de instâncias

- O Amazon EBS fornece volumes persistentes de armazenamento em bloco, o que significa que os dados serão persistidos

  - Por exemplo, os dados ainda persistem nessa instância, mesmo quando a instância do EC2 está em um estado interrompido

- As instâncias otimizadas para Amazon EBS minimizam a contenção de entrada/saída (E/S) entre o Amazon EBS e outro tráfego da sua instância, o que fornece melhores garantias de desempenho

- A contenção de E/S ocorre quando as máquinas virtuais competem por recursos de E/S porque há uma largura de banda de armazenamento limitada

- As instâncias do EC2 podem ter conectividade de rede com outros recursos

- Esses recursos podem ser outras instâncias do EC2, armazenamento de objetos do Amazon Simple Storage Service (Amazon S3) e a Internet em geral

- É possível configurar o grau de acesso à rede para atender às suas demandas e equilibrar as necessidades de acessibilidade com os requisitos de segurança

- Diferentes tipos de instância fornecem níveis diferentes de desempenho de rede

- Os tipos de instância referem-se à seleção disponível de instâncias a serem escolhidas para suas cargas de trabalho

- Existem muitos tipos de instâncias, alguns são de uso geral, enquanto outros são projetados para fornecer CPU adicional (potência de processamento), RAM adicional (memória) ou desempenho adicional de rede de E/S

- Há muitas variações, categorias, famílias e tipos

- O usuario deve escolher o tipo de instância mais econômico que ofereça suporte aos requisitos da carga de trabalho

- Outra opção útil que pode ser invocada quando o usuario executa uma instância a partir de uma AMI é o parâmetro de dados do usuário

- Os dados do usuário são uma ferramenta poderosa que pode ajudar a implantar instâncias do EC2 de forma automatizada e repetível

- Com os dados do usuário, é possível fornecer um script para uma instância do Linux ou Windows

- Quando a instância é executada, esse script é executado como uma série de comandos durante o fim do processo de inicialização

- Os scripts assumem a forma de scripts de shell em instâncias do Linux ou scripts em lote ou PowerShell em instâncias do Windows

- Ao usar os dados do usuário, é possível automatizar a configuração de uma nova instância sem precisar fazer login nela

- Um script de dados de usuário pode, por exemplo, fazer download e executar um script mais longo armazenado em um bucket do Amazon S3

- Também é possivel fazer download e instalar um sistema de gerenciamento de configuração, como o `Chef` ou o `Puppet`. Em seguida, inicie uma tarefa de inicialização de um receita do `Chef` ou de um módulo `Puppet`

- Além disso, é possível chamar comandos da Interface de linhas de comando da AWS (AWS CLI) a partir de seus scripts. Esse processo pressupõe que o usuario inclua código ou instruções para instalar a AWS CLI anteriormente no seu script. (Essas instruções não seriam necessárias se a instância já tiver a AWS CLI pré-instalada nela)

- As instâncias do Amazon Linux vêm com a CLI do AWS pré-instalada nelas

- Os scripts de dados do usuário são executados pelo serviço cloud-init em instâncias do Linux ou pelo serviço EC2Launch em instâncias do Windows

- Por padrão, scripts de dados do usuário e diretivas cloud-init são executados somente durante o primeiro ciclo de inicialização quando uma instância é iniciada. No entanto, o usuario pode configurar scripts de dados do usuário e diretivas cloud-init para serem executadas sempre que a instância for reiniciada a partir de um estado interrompido

- Para fornecer visibilidade sobre o estado das instâncias, a AWS oferece a capacidade de gerar e salvar uma captura de tela do console da instância a partir do Console de gerenciamento da AWS

- Para ajudar a proteger contra a perda de dados causada pelo encerramento acidental de uma instância do Amazon EC2, considere habilitar a proteção contra encerramento

  - A proteção contra encerramento impede que uma instância seja encerrada acidentalmente, exigindo que a proteção contra encerramento seja desativada antes que a instância possa ser encerrada

- Por padrão, toda instância do EC2 executa verificações de origem/destino. Isso significa que a instância deve ser a origem ou o destino de qualquer tráfego que ela envia ou recebe. Entretanto, a instância de conversão de endereços de rede (NAT) deve poder enviar e receber tráfego quando ela não for a origem nem o destino. Por isso, é preciso desativar as verificações de origem/destino na instância NAT

- `Executar o Amazon EC2 na CLI da AWS`

  ```bash
  aws ec2 run-instances --image-id ami-0123456789012345 --instance-type t2.micro --key-name mykeypair --security-group-ids sg-0123456789012345 --subnet-id subnet-0123456789012345 --iam-instance-profile Name=EC2Admin --user-data file://UserData.txt
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=WebServer}]'
  ```

  - O parâmetro subnet-id é opcional. Se o usuario não especificar um, a instância será executada na sub-rede padrão da VPC padrão
  - O parâmetro tag-specifications permite aplicar tags, como um valor de nome à instância

- É uma prática recomendada considerar instâncias do EC2 como recursos temporários, que podem ser criados, desativados e recriados a qualquer momento

- Muitas situações na nuvem exigem a criação de um novo servidor do zero, incluindo:

  1. **_Escalonamento automático_**
     - O usuario pode ter soluções que devem ser capazes de implantar novas instâncias sem intervenção humana
     - Procedimento para instancia com EBS: Interrompe -> Modifica -> Inicia nova
     - Procedimento para instancia com armazenamento de instancia: Migra da velha para a nova instancia
  2. **_Economia de custos_**
     - O usuario pode decidir que não precisa manter uma instância agora. No entanto, talvez o usuario precise da capacidade de recriá-lo em um curto espaço de tempo. Os casos de uso de processamento em lote geralmente estão nessa categoria
  3. **_Downgrade_**
     - talvez o usuario queira fazer downgrade de uma instância de alguma forma, para economizar custos. Por exemplo, o usuario pode fazer um downgrade de uma instância executada em hardware dedicado a o usuario como único cliente para um hardware com locação compartilhada. Ou talvez o usuario queira fazer downgrade do tamanho de uma instância, por exemplo, de t2.xlarge para t2.large
  4. **_Reparação de instâncias prejudicadas_**
     - O hardware subjacente que suporta uma instância do EC2 pode falhar. A inicialização de uma instância colocará a nova instância do EC2 em uma infraestrutura saudável
  5. **_Atualização_**

     - Outra situação que pode exigir a execução de novas instâncias quando o usuario deseja atualizar a arquitetura do sistema operacional ou o tipo de imagem

     - A descontinuação da AMI não afeta as instâncias em execução

     - AMIs do Microsoft Windows

       - Defasadas logo após o lançamento da nova imagem
         – As AMIs são lançadas dentro de 5 dias após o patch da Microsoft
       - Encontrar por nome, não pelo ID da AMI

     - AMIs do Amazon Linux

       - Disponíveis por anos
       - Consulta a AMI do Amazon Linux mais recente

     - `Lembre-se: Manter as instancias atualizadas é responsabilidade do usuario`

     - As atualizações do Microsft Windows podem ser instaladas automaticamente por meio do Windows Update

     - O usuario também pode optar por desativar as atualizações automáticas e instalar atualizações manualmente, dessa forma, o usuario pode testar atualizações recentes para garantir que elas não quebrem nenhum aplicativo existente que possa estar sendo executado no servidor

     - O YUM, que significa Yellowdog Updater, Modified, é um instalador de pacotes baseado no Redhat Package Manager (RPM) de código aberto para Linux

     - Para instâncias do Amazon Linux, a AWS mantém seu próprio repositório de software YUM

     - É possível executar o YUM para instalar todas as atualizações disponíveis mais recentes para todos os aplicativos atualmente em seu servidor

     - Ele também pode ser usado para instalar atualizações uma de cada vez, se for feita uma referência apenas a nomes de pacotes específicos

     - Os serviços AWS Systems Manager e AWS OpsWorks oferecem recursos que simplificam a atualização de instâncias do EC2

     - Há também ferramentas de gerenciamento de configuração de terceiros disponíveis

## **EC2 Auto Scaling**

- O Amazon EC2 Auto Scaling ajuda o usuario a manter a disponibilidade dos aplicativos

- Ele permite que o usuario adicione ou remova automaticamente instâncias do Amazon Elastic Compute Cloud (Amazon EC2) de acordo com as condições definidas por o usuario

  - Por exemplo, o usuario pode configurar o Amazon EC2 Auto Scaling para encerrar instâncias do EC2 que falham nas verificações de status de saúde. Em seguida, o usuario pode configurá-lo para executar novas instâncias do EC2 para substituir as encerradas.
  - Ou o usuario pode criar políticas definidas pelo usuário que usam o Amazon CloudWatch para acionar quando adicionar ou remover instâncias do Amazon EC2. Essas políticas seriam baseadas em condições como a utilização média da CPU da sua frota do Amazon EC2

- Se o usuario tem alterações de carga previsíveis a fazer, pode definir uma programação por meio do Auto Scaling do Amazon EC2 para planejar as atividades de escalabilidade

- Os recursos do Amazon EC2 Auto Scaling oferecem a capacidade de expandir para atender à demanda e aumentar a escala para reduzir custos

- Observação: o usuario também pode criar um grupo de escalabilidade usando uma `configuração de execução`, mas a AWS recomenda enfaticamente que o usuario não use configurações de execução e use um `modelo de execução`

  - Um modelo de execução especifica a configuração da instância do EC2, como AMI, tipo de instância, grupo de segurança

  - Para criar um modelo de inicialização, o usuario deve especificar:

  1. Imagem de máquina da Amazon (AMI)
  2. Tipo de instância
  3. VPC
  4. Grupo de segurança
  5. Armazenamento
  6. Par de chaves de instância
  7. Funções do IAM
  8. Dados do usuário
  9. Marcação

- Para configurar o Amazon EC2 Auto Scaling, o usuario deve primeiro criar um modelo de execução e, em seguida, criar um grupo do Auto Scaling

- O grupo de escalabilidade deve usar a VPC do grupo de segurança especificado no modelo de execução

- O usuario pode escolher uma ou várias sub-redes. A escolha de várias sub-redes em várias zonas de disponibilidade garante alta disponibilidade

- O balanceador de carga permite distribuir o tráfego entre várias instâncias do EC2, dependendo da carga de trabalho das instâncias e da sua integridade

- O monitoramento dá a o usuario uma maior visibilidade ao obter a coleta de métricas

- O tamanho do grupo permite determinar a capacidade mínima e máxima do grupo. À medida que a demanda cresce, o grupo se expande para usar mais instâncias. Se a demanda diminuir, o grupo aumentará e encerrará instâncias que não são mais necessárias

- O Auto Scaling também determina a integridade das instâncias, fornecidas pela instância do EC2, pelo balanceador de carga ou pelas verificações de integridade personalizadas. SE uma instância não estiver íntegra, ela será substituída

- `O dimensionamento automático pode ser definido de três maneiras:`

  1. Defina uma política de escalabilidade que seja escalável ou escalável com base em um alarme do Amazon CloudWatch

  - O usuario pode definir um alarme do CloudWatch, por exemplo, Utilização média da CPU > 50% por 2 minutos—que chama uma política do Auto Scaling do EC2 A política especifica uma das duas opções

    1. A primeira opção, dimensionamento simples, é adicionar ou remover um número fixo de instâncias
    2. A segunda opção, dimensionamento por etapas, é ajustar o número de instâncias em execução como uma porcentagem da capacidade desejada para o grupo do Amazon EC2 Auto Scaling

  2. Defina uma Política de rastreamento de destino em que uma métrica, como a Utilização média da CPU, seja avaliada em relação a um destino

  - Por exemplo, mantenha a utilização média da CPU do seu grupo de Auto Scaling em 50%

  - O usuario também pode definir uma ação agendada
    - As ações agendadas definem um novo valor de capacidade desejado em um horário específico
    - O usuario pode especificar uma ação programada para ser acionada em uma data e hora específicas
    - O usuario também pode especificar uma ação recorrente executada em momentos específicos durante uma semana, mês ou ano
    - As ações programadas são uma excelente maneira de pré-aquecer a capacidade em resposta a picos de tráfego previstos

- O Amazon EC2 Auto Scaling rastreia o estado de integridade das instâncias e encerra instâncias marcadas como não íntegras

- Por padrão, o Amazon EC2 Auto Scaling usa verificações de status de instâncias do EC2

- Se um grupo de Auto Scaling estiver atrás de um balanceador de carga, as verificações de instância do balanceador de carga ou as verificações de instância do EC2 serão usadas para monitoramento de integridade

- Scripts externos podem acionar a reciclagem de uma instância invocando o comando

  ```bash
  aws autoscaling set-instance-health.
  ```

- Com cada grupo de Auto Scaling, o usuario controla quando ele adiciona instâncias (scaling out) ou remove instâncias (dimensionamento) da arquitetura de rede

- O usuario pode dimensionar o tamanho do grupo manualmente anexando e desanexando instâncias, ou o usuario pode automatizar o processo usando uma política de dimensionamento

- A política de encerramento padrão foi criada para ajudar a garantir que suas instâncias atravessem as Zonas de disponibilidade uniformemente para alta disponibilidade

- A política de encerramento padrão costuma ser suficiente para a maioria das situações. No entanto, o usuario tem a opção de substituir a política padrão por uma personalizada.

  - Por exemplo, o usuario pode definir uma política de encerramento personalizada para especificar quais instâncias serão encerradas primeiro durante a redução

- Use a ação `TerminateInstanceInAutoScalingGroup` da API do Amazon EC2 Auto Scaling para encerrar atomicamente uma instância específica e, opcionalmente, diminuir o tamanho do grupo desejado

  - Por exemplo, o usuario pode optar por sempre encerrar a instância com o menor número de sessões de usuários
  - Primeiro determine o ID da instância com o menor número de sessões de usuário e, em seguida, chame `TerminateInstanceInAutoScalingGroup` e passe o ID da instância como um parâmetro

- O Amazon EC2 Auto Scaling oferece suporte a políticas de encerramento personalizadas, incluindo as listadas aqui:

  - **_`OldestInstance`_**
    - Encerra a instância mais antiga do grupo
    - Esta opção é útil quando o usuario está atualizando as instâncias no grupo de Auto Scaling para um novo tipo de instância do EC2
    - O usuario pode gradualmente substituir instâncias do tipo antigo pelas do novo tipo
  - **_`NewestInstance`_**
    - Encerra a instância mais recente no grupo
    - Essa política é útil quando o usuario está testando um novo modelo de execução, mas não quer mantê-lo em produção
  - **_`OldestLaunchTemplate`_**
    - Encerra instâncias que têm o modelo de execução mais antigo
    - Essa opção é boa quando o usuario está atualizando um grupo e eliminando as instâncias de uma configuração de modelo anterior
  - **_`ClosestToNextInstanceHour`_**
    - Encerra instâncias mais próximas da hora de faturamento seguinte
    - É uma boa maneira de maximizar o uso de suas instâncias e gerenciar seus custos de uso do Amazon EC2

- As verificações de saúde do Amazon EC2 Auto Scaling permitem que o usuario crie um grupo de estado estável que garante que uma única instância esteja sempre em execução

  - Por exemplo, suponha que o usuario tenha um servidor NAT que não deseja que seja um único ponto de falha em uma arquitetura de sub-rede público-privada padrão. Um grupo de estado estacionário é útil para essa instância

- Para criar um grupo de estado fixo para uma instância:

  1. Crie um modelo de execução que crie a instância
  2. Crie um grupo do Amazon EC2 Auto Scaling com um tamanho mínimo, máximo e desejado de 1

- Quando uma dessas instâncias é marcada como não íntegra, pode ser porque uma verificação de instância falha. Ou um script externo pode marcar a instância como não íntegra com uma chamada para o comando aws autoscaling set-instance-health da AWS CLI

- O grupo do Amazon EC2 Auto Scaling encerrará a instância existente e criará uma nova instância a partir do modelo de execução do grupo
  - Observe que, em casos como a implantação de uma instância NAT, o NAT ainda é um único ponto de falha. o usuario ainda pode experimentar um tempo de inatividade significativo enquanto uma instância NAT com falha está sendo reciclada

## **_Escalabilidade_**

## **_Dimensionamento com base em um cronograma_**

- Permite que o usuario dimensione seu aplicativo em resposta a alterações de carga previsíveis

  - Por exemplo, digamos que toda semana o tráfego para a aplicação Web começa a aumentar na quarta-feira, permanece alto na quinta-feira e começa a diminuir na sexta-feira. Em situações como essa, o usuario pode planejar as atividades de escalabilidade com base nos padrões de tráfego previsível de sua aplicação Web.

- Para configurar um grupo de Auto Scaling para escalar com base em uma programação:

  1. Crie uma ação programada que informe ao Auto Scaling do Amazon EC2 para executar uma ação de escalabilidade em horários especificados
  2. Especifique o horário de início em que a ação de escalabilidade deve entrar em vigor, além dos novos tamanhos mínimo, máximo e desejado para a ação de escalabilidade
  3. No horário especificado, o Amazon EC2 Auto Scaling atualiza o grupo. Ele atualiza os valores para o tamanho mínimo, máximo e desejado que a ação de dimensionamento especificou.

## **_Dimensionamento dinâmico_**

- Por exemplo, digamos que o usuario tenha um aplicativo da Web que é executada em duas instâncias atualmente. o usuario não deseja que a utilização da CPU do grupo do Auto Scaling exceda 70% por mais de 2 minutos. o usuario pode configurar seu grupo de Auto Scaling para dimensionar automaticamente a fim de atender a essa necessidade.

- O tipo de política determina como a ação de escalabilidade será executada

- O Auto Scaling do Amazon EC2 oferece suporte aos seguintes tipos de políticas de escalabilidade:

  - `Dimensionamento de monitoramento de destino`

    - Aumente ou diminua a capacidade atual do grupo com base em um valor de destino para uma métrica específica - Esse tipo de dimensionamento é semelhante à forma como o termostato mantém a temperatura da sua casa. o usuario seleciona uma temperatura e o termostato faz o resto do trabalho
      ‒ No caso do Amazon EC2, o usuario define a métrica para que o Amazon EC2 Auto Scaling a monitore e Amazon EC2 Auto Scaling faz o resto do trabalho

  - `Dimensionamento de etapas`

    - Aumente ou diminua a capacidade atual do grupo com base em um conjunto de ajustes de escala, conhecidos como ajustes de etapa
    - Esses ajustes de dimensionamento variam de acordo com o tamanho da violação do alarme
    - O Auto Scaling do Amazon EC2 não oferece suporte a desaquecimentos para políticas de escalabilidade em etapas
      ‒ Portanto, o usuario não pode especificar um período de recarga para essas políticas, e o período de recarga padrão para o grupo não se aplica

  - `Dimensionamento simples`

    - Aumente ou diminua a capacidade atual do grupo com base em um único ajuste de escala
    - Seu dimensionamento pode ser baseado em uma métrica de utilização que aumenta ou diminui proporcionalmente ao número de instâncias em um grupo do Auto Scaling
    - Nesse caso, a abordagem recomendada é usar políticas de dimensionamento de rastreamento de destino. Caso contrário, é recomendável usar políticas de dimensionamento de etapas

  - `Dimensionamento preditivo`

    - Usa modelos de aprendizado de máquina para prever o tráfego esperado (e o uso do Amazon EC2), incluindo padrões diários e semanais
    - Essas previsões usam dados coletados do uso real do Amazon EC2 e pontos de dados extraídos das suas próprias observações
    - O modelo precisa de dados históricos de pelo menos 1 dia para iniciar as previsões
    - O modelo é reavaliado a cada 24 horas para criar uma previsão para as próximas 48 horas
    - O dimensionamento preditivo prevê o tráfego futuro com base nas tendências diárias e semanais, incluindo picos que ocorrem regularmente. Ele provisiona o número correto de instâncias do EC2 antes das alterações previstas
    - O dimensionamento preditivo elimina a necessidade de ajustar manualmente os parâmetros do Auto Scaling ao longo do tempo, o que torna o Auto Scaling mais simples de configurar e consumir

      1. Para começar, navegue até a página do AWS Auto Scaling no grupo de serviços “Gerenciamento e governança”. Uma vez criado um plano de escalabilidade para recursos do Amazon EC2 que inclui escalabilidade preditiva.
      2. Após a habilitação da escalabilidade preditiva, o usuario pode visualizar o tráfego previsto e as ações de escalabilidade geradas

    - O usuario pode usar a escalabilidade preditiva, a escalabilidade dinâmica, ou ambas
    - A escalabilidade preditiva funciona ao prever a carga e programar a capacidade mínima; a escalabilidade dinâmica usa o rastreamento de destino para ajustar uma métrica designada do CloudWatch a um destino específico
    - Os dois modelos funcionam bem juntos devido à capacidade mínima programada que o dimensionamento preditivo já definiu
    - O dimensionamento preditivo é uma boa opção para sites e aplicativos que experimentam picos de tráfego periódicos
    - Ela não é projetada para ajudar em situações em que picos de carga não são cíclicos ou previsíveis.

## **Estrategias de construção de AMIs**

- Considerando requisitos, o usuario pode considerar o desenvolvimento de uma ou mais AMIs personalizadas como uma configuração básica

- Para realizar essa tarefa, siga estas etapas:

  1. Execute uma instância do EC2 a partir de uma AMI padrão
  2. Pré-configure todo o software que sua organização exige em uma instância do Amazon EC2
  3. Crie uma AMI personalizada a partir dessa instância

- A nova AMI personalizada se torna a AMI usada para criar todas as novas instâncias na organização

- Para impor a política de que todas as novas instâncias sejam executadas somente a partir da nova AMI base, faça o seguinte:

  - Crie processos que examinam as instâncias do Amazon EC2 em execução na sua conta
  - Encerre todas as instâncias que não estiverem usando as AMIs padrão

- Outra opção é configurar instâncias no momento da inicialização

- Um exemplo de configuração de uma instância no momento da inicialização é o uso da opção de dados do usuário para executar um script quando o usuario executa uma instância do EC2

- Muitas organizações adotam uma abordagem híbrida, em que algumas configurações são incorporadas a uma AMI de base personalizada e outras configurações são configuradas dinamicamente no lançamento

- A abordagem ideal normalmente é determinada considerando as compensações entre simplicidade e flexibilidade

- Considere esses fatores:

  - **Tempos de compilação**

    - Uma AMI com pré-requisitos e configurações pré-instaladas aumenta o tempo necessário para produzir uma compilação

  - **Tempos de inicialização**

    - Uma AMI com uma configuração somente de sistema operacional (SO) leva muito tempo para inicializar quando uma nova instância é inicializada. O empacotamento de pré-requisitos em uma AMI personalizada reduz os tempos de inicialização

  - **Prazo de validade**
    - Quando o usuario instala mais pré-requisitos em uma AMI, corre um risco maior de que seu aplicativo fique vulnerável a um risco de segurança
    - O risco existe se a AMI subjacente não for atualizada com frequência com atualizações de segurança ou de aplicativos
    - Avalie o risco que as atualizações para suas dependências representam

- Em resumo, cada abordagem cria vantagens:

  - **AMI completa**

    - Os aplicativos e todas as dependências são pré-instalados, o que reduz os tempos de inicialização, mas aumenta o tempo de compilação
    - As AMIs completas geralmente têm uma vida útil mais curta. Considere a sua estratégia de reversão

  - **AMIs parcialmente configuradas**

    - Somente software e utilitários de pré-requisito são pré-instalados, o que leva a uma vida útil mais longa para a AMI
    - Essa abordagem fornece um equilíbrio entre a velocidade de inicialização e o tempo de compilação. As reversões se tornam mais fáceis

  - **AMI somente para sistema operacional**

    - Essa abordagem é totalmente configurável e atualizável ao longo do tempo e reduz os tempos de compilação
    - No entanto, ela torna as suas instâncias do EC2 lentas para inicializar, pois todas as instalações e configurações necessárias devem ser executadas no momento da inicialização

## **Criação de AMIs**

- Para criar uma AMI, o usuario pode usar qualquer uma das seguintes ferramentas:

  - Console de Gerenciamento da AWS
  - AWS Command Line Interface (AWS CLI)
  - Interface de programação de aplicativos (API) da AWS

- **AMI ancorada na região atual**

  - A AMI resultante existe somente na região da AWS atual
  - Por exemplo, se o usuario criar uma AMI a partir de uma instância do EC2 em execução na região eu-west-2, a AMI resultante só existirá na região eu-west-2. o usuario pode executar uma nova instância a partir da AMI na região us-east-1 somente se copiar a AMI para outra região primeiro

- **Reinicialização automática da instância**

  - Por padrão, quando o usuario cria uma AMI a partir de uma instância, a instância é reinicializada para garantir a consistência. o usuario pode substituir esse comportamento padrão. No entanto, se o usuario escolher essa opção, a AWS não poderá facilitar a integridade do sistema de arquivos da imagem criada

- **AMIs com volumes do EBS anexados**

  - Além disso, se o usuario criar uma AMI a partir de uma instância do EC2 com volumes adicionais anexados a ela, os volumes anexados serão capturados como parte do processo de criação da AMI

- Quando o usuario cria uma AMI, o Amazon EC2 cria snapshots do volume raiz da instância e de quaisquer outros volumes do EBS anexados à sua instância

- O usuario é cobrado pelos snapshots até que o usuario cancele o registro da AMI e exclua os snapshots

- Para criar uma AMI do Linux baseada no Amazon EBS, comece de uma instância que o usuario executou de uma AMI do Linux baseada no Amazon EBS existente

- Essa AMI pode ser uma AMI obtida do AWS Marketplace, uma AMI importada ou qualquer outra AMI que o usuario possa acessar

## **Criando AMIs Windows**

- A ferramenta Microsoft System Preparation (Sysprep) simplifica o processo de duplicar uma instalação personalizada do Windows

- Recomendamos que o usuario use o Sysprep para criar uma AMI padronizada

- O usuario pode criar novas instâncias do Amazon EC2 para o Windows desta imagem padronizada

- Também recomendamos que o usuario execute o Sysprep com o EC2Launch (Windows Server 2016 e posterior) ou o serviço EC2Config (antes do Windows Server 2016)

- **Inicialização do EC2**
  - O serviço EC2Launch é iniciado quando a instância é inicializada e executa tarefas durante a inicialização
    - Exemplos de tarefas incluem definir o nome do computador, enviar informações da instância para o console do EC2, definir uma senha aleatória para a conta de usuário do Administrador do Windows e muito mais
- **Configuração do EC2**
  - As AMIs do Microsoft Windows para Windows Server 2012 R2 e anteriores incluem um serviço opcional, o serviço EC2Config (EC2Config.exe)
  - O EC2Config começa quando a instância é inicializada
  - Ele executa tarefas durante a inicialização e cada vez que o usuario interrompe ou inicia a instânci
  - O EC2Config também executa tarefas sob demanda
  - Algumas dessas tarefas são ativadas automaticamente, enquanto outras devem ser ativadas manualmente
  - Embora esse serviço seja opcional, ele fornece acesso a recursos avançados que não estão disponíveis de outra forma
  - No entanto, não use o Sysprep para criar um backup de instância do EC2
  - O Sysprep remove informações específicas do sistema
  - Remover tais informações pode ter consequências indesejadas para um backup de instância
  - O Sysprep é usado para preparar uma imagem do EC2 para criação de AMI removendo as ferramentas específicas da imagem, a configuração e a identificação do usuário no sistema Windows

## **Copiando AMIs**

- Uma AMI está ancorada no nível da Região
- Como resultado, se o usuario quiser executar uma instância do EC2 de uma AMI criada em uma região diferente, deverá primeiro copiar a AMI para a região de destino
- O usuario pode copiar uma AMI em uma região da AWS ou em uma região da AWS usando um dos seguintes métodos:

  - Console de Gerenciamento da AWS
  - AWS CLI
  - API do Amazon EC2

- O usuario pode copiar as AMIs baseadas no Amazon EBS e AMIs com armazenamento de instâncias

- O usuario pode copiar AMIs criptografadas e AMIs com snapshots criptografados

- **Snapshots criptografados**

  - O usuario pode criptografar snapshots com sua chave mestra de cliente (CMK) padrão do AWS Key Management Service (AWS KMS) ou uma chave personalizada especificada
  - Em todos os casos, o usuario deve ter permissão para usar a chave selecionada
  - Se o usuario tiver uma AMI com snapshots criptografados, poderá optar por criptografá-los novamente com uma chave de criptografia diferente como parte da ação CopyImage
  - A CopyImage aceita apenas uma chave por vez e criptografa todos os instantâneos de uma imagem (seja raiz ou dados) para essa chave. No entanto, o usuario pode criar manualmente uma AMI com snapshots criptografados com várias chaves

- Observação: uma cópia pode falhar se a AWS não conseguir encontrar uma imagem do Amazon Kernel (AKI) correspondente na região de destino

## **Modelo de inicialização EC2**

- Os usuários podem executar instâncias usando vários métodos dos quais um modelo de inicialização é um

- Outros métodos incluem o assistente, usando uma AMI ou um modelo do CloudFormation

- Os modelos de inicialização permitem que o usuario crie modelos para suas solicitações de inicialização

- Ao criar um modelo de inicialização, o usuario pode especificar as seguintes configurações:

  - Tipo de instância
  - Sub-rede na qual iniciar a instância
  - Par de chaves • Grupo de segurança

- O usuario pode armazenar os parâmetros de inicialização para não precisar especificá-los toda vez que executar uma instância

- Ao criar o modelo de inicialização, o usuario decide quais opções de inicialização incluir no modelo

- Além disso, os modelos de inicialização fornecem os seguintes recursos:

  - Permite que o usuario pré-selecione opções de inicialização do EC2
  - Suporte ao versionamento

- Os modelos de inicialização oferecem os seguintes benefícios:

  - Racionalize e simplifique o processo de inicialização para o EC2 Auto Scaling, Spot Fleet, Instâncias Spot e Instâncias Sob Demanda
  - Reduza o número de etapas necessárias para criar uma instância capturando todos os parâmetros de inicialização em um recurso
  - Facilite a implementação de padrões e práticas recomendadas. Como resultado, o usuario percebe os seguintes benefícios adicionais
    - Ajuda no gerenciamento de custos
    - Melhora a segurança
    - Minimiza o risco de erros de implantação

- Para cada modelo de inicialização, o usuario pode criar uma ou mais versões de modelo de inicialização numeradas. Cada versão pode ter parâmetros de inicialização diferentes

- Ao inicializar uma instância de um modelo de inicialização, o usuario poderá usar qualquer versão do modelo de inicialização. Se o usuario não especificar uma versão, a versão padrão será usada

- O usuario pode definir qualquer versão do modelo de inicialização como a versão padrão. Por padrão, é a primeira versão do modelo de inicialização

- Exemplo de uso:

  - _Versão 1_ — Especifica o tipo de instância, o ID da Imagem de Máquina da Amazon (AMI), a sub-rede e o par de chaves a serem usados ao iniciar a instância

  - _Versão 2_ – A segunda versão é baseada na primeira versão e também especifica um grupo de segurança para a instância

  - _Versão 3_ — Usa valores diferentes para alguns dos parâmetros. A versão 2 é definida como a versão padrão. Se o usuario tiver inicializado uma instância desse modelo de inicialização, os parâmetros de inicialização da versão 2 serão usados caso nenhuma outra versão tenha sido especificada.

# **Serviços - Elastic Bean Stalk**

- O Elastic Beanstalk é outro serviço de computação. Serviço de fácil utilização para implementação e escalabilidade de serviços e aplicativos da Web. Esses aplicativos e serviços são desenvolvidos com Java, .NET, PHP, Node.js, Python, Ruby, Go e Docker

- Eles são desenvolvidos em servidores familiares, como Apache, NGINX, Passenger e Microsoft Internet Information Services (IIS)

- O usuario faz o upload do seu código e o Elastic Beanstalk gerencia automaticamente a implantação, desde o provisionamento de capacidade, balanceamento de carga e escalabilidade automática até o monitoramento da integridade dos aplicativos. Ao mesmo tempo, o usuario mantém total controle sobre os recursos da AWS que possibilitam a operação do aplicativo e acessa os recursos subjacentes a qualquer momento

- É uma plataforma como um serviço (ou PaaS) que facilita a rápida implantação, escalabilidade e gerenciamento dos seus aplicativos

- Toda a plataforma já está criada e o usuario só precisa fazer upload do código

- Escolha o tipo de instância e o banco de dados

- Defina e ajuste o Amazon EC2 Auto Scaling, atualize seu aplicativo, acesse arquivos de log do servidor e habilite o HTTP seguro (HTTPS) no balanceador de carga

- O Elastic Beanstalk é gratuito. o usuario paga apenas pelos serviços subjacentes que o usuario usa

- Use o console de gerenciamento da AWS, um repositório Git ou um ambiente de desenvolvimento integrado (IDE) (como o Apache Eclipse ou o Microsoft Visual Studio) para carregar seu aplicativo

- O Elastic Beanstalk trata automaticamente os detalhes de implementação da capacidade de provisionamento, balanceamento de carga, dimensionamento automático e monitoramento de integridade do aplicativo

- O Elastic Beanstalk provisiona e opera a infraestrutura e gerencia a pilha de aplicativos (plataforma) alem de manter a plataforma subjacente que executa seu aplicativo atualizada com os patches e atualizações mais recentes

- Com o Elastic Beanstalk, seu aplicativo pode lidar com picos de carga de trabalho ou tráfego ao minimizar os custos. Ele escala automaticamente seu aplicativo para cima e para baixo com base nas necessidades do aplicativo usando configurações ajustáveis do Amazon EC2 Auto Scaling.
  - Por exemplo, o usuario pode usar métricas de utilização da CPU para disparar ações de Auto Scaling. Quando o usuario precisar atualizar seu aplicativo depois de implantá-lo, o usuario só precisará carregar o novo código

# **Serviços - Lambda**

- A computação sem servidor permite que o usuario crie e execute aplicativos e serviços sem se preocupar com servidores. Os aplicativos sem servidor não exigem que o usuario provisione, dimensione ou gerencie nenhum servidor

- A AWS fornece computação sem servidor por meio do serviço AWS Lambda. o usuario pode criar funções do Lambda para praticamente qualquer tipo de aplicativo ou serviço de back-end

- Tudo o que é necessário para executar e dimensionar o aplicativo com alta disponibilidade é gerenciado para o usuario

- O Lambda oferece serviços computacionais sem servidor totalmente gerenciados que executam seu código apenas quando necessário e dimensionam automaticamente para milhares de solicitações por segundo

- Com o Lambda, o usuario pode executar código para praticamente qualquer tipo de aplicativo ou serviço de back-end, tudo isso com o mínimo de administração

- O usuario só precisa fazer upload de seu código para que o Lambda se encarregue de todos os itens necessários para executá-lo e dimensioná-lo para alta disponibilidade

- O usuario pode configurar o código para que ele seja acionado automaticamente por meio de outros serviços da AWS ou chamá-lo diretamente usando qualquer aplicativo web ou móvel

- `O tempo de execução de uma função do Lambda é limitado no máximo 15 minutos`

- `O Lambda pode lidar com até 1.000 invocações de função simultâneas em uma única Região`
- Há várias opções de idioma

- Execute código para praticamente qualquer tipo de aplicativo ou serviço de back-end

  - Basta fazer upload de seu código que o Lambda se encarrega de todos os itens necessários para executá-lo e dimensioná-lo com alta disponibilidade
  - Configure seu código para ele ser acionado automaticamente por outros serviços da AWS ou o invoque diretamente de qualquer aplicativo web ou móvel

- Pague apenas pelo tempo de computação que o usuario consome

  - O usuario não paga nada quando seu código não está em execução

- Com o AWS Lambda, não há novas linguagens, ferramentas ou frameworks para aprender. o usuario pode usar qualquer biblioteca de terceiros, até mesmo as nativas

- O AWS Lambda comporta Java, Node.js, C#, Python e Ruby

- Casos de uso do Lambda incluem:

  1. Backups automatizados
  2. Processamento de objetos carregados no Amazon S3
  3. Análise de log orientada por eventos
  4. Transformações orientadas por eventos
  5. Internet das Coisas (IoT)
  6. Operação de sites sem servidor

## **Como implementar**

- Processo de desenvolvimento e implantação de uma função do AWS Lambda com dependências:

1. Defina uma classe de manipulador do Lambda em seu código

   - O manipulador possibilita que o usuario especifique onde o AWS Lambda pode começar a executar seu código. o usuario pode aprender mais sobre os manipuladores do Lambda aqui: https://docs.aws.amazon.com/lambda/latest/dg

2. Crie sua função do AWS Lambda. Ela inclui seu código, informações de configuração correspondentes e requisitos de recursos

3. Configure o acesso a recursos com o AWS Identity and Access Management (IAM) e funções do IAM

   - O usuario pode usar security groups e listas de controle de acesso à rede (ACLs de rede) para fornecer às funções acesso aos seus recursos

4. Faça upload de seu código

5. Teste a função, verifique os resultados e analise os logs

6. Monitore suas funções do Lambda e métricas de relatórios por meio do Amazon CloudWatch
   - Exemplos do que o usuario pode monitorar incluem o número de solicitações, a latência e o número de solicitações que resultam em erros

## **Camadas do lambda**

- As camadas do Lambda permitem que os desenvolvedores:

  1. Configurem uma função do Lambda para usar bibliotecas que não estão incluídas no pacote de implantação

     - A camada do Lambda é um arquivo zip com bibliotecas e um tempo de execução personalizado.

  2. Mantenham o pacote de implantação pequeno
     - Para funções de Node.js, Python e Ruby, o usuario pode desenvolver o código da função no console do Lambda, desde que mantenha seu pacote de implantação abaixo de 3 MB
  3. Evitem erros de dependência de pacote no código
  4. Compartilhem bibliotecas com outros desenvolvedores

- Uma função pode usar até cinco camadas por vez

- O tamanho total descompactado da função e de todas as camadas não pode exceder o limite do pacote de implantação descompactado de `250 MB`

- O usuario pode criar camadas ou usar as camadas publicadas pela AWS e por outros clientes da AWS

- As camadas comportam políticas baseadas em recursos para conceder permissão a contas específicas da AWS, ao AWS Organizations ou a todas as contas

- As camadas são extraídas para o diretório /opt no ambiente de execução da função

## **Limites do lambda**

- O AWS Lambda restringe a quantidade de recursos de computação e de armazenamento que o usuario pode usar para executar e armazenar funções
  - Por exemplo, no momento da redação deste texto, a alocação máxima de memória para uma única função do Lambda é 3 GB. O Lambda também tem limites de simultaneidade e tamanho de pacote (250 MB neste momento)
- Pode ser consultado em: https://docs.aws.amazon.com/pt_br/lambda/latest/dg/gettingstarted-limits.html

# **Serviços - Api Gateway**

- O Amazon API Gateway é um serviço da Amazon Web Services (AWS) que permite que os desenvolvedores criem, publiquem, mantenham, monitorem e protejam interfaces de programação de aplicativo (APIs) em qualquer escala.

- O usuario pode criar APIs que acessem serviços da AWS ou outros serviços da web, bem como dados armazenados na nuvem AWS

- O API Gateway processa todas as tarefas envolvidas na aceitação e no processamento de chamadas de API simultâneas em grande escala

- Essas tarefas incluem gerenciamento de tráfego, controle de autorização e acesso, monitoramento e gerenciamento de versão de APIs

- O usuario paga apenas pelas chamadas de API recebidas e pela quantidade transferida de dados de saída

- O Amazon API Gateway fornece um painel para o usuario monitorar visualmente as chamadas de serviço e visualizar as métricas de desempenho

- O Amazon API Gateway funciona com o AWS Lambda para que o usuario possa criar APIs sem servidor

  - 1. Primeiro, o usuario cria APIs REST com o Amazon API Gateway
  - 2. Em seguida, seus aplicativos web e móveis podem usar essas APIs para chamar serviços da AWS disponíveis para o público por meio do código que o usuario executa no AWS Lambda

- Com o Amazon API Gateway, o usuario pode criar APIs baseadas em recursos RESTful. Depois, o usuario pode usar os recursos de transformação de dados para gerar as solicitações no idioma que seus serviços de destino esperam

- As interfaces da API que o usuario desenvolve têm um front-end e um back-end

- O cliente usa os aplicativos front-end para fazer solicitações

- No Amazon API Gateway, o front-end é encapsulado por solicitações e respostas de método

- O back-end é encapsulado por solicitações e respostas que funcionam com outros serviços da AWS. Esses serviços da AWS fornecem a funcionalidade que a API expõe e agem de forma correspondente

# **Serviços - CloudTrail**

- É um serviço que ajuda a monitorar solicitações (chamadas de API) aos serviços AWS

- Crucial para simplificar a governança, conformidade e a auditoria de riscos

- O cloudtrail registra chamadas de API entre regiões AWS

- Registra chamadas feitas via CLI, SDK ou API

  - Exemplos de registro:

  1. Iniciar/interromper instancias EC2
  2. Criar/modificar bancos de dados
  3. Fazer uploads S3

- Os registros aceleram e facilitam ações de segurança e governança bem como a solução de problemas operacionais

- No registros constam

  1. Quem realizou a solicitação
  2. Data e hora da solicitação
  3. Endereço IP (Protocolo de Internet) de origem
  4. Como a solicitação foi feita
  5. Ação executada
  6. Região onde a ação foi realizada
  7. Resposta

- `Por padrão os logs são mantidos por 7 dias mas podem ser enviados para outros serviços AWS (Amazon S3 por exemplo) o que permite manter os logs por tempo indeterminado`

- Depois que o CloudTrail é configurado, ele envia os logs de auditoria para o Amazon Simple Storage Service (Amazon S3)

- Embora o AWS CloudTrail seja completo, ele não rastreia eventos que ocorrem em uma instância do Amazon Elastic Compute Cloud (Amazon EC2)
  - Por exemplo, o CloudTrail não rastreia quando alguém desliga manualmente uma instância usando uma conexão de sessão do Secure Shell (SSH) com a instância

## **Praticas recomendadas**

1. Ativar a validação de arquivos de log do cloudtrail
2. Agregar arquivos de log a um unico bucket S3
3. Certificar que o cloudtrail esteja ativo globalmente na AWS
4. Restrinjir o acesso aos buckets de log S3
5. Integrar com o cloudwatch
   - Isso permite definir ações a serem executadas quando determinado evento acontecer

## **Configuração de trilha CloudTrail**

- Por padrão, quando o usuario acessa o histórico de eventos do CloudTrail para a região que está visualizando, o CloudTrail só mostrará os resultados dos últimos 90 dias

- Esses eventos são limitados aos eventos de gerenciamento com chamadas de APIs para criar, modificar e excluir, além da atividade da conta

- Para obter um registro completo da atividade da conta, incluindo todos os eventos de gerenciamento, eventos de dados, bem como todas as atividades somente leitura, será necessário configurar uma trilha do CloudTrail

- O usuario pode criar uma trilha usando o console do CloudTrail ou a AWS CLI

- As seguintes opções podem ser configuradas:

1. Crie um bucket do S3 ou especifique um bucket existente no qual o usuario deseja que os arquivos de log sejam armazenados
2. Configure a sua trilha para registrar eventos somente leitura, somente gravação ou todos os eventos de gerenciamento e dados. Por padrão, as trilhas registram todos os eventos de gerenciamento.
3. Crie um tópico do Amazon Simple Notification Service (Amazon SNS) para receber notificações quando os arquivos de log forem entregues.
4. Opcionalmente, configure o Amazon CloudWatch Logs para receber logs do CloudTrail para que o usuario possa monitorar eventos de log específicos.
5. Opcionalmente, ative a criptografia de arquivos de log para maior segurança
6. Como opção, adicione tags (pares de chave-valor personalizados) à sua trilha

## **Monitoramento e segurança**

- Quando o usuario monitora a atividade na sua conta e protege seus recursos e dados, os recursos do CloudWatch e do CloudTrail são complementares
- Recomenda-se o uso de ambos os serviços

  - Por exemplo, o usuario pode examinar os logs das entradas do CloudWatch Logs e do CloudTrail para detectar potenciais usos não autorizados

- Outros exemplos de usos desses serviços incluem:

  1. Monitorar as tentativas de login com falha no Console de gerenciamento da AWS, especialmente tentativas de login de endereços IP suspeitos
  2. Detectar acesso não autorizado a serviços por meio de chamadas de API • Identificar um lançamento suspeito de recursos da AWS

# **Serviços - Amazon S3**

- O dados são armazenados como objetos em buckets e um unico arquivo pode ter até 5 Tb sendo a capacidade de armazenamento praticamente ilimitado

  - Um bucket é um contêiner para objetos armazenados no Amazon S3
  - Cada objeto está contido em um bucket
  - Os objetos são as entidades fundamentais armazenadas no Amazon S3
  - Os objetos consistem em metadados e dados de objeto
  - A porção de dados não é visível para o Amazon S3
  - Os metadados são um conjunto de pares de nome e valor que descreve o objeto
  - Um objeto é identificado exclusivamente em um bucket por uma chave (nome) e um ID de versão

- O armazenamento é projetado para 11 noves (99,999999999%) de durabilidade

- Acesso granular a buckets e objetos

- Ao adicionar um objeto ai bucket deve ser dado um nome unico que é chamado de chave de objeto

  - Uma chave é o identificador exclusivo de um objeto em um bucket
  - Cada objeto em um bucket tem exatamente uma chave
  - A combinação de um intervalo, chave e ID de versão identifica exclusivamente cada objeto
  - Portanto, o usuario pode pensar no Amazon S3 como um mapa de dados básico entre as informações no bucket + chave + versão e o próprio objeto

- Como o armazenamento é de objetos para fazer alterações deve ser feito o upload de todo arquivo (com as modificações) novamente

- É possivel ter varios buckets em uma conta

- É possivel vizualizar logs de acesso aos buckets e seus objetos

- É possivel escolher a **_região geografica_** em que a amazon armazenara o seu bucket

  - Uma região é a região geográfica da AWS em que o Amazon S3 armazena os buckets que o usuario cria
  - Os objetos armazenados em uma Região nunca saem da Região, a menos que o usuario os transfira explicitamente para outra Região
  - **_`Não é possivel escolher a zona de disponibilidade em que ficará o seu bucket`_**

- Por padrão os dados são privados e podem ser criptografados

- Os dados são armazenados de forma redundante

- É possivel recuperar os dados a qualquer momento e em qualquer lugar na internet

- Os nomes dos buckets devem ser exclusivos entre todos os nomes de buckets existentes no Amazon S3

## **Vantagens do S3**

- As vantagens do Amazon S3 incluem:

  - _Criação de buckets_

    - Crie e nomeie um bucket que armazena dados
    - Os buckets são os contêineres fundamentais para armazenamento no Amazon S3

  - _Armazenamento de dados_

    - Armazene uma quantidade praticamente ilimitada de dados em um bucket
    - Cada objeto pode conter até 5 TB de dados
    - Cada objeto é armazenado e recuperado usando uma chave exclusiva atribuída pelo desenvolvedor

  - _Download de dados_

    - Faça download dos seus dados ou permita que outras pessoas baixem dados
    - Faça download dos seus dados a qualquer momento ou permita que outras pessoas façam o mesmo

  - _Permissões_

    - Conceda ou negue acesso a usuários que desejam fazer upload de dados ou fazer download de dados do bucket do S3
    - Conceda permissões de upload e download a três tipos de usuários
    - Os mecanismos de autenticação podem ajudar a manter os dados protegidos contra acesso não autorizado

  - _Interfaces padrão_
    - Use interfaces REST e SOAP baseadas em padrões projetadas para funcionar com qualquer kit de ferramentas de desenvolvimento da Internet

## **Classes de armazenamento**

- O Amazon S3 oferece uma variedade de classes de armazenamento no nível do objeto projetadas para diferentes casos de uso:

1. **_Amazon S3 Standard_**

   - Projetado para ter alta durabilidade, acesso rapido e frequente
   - Adequado para a maioria dos casos

2. **_Amazon S3 Intelligent-Tiering_**

   - Projetado para otimizar custos, movendo automaticamente dados não usados por mais de 30 dias para um nivel de acesso mais economico e quando esses dados são acessados novamente retornam para o nivel de acesso normal (os 30 dias reiniciam)
   - Não existe impacto no desempenho e os custos são uma taxa fixa mensal e nenhum adicional
   - Ideal para dados de longa duração e frequencia de acesso imprevisivel

3. **_Amazon S3 Standard-Infrequent Access (Amazon S3 Standard-IA)_**

   - Usado para dados com pouco acesso mas com a necessidade de altissima velocidade de acesso
   - Possui alta velocidade de transferencia, custos reduzidos por GB transferido e recuperado
   - Ideal para backups de longo prazo e dados para recuperação de desastres

4. **_Amazon S3 One Zone-Infrequent Access (Amazon S3 One Zone-IA)_**

   - Similar ao anterior tendo como diferencial o fato de ser mantido em apenas 1 zona de disponibilidade (o padrão são 3 zonas)
   - Possui custo menor que o S3 Standard-Infrequent Access e é ideal para backups secundarios ou dados que possam ser recriados com facilidade, tambem serve como armazenamento economico de dados replicados de outras zonas de disponibilidade

5. **_Amazon Simple Storage Service Glacier_**

   - Projetado para ser duravel e de baixo custo
   - Possui configurações variaveis de suprimento, podendo variar de alguns minutos até algumas horas
   - Possui configurações de ciclo de vida para transferir dados de outras classes S3 para este de acordo com a frequencia de uso

6. **_Amazon S3 Glacier Deep Archive_**

   - Classe com menor custo
   - Projetado para armazenamento de longo prazo e que pode ser acessado apenas 1 ou 2 vezes por ano
   - Ideal para usuarios que acessam pouco os dados ou para necessidades de recuperação de desastres
   - O tempo de restauração pode ser de até 12h

- Os buckets podem ser acessados via interface grafica aws, CLI, SDKs, endpoints HTTP e HTTPS

- Nomeclatura: https://s3-ap-northeast-1.amazonaws.com/[nome do bucket]/[nome do objeto]

- O scaling do S3 é initerrupta e nenhum infraestrutura precisa ser gerida pelo cliente

## **Preços**

- **_`o usuario paga por:`_**

1. GBs por mês
2. Transferencia para **_`fora`_**, para outras regiões
3. Solicitações PUT, COPY, POST, LIST, GET

- **_`o usuario não paga:`_**

1. Transferencia para **_`dentro`_** do amazon S3
2. Transferencia para **_`fora`_** entre o amazon S3 e o Cloudfront ou EC2 **_`na mesma região`_**

## **Fatores que estimam o custo**

1. Tipo/classe do armazenamento
2. Quantidade de armazenamento
3. Quantidade de solicitações (as solicitações GET tem taxas diferentes)
4. Transferencia de **_`saida`_**

## **Hospedagem de site estatico no S3**

- O Amazon S3 fornece armazenamento de objetos e tem muitos usos práticos

- Ao usar o Amazon S3 para essa finalidade, a necessidade de implantar uma infraestrutura de tempo de execução complexa ou dispendiosa pode ser evitada

- Em um site estático, as páginas da Web são criadas usando linguagens simples, como HTML, CSS ou JavaScript. Por outro lado, um site dinâmico depende do processamento do lado do servidor, incluindo scripts do lado do servidor, como PHP, JSP ou ASP.NET

- A hospedagem de um site estático no Amazon S3 envolve algumas etapas:

  1. Primeiro, crie um bucket no Amazon S3 para armazenar o conteúdo do site
  2. Em seguida, configure o bucket do S3 para habilitar a hospedagem de sites e conceder permissões de leitura pública para seu conteúdo
  3. Por fim, carregue o conteúdo do site para o bucket usando o Console de gerenciamento da AWS ou a AWS Command Line Interface (AWS CLI)
  4. Acesse o site na URL do endpoint que o Amazon S3 atribui a ele. A URL do endpoint inclui o nome do bucket e o nome da região que o contém, conforme mostrado no diagrama.

     - `Observação`: - Existe diferença nos formatos de URL do endpoint do site. O caractere separador antes de <região> é um ponto (.) ou um traço (-). O tipo de separador depende da Região que contém o bucket do S3, perceba:

     1. <http://bucket-name.s3-website-><região>.amazonaws.com
     2. <http://bucket-name.s3-website>.<região>.amazonaws.com

     - O URL contém o nome do bucket e o nome da região em que o bucket foi criado

- `Como armazenar`:
  - Deve armazenar o site em uma hierarquia de pastas que reflita sua estrutura de conteúdo
  - Deve incluir um documento de índice definido durante a configuração do bucket
    - O nome padrão é index.html

## **_Dominio_**

- Em vez de acessar um site estático por meio do seu URL de ponto de extremidade do Amazon S3 atribuído, um usuário pode, opcionalmente, usar o serviço Amazon Route 53 para mapear o próprio nome de domínio do usuário para o ponto de extremidade do Amazon S3

  - Por exemplo, um usuário pode atribuir o nome de domínio mompopcafe.com a ele ou atribuir um nome de subdomínio, como <www.mompopcafe.com>

  - No exemplo, o domínio raiz (mompopcafe.com) e o subdomínio (<www.mompopcafe.com>) são usados para acessar o site

  - Para oferecer suporte a essa estrutura, dois buckets são criados e configurados no Amazon S3 — um bucket para o nome de domínio e um bucket para o nome do subdomínio

    - Um bucket contém o conteúdo do site, e o outro bucket redireciona as solicitações para o bucket do conteúdo

- Os nomes do bucket devem corresponder aos nomes de domínio que eles usam

- Além disso, os registros de alias são criados no Amazon Route 53 para mapear os nomes de domínio e subdomínio para os endpoints do bucket do S3 correspondentes

## **Controle de versão**

![versão](../Arquivos/Controle%20de%20versão%20S3.png)

- O Amazon S3 fornece um recurso de controle de versão para proteger objetos contra substituições e exclusões acidentais

- O versionamento permite que o usuario se recupere de ações não intencionais do usuário e falhas de aplicativos

- Ative o versionamento no nível do bucket

- Cada objeto em um bucket tem um ID de versão e, quando o versionamento é desativado, seu valor é definido como nulo

- Quando o versionamento está habilitado, o Amazon S3 cria um novo objeto e atribui um valor exclusivo ao seu ID de versão (incrementa-o) cada vez que ele é carregado

- Um bucket do S3 pode estar em um dos três estados de versionamento:

  1. **Versionamento desativado**

  - Essa configuração é a padrão
  - Se o usuario fizer upload de um objeto em um bucket com a mesma chave, ele substituirá a versão antiga
  - Se o usuario excluir um objeto, ele será excluído permanentemente

  2. **Versionamento ativado**

  - Se o usuario fizer upload de um objeto com a mesma chave, o Amazon S3 manterá o objeto anterior e criará um novo objeto com um novo ID de versão
  - Se o usuario excluir um objeto, o Amazon S3 o excluirá logicamente e adicionará um marcador, mas a versão anterior poderá ser recuperada por seu ID de versão

  3. **Versionamento suspenso**

  - As versões dos objetos existentes são mantidas, mas o bucket se comporta temporariamente como se o versionamento estivesse desativado

- Quando o controle de versão estiver habilitado em um bucket, ele não poderá ser desativado. Ele só pode ser suspenso

## **Politicas de acesso**

- Por padrão, novos buckets e objetos no Amazon S3 não permitem o acesso público, mas os usuários podem modificar políticas do bucket ou permissões de objeto para viabilizar o acesso

- Se o usuario quiser bloquear o efeito dessas políticas baseadas em recursos, o Amazon S3 fornece configurações de acesso público de bloqueio para buckets e contas para ajudar a gerenciar o acesso público aos recursos do Amazon S3

- O Aceso público ao bloco do Amazon S3 fornece configurações que substituem essas políticas e permissões baseadas em recursos, de maneira que o usuario possa limitar o acesso público aos recursos

- Com o acesso público ao bloco do Amazon S3, administradores de contas e proprietários de bucket podem configurar controles centralizados para limitar o acesso público aos recursos do Amazon S3. Esses controles são aplicados independentemente de como os recursos são criados

- Como melhor prática, o acesso público só deve ser usado para hospedagem na Web do Amazon S3

- O recurso de acesso público ao bloco do Amazon S3 pode ser acessado a partir do console do Amazon S3, da AWS CLI, da interface de programação de aplicativos (API) do Amazon S3 e dos modelos do AWS CloudFormation

- O Acesso público ao bloco do Amazon S3 oferece estas configurações:

1. **Bloquear novas ACLs públicas e fazer upload de objetos públicos**

   - Essa opção não permite o uso de novas listas de controle de acesso (ACLs) de bucket público ou de objetos
   - Solicitações PUT futuras que incluem novas ACLs públicas de bucket ou objeto falharão
   - Essa opção não afeta os buckets ou objetos existentes
   - Use essa configuração para a proteção contra futuras tentativas de usar ACLs para tornar buckets ou objetos públicos. Se um aplicativo tentar fazer upload de um objeto com uma ACL pública ou se um administrador tentar aplicar uma configuração de acesso público ao bucket, a ação será bloqueada

2. **Remover o acesso público concedido por meio de ACLs públicas**

   - Essa opção informa ao Amazon S3 para não avaliar nenhuma ACLs pública quando autorizar uma solicitação, o que impede que buckets ou objetos sejam tornados públicos por meio de ACLs
   - Essa configuração substitui todas as configurações de acesso público atuais ou futuras para objetos atuais e futuros no bucket
   - Se um aplicativo existente fizer upload de objetos com ACLs públicas para o bucket, essa configuração bloqueará a ação

3. **Bloquear novas políticas de bucket público**

   - Essa opção não permite o uso de novas políticas de bucket público, o que significa que as solicitações PUT futuras que incluam essas novas políticas de bucket falharão. Novamente, essa opção não afeta os buckets ou objetos existentes. Essa configuração ajuda a garantir que uma política de bucket não possa ser atualizada para conceder acesso público

4. **Bloquear o acesso público e entre contas para buckets que têm políticas públicas**

   - Se esta opção estiver definida, o acesso aos buckets que são publicamente acessíveis será limitado ao proprietário do bucket e aos serviços da AWS
   - Essa opção pode ser usada para proteger os buckets que têm políticas públicas enquanto o usuario trabalha para removê-las
   - Ela protege as informações armazenadas em um bucket por um serviço da AWS de se tornarem acessíveis publicamente

## **Bloqueio de objetos**

- O bloqueio de objetos do Amazon S3 permite armazenar objetos usando o modelo write once, read many (WORM - gravar uma vez, ler várias)

- Com o bloqueio de objetos do Amazon S3, o usuario pode impedir que um objeto seja excluído ou substituído, por um período fixo ou indefinidamente

- O bloqueio de objetos do Amazon S3 permite que o usuario atenda aos requisitos normativos que exigem armazenamento WORM

- O usuario também pode usá-lo para adicionar uma camada adicional de proteção contra alterações e exclusão de objetos

- O bloqueio de objetos do Amazon S3 oferece duas maneiras de gerenciar a retenção de objetos: períodos de retenção e retenções legais

  - Um **período de retenção** especifica um período fixo de tempo em que um objeto permanece bloqueado. Durante esse período, o objeto estará protegido contra WORM e não poderá ser sobrescrito ou excluído

  - Uma **retenção legal** fornece a mesma proteção que um período de retenção, mas não tem data de expiração. Em vez disso, uma retenção legal permanecerá em vigor até o usuario removê-la explicitamente. As retenções legais são independentes dos períodos de retenção: uma versão de objeto pode ter um período de retenção e uma retenção legal; um, mas não o outro; ou nenhum dos dois.

- Além disso, o usuario pode aplicar um modo de retenção a um objeto protegido por bloqueio de objetos para fornecer um nível adicional de proteção

- Os valores permitidos são Governança e Conformidade

- **No modo de Conformidade**

  - Uma versão do objeto protegida não pode ser substituída nem excluída por qualquer usuário, inclusive o usuário raiz na conta da AWS
  - Depois que um objeto é bloqueado no modo Conformidade, seu modo de retenção não pode ser alterado e seu período de retenção não pode ser reduzido
  - O modo de conformidade ajuda a garantir que uma versão do objeto não possa ser substituída ou excluída durante o período de retenção

- **No modo de Governança**
  - Os usuários não podem substituir ou excluir uma versão de objeto — ou alterar suas configurações de bloqueio — a menos que tenham permissões especiais
  - O modo de governança permite que o usuario proteja objetos contra exclusão pela maioria dos usuários
  - No entanto, ele ainda permite conceder permissões a alguns usuários para que eles possam alterar as configurações de retenção ou excluir o objeto, se necessário
  - O usuario também pode usar o modo de Governança para testar as configurações do período de retenção antes de criar um período de retenção no modo de Conformidade

## **Notificações de eventos S3**

- O recurso de notificação de eventos do Amazon S3 permite configurar um bucket para que as notificações sejam emitidas quando um novo objeto for adicionado ou excluído do bucket, ou quando um objeto existente for substituído

- As notificações podem ser emitidas para o Amazon Simple Queue Service (Amazon SQS), o Amazon Simple Notification Service (Amazon SNS) ou o AWS Lambda

- O usuario pode configurar as notificações para serem filtradas pelo prefixo e pelo sufixo do nome da chave de objetos
  - Por exemplo, o usuario pode configurar uma configuração para que o usuario receba uma notificação somente quando arquivos de imagem com uma extensão .jpg forem adicionados a um bucket
  - O usuario pode ter uma configuração que entrega uma notificação a um tópico do SNS quando um objeto com o prefixo images/ é adicionado ao bucket
  - A mesma configuração pode entregar notificações para objetos no mesmo bucket que têm um prefixo de logs/ para uma função do AWS Lambda

## **Amazon S3 e CLI**

## _Comandos gerais_

![comandos](../Arquivos/Comandos%20CLI%20para%20S3.png)

## _Criar um objeto com uma classe de armazenamento específica_

```bash
aws s3 cp file.txt s3://mybucket/myprefix/file.txt --storage-class INTELLIGENT_TIERING
```

## _Comando S3 API_

![s3api](../Arquivos/Comando%20S3%20api.png)

## **Recursos adicionais do S3**

![recursos](../Arquivos/Recursos%20adicionais%20s3.png)

## **Gerenciamento do ciclo de vida de objetos**

- Esse recurso permite que o usuario gerencie seus objetos para que eles sejam armazenados de maneira econômica durante todo o ciclo de vida

- Ao criar uma configuração de ciclo de vida, o usuario pode definir regras que especifiquem as ações que o Amazon S3 aplicará automaticamente a um grupo de objetos

- Ela suporta dois tipos de ações:

  1. **Ações de transição**

  - Definem quando os objetos fazem a transição para outra classe de armazenamento. Por exemplo, o usuario pode optar por fazer a transição de objetos para a classe de armazenamento STANDARD_IA 30 dias depois de criá-los. Ou o usuario pode arquivar objetos na classe de armazenamento GLACIER 1 ano depois de criá-los

  2. **Ações de expiração**

  - Definem quando os objetos expiram
  - O Amazon S3 exclui os objetos expirados em seu nome

  3. **URL de objeto pré-assinada**

  - Por padrão somente o proprietário do objeto tem permissão para acessá-lo
  - Se o proprietário do objeto quiser compartilhar o objeto com um usuário que não tenha credenciais ou permissões de segurança da AWS, ele poderá gerar uma URL pré-assinada para ele
  - A URL pré-assinada permite que um destinatário acesse o objeto por uma duração especificada
  - O usuario pode gerar uma URL pré-assinada programaticamente usando o AWS SDK para Java ou o AWS SDK para o.NET

  4. **Compartilhamento de recursos de origem cruzada (CORS)**

  - Se o usuario usar um bucket do S3 para hospedar um site estático, poderá usar o recurso de compartilhamento de recursos de origem cruzada (CORS)
  - Esse recurso permite que o aplicativo da Web acesse um recurso de um domínio diferente do domínio do ponto de extremidade do bucket
  - Por padrão, os navegadores bloqueiam essas solicitações para impor uma política de origem do mesmo domínio
  - O CORS define uma maneira para que aplicações Web clientes carregadas em um domínio interagirem com recursos em um domínio diferente
  - Para configurar seu bucket para permitir solicitações de origem cruzada, crie uma configuração CORS
  - Essa configuração é um documento XML com regras que identificam as origens que o usuario permite acessar seu bucket, as operações permitidas (métodos HTTP) para cada origem e outras informações específicas da operação

# **Serviços - Amazon Glacier**

- O Amazon S3 Glacier é uma classe de armazenamento segura, durável e de custo extremamente baixo do Amazon S3 para arquivamento de dados e backup de longo prazo

- **_Arquivo_**: qualquer objeto (como foto, vídeo, arquivo ou documento) armazenado no Amazon S3 Glacier. É a unidade básica de armazenamento no Amazon S3 Glacier. Cada arquivo tem seu próprio ID exclusivo e também pode ter uma descrição

- **_Cofre_**: um contêiner para armazenar arquivos. Ao criar um cofre, o usuario especifica o nome do cofre e a Região em que deseja que o cofre esteja localizado

  - No exemplo de URI: https://glacier.us-west-2.amazonaws.com/111122223333/vaults/examplevault
    - `glacier.us-west-2.amazonaws.com` identifica a região Oeste dos EUA (Oregon)
    - `111122223333` é o ID da conta da AWS que possui o cofre
    - `vaults` refere-se à coleção de cofres pertencentes à conta da AWS
    - `examplevault` identifica um cofre específico na coleção de cofres

- **_Política de acesso ao cofre_**

  - Determina quem pode ou não acessar os dados armazenados no cofre
  - Também determina quais operações os usuários podem ou não realizar
  - Uma política de permissões de acesso ao cofre pode ser criada para cada cofre para gerenciar permissões de acesso para um cofre específico
  - O usuario também pode usar uma **_política de bloqueio de cofre_** para ajudar a garantir que um cofre não possa ser alterado
  - Cada cofre pode ter uma política de acesso ao cofre e uma política de bloqueio de cofre anexada a ele

- **_Trabalho_**

  - Os trabalhos do Amazon S3 Glacier podem realizar uma consulta selecionada em um arquivo, recuperar um arquivo ou obter um inventário de um cofre
  - Ao executar uma consulta em um arquivo, o usuario inicia um trabalho que fornece uma consulta de linguagem de consulta estruturada (SQL) e uma lista de objetos de arquivamento do Amazon S3 Glacier

## **Acesso**

- Ao arquivar dados com o Amazon S3 Glacier, o usuario pode armazenar seus dados a um custo baixo (mesmo em comparação com o Amazon S3). No entanto, o usuario não pode recuperar seus dados imediatamente quando quiser

- Os dados armazenados no Amazon S3 Glacier levam várias horas para serem recuperados, e é por isso que eles funcionam bem para arquivamento

- Para armazenar e acessar dados no Amazon S3 Glacier, o usuario pode usar o Console de Gerenciamento da AWS. No entanto, apenas algumas operações — como criar ou excluir cofres e criar ou gerenciar políticas de arquivamento — estão disponíveis no console

- Quase todas as outras operações exigem que o usuario use a interface de programação de aplicativo (API) REST do Amazon S3 Glacier ou os Kit de Desenvolvimento de Software (SDK) Java ou.NET AWS

- O uso dessas ferramentas permite que o usuario interaja com o Amazon S3 Glacier por meio da AWS Command Line Interface (AWS CLI)

- O usuario também pode arquivar dados no Amazon S3 Glacier usando políticas de ciclo de vida

- Para manter os custos baixos, mas adequados para diferentes necessidades de recuperação, o Amazon S3 Glacier oferece três opções de acesso a arquivos

- Essas opções variam de alguns minutos a várias horas. Eles são:

- **_Acelerado_**

  - As recuperações aceleradas permitem o acesso aos seus dados rapidamente quando o usuario recebe uma solicitação urgente ocasional de um subconjunto de arquivos
  - Exceto para os arquivos maiores (mais de 250 MB), os dados acessados por meio de recuperações expressas costumam ser disponibilizados entre 1 a 5 minutos
  - Os dois tipos de recuperações aceleradas são Capacidade sob demanda e provisionada
  - As solicitações sob demanda são semelhantes às instâncias sob demanda do Amazon EC2 e estão disponíveis na maioria das vezes
  - As solicitações de capacidade provisionada estarão disponíveis garantidamente quando o usuario precisar delas

- **_Padrão_**

  - As recuperações padrão permitem que o usuario acesse qualquer um dos seus arquivos em várias horas
  - Geralmente, as recuperações padrão são concluídas entre 3 e 5 horas
  - Essa é a opção padrão para solicitações de recuperação que não especificam a opção de recuperação

- **_Em massa_**

  - Recuperações em massa são a opção de recuperação de menor custo para o Amazon S3 Glacier
  - O usuario pode usá-las para recuperar grandes quantidades de dados — até mesmo petabytes — de forma econômica em um dia
  - Geralmente, as recuperações em massa são concluídas entre 5 e 12 horas

## **Como funciona**

- Um objeto individual arquivado no Amazon S3 Glacier, como um documento, vídeo ou qualquer outro tipo de arquivo, é chamado de arquivamento
- Cada arquivamento possui um ID exclusivo atribuído a ele pela AWS

- Os arquivamentos são armazenados em cofres

- Um cofre é endereçado por seu nome exclusivo, que é atribuído a ele pelo criador

- Uma determinada conta da AWS pode criar até 1.000 cofres no Amazon S3 Glacier

- Os arquivos no Amazon S3 Glacier são referenciados por um URL que aponta para o Amazon S3 Glacier

- O URL contém os seguintes componentes:

  - O ID da conta da AWS proprietária
  - O nome do cofre
  - O ID do arquivamento individual
  - No exemplo: `https://glacier.us-east-1.amazonaws.com/1111222233333/vaults/examplevault/archives/<archive_id>`
    - Um aplicativo armazena um arquivo no Amazon S3 Glacier
    - Esse arquivo é identificado por <archive_id>no cofre chamado examplevault, que está sob o prefixo /archives. A conta é 111122223333 e é executada na região us-east-1

## **Acesso**

- O usuario pode interagir com objetos no Amazon S3 Glacier de duas maneiras:

  1. Usando uma política de ciclo de vida do Amazon S3;
  2. Usando a API do Amazon S3 Glacier (por meio de código personalizado ou da AWS CLI)

- Uma política de ciclo de vida do Amazon S3 permite que o usuario mova um objeto para o Amazon S3 Glacier automaticamente

- O usuario faz isso especificando uma ação de transição para alterar sua classe de armazenamento para GLACIER

- Os dados armazenados no Amazon S3 Glacier pelo Amazon S3 não podem ser recuperados diretamente por meio da API do Amazon S3 Glacier

- Esses dados são gerenciados em seu nome pelo Amazon S3

- Eles não aparecerão como um cofre ou um conjunto de arquivos se o usuario usar a API do Amazon S3 Glacier com as credenciais da sua conta

- Os arquivos arquivados do Amazon S3 podem ser restaurados usando o console do Amazon S3 ou usando a API do Amazon S3

- O usuario também pode fazer upload, recuperar e gerenciar arquivos no Amazon S3 Glacier usando a API do Amazon S3 Glacier

- Os arquivos que o usuario adicionou diretamente ao Amazon S3 Glacier com a API do Amazon S3 Glacier também podem ser recuperados por meio da API

- A recuperação de um arquivo do Amazon S3 Glacier é uma operação assíncrona em que o usuario primeiro inicia um trabalho e, em seguida, baixa a saída após a conclusão do trabalho

- Para iniciar um trabalho de recuperação de arquivo, o usuario usa a operação de API Initiate Job (POST jobs) ou o equivalente na AWS CLI ou nos Kit de Desenvolvimento de Software (SDK) da AWS

- Uma solicitação de recuperação pode recuperar um único arquivo com um ID de arquivamento, vários arquivos especificando um intervalo de datas de criação ou um subconjunto de um arquivo, especificando um intervalo de bytes

- Os usuários podem pesquisar a conclusão do trabalho usando a operação de API Describe Job (GET JobID)

- As notificações de conclusão do Amazon S3 Glacier também podem ser enviadas usando o Amazon SNS. Quando um trabalho do Amazon S3 Glacier terminar de ser executado, o usuário poderá solicitar o download dos seus dados descongelados

- Além disso, o Amazon S3 Glacier fornece uma função de consulta no local, o Glacier Select, que permite executar análises diretamente nos seus dados de arquivamento em repouso. Para usá-lo, especifique a operação SELECT ao iniciar uma solicitação de trabalho

- Com o Glacier Select, o usuario pode executar consultas e análises personalizadas nos seus dados armazenados no Amazon S3 Glacier sem restaurá-los para o Amazon S3

## **Politicas de ciclo de vida**

- O usuario deve automatizar o ciclo de vida dos dados armazenados no Amazon S3

- Usando políticas de ciclo de vida, o usuario pode ter dados alternados em intervalos regulares entre diferentes tipos de armazenamento do Amazon S3

- Ele reduz os custos gerais porque o usuario paga menos pelos dados quando eles se tornam menos importantes com o tempo

- Além de definir regras de ciclo de vida por objeto, o usuario também pode definir regras de ciclo de vida por bucket

- Considere um exemplo de uma política de ciclo de vida que move dados à medida que envelhece do Amazon S3 Standard para o Amazon S3 Standard — Acesso pouco frequente, e, finalmente, no Amazon S3 Glacier antes de ser excluído. Suponha que um usuário envie um vídeo para o aplicativo. Seu aplicativo gera uma visualização em miniatura do vídeo. Esta pré-visualização do vídeo é armazenada no Amazon S3 Standard, pois é provável que o usuário queira acessá-la imediatamente.Os dados de uso indicam que, após 30 dias, a maior parte das visualizações de miniatura não é acessada. Portanto, sua política de ciclo de vida pegará essas visualizações e as moverá para o Amazon S3 — Acesso pouco frequente após 30 dias. Depois de mais 30 dias, é improvável que a pré-visualização seja acessada novamente. Em seguida, ela é transferida para o Amazon S3 Glacier, onde permanece por 1 ano. Após 1 ano, a pré-visualização é excluída. O importante é que a política de ciclo de vida gerencia todo esse movimento automaticamente

## **Criptografia**

- Outra diferença importante entre o Amazon S3 e o Amazon S3 Glacier é como os dados são criptografados

- A criptografia do lado do servidor protege os dados em repouso

- Com as duas soluções, o usuario pode transferir seus dados com segurança por HTTP seguro (HTTPS)

- Todos os dados arquivados no Amazon S3 Glacier são criptografados por padrão. Com o Amazon S3, seu aplicativo deve iniciar a criptografia no lado do servidor

- Esse tipo de criptografia pode ser realizado de várias maneiras:

  1. A criptografia do lado do servidor com chaves de criptografia gerenciadas pelo Amazon S3 (SSE-S3) emprega criptografia multifator forte. O Amazon S3 criptografa cada objeto com uma chave exclusiva. Como proteção adicional, a própria chave é criptografada com uma chave mestra que é alterada regularmente. A criptografia no lado do servidor do Amazon S3 usa uma das cifras de bloco mais fortes disponíveis, o padrão de criptografia avançada de 256 bits (AES-256), para criptografar seus dados

  2. O AWS Key Management Service (AWS KMS) é um serviço que combina hardware e software seguros e altamente disponíveis para fornecer um sistema de gerenciamento de chaves dimensionado para a nuvem. O AWS KMS usa chaves mestras do cliente (CMKs) para criptografar seus objetos do Amazon S3. o usuario usa o AWS KMS por meio da seção Chaves de criptografia no console do AWS Identity and Access Management (IAM) ou por meio de APIs do AWS KMS. o usuario pode criar chaves de criptografia centralmente, definir as políticas que controlam como as chaves podem ser usadas e auditar o uso da chave para provar que elas estão sendo usadas corretamente. o usuario pode usar essas chaves para proteger seus dados em buckets do Amazon S3

  3. Usando a criptografia do lado do servidor com chaves de criptografia fornecidas pelo cliente (SS-EC), o usuario pode definir suas próprias chaves de criptografia. Com a chave de criptografia que o usuario fornece como parte da sua solicitação, o Amazon S3 gerencia a criptografia, à medida que grava em discos, e a descriptografia quando o usuario acessa seus objetos.

## **Segurança**

- Por padrão, apenas o usuario pode acessar os seus dados

- O usuario pode habilitar e controlar o acesso aos seus dados no Amazon S3 Glacier usando o AWS Identity and Access Management (IAM)

- O usuario configura uma política do IAM que especifica o acesso do usuário

## **Comparação entre S3 e Glacier**

- Embora o Amazon S3 e o Amazon S3 Glacier sejam soluções de armazenamento de objetos que permitem armazenar uma quantidade praticamente ilimitada de dados, este gráfico descreve algumas diferenças críticas. Dentre elas:

1. Tenha cuidado ao decidir qual é a solução de armazenamento correta para suas necessidades. Esses serviços são serviços diferentes para diferentes necessidades de armazenamento. O Amazon S3 foi projetado para acesso frequente e de baixa latência aos seus dados. Por outro lado, o Amazon S3 Glacier foi projetado para armazenamento de baixo custo e longo prazo de dados acessados com pouca frequência

2. O tamanho máximo do item no Amazon S3 é de 5 TB, mas o Amazon S3 Glacier pode armazenar itens de até 40 TB.

3. Como o Amazon S3 oferece acesso mais rápido aos seus dados, o custo de armazenamento por gigabyte é maior do que o custo do armazenamento com o Amazon S3 Glacier.

4. Embora ambos os serviços tenham cobranças por solicitação, o Amazon S3 cobra pelas operações PUT, COPY, POST, LIST e GET. Por outro lado, o Amazon S3 Glacier cobra pelas operações de UPLOAD e recuperação.

5. Como o Amazon S3 Glacier foi projetado para acesso menos frequente aos dados, ele custa mais para cada solicitação de recuperação do que a recuperação custaria para o Amazon S3. `Tanto o custo por recuperação quanto o custo por GB são maiores para o Amazon S3 Glacier`

# **Serviços - Amazon RDS**

- O Amazon RDS é um serviço de banco de dados gerenciado que configura e opera um banco de dados relacional na nuvem
- O RDS opera e dimensiona o banco de dados relacional sem administração contínua
- O Amazon RDS oferece capacidade econômica e redimensionável e automatiza tarefas administrativas
- **_Criando um RDS_**
  1. A forma mais fácil de criar uma instância de banco de dados é usar o console de gerenciamento da AWS
  2. Depois de criar a instância de banco de dados, pode usar os utilitários padrão do MySQL, como MySQL Workbench, para se conectar a um banco de dados na instância de banco de dados
  3. Dependendo da classe da instância de banco de dados e da quantidade de armazenamento, pode levar até 20 minutos para que a nova instância esteja disponível
  4. Conecte-se à instância de banco de dados usando a AWS CLI
- **_Backups de banco de dados_**
  - O Amazon RDS é um serviço totalmente gerenciado, uma tarefa que ele executa automaticamente é o backup periódico de uma instância de banco de dados
  - O backup de toda a instância é feito em um snapshot de volume de armazenamento durante uma janela de backup especificada
  - Ele é retido de acordo com um período de retenção de backup especificado
  - O primeiro snapshot de uma instância de banco de dados contém todos os dados
  - Os snapshots seguintes são incrementais e contêm apenas os dados alterados desde o snapshot mais recente
  - É possivel fazer o backup de uma instância de banco de dados manualmente criando um snapshot
- O fundamento do Amazon RDS é a instância de banco de dados. Uma instância de banco de dados é um ambiente de banco de dados isolado, podendo conter vários bancos de dados criados pelo usuário e pode ser acessada usando as mesmas ferramentas e aplicativos que o usuario usa com uma instância de banco de dados independente
- Os recursos de uma instância de banco de dados são determinados por sua classe, e o tipo de armazenamento é determinado pelo tipo dos discos
- As instâncias de banco de dados e o armazenamento apresentam características de desempenho e preços diferentes, o que permite a personalizar o desempenho e o custo conforme as necessidades do seu banco de dados
- Ao criar uma instância de banco de dados, é preciso especificar o mecanismo de banco de dados que será executado
- O Amazon RDS é compatível com seis bancos de dados:
  1. MySQL
  2. Amazon Aurora
  3. Microsoft SQL Server
  4. PostgreSQL
  5. MariaDB
  6. Oracle

## **Alta disponibilidade**

- Um dos principais recursos do Amazon RDS é configurar uma instância de banco de dados com alta disponibilidade usando uma **_`implantação multi-AZ`_**
  - Essa configuração gera automaticamente uma cópia em espera da instância de banco de dados em outra zona de disponibilidade na mesma Virtual Private Cloud (VPC – Nuvem Privada Virtual)
  - Após a cópia completa inicial, as transações são replicadas de forma síncrona para a cópia em espera
  - A execução de um banco de dados em várias zonas de disponibilidade pode aumentar a disponibilidade durante a manutenção planejada do sistema
  - Ajuda a evitar falhas no seu banco de dados e interrupções nas zonas de disponibilidade
  - Se a instância primária de banco de dados falhar, o Amazon RDS automaticamente colocará a instância de banco de dados em espera on-line como a nova instância primária
  - As solicitações dos dois aplicativos são direcionadas para a nova instância primária
  - Os aplicativos solicitantes usam o endpoint do Domain Name System (DNS) do Amazon RDS para referenciar o banco de dados pelo nome
  - O **_`failover`_** ocorre sem a necessidade de alterar o código do aplicativo e também que não há perda de dados devido à replicação síncrona

## **Replicas de leitura**

- Além de uma configuração de alta disponibilidade, o Amazon RDS oferece outros meios para fornecer escalabilidade
  - É possível criar réplicas de leitura para MySQL, MariaDB, PostgreSQL e Amazon Aurora
  - As atualizações feitas na instância de banco de dados de origem são copiadas de forma assíncrona para a instância de réplica de leitura
  - Reduz a carga de uma instância de banco de dados de origem roteando as consultas de leitura dos aplicativos para a réplica de leitura
  - Tambem serve para aumentar a quantidade além das limitações de capacidade de uma única instância de banco de dados para cargas de trabalho com uso intensivo de leitura
  - As réplicas de leitura também podem ser promovidas à instância primária de banco de dados (`como ela usa a replicação assíncrona, essa opção requer uma ação manual`).
    - Observação: a alteração de uma classe de instância requer tempo de inatividade
  - As réplicas de leitura podem ser criadas em uma região diferente da instância primária de banco de dados.
    - Esse recurso ajuda a cumprir os requisitos de recuperação de desastres ou reduzir a latência direcionando as leituras para uma réplica de leitura em uma área geográfica mais próxima do usuário.

## **Scaling do RDS**

- É possivel aumentar a capacidade de um servidor de banco de dados alterando sua classe da instância ou capacidade de armazenamento
- A alteração da classe da instância permite aumentar a CPU e a memória disponíveis para a instância
  - Observação: a alteração de uma classe de instância requer tempo de inatividade
- A modificação do armazenamento alocado permite aumentar a capacidade de armazenamento sem a necessidade de tempo de inatividade

## **Notas sobre o RDS**

- `Use o Amazon RDS quando seu aplicativo exigir:`

  1. Transações ou consultas complexas
  2. Alta durabilidade

  - O Amazon RDS funciona bem com `aplicativos web e móveis` que precisam de um banco de dados com alta taxa de transferência, escalabilidade massiva de armazenamento e alta disponibilidade

    - Como o Amazon RDS não tem restrições de licenciamento, ele é perfeito para o padrão de uso variável desses aplicativos

  - No caso de `pequenas e grandes empresas de comércio eletrônico`, o Amazon RDS oferece uma solução de banco de dados flexível, segura e econômica para vendas e varejo on-line.
  - Os `jogos on-line e para dispositivos móveis exigem uma plataforma de banco de dados` com alta taxa de transferência e disponibilidade
    - O Amazon RDS gerencia a infraestrutura de banco de dados para que os desenvolvedores de jogos não precisem se preocupar com provisionamento, scaling ou monitoramento de servidores de banco de dados

- `Não use o Amazon RDS quando seu aplicativo exigir: `
  1. Solicitações e consultas GET ou PUT simples que um banco de dados NoSQL pode processar
  2. Personalização do sistema de gerenciamento de banco de dados relacional (RDBMS)
- Para situações em que o usuario não deve usar o Amazon RDS, é possível usar uma solução de banco de dados NoSQL, como o DynamoDB
- Outra alternativa ao Amazon RDS é executar o mecanismo de banco de dados relacional em instâncias do Amazon EC2, o que oferece mais opções para personalizar o banco de dados (instalar um banco de dados numa instancia EC2)

## **Comandos CLI para o RDS**

- **_Criar um snapshot_**

```bash
$ aws rds create-db-snapshot --db-instance-identifier mytestdb --db-snapshot-identifier mydbsnapshot
```

- **_Restaurar um banco de dados do snapshot_**

```bash
$ aws rds restore-db-instance-from-db-snapshot --db-instance-identifier mytestdb-new --db-snapshot-identifier mydbsnapshot
```

- **_Copiar snapshot do RDS_**

```bash
$ aws rds copy-db-snapshot --source-db-snapshot-identifier mydbsnapshot --target-db-snapshot-identifier mydbsnapshot-copy --copy-tags
```

- **_Excluir um snapshot_**

```bash
$ aws rds delete-db-snapshot --db-snapshot-identifier mydbsnapshot
```

# **Serviços - Amazon Aurora**

- O Amazon Aurora é um mecanismo de banco de dados relacional totalmente gerenciado que é compatível com o MySQL e o PostgreSQL

- Ele combina o desempenho e a disponibilidade dos bancos de dados comerciais avançados com a simplicidade e a economia dos bancos de dados de código aberto

- O Aurora faz parte do serviço de banco de dados gerenciado Amazon Relational Database Service (Amazon RDS)

- O Aurora é até cinco vezes mais rápido que os bancos de dados MySQL padrão

- O Aurora é composto de clusters

- O Aurora também automatiza e padroniza o agrupamento em clusters e a replicação de bancos de dados, que normalmente são os aspectos mais difíceis da configuração e administração do banco de dados

- Benefícios do Amazon Aurora

  1. O Aurora é um banco de dados relacional criado para a nuvem
  2. O Aurora é até cinco vezes mais rápido que os bancos de dados MySQL padrão
  3. É um serviço distribuído e tolerante a falhas
  4. Ele também é um sistema de armazenamento de autorrecuperação que se dimensiona automaticamente quando necessário
  5. Os mecanismos de banco de dados são personalizados para aproveitar o armazenamento rápido e distribuído
  6. O Aurora é composto de clusters
  7. O Aurora também automatiza e padroniza o agrupamento de clusters e a replicação de bancos de dados, que normalmente são os aspectos mais difíceis da configuração e administração do banco de dados

- O Aurora é simples de configurar e usa consultas de linguagem de consulta estruturada (SQL). Ele é compatível com o MySQL v5.6 e usa o mecanismo de armazenamento InnoDB

- O Aurora é um serviço de pagamento conforme o uso, o que garante que o usuario pague apenas pelos serviços e recursos utilizados. Ele é um serviço gerenciado que funciona com recursos como AWS Database Migration Service (AWS DMS) e AWS Schema Conversion Tool. Essas ferramentas podem ajudar o usuario a mover seu conjunto de dados para o Aurora

- O Aurora também é tolerante a falhas e foi projetado para fornecer armazenamento de autorrecuperação criado para a nuvem

  - Esse armazenamento replica seis cópias de seus dados em três Zonas de Disponibilidade e, ao mesmo tempo, faz backup dos dados para o Amazon S3 quase continuamente

- O usuario pode optar por usar o Amazon Aurora em vez de (por exemplo) o SQL com o Amazon RDS devido à alta disponibilidade e ao design resiliente do Aurora

## **Volumes Cluster do Aurora**

- Ao criar uma instância do Amazon Aurora, o usuario cria um cluster de banco de dados (DB)

- Um cluster de banco de dados do Aurora consiste em uma ou mais instâncias do banco de dados e um volume de cluster que gerencia os dados para essas instâncias

- Um volume de cluster do Aurora é um volume de armazenamento de banco de dados virtual que abrange várias Zonas de Disponibilidade

- Cada Zona de Disponibilidade tem uma cópia de dados do cluster

- Os volumes de armazenamento do Aurora que são usados para criar grupos de proteção são de 10 GB

- Há 2 tipos de clusters do Amazon aurora:

1. **`A instância primária`**

   - Comporta operações de leitura e gravação e realiza todas as modificações de dados no volume do cluster
   - Cada cluster de banco de dados do Aurora tem uma instância primária

2. **`Uma réplica do Aurora`**

   - Comporta operações somente leitura
   - Cada cluster de banco de dados do Aurora pode ter até 15 réplicas do Aurora, além da instância primária
   - Várias réplicas distribuem a carga de trabalho de leitura e, se estiverem localizadas em Zonas de Disponibilidade separadas, poderão aumentar a disponibilidade do banco de dados

## **Casos de uso**

- Comparado aos bancos de dados comerciais, o Aurora ajuda a reduzir os custos de banco de dados em 90% ou mais e, ao mesmo tempo, melhora a confiabilidade e a disponibilidade do banco de dados

- Como os `jogos para web e dispositivos móveis` são criados para operar em grande escala, eles precisam de um banco de dados com alta taxa de transferência e grande escalabilidade de armazenamento. O Aurora oferece espaço suficiente para crescimento futuro

## **Recuperação de falhas**

- Diferentemente de outros bancos de dados, após uma falha, o Amazon Aurora não precisa reproduzir Redo Log do último ponto de verificação do banco de dados

  - Isso reduz o tempo de reinicialização após uma falha de banco de dados para menos de 60 segundos na maioria dos casos

# **Serviços - Amazon Redshift**

- O Amazon Redshift é um serviço de data warehouse na nuvem totalmente gerenciado, na escala de petabytes

- O que é um petabyte?

  - Um petabyte é de 10 15 bytes de informação
  - Um petabyte é aproximadamente igual a 1.000 terabytes (TB)
  - Um terabyte é aproximadamente igual a 1.000 gigabytes (GB)

- Principais recursos

  - O Amazon Redshift é rápido e poderoso
  - O Amazon Redshift é um serviço de data warehouse totalmente gerenciado
  - Ele permite que o usuario execute consultas analíticas complexas em petabytes de dados estruturados
  - O Amazon Redshift usa otimização de consulta sofisticada, armazenamento colunar em discos locais de alto desempenho e execução de consultas paralelas

- O usuario pode automatizar a maioria das tarefas administrativas comuns para gerenciar, monitorar e escalar seu cluster do Amazon Redshift. Essa automação permite que o usuario se concentre nos seus dados e negócios

- A escalabilidade é intrínseca no Amazon Redshift. Seu cluster pode expandir para cima e para baixo à medida que suas necessidades mudam com apenas alguns cliques no console

- A segurança é a maior prioridade na AWS. Com o Amazon Redshift, a segurança é integrada e foi projetada para fornecer criptografia forte de dados ociosos e em trânsito

- O Amazon Redshift é compatível com linguagem de consulta estruturada padrão (SQL). Ele fornece conectores de alto desempenho para Java Database Connectivity (JDBC) e Open Database Connectivity (ODBC). Esses conectores permitem que o usuario use os clientes SQL e as ferramentas de business intelligence (BI) de sua escolha

## **Data warehouse**

- Um data warehouse é um repositório central de informações que podem ser analisadas para tomar decisões mais adequadas

- Os data warehouses impulsionam relatórios, painéis e ferramentas de análise

- Os data warehouses permitem que os usuários consultem rapidamente os resultados para centenas e milhares de usuários ao mesmo tempo

- `Como funciona um data warehouse?`

  - Um data warehouse pode conter vários bancos de dados
  - Dentro de cada banco de dados, os dados são organizados em tabelas e colunas
  - Dentro de cada coluna, o usuario pode definir uma descrição dos dados, como número inteiro, campo de dados ou sequência
  - As tabelas podem ser organizadas dentro de esquemas, que o usuario pode considerar como pastas.

- `Os benefícios de um data warehouse são:`

  - Tomada de decisão adequada
  - Dados consolidados de várias fontes
  - Análise de dados históricos
  - Qualidade, consistência e precisão de dados
  - Separação do processamento analítico dos bancos de dados transacionais, o que melhora o desempenho dos dois sistemas

- `Como um data warehouse é arquitetado?`

  - Uma arquitetura de data warehouses é composta de camadas
  - A camada superior é o cliente de front-end, que apresenta os resultados por meio de ferramentas de relatórios, análises e mineração de dados
  - A camada intermediária consiste no mecanismo de análises, usado para acessar e analisar os dados
  - A camada inferior da arquitetura é o servidor de banco de dados, onde os dados são carregados e armazenados

## **Processamento paralelo**

- O processamento paralelo é um método de computação em que dois ou mais microprocessadores\* estão simultaneamente desmontando programas e executando tarefas do programa simultaneamente

- No de computação é o conjunto Core virtual + memoria Ram + disco

- O nó líder gerencia a comunicação com programas cliente e toda a comunicação com nós de computação

- Ele analisa e desenvolve planos de execução para realizar operações de banco de dados, em especial, a série de etapas necessárias para se obter resultados para consultas complexas

- O nó líder compila código de elementos individuais do plano de execução e atribui o código aos nós de computação individuais

- Os nós de computação executam o código compilado e enviam resultados intermediários ao nó líder para agregação final

- Assim como outros serviços da AWS, o usuario paga apenas pelo que usar
  - O usuario pode começar por apenas 25 centavos por hora
  - Em escala, o Amazon Redshift oferece armazenamento e processamento por aproximadamente US$1.000 dólares por TB por ano
  - O recurso Amazon Redshift Spectrum permite executar consultas em exabytes de dados diretamente no Amazon S3

## **Casos de uso**

- `Data warehouse corporativo (EDW)`

  - Muitos clientes migram seus data warehouses empresariais tradicionais para o Amazon Redshift com o objetivo principal de agilidade

  - Os clientes podem começar na escala que quiserem e experimentar seus dados

  - Eles não precisam depender de processos complicados com seus departamentos de TI para adquirir e preparar o software

  - Migre a um ritmo confortável para os clientes

  - Experimente sem grandes custos iniciais ou compromissos

  - Responda mais rapidamente às necessidades empresariais

- `Big data `

  - Preço baixo para clientes pequenos

  - Serviço gerenciado para facilidade de implantação e manutenção

  - Concentre-se mais nos dados e menos no gerenciamento do banco de dados

  - Os clientes de big data têm uma coisa em comum: grandes quantidades de dados

  - Clientes menores podem não ter recursos financeiros para comprar a quantidade de hardware e experiência para executar esses sistemas. Com o Amazon Redshift, os clientes podem manter o data warehouse funcionando a um preço comparativamente baixo

- `Software como serviço (SaaS)`

  - Escale a capacidade do data warehouse à medida que a demanda cresce

  - Adicione funcionalidade analítica a aplicativos

  - Reduza os custos de hardware e software em uma ordem de magnitude

  - Os clientes de software como serviço (SaaS) são atraídos pela plataforma escalável e fácil de gerenciar que o Amazon Redshift oferece

  - Alguns usam a plataforma para fornecer recursos de análise para seus aplicativos

  - Alguns usuários implantam um cluster por cliente e usam a marcação para simplificar e gerenciar seus contratos de nível de serviço (SLAs) e faturamento

  - O Amazon Redshift permite que os clientes reduzam os custos de hardware e software exponencialmente

# **Serviços - Amazon Athena**

- O Amazon Athena é um serviço de consulta interativa que facilita a análise de dados diretamente no Amazon Simple Storage Service (Amazon S3) usando SQL padrão

- Para usar o Amazon Athena, aponte para seus dados no Amazon Simple Storage Service (Amazon S3), defina o esquema e comece a consultar usando o SQL padrão

- A maioria dos resultados é entregue em segundos

- Com o Athena, o usuario não precisa de trabalhos ETL complexos para preparar seus dados para análise

- Isso faz com que qualquer pessoa com habilidades de SQL analise conjuntos de dados em grande escala com facilidade e rapidez

- O Athena trabalha com vários formatos de dados padrão, incluindo valores separados por vírgula (CSV), JavaScript Object Notation (JSON), Optimized Row Columnar (ORC), Apache Avro e Apache Parquet

- O Athena é ideal para consultas rápidas e ad hoc. No entanto, ele também pode lidar com análises complexas, incluindo grandes junções e matrizes

- Athena usa o Amazon S3 como datastore subjacente, conferindo alta disponibilidade e durabilidade aos seus dados

- O Athena não precisa de servidor, portanto, não há infraestrutura para gerenciar e o usuario paga apenas pelas consultas executadas

- O usuario pode consultar rapidamente os dados, sem necessidade de configurar e gerenciar servidores ou data warehouses

- O Athena permite que o usuario consulte todos os seus dados no Amazon S3 sem precisar configurar processos complexos para extrair, transformar e carregar ETL os dados

- Além disso, o Athena oferece desempenho de consulta rápido e interativo

- O Athena executa automaticamente as consultas em paralelo, de forma que a maioria dos resultados retorna em segundos

- Para usar o Athena, basta apontar para os dados no Amazon S3, definir o esquema e começar a consultar usando o editor de consultas incorporado

1. Comece navegando até o serviço Amazon Athena no Console de gerenciamento da AWS e escolha Comece a usar. O Athena Query Editor é aberto. Ele lista os bancos de dados e tabelas na coluna esquerda. o usuario pode criar um banco de dados executando um comando como CREATE DATABASE mydatabase. Em seguida, crie uma tabela. A tabela define o esquema dos dados. As definições de tabela do Athena são parecidas com as definições de tabela de bancos de dados relacionais. Para ver um exemplo de definição de tabela, consulte Conceitos básicos na documentação do Amazon Athena. A definição da tabela termina com uma instrução LOCATION, que aponta para o bucket do S3 onde seus dados residem (ou residirão)

2. Depois de definir a tabela, o usuario pode começar a executar consultas SQL padrão usando o Editor de consultas do Athena. Por exemplo, o usuario poderia usar o seguinte: SELECT \* FROM tableName WHERE columnName='value'

3. Os resultados serão exibidos no Athena Query Editor. No entanto, o usuario também pode baixar os resultados como arquivos de valores separados por vírgulas (CSV). Além disso, o usuario pode criar um cliente para acessar o Athena e executar consultas SQL programaticamente. Para obter um exemplo desse cliente (escrito em Java), consulte a página Amostras de código da documentação do Amazon Athena

- O usuario pode consultar dados de outros serviços da AWS no Athena, incluindo serviços que monitoram e protegem na sua conta (e é por isso que o Athena é abordado neste módulo)

  - Por exemplo, usar o Athena com logs do CloudTrail pode aprimorar a sua análise da atividade do serviço da AWS. Crie tabelas automaticamente para consultar logs do CloudTrail diretamente do console do CloudTrail e use essas tabelas para executar consultas no Athena. o usuario pode usar consultas para identificar tendências e isolar ainda mais a atividade por atributos, como endereço IP de origem ou usuário

- Consultar os logs do Application Load Balancer com o Amazon Athena lhe permite visualizar a origem do tráfego, a latência e os bytes transferidos de e para instâncias do Elastic Load Balancing e aplicativos de back-end

- Os logs de fluxo do Amazon Virtual Private Cloud capturam informações sobre o tráfego IP de e para interfaces de rede em uma VPC. Consulte os logs no Athena para investigar padrões de tráfego de rede e identificar ameaças e riscos em toda a sua rede do Amazon VPC

# **Serviços - DynamoDB**

- O DynamoDB é um serviço de banco de dados NoSQL (utiliza chaves-valor) totalmente gerenciado
- A Amazon gerencia toda a infraestrutura de dados subjacente relacionada a esse serviço
- Ele armazena dados de forma redundante em várias instalações em uma região como parte de sua arquitetura tolerante a falhas
- O DynamoDB permite criar tabelas e itens e permite adicionar itens
- Ele particiona automaticamente os dados e oferece armazenamento de tabelas para atender aos requisitos de carga de trabalho

## **Benefícios e Funcionamento**

- **`Serviço totalmente gerenciado`**
  - Ao criar uma tabela de banco de dados e definir a utilização de destino para escalabilidade automática, o serviço executa automaticamente as tarefas de gerenciamento de banco de dados
  - Ele lida com provisionamento, configuração e configuração de hardware ou software, aplicação de patches de software, operação de um cluster de banco de dados distribuído e particionamento de dados em várias instâncias à medida que o usuario dimensiona
  - Oferece recuperação point-in-time, backup e restauração para todas as suas tabelas
- **`Consultas de baixa latência`**
  - A latência média do lado do serviço para executar uma consulta é geralmente de milissegundos de um dígito
  - À medida que seus volumes de dados crescem e as demandas de desempenho dos aplicativos aumentam, o DynamoDB se adapta para atender a essas necessidades
  - Usa tecnologias de particionamento automático e SSD para atender aos requisitos de taxa de transferência e fornecer baixas latências em qualquer escala
- **`Controle de acesso refinado`**
  - É possivel usar o DynamoDB com o AWS Identity and Access Management (IAM) para obter um controle de acesso refinado dos usuários da organização
    - Atribua credenciais de segurança únicas para cada usuário e controle o acesso deles aos serviços e recursos.
- **`Flexibilidade`** - DynamoDB oferece suporte ao armazenamento, à consulta e à atualização de dados na forma de documentos JavaScript Object Notation (JSON) - Ideal para armazenar dados semiestruturados e manipulá-los usando consultas JSON.

- Além disso, o Amazon DynamoDB integra-se ao Amazon CloudWatch fornecendo estatísticas de solicitações de taxa de transferência e latência.

- Não há limite prático para o número de itens que o usuario pode armazenar em uma tabela (existem tabelas de produção que contêm bilhões de itens)
- Num banco de dados NoSQL os itens na mesma tabela podem ter atributos diferentes
  - Proporciona a flexibilidade para adicionar atributos à medida que o aplicativo evolui
- Os itens de formato mais novos podem ser armazenados lado a lado com itens mais antigos na mesma tabela sem precisar executar migrações de esquema
- Com maior interação dos usuários, o armazenamento pode crescer de acordo com as necessidades do aplicativo
- Todos os dados no DynamoDB são armazenados em SSDs e sua linguagem de consulta simples permite um desempenho uniforme de consulta de baixa latência.
- O DynamoDB também permite provisionar a quantidade de taxa de transferência de leitura/gravação necessária para a tabela
- As tabelas do DynamoDB podem ser dimensionadas para lidar com o número maior de solicitações de leitura/gravação com provisionamento manual, ou com escalabilidade automática a fim de monitorar a carga na tabela e aumentar ou diminuir automaticamente a taxa de transferência provisionada
- Alguns recursos principais adicionais de diferenciação incluem tabelas globais que permitem a replicação automática entre regiões AWS, criptografia de dados ociosos e a TTL (vida útil) do item.

- O recurso de **_`tabelas globais`_** do DynamoDB oferece alta disponibilidade e escalabilidade entre regiões
  - Uma tabela global é uma coleção de uma ou mais tabelas do DynamoDB, que devem todas pertencer a uma única conta da AWS
  - As tabelas na coleção também são conhecidas como tabelas-réplica. Uma tabela-réplica (ou réplica) é uma tabela única do DynamoDB que funciona como parte de uma tabela global
  - Cada réplica armazena o mesmo conjunto de itens de dados
  - Qualquer tabela global dada só pode ter uma tabela-réplica por região
  - Cada réplica tem o mesmo nome de tabela e a mesma definição de chave primária.
  - Ao criar uma tabela global, especifique as regiões AWS nas quais o usuario deseja disponibilizar a tabela. O DynamoDB executa todas as tarefas necessárias para criar tabelas idênticas nessas regiões e propaga as alterações de dados contínuas a todas elas.
  - `As tabelas globais do DynamoDB funcionam bem para aplicativos de grande escala com usuários dispersos pelo mundo. Os usuários esperam um desempenho rápido do aplicativo, que eles obtêm acessando a réplica mais próxima a eles. Além disso, ainda que uma das regiões AWS fique temporariamente indisponível, os usuários poderão acessar os mesmos dados nas outras regiões`

## **Conceitos basicos**

- **_`Tabelas`_**
  - Semelhante a outros sistemas de banco de dados, o DynamoDB armazena dados em tabelas
- **_`Itens`_**
  - Cada tabela contém zero ou mais itens.
  - Um item é um grupo de atributos identificável exclusivamente entre todos os outros itens (exemplo: numa tabela Pessoas, cada item pode representar uma pessoa)
- **_`Atributos`_**
  - Cada item é composto de um ou mais atributos
  - Um atributo é um elemento de dados fundamental (algo que não precisa ser dividido ainda mais)
- O DynamoDB é compatível com dois tipos diferentes de chaves primárias:
  1. `Chaves de partição`
     - É uma chave primária simples, que é composta de um atributo chamado de chave de partição.
  2. `Chaves de partição e classificação`
     - A chave de partição e a chave de classificação também são conhecidas como chave primária composta, que é composta de dois atributos
- **_Como o DynamoDB armazena dados_**
  - O Amazon DynamoDB armazena dados em partições
  - Uma partição é uma alocação de armazenamento para uma tabela, que é baseada em unidades de estado sólido (SSDs) e automaticamente replicada em várias zonas de disponibilidade em uma região AWS
- **_Como o DynamoDB armazena e recupera itens_**
  - Se a sua tabela tiver uma chave primária (somente uma chave de partição), o DynamoDB armazenará e recuperará cada item com base em sua chave-valor de partição
- **_Como o DynamoDB grava um item na tabela_**
  - O DynamoDB usa o valor da chave de partição como entrada para uma função de hash interna
  - O valor de saída da função hash determina a partição na qual o item será armazenado
- **_Como o DynamoDB lê um item na tabela_**

  - Para ler um item na tabela, o usuario deve especificar a chave-valor de partição para o item
  - O DynamoDB usa esse valor como entrada para sua função de hash, gerando a partição na qual o item pode ser encontrado

- Existem duas maneiras diferentes para recuperar dados de uma tabela do DynamoDB
  1. No primeiro método, a `operação de consulta` usa o particionamento de tabela para localizar itens de forma eficaz usando a chave primária
  2. O segundo método é uma `varredura`, que permite localizar itens na tabela correspondendo condições em atributos que não são chave
     - Oferece a flexibilidade para localizar itens por outros atributos, esta operação é menos eficiente, pois o DynamoDB lê todos os itens da tabela para encontrar aqueles que correspondem aos seus critérios

# **Serviços - Amazon Elastic Block Store**

- A diferença entre o armazenamento de bloco e de objeto é que com o armazenamento em bloco, o usuario precisa alterar apenas o bloco que contém o caractere. Com o armazenamento de objetos, todo o arquivo deve ser atualizado

- A diferença tem um grande impacto na taxa de transferência, latência e custo da sua solução de armazenamento

- Geralmente, as soluções de armazenamento em bloco são mais rápidas e usam menos largura de banda, mas custam mais do que o armazenamento no nível do objeto

- O Amazon EBS é melhor usado para armazenar dados persistentes

- O Amazon EBS fornece volumes de armazenamento em nível de bloco altamente disponíveis para uso com instâncias do EC2

- Cada volume do EBS é replicado automaticamente na sua Zona de disponibilidade para protegê-lo contra falhas de componentes, oferecendo alta disponibilidade e durabilidade

- Os volumes do EBS oferecem o desempenho consistente e de baixa latência de que o usuario precisa para executar suas cargas de trabalho

- Com o Amazon EBS, o usuario pode escalar seu uso para cima ou para baixo em minutos — tudo isso pagando apenas pelos recursos provisionados

- O usuario pode usar o Amazon EBS para criar volumes de armazenamento individuais e anexá-los a uma instância do EC2

- O Amazon EBS oferece armazenamento em nível de bloco com volumes replicados automaticamente dentro de sua zona de disponibilidade

- Esse arranjo fornece armazenamento durável, destacável e em nível de bloco (como um disco rígido externo) para suas instâncias do EC2

- Os volumes são diretamente anexados às instâncias. Assim, eles fornecem baixa latência entre onde os dados são armazenados e onde eles podem ser usados na instância

  - Por esse motivo, eles podem ser usados para executar um banco de dados com uma instância do EC2

- Os volumes do EBS também podem ser usados para fazer backup das suas instâncias em Amazon Machine Images (AMIs), que são armazenadas no Amazon Simple Storage Service (Amazon S3) e podem ser reutilizadas para criar novas instâncias do EC2 posteriormente

- Os usos incluem:

  - Volumes de inicialização e armazenamento para instâncias do EC2
  - Armazenamento de dados com um sistema de arquivos
  - Hosts de banco de dados
  - Aplicações empresariais

- Para fornecer um nível ainda maior de durabilidade de dados, o usuario pode usar o Amazon EBS para criar snapshots pontuais dos seus volumes

- O usuario também pode recriar um novo volume a partir de um instantâneo a qualquer momento

- Compartilhe snapshots ou até copie snapshots para diferentes regiões da AWS para uma proteção ainda maior da recuperação de desastres (DR)

- O usuario pode, por exemplo, criptografar e compartilhar seus instantâneos da Virgínia, EUA para Tóquio, Japão

- O usuario também pode obter volumes criptografados do Amazon EBS sem custo adicional

  - A criptografia ocorre no lado do Amazon EC2
  - Os dados que se movem entre a instância do EC2 e o volume do EBS dentro dos data centers da AWS são criptografados em trânsito

- Os volumes do EBS podem aumentar a capacidade e mudar para diferentes tipos

- O usuario pode mudar de uma unidade de disco rígido (HDD) para uma unidade de estado sólido (SSD)

- O usuario também pode aumentar de um volume de 50 GB para um volume de 16 TB

  - Por exemplo, o usuario pode fazer essa operação de redimensionamento dinamicamente, sem interromper as instâncias

- O Amazon EBS oferece a capacidade de fazer backup de snapshots de seus dados no Amazon S3 para recuperação durável

- Se o usuario escolher snapshots do Amazon EBS, o custo adicional será calculado por GB por mês de dados armazenados

## **Tipos de volume do EBS**

- Ao estimar o custo do Amazon EBS, o usuario deve considerar o seguinte:

- `Volumes`

  - O armazenamento de volume para todos os tipos de volume do EBS é cobrado pelo valor provisionado em GB por mês, até o usuario liberar o armazenamento

- `IOPS`

  - As operações de entrada/saída por segundo (IOPS) são uma forma de medir o desempenho dos dispositivos de armazenamento

  - Um IOPS mais alto significa que um dispositivo de armazenamento pode lidar com mais operações de entrada e saída (ou seja, gravação e leitura)

  - Para o Amazon EBS, a E/S está incluída no preço dos volumes de uso geral (SSD), enquanto para volumes magnéticos do Amazon EBS, a E/S é cobrada pelo número de solicitações feitas ao seu volume

  - Com os volumes de IOPS provisionadas (SSD), o usuario também é cobrado pelo valor provisionado em IOPS (multiplicado pela porcentagem de dias provisionados para o mês)

- O Amazon EBS fornece tipos de volume que diferem em características de performance e preços para adaptar a performance e o custo de armazenamento às necessidades de diferentes aplicações

- Eles são identificados por um nome de 3 caracteres (por exemplo, io1 e st1) e se enquadram em duas categorias, unidades de estado sólido (SSD) que são ideais para cargas de trabalho intensivas de IOPS e unidades de disco rígido (HDD) adequadas para MB/s (taxa de transferência) cargas de trabalho intensivas

- Os tipos de volume disponíveis são:

  - `SSD de IOPS provisionadas (io1)`

    - Sustentadas por unidades de estado sólido (SSDs) e a opção de armazenamento de maior desempenho do Amazon EBS

  - `SSD de uso geral (gp2)`

    - Esse é o tipo de volume do EBS padrão para instâncias do EC

  - `HDD otimizado para taxa de transferência (st1)`

    - Esse tipo de volume é apoiado por unidades de disco rígido (HDDs) e funciona bem para cargas de trabalho com taxa de transferência intensiva e acessadas com frequência, com grandes conjuntos de dados e grandes tamanhos de E/S

  - `HDD inativo (sc1)`

    - Esse tipo de volume é apoiado por unidades de disco rígido (HDDs) e oferece o menor custo por GB de todos os tipos de volume do EBS
    - Ele funciona menos para cargas de trabalho acessadas com menos frequência com conjuntos de dados grandes e inativos

- Adequar a tecnologia correta à sua carga de trabalho é a principal das melhores práticas para reduzir custos de armazenamento

- Os volumes do EBS apoiados por unidade de estado sólido (SSD) de IOPS provisionadas podem oferecer o mais alto desempenho. No entanto, se o aplicativo não exigir ou usar um desempenho tão alto, uma das opções de custo mais baixo pode ser uma solução melhor

## **Snapshots**

- O usuario pode fazer backup dos dados em um volume do EBS em um snapshot

- É crucial tirar snapshots de todos os dados que o usuario possa ter em desenvolvimento, teste ou produção regularmente

- O Amazon EBS oferece a capacidade de tirar snapshots de seus volumes para que eles possam ser restaurados caso o hardware subjacente que oferece suporte ao seu volume falhe ou o volume seja excluído acidentalmente

- Os snapshots copiam dados em nível de bloco para a infraestrutura do Amazon S3

- Os objetos são armazenados de forma redundante e podem sustentar a perda simultânea de dados em duas instalações

- O primeiro snapshot é um snapshot completo do estado do disco no momento em que o snapshot foi criado

- Todos os snapshots subsequentes capturarão apenas os deltas (diferenças) em comparação com o snapshot anterior

- Se o usuario adicionar dados ao volume do EBS depois de copiar o primeiro snapshot e criar um segundo snapshot, os novos blocos serão copiados para o Amazon S3

- O segundo snapshot consistirá em uma receita para restaurar o volume

- A receita consiste nos blocos do primeiro snapshots e em todos os novos blocos

- Os snapshots são incrementais, o que significa que eles são baseados em deltas

- Somente as alterações de snapshots anteriores devem ser copiadas para o Amazon S3

- Se o usuario atualizar blocos no volume do EBS e criar um terceiro snapshot, somente os blocos alterados serão copiados para o Amazon S3

- A nova receita para restaurar consistirá nos blocos atualizados e nos blocos restantes que ainda estiverem presentes no volume do EBS

## **Ciclo de vida do snapshot**

- O usuario pode usar o Amazon Data Lifecycle Manager (Amazon DLM) para automatizar a criação, a retenção e a exclusão de snapshots tirados para fazer backup dos volumes do EBS

- A automação do gerenciamento de snapshots ajuda o usuario a:

1. Proteger dados valiosos impondo uma programação regular de backup
2. Reter os backups conforme exigido por auditores ou pelas regras de conformidade interna
3. Reduzir os custos de armazenamento ao excluir backup obsoletos

- Para usar o Amazon DLM, marque o seu volume do EBS e crie uma política de ciclo de vida que defina o comportamento de backup e retenção que o usuario deseja aplicar a ele

- Uma política de ciclo de vida consiste nas seguintes configurações principais:

1. `Tipo de recurso`

   - O recurso da AWS gerenciado pela política (neste caso, volumes do EBS)

2. `Tag de destino`

   - A tag que deve ser associada com um volume do EBS a ser gerenciado pela política

3. `Programação`

   - Define com que frequência criar snapshots e o número máximo de snapshots a serem mantidos
   - A criação de um snapshot é iniciada em até uma hora após o horário de início especificado
   - Se a criação de um novo snapshot ultrapassar o número máximo de snapshots a serem mantidos para o volume, o snapshot mais antigo será excluído

- Crie uma política de ciclo de vida para gerenciar os backups de seus volumes do EBS

- Um arquivo JavaScript Object Notation (JSON) deve ser gerado para cobrir os detalhes da política

## **Casos de uso**

![Casos-de-uso](../Arquivos/Casos%20de%20uso%20EBS.png)

## **Comandos CLI**

- Criar volume

```bash
aws ec2 create-volume \ --size 80 \ --availability-zone us-east-1a \ --volume-type gp2
```

- Anexar volume

```bash
s ec2 attach-volume --volume-id vol-1234567890abcdef0 --instance-id i-01474ef662b89480 --device /dev/sdf
```

- Criar snapshot

```bash
aws ec2 create-snapshot –-volume-id vol-1234567890abcdef0 --description "This is my root volume snapshot"
```

- Copiando um snapshot

```bash
ws ec2 copy-snapshot –-region us-east-1 --source-region us-west-2 –-source-snapshot-id snap-1234567890abcdef0 --description "This is my copied snapshot"
```

- Prova de copia

```bash
$ aws ec2 describe-snapshots --snapshot-ids snap-0b3c2a7c2a7e4eec6 - -region us-west-2
```

- Restaurar um snapshot

```bash
aws ec2 create-volume –-size 80 –-availability-zone us-east-1a --volume-type gp2 –-snapshot-id snap-1234567890abcdef0
```

- Verificar o status do volume

```bash
aws ec2 describe-volume-status --volume-ids vol-1234567890abcdef0
```

- Gerenciamento de snapshots do amazon EC2

```bash
$ aws dlm create-default-role
```

- Gerenciar volumes do EBS com politica de ciclo de vida

```bash
$ aws dlm create-lifecycle-policy --description "My backup policy" --state ENABLED --execution-role-arn
arn:aws:iam::197757065544:role/AWSDataLife
cycleManagerDefaultRole --policy-details file://policyDetails.json
```

- Exibir politica de ciclo de vida

```bash
aws dlm get-lifecycle-policy --policy-id policy-0b0ac162276313459
```

# **Serviços - Elastic file system**

- O Amazon EFS é um armazenamento escalável, totalmente gerenciado e elástico do Network File System (NFS) para uso com serviços de nuvem da AWS e recursos locais

- Alguns recursos do Amazon EFS são os seguintes:

  1. Sistema de arquivos em escala de petabytes e baixa latência
  2. Capacidade elástica
  3. Suporta NFS
  4. Compatível com todas as imagens de máquina da Amazon (AMIs) baseadas no Linux para Amazon Elastic Compute Cloud (Amazon EC2)

- **Elástica**

  - O armazenamento do Amazon EFS é simples, escalável e elástico

- **Elasticidade dinâmica**

  - O Amazon EFS foi criado para escalar elasticamente sob demanda, sem interromper os aplicativos
  - Os sistemas de arquivos do Amazon EFS crescem e diminuem automaticamente à medida que o usuario adiciona e remove arquivos
  - Seus aplicativos têm o armazenamento de que precisam, quando precisam

- **Totalmente gerenciado**

  - O Amazon EFS é um serviço gerenciado que facilita a configuração e o dimensionamento de armazenamento de arquivos na nuvem da AWS
  - É uma maneira fácil de criar um sistema de arquivos para big data e análise, fluxos de trabalho de processamento de mídia, gerenciamento de conteúdo, veiculação da Web e diretórios iniciais

- Para oferecer suporte a uma variedade de cargas de trabalho de armazenamento na nuvem, o Amazon EFS expõe atributos que permitem controlar o desempenho do sistema de arquivos

- Esses atributos de desempenho consistem em modo de desempenho, classe de armazenamento e modo de taxa de transferência

## **Modo de desempenho**

- O usuario pode selecionar entre dois modos de desempenho ao criar um sistema de arquivos: uso geral e E/S máxima

- De `Uso geral` é recomendado para a maioria dos sistemas de arquivos do Amazon EFS

- O uso geral funciona bem para casos de uso sensíveis à latência, como ambientes de serviço da Web, sistemas de gerenciamento de conteúdo, diretórios iniciais e serviço geral de arquivos

- Se o usuario não escolher um modo de desempenho ao criar seu sistema de arquivos, o Amazon EFS selecionará o modo de uso geral para o usuario por padrão

- Os sistemas de arquivos no modo `E/S máxima` podem ser dimensionados para níveis mais altos de taxa de transferência agregada e operações por segundo com uma compensação de latências ligeiramente mais altas para operações de arquivos

- Aplicativos e cargas de trabalho altamente paralelizados, como análise de big data e processamento de mídia, podem se beneficiar desse modo

- Observe que o usuario não pode alterar o modo de desempenho de um sistema de arquivos após ele ter sido criado

## **Classe de armazenamento**

- O Amazon EFS oferece uma classe de armazenamento Standard e uma classe de armazenamento de acesso pouco frequente

- **Classe de armazenamento Standard**

  - Foi projetada para cargas de trabalho ativas do sistema de arquivos e funciona bem para armazenar arquivos acessados com frequência

- **Acesso pouco frequente**

  - É uma classe de armazenamento de baixo custo otimizada para armazenar arquivos de longa duração e acessados com pouca frequência

- **Modo de taxa de transferência**

  - O usuario pode escolher entre dois modos de taxa de transferência para o sistema de arquivos: taxa de transferência intermitente e taxa de transferência provisionada

  - **Com a Taxa de transferência de intermitência**, a taxa de transferência no Amazon EFS aumenta à medida que o tamanho do seu sistema de arquivos na classe de armazenamento padrão aumenta

  - Essa é a configuração do modo padrão

  - **Com a Taxa de transferência provisionada**, o usuario pode instantaneamente provisionar a taxa de transferência do seu sistema de arquivos (em mebibytes por segundo ou MiB/s), independente da quantidade de dados armazenados

  - Esse modo permite que o usuario cresça além dos limites permitidos pelo modo de Taxa de transferência de intermitência

- O usuario pode criar um sistema de arquivos, montar o sistema de arquivos em uma instância do EC2 e, em seguida, ler e gravar dados de e para o sistema de arquivos

- O usuario pode montar um sistema de arquivos do Amazon EFS na sua VPC por meio do protocolo Network File System versões 4.0 e 4.1 (NFSv4)

- O usuario pode acessar o sistema de arquivos do Amazon EFS simultaneamente a partir de instâncias do EC2 na sua Amazon VPC, para que os aplicativos que escalam além de uma única conexão possam acessar um sistema de arquivos

- As instâncias do EC2 executadas em várias zonas de disponibilidade dentro da mesma região da AWS podem acessar o sistema de arquivos para que muitos usuários possam acessar e compartilhar uma fonte de dados comum

## **Etapas para configurar um sistema de arquivos do Amazon EFS e torná-lo acessível a uma instância do EC2**

1. Criar o sistema de arquivos do Amazon EFS. Observe que ele possui um escopo no nível da região.
2. Crie um destino de montagem na Virtual Private Cloud (VPC) da instância. Um destino de montagem fornece um endereço IP para um ponto de extremidade NFSv4 onde o usuario pode montar seu sistema de arquivos.
3. Montar o sistema de arquivos no destino de montagem. 4. Conectar a instância do EC2 ao destino de montagem.

## **Etapas de implantação**

1. Crie seus recursos do Amazon EC2 e execute sua instância. (Lembre-se de que antes de iniciar e se conectar a uma instância do EC2, o usuario deve criar um par de chaves, a menos que já tenha um.)
2. Crie um sistema de arquivos do Amazon EFS
3. Na sub-rede apropriada, crie as montagens de destino
4. Em seguida, conecte-se à sua instância do EC2 e monte o sistema de arquivos do Amazon EFS
5. Por fim, limpe seus recursos e proteja sua conta da AWS

## **Recursos do Amazon EFS**

- No Amazon EFS, o principal recurso é o sistema de arquivos. Cada sistema de arquivos tem propriedades como ID, token de criação, hora de criação, tamanho do sistema de arquivos em bytes, número de destinos de montagem criados para o sistema de arquivos e o estado do sistema de arquivos

- O Amazon EFS também oferece suporte a outros recursos para configurar o recurso principal. Esses outros recursos incluem destinos de montagem e tags

- **Ponto de acesso**

  - Para acessar o sistema de arquivos, o usuario deve criar destinos de montagem na VPC. Cada destino de montagem tem as seguintes propriedades:
    - O ID do destino de montagem
    - O ID da sub-rede em que ele é criado
    - O ID do sistema de arquivos para o qual ele foi criado
    - Um endereço IP onde o sistema de arquivos pode ser montado
    - O estado do destino de montagem
  - O usuario pode usar o endereço IP ou o nome Domain Name System (DNS) no comando de montagem

- **Tags**

  - Para ajudar a organizar seus sistemas de arquivos, o usuario pode atribuir seus próprios metadados a cada sistema de arquivos criado
  - Cada tag é um par de chave/valor
  - Pense em destinos de montagem e tags como sub-recursos que existem somente se eles estiverem associados a um sistema de arquivos.

## **Casos de uso**

- **Diretórios iniciais**

  - O Amazon EFS pode fornecer armazenamento para organizações que têm muitos usuários que precisam acessar e compartilhar conjuntos de dados comuns

- **Sistema de arquivos para aplicativos corporativos**

  - O Amazon EFS fornece escalabilidade, elasticidade, disponibilidade e durabilidade para ser o armazenamento de arquivos para aplicativos corporativos e para aplicativos entregues como um serviço
  - A interface padrão do sistema de arquivos, as permissões do sistema de arquivos e a hierarquia de diretórios facilitam a migração de aplicativos corporativos de ambientes locais para a Nuvem AWS

- **Teste e desenvolvimento de aplicativos**

  - O Amazon EFS fornece aos seus ambientes de desenvolvimento um repositório de armazenamento comum. Com um sistema de arquivos do Amazon EFS, o usuario pode compartilhar código e outros arquivos de forma segura e organizada
  - O Amazon EFS oferece uma solução escalável e altamente disponível que funciona bem para cargas de trabalho de teste e desenvolvimento

- **Backups de banco de dados**

  - O Amazon EFS apresenta um sistema de arquivos padrão que pode ser facilmente montado com o NFSv4 a partir de servidores de banco de dados
  - Ele fornece uma maneira de criar backups de banco de dados portáteis com ferramentas de aplicativos nativos ou aplicativos de backup corporativos

- **Serviços da Web e gerenciamento de conteúdo**

  - O Amazon EFS fornece um sistema de arquivos durável e de alta taxa de transferência para sistemas de gerenciamento de conteúdo que armazenam e veiculam informações para uma variedade de aplicativos, como sites, publicações on-line e arquivos

- **Análise de Big Data**

  - O Amazon EFS fornece escala e desempenho para aplicativos de big data que exigem alta taxa de transferência para nós de computação
  - Ele também fornece consistência de leitura após gravação e operações de arquivo de baixa latência

- **Fluxos de trabalho de mídia**

  - Fluxos de trabalho de mídia, como edição de vídeo, produção em estúdio, processamento de transmissão, design de som e renderização geralmente dependem do armazenamento compartilhado para manipular arquivos grandes
  - Um modelo de consistência de dados robusto com alta taxa de transferência e acesso a arquivos compartilhados pode reduzir o tempo necessário para realizar esses trabalhos
  - Ele também pode consolidar vários repositórios de arquivos locais em um único local para todos os usuários

# **Serviços - Armazenamento de instancias**

- Os armazenamentos de instâncias fornecem armazenamento temporário em nível de bloco para a instância. Esse armazenamento está localizado em discos que estão anexados fisicamente ao computador host

- Fornece armazenamento temporário para suas instâncias do EC2

- Um armazenamento de instâncias é feito de volumes de armazenamento de instâncias também chamados de unidades temporárias (blocos de dados)

- O armazenamento não é persistente: os dados são recuperados quando a instância do EC2 é encerrada

- Um armazenamento de instâncias é dedicado a uma instância específica do EC2

- É um armazenamento rápido e de baixa latência

- As instâncias com suporte de armazenamento de instâncias não podem ser interrompidas. Elas só podem ser encerradas.

- Os dados são recuperados quando a instância é encerrada, mas permanecem em caso de reinicialização

- Os volumes de armazenamento de instâncias não têm sua própria interface de programação de aplicativos de gerenciamento (API)

- Em vez disso, os volumes de armazenamento de instâncias são especificados usando o recurso de mapeamento de dispositivos de blocos da API do Amazon EC2 e do Console de gerenciamento da AWS

- O usuario não pode criar ou destruir volumes de armazenamento de instâncias, mas pode controlar se eles estão expostos à instância do Amazon EC2 e qual nome de dispositivo é usado

## **Volumes**

- Alguns tipos de instância não oferecem suporte a volumes de armazenamento de instâncias

- Para os tipos de instância compatíveis com eles, o número e o tamanho dos volumes de armazenamento de instâncias disponíveis para uma instância variam de acordo com o tipo de instância

- Os tipos de instância que usam unidades de estado sólido (SSD) baseadas em NVMe (Non-Volatile Memory Express) ou Serial Advanced Technology Attachment (SATA) oferecem alto desempenho de E/S aleatório

- O NVMe pode executar milhares de comandos simultaneamente e é uma forma de acessar a memória

- Esses tipos de instância são uma boa opção quando o usuario precisa de armazenamento com baixa latência, mas não precisa que os dados persistam quando a instância for encerrada

- O usuario deve especificar os volumes de armazenamento de instâncias que deseja usar ao executar uma instância (exceto os volumes de armazenamento de instâncias NVMe, que estão disponíveis por padrão)

- O usuario não pode disponibilizar um volume de armazenamento de instâncias depois de executar a instância

- Depois que a instância é executada, os volumes de armazenamento de instâncias ficam disponíveis para a instância

- No entanto, o usuario não pode acessar os volumes de armazenamento de instâncias até que eles sejam montados

- Para instâncias do Microsoft Windows, o serviço EC2Launch monta os volumes de armazenamento de instâncias para uma instância

- Para instâncias do Linux, o tipo de instância determina quais volumes de armazenamento de instâncias são montados para o usuario e quais exigem que o usuario mesmo monte

## **Casos de uso**

- Os volumes de armazenamento de instâncias da AWS funcionam bem para o armazenamento temporário de informações que estão mudando continuamente, como buffers, caches, dados temporários e outros conteúdos temporários

- O usuario também pode usá-los para dados que são replicados em uma frota de instâncias, como um pool de servidores Web com balanceamento de carga

# **Serviços - Amazon Storage Gateway**

- O Storage Gateway é um serviço de armazenamento híbrido que permite que seus aplicativos locais usem o armazenamento na nuvem da AWS

- O usuario pode usar o Storage Gateway para backup e arquivamento, recuperação de desastres (DR), processamento de dados na nuvem, armazenamento em camadas e migração

- O Storage Gateway fornece um conjunto padrão de protocolos de armazenamento, como Internet Small Computer Systems Interface (iSCSI), Server Message Block (SMB) e Network File System (NFS). Esses protocolos permitem que o usuario use o armazenamento da AWS sem reescrever seus aplicativos existentes

- O Storage Gateway pode preencher a lacuna entre a infraestrutura local e os serviços na nuvem de um aplicativo

  - Por exemplo, suponha que um aplicativo precise permanecer no local por motivos de desempenho ou conformidade, ou pode ser muito complexo migrar totalmente para a nuvem. Nesse caso, o usuario pode usar o Storage Gateway como uma ponte entre o aplicativo e a nuvem

- Seus aplicativos se conectam ao serviço por meio de uma máquina virtual (VM) ou dispositivo de gateway de hardware usando protocolos de armazenamento padrão, como Network File System (NFS), Server Message Block (SMB) e Internal Small Computer Interface (iSCSI)

- O gateway se conecta a serviços de armazenamento da AWS, como Amazon Simple Storage Service (Amazon S3), Amazon Simple Storage Service Glacier e Amazon Elastic Block Store (Amazon EBS)

- Ele fornece armazenamento para arquivos, volumes e fitas virtuais na AWS. Assim, o Storage Gateway oferece três tipos de interface — gateway de arquivos, gateway de volume e gateway de fita

- O serviço inclui um mecanismo de transferência de dados altamente otimizado, com gerenciamento de largura de banda, resiliência de rede automatizada e transferência de dados eficiente. Ele também fornece um cache local para acesso local de baixa latência aos dados mais ativos

- O Storage Gateway simplifica a adoção local do armazenamento da AWS. Os três tipos de interface que ele suporta — `arquivo, volume (bloco) e fita`

- **Gateway de arquivos**

  - Com esse tipo de gateway, as informações são armazenadas e recuperadas como objetos no Amazon S3 com um cache local para o usuário

- **Gateway de volumes**

  - Se os sistemas locais usarem iSCSI (Internet Small Computer Systems Interface), os gateways de volume oferecem um mecanismo de acesso ao Amazon S3 para armazenamento

- **Gateway de fita**
  - Se os sistemas locais usarem iSCSI (Internet Small Computer Systems Interface), os gateways de volume oferecem um mecanismo de acesso ao Amazon S3 para armazenamento

## **Como o Gateway de armazenamento faz interface com a Nuvem AWS**

- A interface de arquivos do Storage Gateway permite armazenar e recuperar objetos no Amazon S3 usando o protocolo NFS ou SMB

- Depois que seus arquivos são transferidos para o Amazon S3, eles são armazenados como objetos e acessados por meio de um ponto de montagem NFS

- Aqui, eles podem ser gerenciados como objetos nativos do Amazon S3

- Como objetos do S3, os arquivos se beneficiam de recursos como versionamento, gerenciamento do ciclo de vida (incluindo arquivamento no Amazon S3 Glacier) e replicação entre regiões

## **Gateway de volume**

- A interface de volume do Storage Gateway apresenta às aplicações os volumes de disco de armazenamento em bloco que podem ser acessados usando o protocolo iSCSI

- Os dados nesses volumes são copiados como snapshots pontuais do Amazon EBS, que permitem acessar os dados por meio do Amazon Elastic Compute Cloud (Amazon EC2), se necessário

- Ao se conectar com essa interface de bloco, o usuario pode executar o gateway em dois modos diferentes: armazenado em cache ou armazenado

- No modo armazenado em cache, os seus dados principais são armazenados no Amazon S3 e o usuario mantém os dados acessados com frequência armazenados localmente

- Isso resulta em uma economia substancial de custos para o armazenamento principal

- Ele minimiza a necessidade de dimensionar o armazenamento local, mantendo o acesso de baixa latência aos dados acessados com frequência

- No modo armazenado, o usuario armazena todo o conjunto de dados localmente, enquanto realiza backups assíncronos desses dados no Amazon S3. Esse modo fornece backups externos duráveis e baratos que o usuario pode recuperar localmente ou a partir do Amazon EC2

## **Gateway de fita**

- A interface de fita apresenta o Storage Gateway ao seu aplicativo de backup existente como uma biblioteca de fitas virtuais, que consiste em um trocador de mídia virtual e unidades de fita virtuais

- O usuario pode continuar a usar os seus aplicativos de backup atuais enquanto faz gravações em um conjunto praticamente ilimitado de fitas virtuais

- Cada fita virtual é armazenada no Amazon S3

- Quando o usuario não precisar mais de acesso a dados em fitas virtuais, seu aplicativo de backup poderá arquivá-los da biblioteca de fitas virtuais no Amazon S3 Glacier

- Esse recurso pode reduzir ainda mais os custos de armazenamento

## **Casos de uso**

![Solucoes](../Arquivos/Casos%20de%20uso%20Storage%20Gateway.png)

O Storage Gateway suporta três casos de uso de nuvem híbrida principais

1. Mova backups e arquivos para a nuvem
2. Reduza o armazenamento local com compartilhamentos de arquivos com suporte em nuvem
3. Forneça aos aplicativos locais acesso de baixa latência aos dados armazenados na AWS

# **Serviços - Database migration**

- O AWS DMS serve para:

  1. Migração de bancos de dados
  2. Replicação quase continua
  3. Consolidação de dados

## **Migração de dados**

- Com o AWS Database Migration Service, o banco de dados de origem permanece totalmente operacional durante a migração, minimizando períodos de inatividade para aplicativos que dependem do banco de dados

- O AWS DMS pode migrar seus dados de e para os bancos de dados comerciais e de código aberto mais usados no mercado

- Ao usar este serviço, o usuario pode migrar do serviço do sistema de gerenciamento de banco de dados (DBMS) para um serviço do DBMS diferente

  - Por exemplo, o usuario pode ir de: – Oracle para Oracle – Microsoft SQL Server para Amazon Aurora

- Os aplicativos podem permanecer ativos ou em execução durante a migração

- O serviço oferece suporte a `migrações homogêneas` (como, por exemplo, de Oracle para Oracle) e `migrações heterogêneas` entre plataformas de banco de dados diferentes (como de Oracle para MySQL ou de MySQL para o Amazon Aurora)

- O usuario também pode usar o AWS DMS para migrar o seu banco de dados local para um banco de dados em execução em uma instância do Amazon Elastic Compute Cloud (Amazon EC2)

- O AWS DMS pode replicar dados quase continuamente e é usado com alta disponibilidade

- Se necessário, o AWS DMS habilita bancos de dados consolidados em um data warehouse em escala de petabytes em outros serviços da Amazon

  - Exemplos desses serviços são o Amazon Redshift e o Amazon S3

- O AWS DMS pode migrar entre a linguagem de consulta estruturada (SQL) e bancos de dados NoSQL
  - Por exemplo, ele pode migrar de:
    1. SQL para SQL
    2. NoSQL para SQL
    3. SQL para NoSQL
    4. NoSQL para NoSQL

## **Tipos de migrações de banco de dados**

- `Homogenea`

  - Os tipos de dados e o código do banco de dados são compatíveis entre os bancos de dados de origem e destino, esse tipo de migração é um processo que consiste em apenas uma etapa
  - O banco de dados de origem pode estar localizado em um campus corporativo ou localmente fora da AWS
  - Ele pode ser executado em uma instância do Amazon Elastic Compute Cloud (Amazon EC2) ou pode ser um banco de dados do RDS
  - O destino pode ser um banco de dados no Amazon EC2 ou Amazon RDS

- `Heterogenea`

  - Os mecanismos de banco de dados de origem e de destino são diferentes
  - Os exemplos incluem migrações do Oracle para o Amazon Aurora ou do Microsoft SQL Server para o MySQL
  - Nesses casos, a estrutura do esquema, os tipos de dados e o código do banco de dados dos bancos de dados de origem e destino podem ser muito diferentes
  - Uma transformação de esquema e código é necessária antes do início da migração de dados
  - As etapas do processo são:
    1. A primeira etapa usa a AWS SCT para converter o esquema de origem e o código para corresponder ao esquema e ao código do banco de dados de destino
    2. A segunda etapa usa o AWS DMS para migrar dados do banco de dados de origem para o banco de dados de destino

## **Como funciona**

- Uma migração de banco de dados segue o seguinte processo:

  1. Conecta-se ao armazenamento de dados de origem
  2. Lê os dados de origem
  3. Formata os dados para consumo pelo armazenamento de dados de destino
  4. Depois, ela carrega os dados no datastore de destino

- Ao usar o AWS DMS, o usuario executa as seguintes ações:

  1. Criar um servidor de replicação (instância)
  2. Criar pontos de extremidade de origem e de destino que tenham informações de conexão sobre os datastores
  3. Criar uma ou mais tarefas de migração para migrar os dados entre os datastores de origem e de destino

- Uma tarefa pode consistir em três fases principais:

  1. A carga total de dados existentes
  2. O aplicativo de alterações em cache
  3. Replicação contínua

## **Ferramenta de conversão de Schema ou AWS Schema Conversion Tool(AWS SCT)**

- A maioria das migrações de banco de dados envolve duas etapas:

  1. Converter o esquema usando o AWS SCT
  2. Migrar os dados usando o AWS DMS

- O AWS DMS, junto com o AWS SCT, permite migrar seu banco de dados para a AWS enquanto reduz o tempo de inatividade

![Conversoes](../Arquivos/Conversoes%20compativeis%20de%20banco%20de%20dados.png)

## **Replicação de bancos**

- A `replicação de banco de dados quase contínua` permite replicar dados de acordo com uma programação, como um trabalho noturno, ou realizar replicação quase em tempo real

- A replicação quase contínua pode ser feita do seu datacenter para os bancos de dados na AWS. Ou isso pode ser feito na direção inversa, replicando para um banco de dados no seu data center a partir de um banco de dados na AWS

- Os dados dos bancos de dados de origem são replicados continuamente nos bancos de dados de destino

- A replicação contínua de dados pode ser útil para recuperação de desastres e distribuição de bancos de dados geográficos

-

## **Consolidação de dados**

- Nas consolidações de banco de dados, várias fontes são combinadas em um banco de dados

- Os bancos de dados de origem podem ser:

  1. Local fora da AWS
  2. Instalado em uma instância do EC2 ou no Amazon RDS dentro da Nuvem AWS

- Os bancos de dados de destino podem ser:
  1. Instalado em uma instância do EC2
  2. Amazon RDS

## **Arquitetura do DMS**

- A arquitetura do AWS DMS consiste em quatro componentes:

  1. `Instância de replicação`

     - Uma instância do EC2 que executa as tarefas de que o processo de migração precisa
     - Para começar a usar o AWS DMS, o usuario precisa de uma instância de replicação para executar as tarefas de migração
     - A instância de replicação é executada em uma Virtual Private Cloud (VPC) e realiza o trabalho de replicação de banco de dados
     - A instância de replicação é altamente disponível por meio da implantação Multi-AZ
     - A instância de replicação principal é replicada de forma síncrona entre as zonas de disponibilidade para uma réplica em espera, que fornece redundância de dados
     - Ela também pode ser segura porque seu armazenamento pode ser criptografado
     - O AWS DMS usa uma chave mestra no sistema de gerenciamento de chaves da sua conta (KMS) ou a chave mestra do cliente (CMK) para essa criptografia

  2. `Tarefa`

     - O processo que executa o trabalho de migração de dados
     - A tarefa se refere à tarefa de replicação
     - A tarefa pode ser configurada para migrar somente dados existentes, migrar dados existentes e replicar alterações contínuas ou replicar apenas alterações de dados

  3. `Origem`

     - Este é o ponto de extremidade do banco de dados de origem, que pode ser executado no local, no Amazon RDS ou no Amazon EC2

  4. `Destino`

     - Este é o ponto de extremidade do banco de dados de destino, que pode ser executado no local, no Amazon RDS ou no Amazon EC2

- Para usar o AWS DMS:

  1. Primeiro, crie um servidor de replicação
  2. Em seguida, especifique endpoints de origem e de destino que tenham informações de conexão sobre os seus armazenamentos de dados
  3. Por fim, crie uma ou mais tarefas na instância de replicação para migrar dados entre os armazenamentos de dados de origem e de destino

# **Serviços - AWS Step functions**

- Com o AWS Step Functions, o usuario pode coordenar vários serviços da AWS em fluxos de trabalho sem servidor para que possa criar e atualizar aplicativos rapidamente

  - Por exemplo, o usuario pode projetar e executar fluxos de trabalho que combinam serviços, como o AWS Lambda e o Amazon ECS, em aplicativos com vários recursos

- Os fluxos de trabalho consistem em uma série de etapas

- A saída de uma etapa funciona como entrada para a próxima

- O Step Functions converte seu fluxo de trabalho em um diagrama de máquina de estado fácil de compreender, explicar e alterar

- Máquina de estado é uma série de etapas e transições entre cada etapa no AWS Step Functions

- O usuario pode monitorar cada etapa do tempo de execução conforme ela ocorre, o que significa que é possível identificar e corrigir problemas rapidamente

- O Step Functions aciona e monitora cada etapa automaticamente, também executa novas tentativas quando há erros, para que o aplicativo seja executado na ordem e conforme esperado

- Benefícios do Step Functions:
  1. **_Produtividade_**
  - O usuario pode ter mais tempo para pensar sobre como inovar a lógica de negócios que torna o aplicativo exclusivo
  - Os aplicativos podem se tornar mais fáceis de operar e manter
  2. **_Agilidade_**
  - O Step Functions registra um histórico toda vez em que ele é executado, para que o usuario possa revisar todos os eventos na sequência em um único local
  - O usuario pode dimensionar de um tempo de execução para milhares de tempos de execução simultâneos, especialmente quando ele é usado com outros recursos sem servidor da AWS. Alguns exemplos de recurso incluem o AWS Lambda, o Amazon Simple Storage Service (Amazon S3) e o Amazon DynamoDB.
  - Com o Step Functions, o usuario paga apenas pelo que usa, quando usa
  3. **_Resiliência_**
  - O Step Functions comporta o tratamento automático de erros para oferecer saídas normais
  - Ele opera em escala, e o usuario não precisa configurar nem gerenciar recursos subjacentes

## **Como funciona**

- O AWS Step Functions funciona por meio de fluxos de trabalho configurados que o usuario define

- O usuario coordena tarefas específicas expressando seu fluxo de trabalho como uma máquina de estado

- Os estados específicos tomam decisões com base em seus dados de entrada, executam ações e transmitem os dados de saída para outros estados

- O console do Step Functions fornece uma representação gráfica dessa máquina de estado para ajudar a visualizar a lógica do aplicativo

- Os estados podem desempenhar funções diferentes

  - Por exemplo, eles podem realizar algum trabalho (executar uma tarefa) ou escolher qual ramificação no fluxo de trabalho deve continuar

- As tarefas são configuradas para invocar o código hospedado em uma função, contêiner ou instância

- O código pode então ser executado quantas vezes forem necessárias por um período de um ano

- À medida que os fluxos de trabalho evoluírem, o usuario poderá alterar as tarefas ou a ordem das etapas, ou adicionar ou excluir tarefas, sem precisar modificar nenhum código

## **Ciclo de vida**

- No Step Functions, eles são chamados de estados etransições de estado

- Ao iniciar uma máquina de estado, o usuario introduz a entrada usando JSON

- Cada estado muda ou complementa a saída JSON, que se torna a entrada do próximo estado

- O console do Step Functions oferece visualização, que o usuario pode usar para obter informações quase em tempo real quando sua máquina de estado estiver em execução

## **Casos de uso**

- O AWS Step Functions auxilia a maioria dos processos de negócios que requerem uma série de etapas

- Ele também é útil para `criar fluxos de trabalho` completos para gerenciar tarefas com interdependências

- `Processamento de dados`

  - Consolide dados de vários bancos de dados em relatórios unificados.

- `DevOps e automação de TI`

  - Cria ferramentas para integração e implantação contínuas.

- `Comércio eletrônico`

  - Automatize o atendimento de pedidos e o monitoramento de inventário.

- `Aplicativos web`
  - Processos de registro de usuários e autenticação de logon

# **Serviços - Containers na AWS**

## **Containers**

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

## **Amazon Elastic Container Registry (Amazon ECR)**

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

## **Amazon Elastic Container Service (Amazon ECS)**

- O Amazon Elastic Container Service (Amazon ECS) é um serviço de gerenciamento de contêineres altamente dimensionável e de alto desempenho compatível com contêineres do Docker

- Ele permite que o usuario execute aplicativos em um cluster gerenciado de instâncias do EC2

- Ele oferece programação flexível

- O Amazon ECS usa um planejador integrado ou usa programador de terceiros, como o Apache Mesos

- O usuario também pode executar a programação de tarefas, serviços ou daemon

- As interfaces de programação de aplicativo do Amazon ECS facilitam a integração de soluções de terceiros, como planejadores, ou apoiam seu processo de entrega de software

- O Amazon ECS executa seus contêineres em sua própria nuvem privada virtual (VPC), o que permite que o usuario use security groups de sua VPC e listas de controle de acesso de rede (ACLs de rede)

  - Nenhum recurso de computação é compartilhado com outros clientes
  - O usuario pode atribuir permissões granulares de acesso a cada um dos contêineres, o usuario pode usar o AWS Identity and Access Management (IAM) para restringir o acesso a cada serviço e configurar quais recursos um contêiner pode acessar
  - Esses recursos de isolamento configuráveis do Amazon ECS foram projetados para ajudar o usuario a criar aplicativos seguros e confiáveis

- O usuario pode usar o Amazon ECS para iniciar dezenas (ou dezenas de milhares) de contêineres do Docker em segundos sem complexidades adicionais

- As tarefas do Amazon ECS são definidas por meio de um modelo declarativo JavaScript Object Notation (JSON) denominado definição de tarefa. Com esse modelo, o usuario pode especificar um ou mais contêineres necessários para sua tarefa, incluindo:

  1. O repositório e a imagem do Docker
  2. Requisitos de memória e CPU
  3. Volumes de dados compartilhados
  4. Como os contêineres são vinculados entre si

- O usuario pode executar quantas tarefas quiser com base em uma única definição de tarefa, que o usuario registra com o serviço

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

## **Desafios do uso de containers**

- Tendo em vista as várias vantagens oferecidas pelos contêineres, esses benefícios também apresentam alguns desafios, como
  - O uso de contêineres está aumentando rapidamente
  - A expansão de contêineres ocorre quando o número de contêineres em sua infraestrutura aumenta significativamente e a distribuição de contêineres não é gerenciada corretamente
  - Outro problema é o monitoramento de diferenças de versão de um contêiner
  - Propriedade do contêiner
- O Amazon ECS permite controlar a colocação de tarefas em diferentes instâncias de contêiner por meio da construção de clusters e execuções direcionadas

- Essa estrutura fornece controle de versão e propriedade sobre tarefas específicas

- O uso de um repositório do Amazon Elastic Container Registry (Amazon ECR) nas definições de tarefas permite anexar o `AmazonEC2ContainerServiceForec2Role` às suas instâncias. Desse modo, o Amazon EC2 pode recuperar as imagens apropriadas para os aplicativos que são gerenciados com repositórios do Amazon ECR em que os proprietários e o controle de versões são mantidos

- Alguns outros desafios:

- Podem ocorrer problemas de empacotamento do compartimento quando o usuario tem pouco espaço disponível nos hosts em que os contêineres podem ser executados

  - O usuario precisa escolher a melhor colocação de cada contêiner para maximizar o desempenho do aplicativo

- O usuario também pode executar contêineres que não são mais necessários, muitas vezes chamados de contêineres zumbi

  - Contêiner zumbi é um contêiner do Docker que se recusa a parar quando um comando é emitido
  - Os contêineres normais são encerrados normalmente quando recebem um comando -stop de uma console ou API

- Pode ser que o usuario experimente o problema de ter os contêineres de que precisa, mas que não estão mais em execução; eles são conhecidos como contêineres que desaparecem
