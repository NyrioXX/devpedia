# **Well architected desgin**

- O Well-Architected identifica um conjunto de princípios gerais de design para simplificar projetos de boa qualidade na nuvem
  1. Parar de adivinhar suas necessidades de capacidade
  2. Testar os sistemas em escala de produção
  3. Automatizar para facilitar experimentos de arquitetura
  4. Permitir que as arquiteturas evoluam
  5. Impulsionar arquiteturas orientadas por dados. • Aprimorar por meio de simulações.

## **Ambiente tradicional VS Ambiente de nuvem**

### **_Ambiente tradicional_**

- `Capacidade`
  - Estimar a capacidade antes de implantar um sistema, pode resultar recursos caros ociosos
  - Lidar com as implicações da capacidade limitada no desempenho
- `Testes`
  - Normalmente, a criação de um ambiente duplicado apenas para testes envolve um custo proibitivo
  - A maioria dos ambientes de teste não é testada em níveis reais de demanda de produção
- `Automação`
  - Os ambientes locais têm estruturas e componentes separados que exigem mais trabalho para automatizar (não existe API comum para todas as partes da infraestrutura)
- `Evolução`
  - Muitas vezes, as decisões sobre arquitetura são implementadas como eventos estáticos e únicos
  - Um sistema pode ter poucas versões principais durante sua vida útil
  - As decisões tomadas por uma empresa em sua fase inicial podem impedi-la de cumprir novos requisitos empresariais à medida que ela muda
- `Orientada por dados`
  - Muitas vezes, as decisões sobre arquitetura são tomadas de acordo com padrões organizacionais
  - Geralmente, não é possível gerar conjuntos de dados
  - É provável que você use modelos e suposições para dimensionar a arquitetura
- `Simulações`
  - Você usa o runbook somente quando ocorre algo ruim na produção

### **_Ambiente em nuvem_**

- `Capacidade`
  - Elimina as suposições sobre as necessidades de capacidade de infraestrutura
  - Capacidade máxima ou mínima necessária e aumentar e reduzir verticalmente de maneira automática
- `Testes`
  - Crie um ambiente duplicado sob demanda, conclua o teste e desative os recursos
  - Pague pelo ambiente de teste apenas quando ele estiver em execução para poder simular o ambiente ao vivo por uma fração do custo dos testes no local
- `Automação`
  - Crie e replique seus sistemas por um baixo custo (sem esforço manual)
  - Monitore alterações na automação, audite o impacto e rever
- `Evolução`
  - A possibilidade de automatizar e testar sob demanda reduz o risco do impacto decorrente de alterações de design
  - Os sistemas podem evoluir ao longo do tempo para que as empresas tenham oportunidade de aproveitar as inovações recentes como uma prática padrão
- `Orientada por dados`
  - Colete dados sobre como as opções de arquitetura afetam o comportamento das cargas de trabalho
  - Tome decisões baseadas em fatos sobre como aprimorar a carga de trabalho
  - Use esses dados para embasar opções e aprimoramentos de arquitetura ao longo do tempo.
- `Simulações`
  - Teste a operação da arquitetura e dos processos programando testes aleatórios para simular eventos em produção
