- [**Amazon Aurora**](#amazon-aurora)
- [**Volumes Cluster do Aurora**](#volumes-cluster-do-aurora)
- [**Casos de uso**](#casos-de-uso)
- [**Recuperação de falhas**](#recuperação-de-falhas)

# **Amazon Aurora**

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

- O Aurora é um serviço de pagamento conforme o uso, o que garante que você pague apenas pelos serviços e recursos utilizados. Ele é um serviço gerenciado que funciona com recursos como AWS Database Migration Service (AWS DMS) e AWS Schema Conversion Tool. Essas ferramentas podem ajudar você a mover seu conjunto de dados para o Aurora

- O Aurora também é tolerante a falhas e foi projetado para fornecer armazenamento de autorrecuperação criado para a nuvem

  - Esse armazenamento replica seis cópias de seus dados em três Zonas de Disponibilidade e, ao mesmo tempo, faz backup dos dados para o Amazon S3 quase continuamente

- Você pode optar por usar o Amazon Aurora em vez de (por exemplo) o SQL com o Amazon RDS devido à alta disponibilidade e ao design resiliente do Aurora

# **Volumes Cluster do Aurora**

- Ao criar uma instância do Amazon Aurora, você cria um cluster de banco de dados (DB)

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

# **Casos de uso**

- Comparado aos bancos de dados comerciais, o Aurora ajuda a reduzir os custos de banco de dados em 90% ou mais e, ao mesmo tempo, melhora a confiabilidade e a disponibilidade do banco de dados

- Como os `jogos para web e dispositivos móveis` são criados para operar em grande escala, eles precisam de um banco de dados com alta taxa de transferência e grande escalabilidade de armazenamento. O Aurora oferece espaço suficiente para crescimento futuro

# **Recuperação de falhas**

- Diferentemente de outros bancos de dados, após uma falha, o Amazon Aurora não precisa reproduzir Redo Log do último ponto de verificação do banco de dados

  - Isso reduz o tempo de reinicialização após uma falha de banco de dados para menos de 60 segundos na maioria dos casos

-
