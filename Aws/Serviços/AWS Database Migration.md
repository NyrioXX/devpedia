- [**Principais recursos e tipos de bancos de dados compatíveis**](#principais-recursos-e-tipos-de-bancos-de-dados-compatíveis)
- [**Migração de dados**](#migração-de-dados)
  - [**Tipos de migrações de banco de dados**](#tipos-de-migrações-de-banco-de-dados)
  - [**Como funciona**](#como-funciona)
  - [**Ferramenta de conversão de Schema ou AWS Schema Conversion Tool(AWS SCT)**](#ferramenta-de-conversão-de-schema-ou-aws-schema-conversion-toolaws-sct)
- [**Replicação de bancos**](#replicação-de-bancos)
- [**Consolidação de dados**](#consolidação-de-dados)
- [**Arquitetura do DMS**](#arquitetura-do-dms)

# **Principais recursos e tipos de bancos de dados compatíveis**

- O AWS DMS serve para:

  1. Migração de bancos de dados
  2. Replicação quase continua
  3. Consolidação de dados

# **Migração de dados**

- Com o AWS Database Migration Service, o banco de dados de origem permanece totalmente operacional durante a migração, minimizando períodos de inatividade para aplicativos que dependem do banco de dados

- O AWS DMS pode migrar seus dados de e para os bancos de dados comerciais e de código aberto mais usados no mercado

- Ao usar este serviço, você pode migrar do serviço do sistema de gerenciamento de banco de dados (DBMS) para um serviço do DBMS diferente

  - Por exemplo, você pode ir de: – Oracle para Oracle – Microsoft SQL Server para Amazon Aurora

- Os aplicativos podem permanecer ativos ou em execução durante a migração

- O serviço oferece suporte a `migrações homogêneas` (como, por exemplo, de Oracle para Oracle) e `migrações heterogêneas` entre plataformas de banco de dados diferentes (como de Oracle para MySQL ou de MySQL para o Amazon Aurora)

- Você também pode usar o AWS DMS para migrar o seu banco de dados local para um banco de dados em execução em uma instância do Amazon Elastic Compute Cloud (Amazon EC2)

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

- Ao usar o AWS DMS, você executa as seguintes ações:

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

# **Replicação de bancos**

- A `replicação de banco de dados quase contínua` permite replicar dados de acordo com uma programação, como um trabalho noturno, ou realizar replicação quase em tempo real

- A replicação quase contínua pode ser feita do seu datacenter para os bancos de dados na AWS. Ou isso pode ser feito na direção inversa, replicando para um banco de dados no seu data center a partir de um banco de dados na AWS

- Os dados dos bancos de dados de origem são replicados continuamente nos bancos de dados de destino

- A replicação contínua de dados pode ser útil para recuperação de desastres e distribuição de bancos de dados geográficos

-

# **Consolidação de dados**

- Nas consolidações de banco de dados, várias fontes são combinadas em um banco de dados

- Os bancos de dados de origem podem ser:

  1. Local fora da AWS
  2. Instalado em uma instância do EC2 ou no Amazon RDS dentro da Nuvem AWS

- Os bancos de dados de destino podem ser:
  1. Instalado em uma instância do EC2
  2. Amazon RDS

# **Arquitetura do DMS**

- A arquitetura do AWS DMS consiste em quatro componentes:

  1. `Instância de replicação`

     - Uma instância do EC2 que executa as tarefas de que o processo de migração precisa
     - Para começar a usar o AWS DMS, você precisa de uma instância de replicação para executar as tarefas de migração
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

-
