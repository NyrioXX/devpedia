- [**AWS Config**](#aws-config)
  - [**Como funciona?**](#como-funciona)

# **AWS Config**

O AWS config é um serviço totalmente gerenciado que permite avaliar, analisar e fazer auditoria da configuração dos seus recursos da AWS

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
