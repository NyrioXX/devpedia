- [**AWS CloudTrail**](#aws-cloudtrail)
- [**Praticas recomendadas**](#praticas-recomendadas)
- [**Configuração de trilha CloudTrail**](#configuração-de-trilha-cloudtrail)
- [**Monitoramento e segurança**](#monitoramento-e-segurança)

# **AWS CloudTrail**

- É um serviço que ajuda a monitorar solicitações (chamadas de API) aos serviços AWS

- Crucial para simplificar a governança, conformidade e a auditoria de riscos

- O cloudtrail registra chamadas de API entre regiões AWS

- Registra chamadas feitas via CLI, SDK ou API

  - Exemplos de registro:

  1. Iniciar/interromper instancias EC2
  2. Criar/modificar bancos de dados
  3. Fazer uploads S3

- Os registros aceleram e facilitam ações de segurança e governança bem como a solução de problemas operacionais

- No registros constam

  1. Quem realizou a solicitação
  2. Data e hora da solicitação
  3. Endereço IP (Protocolo de Internet) de origem
  4. Como a solicitação foi feita
  5. Ação executada
  6. Região onde a ação foi realizada
  7. Resposta

- `Por padrão os logs são mantidos por 7 dias mas podem ser enviados para outros serviços AWS (Amazon S3 por exemplo) o que permite manter os logs por tempo indeterminado`

- Depois que o CloudTrail é configurado, ele envia os logs de auditoria para o Amazon Simple Storage Service (Amazon S3)

- Embora o AWS CloudTrail seja completo, ele não rastreia eventos que ocorrem em uma instância do Amazon Elastic Compute Cloud (Amazon EC2)
  - Por exemplo, o CloudTrail não rastreia quando alguém desliga manualmente uma instância usando uma conexão de sessão do Secure Shell (SSH) com a instância

# **Praticas recomendadas**

1. Ativar a validação de arquivos de log do cloudtrail
2. Agregar arquivos de log a um unico bucket S3
3. Certificar que o cloudtrail esteja ativo globalmente na AWS
4. Restrinjir o acesso aos buckets de log S3
5. Integrar com o cloudwatch
   - Isso permite definir ações a serem executadas quando determinado evento acontecer

# **Configuração de trilha CloudTrail**

- Por padrão, quando O usuario acessa o histórico de eventos do CloudTrail para a região que está visualizando, o CloudTrail só mostrará os resultados dos últimos 90 dias

- Esses eventos são limitados aos eventos de gerenciamento com chamadas de APIs para criar, modificar e excluir, além da atividade da conta

- Para obter um registro completo da atividade da conta, incluindo todos os eventos de gerenciamento, eventos de dados, bem como todas as atividades somente leitura, será necessário configurar uma trilha do CloudTrail

- O usuario pode criar uma trilha usando o console do CloudTrail ou a AWS CLI

- As seguintes opções podem ser configuradas:

1. Crie um bucket do S3 ou especifique um bucket existente no qual O usuario deseja que os arquivos de log sejam armazenados
2. Configure a sua trilha para registrar eventos somente leitura, somente gravação ou todos os eventos de gerenciamento e dados. Por padrão, as trilhas registram todos os eventos de gerenciamento.
3. Crie um tópico do Amazon Simple Notification Service (Amazon SNS) para receber notificações quando os arquivos de log forem entregues.
4. Opcionalmente, configure o Amazon CloudWatch Logs para receber logs do CloudTrail para que O usuario possa monitorar eventos de log específicos.
5. Opcionalmente, ative a criptografia de arquivos de log para maior segurança
6. Como opção, adicione tags (pares de chave-valor personalizados) à sua trilha

# **Monitoramento e segurança**

- Quando O usuario monitora a atividade na sua conta e protege seus recursos e dados, os recursos do CloudWatch e do CloudTrail são complementares
- Recomenda-se o uso de ambos os serviços

  - Por exemplo, O usuario pode examinar os logs das entradas do CloudWatch Logs e do CloudTrail para detectar potenciais usos não autorizados

- Outros exemplos de usos desses serviços incluem:

  1. Monitorar as tentativas de login com falha no Console de gerenciamento da AWS, especialmente tentativas de login de endereços IP suspeitos
  2. Detectar acesso não autorizado a serviços por meio de chamadas de API • Identificar um lançamento suspeito de recursos da AWS
