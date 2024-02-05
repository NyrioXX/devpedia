- [**Amazon Redshift**](#amazon-redshift)
- [**Data warehouse**](#data-warehouse)
- [**Processamento paralelo**](#processamento-paralelo)
- [**Casos de uso**](#casos-de-uso)

# **Amazon Redshift**

- O Amazon Redshift é um serviço de data warehouse na nuvem totalmente gerenciado, na escala de petabytes

- O que é um petabyte?

  - Um petabyte é de 10 15 bytes de informação
  - Um petabyte é aproximadamente igual a 1.000 terabytes (TB)
  - Um terabyte é aproximadamente igual a 1.000 gigabytes (GB)

- Principais recursos

  - O Amazon Redshift é rápido e poderoso
  - O Amazon Redshift é um serviço de data warehouse totalmente gerenciado
  - Ele permite que você execute consultas analíticas complexas em petabytes de dados estruturados
  - O Amazon Redshift usa otimização de consulta sofisticada, armazenamento colunar em discos locais de alto desempenho e execução de consultas paralelas

- Você pode automatizar a maioria das tarefas administrativas comuns para gerenciar, monitorar e escalar seu cluster do Amazon Redshift. Essa automação permite que você se concentre nos seus dados e negócios

- A escalabilidade é intrínseca no Amazon Redshift. Seu cluster pode expandir para cima e para baixo à medida que suas necessidades mudam com apenas alguns cliques no console

- A segurança é a maior prioridade na AWS. Com o Amazon Redshift, a segurança é integrada e foi projetada para fornecer criptografia forte de dados ociosos e em trânsito

- O Amazon Redshift é compatível com linguagem de consulta estruturada padrão (SQL). Ele fornece conectores de alto desempenho para Java Database Connectivity (JDBC) e Open Database Connectivity (ODBC). Esses conectores permitem que você use os clientes SQL e as ferramentas de business intelligence (BI) de sua escolha

# **Data warehouse**

- Um data warehouse é um repositório central de informações que podem ser analisadas para tomar decisões mais adequadas

- Os data warehouses impulsionam relatórios, painéis e ferramentas de análise

- Os data warehouses permitem que os usuários consultem rapidamente os resultados para centenas e milhares de usuários ao mesmo tempo

- `Como funciona um data warehouse?`

  - Um data warehouse pode conter vários bancos de dados
  - Dentro de cada banco de dados, os dados são organizados em tabelas e colunas
  - Dentro de cada coluna, você pode definir uma descrição dos dados, como número inteiro, campo de dados ou sequência
  - As tabelas podem ser organizadas dentro de esquemas, que você pode considerar como pastas.

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

# **Processamento paralelo**

- O processamento paralelo é um método de computação em que dois ou mais microprocessadores\* estão simultaneamente desmontando programas e executando tarefas do programa simultaneamente

- No de computação é o conjunto Core virtual + memoria Ram + disco

- O nó líder gerencia a comunicação com programas cliente e toda a comunicação com nós de computação

- Ele analisa e desenvolve planos de execução para realizar operações de banco de dados, em especial, a série de etapas necessárias para se obter resultados para consultas complexas

- O nó líder compila código de elementos individuais do plano de execução e atribui o código aos nós de computação individuais

- Os nós de computação executam o código compilado e enviam resultados intermediários ao nó líder para agregação final

- Assim como outros serviços da AWS, você paga apenas pelo que usar
  - Você pode começar por apenas 25 centavos por hora
  - Em escala, o Amazon Redshift oferece armazenamento e processamento por aproximadamente US$1.000 dólares por TB por ano
  - O recurso Amazon Redshift Spectrum permite executar consultas em exabytes de dados diretamente no Amazon S3

# **Casos de uso**

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
