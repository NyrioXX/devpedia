- [**Amazon CloudWatch**](#amazon-cloudwatch)
- [**Metricas**](#metricas)
  - [**Componentes de metrica**](#componentes-de-metrica)
- [**Paineis automaticos**](#paineis-automaticos)
- [**Cloudwatch events**](#cloudwatch-events)
- [**Cloudwatch Logs**](#cloudwatch-logs)

# **Amazon CloudWatch**

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

  - 1. OK

  - A métrica está dentro do limite definido

  1. ALARM

  - A métrica esta fora do limite definido

  3. INSUFFICIENT_DATA

  - O alarme acabou de ser acionado, a métrica não está disponível ou não há dados suficientes para que a métrica determine o estado do alarme

- OBSERVAÇÃO: ALARM é apenas um nome que é dado ao estado e não necessariamente sinaliza uma condição de emergência que exija atenção imediata. Isso significa que a métrica monitorada é igual, maior ou menor que um valor limite especificado. O usuario poderia, por exemplo, definir um alarme que informa quando o CPUCreditBalance para uma determinada instância T2 está ficando em baixa. Em seguida, talvez O usuario possa processar essa notificação programaticamente para suspender um trabalho com uso intensivo da CPU na instância até que o saldo de créditos T2 fique novamente cheio

# **Metricas**

- As métricas são os conceitos fundamentais no CloudWatch

- A métrica representa um conjunto ordenado de pontos de dados publicados no CloudWatch

- Considere uma métrica como uma variável a ser monitorada, e os pontos de dados que representam os valores dessa variável ao longo do tempo

- Por exemplo, o uso da CPU de uma instância do EC2 específica é uma métrica que o Amazon EC2 fornece

- Os pontos de dados em si podem ser provenientes de qualquer aplicativo ou atividade de negócios de onde O usuario colete dados

- As métricas são definidas exclusivamente por um nome, um namespace e zero ou mais dimensões

- Cada ponto de dados tem um carimbo de data/hora e, opcionalmente, uma unidade de medida

- Quando O usuario solicita estatísticas, o stream de dados retornado é identificado por namespace, nome da métrica, dimensão e (opcionalmente) a unidade

- As métricas existem apenas na região em que são criadas

- As métricas padrão do CloudWatch são agrupadas por serviço

  - Por exemplo, se O usuario abrir o Console de gerenciamento da AWS e acessar a tela do serviço do CloudWatch, poderá clicar em um link para visualizar todas as métricas do Amazon EC2. As métricas são exibidas graficamente para que possam ser comparadas

- Para visualizar as métricas disponíveis usando a AWS CLI, use o comando list-metrics para listá-las

  - Por exemplo, executar o comando aws cloudwatch list-metrics --namespace AWS/S3 listará todas as métricas padrão disponíveis do Amazon S3

- Não é possível excluir métricas, mas elas expirarão automaticamente depois de 15 meses se novos dados não forem publicados nelas

- Os pontos de dados com mais de 15 meses expiram numa base rotativa

- À medida que novos pontos de dados chegam, os dados com mais de 15 meses são descartados

- Serviços da AWS enviam métricas ao CloudWatch

- O usuario também pode publicar suas próprias métricas no CloudWatch usando a AWS CLI, uma interface de programação de aplicativos (API) ou um agente do CloudWatch

- As métricas personalizadas são agrupadas pelo namespace que O usuario define ao criá-las

- Um uso comum do Amazon CloudWatch é para monitorar recursos da conta para detectar atividades suspeitas

  - Por exemplo, gerar alertas com base em dados de faturamento é uma boa maneira de detectar uma possível violação de segurança da sua conta da AWS. Alguns clientes não sabem que as suas credenciais ou chaves de acesso do AWS Identity and Access Management (IAM) foram comprometidas até receberem uma fatura de milhares de dólares de cobranças inesperadas. Para detectar isso de forma proativa, O usuario pode habilitar alertas de pagamento nas suas preferências da sua conta e, em seguida, definir alarmes do CloudWatch para alertá-lo se as cobranças de faturamento estimadas para o mês excederem um limite especificado

- Por padrão, as instâncias do EC2 são habilitadas para o monitoramento básico do CloudWatch, com dados disponíveis em incrementos de 5 minutos como parte do nível gratuito da AWS

- No entanto, O usuario também pode habilitar o monitoramento detalhado a um custo adicional

- Depois que o monitoramento detalhado for habilitado, os dados de monitoramento são disponibilizados em incrementos de 1 minuto

## **Componentes de metrica**

- Um **namespace** é um contêiner para as métricas do CloudWatch

- As métricas em namespaces diferentes são isoladas umas das outras, de forma que as métricas de aplicativos diferentes não são agregadas por engano nas mesmas estatísticas

- Os namespaces da AWS usam a convenção de nomenclatura AWS/<service>

  - Por exemplo, o Amazon EC2 usa o namespace AWS/EC2

- Uma **dimensão** é um par de nome-valor que identifica uma métrica de forma exclusiva

- O usuario pode atribuir até 10 dimensões a uma métrica

- Cada métrica tem características específicas que a descrevem, e O usuario pode considerar dimensões como categorias para essas características

- As dimensões lhe ajudam a projetar uma estrutura para o seu plano de estatísticas

- O usuario pode usar dimensões para filtrar os resultados retornados pelo CloudWatch

  - Por exemplo, ao pesquisar por métricas, O usuario pode obter estatísticas para uma determinada instância do EC2, especificando a dimensão InstanceId

- Um **período** é o tempo associado a uma estatística específica do CloudWatch

- Os períodos são definidos pela contagem de segundos

- O usuario pode ajustar como os dados são agregados alterando a extensão do período

- O período mais curto pode ser de 1 segundo ou ir até 1 dia (86.400 segundos)

# **Paineis automaticos**

- Os painéis do Amazon CloudWatch são páginas de início personalizáveis no console do CloudWatch que O usuario pode usar para monitorar os seus recursos em uma única visualização

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

- O usuario também pode apresentar métricas importantes adicionais dos serviços da AWS que O usuario mais deseja monitorar

- Por padrão, a parte inferior do painel automático mostra as Métricas do painel de serviços variados

- No entanto, este é um link para Criar um novo painel Cloudwatch-Default

- Se O usuario nomear o novo painel como CloudWatch-Default, ele será exibido na página principal do painel CloudWatch: Visão geral

# **Cloudwatch events**

- O Amazon CloudWatch Events oferece um streaming quase em tempo real de eventos do sistema que descrevem as alterações feitas aos recursos da AWS

- Com regras simples que O usuario pode configurar, é possível corresponder eventos e roteá-los para um ou mais streams ou funções de destino

- O CloudWatch Events torna-se ciente das alterações operacionais à medida que ocorrem

- Ele responde a essas mudanças operacionais enviando mensagens, ativando funções, fazendo alterações e capturando informações de estado

- O usuario pode usar o CloudWatch Events para programar ações automatizadas que sejam acionadas automaticamente em determinados momentos usando as expressões cron ou rate

- Antes de usar o CloudWatch Events, O usuario deve compreender os seguintes conceitos:

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

# **Cloudwatch Logs**

- O usuario pode usar o Amazon CloudWatch Logs para monitorar, armazenar e acessar os seus arquivos de log de instâncias do Amazon EC2, do AWS CloudTrail, do Amazon Route 53 e de outras origens

- O usuario pode recuperar os dados de log associados ao CloudWatch Logs

- É possível monitorar os seus logs praticamente em tempo real, em busca de frases, valores ou padrões específicos

  - Por exemplo, O usuario pode definir um alarme para o número de erros que ocorrem nos logs do sistema em uma ou mais de suas instâncias do EC2. O usuario também pode ver gráficos que visualizam a latência de solicitações da Web de logs de aplicativos em suas instâncias do EC2. Depois disso, é possível exibir os dados de log originais para ver a origem do problema

- Os dados de log podem ser armazenados e acessados indefinidamente, bem como armazenados externamente em instâncias do EC2, para que O usuario não precise se preocupar com o preenchimento de discos rígidos

- O usuario pode pensar no processo de análise de log como tendo três fases distintas:

  1. **Configurar**

  - Decida quais informações O usuario precisa capturar em seus logs e onde e como elas serão armazenadas

  2. **Coletar**

  - As instâncias são provisionadas e removidas em um ambiente de nuvem
  - O usuario precisa de uma estratégia para fazer upload de arquivos de log de um servidor periodicamente para que essas informações valiosas não sejam perdidas quando uma instância for eventualmente encerrada

  3. **Analisar**

  - Depois que todos os dados são coletados, é hora de analisar
  - O uso de dados de log lhe oferece maior visibilidade sobre a integridade diária dos seus sistemas
  - Ele também pode fornecer informações sobre as próximas tendências no comportamento do cliente, além de insight sobre como os clientes estão usando o seu sistema no momento

- O CloudWatch Logs lhe permite coletar logs automaticamente de um dos serviços compatíveis, como de instâncias do Amazon EC2

- O usuario deve instalar o novo agente unificado do CloudWatch (ou o agente mais antigo do CloudWatch Logs) em qualquer instância do EC2 da qual O usuario desejar coletar dados de log

- Em seguida, O usuario pode agregar dados de várias instâncias diferentes do EC2 nos chamados grupos de logs

- Cada grupo de logs deve representar um tipo específico de log com um formato definido

- O agente do CloudWatch em cada instância do EC2 coleta dados do log que O usuario especifica (como um log de aplicativo) e os envia ao grupo de logs apropriado

- Um administrador então poderá criar filtros em um grupo de logs para procurar strings específicos ou padrões de string

- Cada correspondência recebe um valor numérico, que é usado para incrementar uma métrica personalizada do CloudWatch

- Os administradores podem usar essa métrica — como fariam com qualquer outra métrica personalizada do CloudWatch — para criar alarmes do CloudWatch ou enviar notificações

- O CloudWatch Logs Insights é uma parte do serviço do CloudWatch que fornece uma linguagem de consulta para uso específico com alguns comandos simples, mas poderosos

- Ele fornece amostras de consultas, descrições de comandos, preenchimento automático de consultas e descoberta de campo de log para ajudá-lo a começar a usar rapidamente

- As amostras de consultas estão incluídas para diversos tipos de logs de serviço da AWS
