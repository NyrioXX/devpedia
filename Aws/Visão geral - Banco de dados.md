- [**Desafios de executar um banco de dados relacional no local**](#desafios-de-executar-um-banco-de-dados-relacional-no-local)
- [**Vantagens dos bancos de dados na AWS**](#vantagens-dos-bancos-de-dados-na-aws)
- [**Escolha do banco de dados**](#escolha-do-banco-de-dados)
- [**Tipos de serviço**](#tipos-de-serviço)
  - [**SQL**](#sql)
  - [**NoSQL**](#nosql)
- [**Bancos gerenciados VS Bancos não gerenciados**](#bancos-gerenciados-vs-bancos-não-gerenciados)
  - [**_Não gerenciados_**](#não-gerenciados)
  - [**_Gerenciados_**](#gerenciados)
- [**Casos de uso**](#casos-de-uso)
- [**Recomendações**](#recomendações)

# **Desafios de executar um banco de dados relacional no local**

- Alguns dos desafios que você pode enfrentar podem incluir:
  1. Manutenção do servidor e consumo de energia
  2. Instalação de software e patches
  3. Backups de banco de dados e alta disponibilidade Limites de escalabilidade
  4. Segurança de dados Instalação e patches do sistema operacional (SO)

# **Vantagens dos bancos de dados na AWS**

- `Com propósito específico `

  - Os 15 mecanismos de banco de dados especificamente criados incluem bancos de dados relacionais, de chave-valor, de documentos, na memória, gráficos, de séries temporais e de livros contábeis

- `Performance em grande escala`

  - Os serviços de banco de dados relacional são projetados para alto desempenho

- `Totalmente gerenciado`

  - O monitoramento quase contínuo de clusters mantém as cargas de trabalho funcionando com armazenamento de recuperação automática e dimensionamento automático

- `Desenvolvido para cargas de trabalho críticas para os negócios`
  - Eles são projetados para alta disponibilidade, confiabilidade e segurança

# **Escolha do banco de dados**

- A escolha do serviço de banco de dados correto exige uma boa compreensão dos recursos do serviço e das necessidades do aplicativo

  - Por exemplo, alguns mecanismos de banco de dados usam o modelo relacional e são adequados para aplicativos transacionais
  - Outros mecanismos de banco de dados estão em conformidade com o modelo NoSQL e são destinados a aplicativos na escala da Internet
  - Outros tipos diferentes de mecanismos de banco de dados funcionam bem para cargas de trabalho em tempo real que exigem um armazenamento de dados na memória para armazenamento em cache

- Portanto, é importante combinar os requisitos da carga de trabalho do aplicativo com os recursos do serviço de banco de dados

- Algumas das principais características da carga de trabalho a considerar incluem a forma dos dados, seu tamanho e requisitos computacionais, e seus padrões de acesso e necessidades de desempenho

- Tais fatores podem ajudá-lo a encontrar o banco de dados certo para as suas necessidades

# **Tipos de serviço**

- A AWS oferece vários serviços de banco de dados totalmente gerenciados para oferecer suporte às necessidades de diferentes tipos de aplicativos

## **SQL**

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

## **NoSQL**

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

# **Bancos gerenciados VS Bancos não gerenciados**

## **_Não gerenciados_**

- Você provisiona serviços não gerenciados
- Você gerencia a escalabilidade, a tolerância a falhas e a disponibilidade

## **_Gerenciados_**

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

# **Casos de uso**

![Usos](arquivos/Casos%20de%20uso%20de%20banco%20de%20dados.png)

# **Recomendações**

![Recomendação](arquivos/Recomendacoes%20de%20banco%20de%20dados.png)
