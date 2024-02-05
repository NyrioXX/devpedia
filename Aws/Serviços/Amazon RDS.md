- [**Amazon Relational Database Service (RDS)**](#amazon-relational-database-service-rds)
- [**Alta disponibilidade**](#alta-disponibilidade)
- [**Replicas de leitura**](#replicas-de-leitura)
- [**Scaling do RDS**](#scaling-do-rds)
- [**Notas sobre o RDS**](#notas-sobre-o-rds)
- [**Comandos CLI para o RDS**](#comandos-cli-para-o-rds)

# **Amazon Relational Database Service (RDS)**

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

# **Alta disponibilidade**

- Um dos principais recursos do Amazon RDS é configurar uma instância de banco de dados com alta disponibilidade usando uma **_`implantação multi-AZ`_**
  - Essa configuração gera automaticamente uma cópia em espera da instância de banco de dados em outra zona de disponibilidade na mesma Virtual Private Cloud (VPC – Nuvem Privada Virtual)
  - Após a cópia completa inicial, as transações são replicadas de forma síncrona para a cópia em espera
  - A execução de um banco de dados em várias zonas de disponibilidade pode aumentar a disponibilidade durante a manutenção planejada do sistema
  - Ajuda a evitar falhas no seu banco de dados e interrupções nas zonas de disponibilidade
  - Se a instância primária de banco de dados falhar, o Amazon RDS automaticamente colocará a instância de banco de dados em espera on-line como a nova instância primária
  - As solicitações dos dois aplicativos são direcionadas para a nova instância primária
  - Os aplicativos solicitantes usam o endpoint do Domain Name System (DNS) do Amazon RDS para referenciar o banco de dados pelo nome
  - O **_`failover`_** ocorre sem a necessidade de alterar o código do aplicativo e também que não há perda de dados devido à replicação síncrona

# **Replicas de leitura**

- Além de uma configuração de alta disponibilidade, o Amazon RDS oferece outros meios para fornecer escalabilidade
  - É possível criar réplicas de leitura para MySQL, MariaDB, PostgreSQL e Amazon Aurora
  - As atualizações feitas na instância de banco de dados de origem são copiadas de forma assíncrona para a instância de réplica de leitura
  - Reduz a carga de uma instância de banco de dados de origem roteando as consultas de leitura dos aplicativos para a réplica de leitura
  - Tambem serve para aumentar a quantidade além das limitações de capacidade de uma única instância de banco de dados para cargas de trabalho com uso intensivo de leitura
  - As réplicas de leitura também podem ser promovidas à instância primária de banco de dados (`como ela usa a replicação assíncrona, essa opção requer uma ação manual`).
    - Observação: a alteração de uma classe de instância requer tempo de inatividade
  - As réplicas de leitura podem ser criadas em uma região diferente da instância primária de banco de dados.
    - Esse recurso ajuda a cumprir os requisitos de recuperação de desastres ou reduzir a latência direcionando as leituras para uma réplica de leitura em uma área geográfica mais próxima do usuário.

# **Scaling do RDS**

- É possivel aumentar a capacidade de um servidor de banco de dados alterando sua classe da instância ou capacidade de armazenamento
- A alteração da classe da instância permite aumentar a CPU e a memória disponíveis para a instância
  - Observação: a alteração de uma classe de instância requer tempo de inatividade
- A modificação do armazenamento alocado permite aumentar a capacidade de armazenamento sem a necessidade de tempo de inatividade

# **Notas sobre o RDS**

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

# **Comandos CLI para o RDS**

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
