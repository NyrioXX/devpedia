- [**Amazon Athena**](#amazon-athena)

# **Amazon Athena**

- O Amazon Athena é um serviço de consulta interativa que facilita a análise de dados diretamente no Amazon Simple Storage Service (Amazon S3) usando SQL padrão

- Para usar o Amazon Athena, aponte para seus dados no Amazon Simple Storage Service (Amazon S3), defina o esquema e comece a consultar usando o SQL padrão

- A maioria dos resultados é entregue em segundos

- Com o Athena, O usuario não precisa de trabalhos ETL complexos para preparar seus dados para análise

- Isso faz com que qualquer pessoa com habilidades de SQL analise conjuntos de dados em grande escala com facilidade e rapidez

- O Athena trabalha com vários formatos de dados padrão, incluindo valores separados por vírgula (CSV), JavaScript Object Notation (JSON), Optimized Row Columnar (ORC), Apache Avro e Apache Parquet

- O Athena é ideal para consultas rápidas e ad hoc. No entanto, ele também pode lidar com análises complexas, incluindo grandes junções e matrizes

- Athena usa o Amazon S3 como datastore subjacente, conferindo alta disponibilidade e durabilidade aos seus dados

- O Athena não precisa de servidor, portanto, não há infraestrutura para gerenciar e O usuario paga apenas pelas consultas executadas

- O usuario pode consultar rapidamente os dados, sem necessidade de configurar e gerenciar servidores ou data warehouses

- O Athena permite que O usuario consulte todos os seus dados no Amazon S3 sem precisar configurar processos complexos para extrair, transformar e carregar ETL os dados

- Além disso, o Athena oferece desempenho de consulta rápido e interativo

- O Athena executa automaticamente as consultas em paralelo, de forma que a maioria dos resultados retorna em segundos

- Para usar o Athena, basta apontar para os dados no Amazon S3, definir o esquema e começar a consultar usando o editor de consultas incorporado

1. Comece navegando até o serviço Amazon Athena no Console de gerenciamento da AWS e escolha Comece a usar. O Athena Query Editor é aberto. Ele lista os bancos de dados e tabelas na coluna esquerda. O usuario pode criar um banco de dados executando um comando como CREATE DATABASE mydatabase. Em seguida, crie uma tabela. A tabela define o esquema dos dados. As definições de tabela do Athena são parecidas com as definições de tabela de bancos de dados relacionais. Para ver um exemplo de definição de tabela, consulte Conceitos básicos na documentação do Amazon Athena. A definição da tabela termina com uma instrução LOCATION, que aponta para o bucket do S3 onde seus dados residem (ou residirão)

2. Depois de definir a tabela, O usuario pode começar a executar consultas SQL padrão usando o Editor de consultas do Athena. Por exemplo, O usuario poderia usar o seguinte: SELECT \* FROM tableName WHERE columnName='value'

3. Os resultados serão exibidos no Athena Query Editor. No entanto, O usuario também pode baixar os resultados como arquivos de valores separados por vírgulas (CSV). Além disso, O usuario pode criar um cliente para acessar o Athena e executar consultas SQL programaticamente. Para obter um exemplo desse cliente (escrito em Java), consulte a página Amostras de código da documentação do Amazon Athena

- O usuario pode consultar dados de outros serviços da AWS no Athena, incluindo serviços que monitoram e protegem na sua conta (e é por isso que o Athena é abordado neste módulo)

  - Por exemplo, usar o Athena com logs do CloudTrail pode aprimorar a sua análise da atividade do serviço da AWS. Crie tabelas automaticamente para consultar logs do CloudTrail diretamente do console do CloudTrail e use essas tabelas para executar consultas no Athena. O usuario pode usar consultas para identificar tendências e isolar ainda mais a atividade por atributos, como endereço IP de origem ou usuário

- Consultar os logs do Application Load Balancer com o Amazon Athena lhe permite visualizar a origem do tráfego, a latência e os bytes transferidos de e para instâncias do Elastic Load Balancing e aplicativos de back-end

- Os logs de fluxo do Amazon Virtual Private Cloud capturam informações sobre o tráfego IP de e para interfaces de rede em uma VPC. Consulte os logs no Athena para investigar padrões de tráfego de rede e identificar ameaças e riscos em toda a sua rede do Amazon VPC
