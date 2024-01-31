# **AWS System Manager**

- O AWS Systems Manager é um serviço de gerenciamento que ajuda o usuário a:

  1. Coletar inventário de software
  2. Aplicar patches do sistema operacional (SO)3. Criar imagens do sistema
  3. Configurar os sistemas operacionais Microsoft Windows e Linux

- O Systems Manager foi projetado para ser altamente focado na automação para permitir a configuração e o gerenciamento de sistemas executados no local ou na AWS

- O usuário pode selecionar as instâncias que deseja gerenciar e definir as tarefas de gerenciamento que deseja executar

  - Por exemplo, o recurso Executar comando permite executar scripts e programas remotamente

  - O State Manager garante que suas instâncias do Amazon Elastic Compute Cloud (Amazon EC2) sejam inicializadas com software específico na inicialização

  - É possivel usar o gerente de inventário para coletar e consultar informações sobre a configuração e o inventário das suas instâncias do EC2 e o software instalado nelas

  - Com a Janela de manutenção, você pode definir uma janela de tempo recorrente para executar tarefas administrativas e de manutenção nas suas instâncias

## **Recursos do System Manager**

- **_`Automação`_**

  - O recurso de automação no Systems Manager permite definir tarefas comuns de TI como uma coleção de etapas em um documento do AWS Systems Manager (documento SSM)

  - O recurso de automação pode executar todas as etapas do documento em uma coleção inteira de recursos da AWS

    - Por exemplo, você pode definir uma automação para corrigir instâncias inacessíveis, criar imagens de máquina da Amazon (AMIs) douradas ou corrigir instâncias

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

    3. Monitorar o fluxo de trabalho de automação (por exemplo, usando o console de gerenciamento da AWS). Após a conclusão da automação, confirme se os resultados esperados foram obtidos. Por exemplo, você pode executar uma instância de teste a partir de uma AMI que foi atualizada por uma automação do Systems Manager para verificar se ela tem as características esperadas

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
  2. Os documentos são criados em JavaScript Object Notation (JSON) ou YAML Ain't Markup Language (YAML) e incluem as etapas e os parâmetros que você especifica
  3. Em seguida, associe suas instâncias gerenciadas ao documento do SSM. Ao criar a associação, você define o programação de quantas vezes aplicar o estado configurado
  4. Por fim, é possível optar por gravar a saída dos comandos em um bucket do Amazon Simple Storage Service (Amazon S3) ao criar uma associação

- **_`Parameter Store`_**

  - Em vez de armazenar dados confidenciais em arquivos de configuração ou codificá-los no código-fonte, você pode usar o Armazenamento de parâmetros do Systems Manager para armazenar esses parâmetros e em seguida, fazer referência a essas informações em aplicativos ou scripts

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
