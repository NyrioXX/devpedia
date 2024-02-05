- [**AWS Step Functions**](#aws-step-functions)
- [**Como funciona**](#como-funciona)
- [**Ciclo de vida**](#ciclo-de-vida)
- [**Casos de uso**](#casos-de-uso)

# **AWS Step Functions**

- Com o AWS Step Functions, você pode coordenar vários serviços da AWS em fluxos de trabalho sem servidor para que possa criar e atualizar aplicativos rapidamente

  - Por exemplo, você pode projetar e executar fluxos de trabalho que combinam serviços, como o AWS Lambda e o Amazon ECS, em aplicativos com vários recursos

- Os fluxos de trabalho consistem em uma série de etapas

- A saída de uma etapa funciona como entrada para a próxima

- O Step Functions converte seu fluxo de trabalho em um diagrama de máquina de estado fácil de compreender, explicar e alterar

- Máquina de estado é uma série de etapas e transições entre cada etapa no AWS Step Functions

- Você pode monitorar cada etapa do tempo de execução conforme ela ocorre, o que significa que é possível identificar e corrigir problemas rapidamente

- O Step Functions aciona e monitora cada etapa automaticamente, também executa novas tentativas quando há erros, para que o aplicativo seja executado na ordem e conforme esperado

- Benefícios do Step Functions:
  1. **_Produtividade_**
  - Você pode ter mais tempo para pensar sobre como inovar a lógica de negócios que torna o aplicativo exclusivo
  - Os aplicativos podem se tornar mais fáceis de operar e manter
  2. **_Agilidade_**
  - O Step Functions registra um histórico toda vez em que ele é executado, para que você possa revisar todos os eventos na sequência em um único local
  - Você pode dimensionar de um tempo de execução para milhares de tempos de execução simultâneos, especialmente quando ele é usado com outros recursos sem servidor da AWS. Alguns exemplos de recurso incluem o AWS Lambda, o Amazon Simple Storage Service (Amazon S3) e o Amazon DynamoDB.
  - Com o Step Functions, você paga apenas pelo que usa, quando usa
  3. **_Resiliência_**
  - O Step Functions comporta o tratamento automático de erros para oferecer saídas normais
  - Ele opera em escala, e você não precisa configurar nem gerenciar recursos subjacentes

# **Como funciona**

- O AWS Step Functions funciona por meio de fluxos de trabalho configurados que você define

- Você coordena tarefas específicas expressando seu fluxo de trabalho como uma máquina de estado

- Os estados específicos tomam decisões com base em seus dados de entrada, executam ações e transmitem os dados de saída para outros estados

- O console do Step Functions fornece uma representação gráfica dessa máquina de estado para ajudar a visualizar a lógica do aplicativo

- Os estados podem desempenhar funções diferentes

  - Por exemplo, eles podem realizar algum trabalho (executar uma tarefa) ou escolher qual ramificação no fluxo de trabalho deve continuar

- As tarefas são configuradas para invocar o código hospedado em uma função, contêiner ou instância

- O código pode então ser executado quantas vezes forem necessárias por um período de um ano

- À medida que os fluxos de trabalho evoluírem, você poderá alterar as tarefas ou a ordem das etapas, ou adicionar ou excluir tarefas, sem precisar modificar nenhum código

# **Ciclo de vida**

- No Step Functions, eles são chamados de estados etransições de estado

- Ao iniciar uma máquina de estado, você introduz a entrada usando JSON

- Cada estado muda ou complementa a saída JSON, que se torna a entrada do próximo estado

- O console do Step Functions oferece visualização, que você pode usar para obter informações quase em tempo real quando sua máquina de estado estiver em execução

# **Casos de uso**

- O AWS Step Functions auxilia a maioria dos processos de negócios que requerem uma série de etapas

- Ele também é útil para `criar fluxos de trabalho` completos para gerenciar tarefas com interdependências

- `Processamento de dados`

  - Consolide dados de vários bancos de dados em relatórios unificados.

- `DevOps e automação de TI`

  - Cria ferramentas para integração e implantação contínuas.

- `Comércio eletrônico`

  - Automatize o atendimento de pedidos e o monitoramento de inventário.

- `Aplicativos web`
  - Processos de registro de usuários e autenticação de logon
