- [**_3 fatores fundamentais de custos na AWS_**](#3-fatores-fundamentais-de-custos-na-aws)
- [**_Caracteristicas da precificação na AWS_**](#caracteristicas-da-precificação-na-aws)
- [**Gerenciamento de custos**](#gerenciamento-de-custos)
  - [**Painel de faturamento AWS**](#painel-de-faturamento-aws)
  - [**AWS Bills**](#aws-bills)
  - [**AWS Cost Explorer**](#aws-cost-explorer)
- [**Orçamentos da AWS**](#orçamentos-da-aws)
  - [**AWS Cost Usage Report**](#aws-cost-usage-report)
- [**Integração com Cloudwatch**](#integração-com-cloudwatch)
- [**Redução de custos**](#redução-de-custos)
- [**Uso do Trusted advisor para reduzir custos**](#uso-do-trusted-advisor-para-reduzir-custos)

# **_3 fatores fundamentais de custos na AWS_**

1. Computação: é cobrado por hora/minuto e varia com o tipo de instancia (somente linux)
2. Armazenamento: Cobrado, normamente, por GB
3. Transferência de dados: Saida é agregada e cobrada, a **`entrada não tem cobrança`** (possui excessões), cobrado normalmente por GB

# **_Caracteristicas da precificação na AWS_**

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

# **Gerenciamento de custos**

- As ferramentas e os serviços de gerenciamento de custos da AWS para ajudá-lo a acessar, organizar, compreender, controlar e otimizar os seus custos e o uso da AWS

- O usuario pode acessar o status geral dos seus custos e uso da AWS no painel de faturamento da AWS. O painel fornece uma página Contas que mostra as informações mais atualizadas sobre seus custos e uso. Essas informações incluem sua fatura mensal e um detalhamento detalhado dos serviços da AWS que O usuario usa. O usuario também pode usar a página Relatórios de custos e uso da AWS para gerar um relatório que mostra os dados mais detalhados sobre os seus custos e uso da AWS. Esse relatório permite que O usuario analise e entenda melhor os custos da AWS e as ofertas de produtos específicos e os valores de uso subjacentes a esses custos

- O AWS Cost Explorer permite uma análise detalhada dos dados de custos e de uso, com o AWS Cost Explorer, para identificar tendências, indicar os fatores determinantes dos custos e detectar anomalias. Esse serviço fornece uma interface intuitiva que permite criar rapidamente relatórios personalizados (incluindo gráficos e dados tabulares). O usuario pode usar esses relatórios para analisar seus dados de custo e uso, tanto em alto nível quanto para solicitações específicas

- O usuario pode definir metas de custos e de orçamentos de uso personalizados com os Orçamentos da AWS. O serviço, então, alerta quando esses limites são excedidos

- O usuario pode monitorar as suas cobranças de uso com o Amazon CloudWatch. O usuario cria alarmes para notificá-lo quando as suas cobranças de uso excederem um limite especificado

## **Painel de faturamento AWS**

- O painel de faturamento da AWS permite que você visualize o status das despesas da AWS acumuladas no mês

- Você também pode usá-lo para identificar os serviços que representam a maior parte das suas despesas gerais

- Você também pode usar o painel de faturamento da AWS para obter uma compreensão de alto nível de como seus custos estão em alta

- Um dos gráficos no painel é o Spend Summary (Resumo de gastos)

- Ele mostra quanto você gastou no mês passado, o custo do uso da AWS no mês até o momento e uma previsão de quanto você provavelmente gastará este mês

- Outro gráfico é o gráfico Month-to-Date Spend by Service (Gastos acumulados no mês por serviço). Ele mostra os principais serviços que você mais usa e a proporção de seus custos atribuídos a esse serviço

- Você pode acessar várias outras ferramentas de gerenciamento de custos no painel de faturamento

- Você pode usar essas ferramentas para estimar e planejar seus custos da AWS, incluindo contas da AWS, o AWS Cost Explorer, os orçamentos da AWS e os relatórios de custo e uso da AWS

## **AWS Bills**

- A página AWS Bills lista os custos que você incorreu no último mês para cada serviço da AWS. Ela também inclui um detalhamento adicional por região da AWS e conta vinculada

- Essa ferramenta fornece acesso às informações mais atualizadas sobre seus custos e uso, incluindo sua fatura mensal e a análise detalhada dos serviços da AWS que você usa.

## **AWS Cost Explorer**

- O AWS Cost Explorer permite visualizar os seus custos e o uso, além de analisá-los para identificar tendências

- Você pode filtrar e agrupar dados ao longo de várias dimensões, como serviço, tipo de instância e tag

- O Cost Explorer fornece dois tipos de relatórios padrão:

  1. **Relatórios de custo e uso**

  - Esses relatórios permitem que você entenda seus custos e uso de todos os serviços
  - Por exemplo, o relatório Custos mensais por serviço (exibidos na captura de tela) mostra os custos dos últimos 3 meses, agrupados por serviço
  - Os cinco principais serviços são mostrados por eles mesmos, e o restante é agrupado em uma barra (rotulada Outros)

  2. **Relatórios de Instância Reservada (IRS)**

  - Esses relatórios são específicos para o uso de Instâncias Reservadas
  - Eles fornecem uma compreensão dos seus custos de utilização comparativos para instâncias reservadas em comparação a instâncias sob demanda

- Você pode visualizar dados até dos últimos 13 meses, prever quanto provavelmente gastará nos próximos 3 meses e obter recomendações sobre quais instâncias reservadas para comprar.

- Se você tiver muitas contas e tiver habilitado o faturamento consolidado para o AWS Organizations, poderá usar o AWS Cost Explorer para visualizar os custos em todas as contas vinculadas. Você também pode monitorar os gastos individuais diários e mensais de cada conta vinculada

# **Orçamentos da AWS**

- O Orçamentos da AWS permite que você defina orçamentos personalizados que enviam alertas quando o uso ou os custos excedem (ou têm previsão de exceder) o valor orçado

- O AWS Budgets usa a visualização de custos fornecida pelo Cost Explorer para mostrar o status dos seus orçamentos e fornecer previsões dos custos estimados

- Você também pode usar os Orçamentos para criar notificações quando ultrapassarem os valores previstos em orçamento ou quando seus custos previstos ultrapassarem seus orçamentos

- Os orçamentos podem ser rastreados nos níveis mensal, trimestral ou anual

- Você pode personalizar as datas de início e término

- Os alertas de orçamento podem ser enviados por e-mail ou por meio de um tópico do Amazon Simple Notification Service (Amazon SNS)

## **AWS Cost Usage Report**

- A página Relatórios de custo e uso da AWS é um local único para acessar informações abrangentes sobre os custos e o uso da AWS

- Você pode usá-lo para gerar relatórios que contenham itens de linha para cada combinação exclusiva de produtos da AWS, tipo de uso e operação que você usa na sua conta da AWS

- Você pode personalizar os relatórios gerados para agregar as informações por hora ou por dia

- Você também pode publicar seus relatórios de faturamento da AWS em um bucket do Amazon Simple Storage Service (Amazon S3), e a AWS atualizará os relatórios no bucket uma vez por dia

# **Integração com Cloudwatch**

- Você pode monitorar as suas cobranças estimadas da AWS ao usar o Amazon CloudWatch para gerar um alerta quando as suas cobranças excederem um limite especificado

- Quando você habilitar o monitoramento de estimativas de cobrança para sua conta da AWS, as estimativas de cobrança serão calculadas e enviadas várias vezes por dia para o CloudWatch como dados de métrica

- Os dados de métricas de faturamento são armazenados na região Leste dos EUA (Virgínia do Norte) e representam cobranças em todo o mundo. Esses dados incluem as estimativas de cobrança para cada serviço da AWS que você usa, além do total geral estimado das suas cobranças da AWS

- O alarme é acionado quando o faturamento da conta excede o limite que você especificar

- Ele é acionado somente quando o faturamento real excede o limite

- Ele não usa projeções baseadas no seu uso durante o mês

- Se você criar um alerta de faturamento quando as suas cobranças já tiverem excedido o limite, o alarme mudará para o estado de ALARME imediatamente

- As notificações de alarme são enviadas para um endereço de e-mail por meio de um tópico do SNS

# **Redução de custos**

![reduzir-custos](./Arquivos/redução%20de%20custos.png)

- Outra técnica eficaz de redução de custos é encontrar e eliminar desperdícios

  - Por exemplo, a facilidade de criar recursos às vezes pode levar a situações em que recursos desnecessários são mantidos em execução. Você pode usar as métricas do Amazon CloudWatch e os alarmes do CloudWatch para encontrar essas instâncias ociosas de longa execução e desativá-las

- Você também pode usar o AWS Cost Explorer para encontrar os custos associados a projetos inteiros ou a iniciativas

  - O AWS Cost Explorer pode ajudar a identificar os projetos mais caros e a priorizar quais projetos devem ser examinados primeiro para oportunidades de redução de custos

- Escrever e usar um script stopinator é uma técnica para automatizar o desligamento de instâncias. Um stopinator é um termo genérico para qualquer script ou aplicativo escrito na Nuvem AWS e que procura e interrompe instâncias não utilizadas

- Normalmente, esses scripts são configurados para executar durante a noite e nos fins de semana

- Usar um stopinator pode resultar em economias significativas de custos para uma organização, o que pode liberar seu orçamento de computação na nuvem para novos projetos

- Ele também é um script utilitário de função dupla útil porque normalmente é projetado para permitir que você inicie recursos quando você precisar deles (por exemplo, no início do dia de trabalho)

- Você não precisa criar ou usar uma instância do Amazon Elastic Compute Cloud (Amazon EC2) para executar um stopinator

- Um design simples e eficiente é usar uma combinação de uma função do Lambda e um evento do Amazon CloudWatch Events em uma solução sem servidor

- A lógica para interromper e iniciar uma instância é implementada como uma função Lambda

- Essa função é acionada por um evento do CloudWatch Events conforme a programação desejada

# **Uso do Trusted advisor para reduzir custos**

- O AWS Trusted Advisor é um recurso online que ajuda a reduzir custos, aumentar a performance e melhorar a segurança ao otimizar o seu ambiente da AWS

- O AWS Trusted Advisor analisa seu ambiente da AWS e fornece recomendações para as práticas recomendadas em cinco categorias:

  - **Otimização de custos** — Conselhos sobre como você pode economizar dinheiro eliminando recursos não utilizados e ociosos ou assumindo compromissos com a capacidade reservada

  - **Desempenho** — Conselhos sobre como melhorar o desempenho dos seus serviços verificando os limites de serviço, garantindo o uso da taxa de transferência provisionada e monitorando instâncias superutilizadas

  - **Segurança** — Conselhos sobre como melhorar a segurança dos seus aplicativos, fechando lacunas, habilitando vários recursos de segurança da AWS e examinando suas permissões

  - **Tolerância a falhas** — Conselhos sobre como aumentar a disponibilidade e a redundância dos seus aplicativos da AWS usando escalabilidade automática, verificações de integridade, implantação multi-AZ e recursos de backup

  - **Limites de serviço** — Conselhos sobre os serviços cujo uso excede 80% do limite de serviço

- Você pode usar o AWS Trusted Advisor para identificar recursos ociosos, como instâncias do EC2, balanceadores de carga e volumes subutilizados e endereços IP elásticos não utilizados

- O Trusted Advisor também é uma boa ferramenta para otimização de custos. Ele fornece verificações e recomendações que permitem que você obtenha economia de custos

- O AWS Trusted Advisor oferece planos de suporte de alto nível — Business Support e Enterprise Support — que fornecem verificações e recomendações adicionais
