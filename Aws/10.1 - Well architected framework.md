# **Well Architected framework**

- Os arquitetos de nuvem devem usar o AWS Well-Architected para:
  1. Aumentar os níveis de conscientização sobre as práticas recomendadas de arquitetura
  2. Abordar áreas fundamentais frequentemente negligenciadas,
  3. Abordar áreas fundamentais frequentemente negligenciadas
- O AWS Well-Architected Framework não fornece:
  1. Detalhes da implementação
  2. Padrões de arquitetura
- No entanto, oferece:
  1. Perguntas cujo principal objetivo é oferecer uma compreensão criteriosa das decisões de arquitetura
  2. Serviços e soluções relevantes para cada pergunta
  3. Referências a recursos relevantes
- AWS Well-Architected Framework tem base em `seis` diferentes perspectivas ou pilares

## **_1. Excelência operacional_**

- Capacidade de monitorar sistemas
- Entregar valor comercial
- Para aprimorar continuamente processos e procedimentos de suporte
- Gerenciar e automatizar alterações
- Responder a eventos
- Responder às alterações

### **_Princípios de design de excelencia operacional_**

- Executar operações como código
- Anotar a documentação
- Prever falhas
- Fazer alterações frequentes, pequenas e reversíveis
- Refinar os procedimentos de operações com frequência
- Aprender com todos os eventos e falhas operacionais

## **_2. Segurança_**

- Monitorar e proteger
  - Informações
  - Sistemas
  - Ativos
- Avaliações de riscos
- Estratégias de mitigação
- Proteger e monitorar sistemas
- Identificar e gerenciar quem pode fazer o quê
- Estabelecer controles para detectar eventos de segurança
- Proteger sistemas e serviços
- Proteger a confidencialidade e integridade dos dados
- Gerenciamento de identidade e acesso
- Controles de detecção
- Proteção de infraestrutura
- Proteção de dados
- Resposta a incidentes

### **_Princípios de design de segurança na nuvem_**

- Implementar a segurança em todas as camadas
- Habilitar a rastreabilidade
- Implementar o princípio do privilégio mínimo
- Concentrar-se na proteção de seu sistema
- Automatizar
  - Por exemplo, crie e salve uma imagem fortalecida e corrigida de um servidor virtual para que, quando precisar de uma imagem, possa usá-la automaticamente para criar uma nova instância. Outra prática recomendada é automatizar a resposta a eventos de segurança habituais e anômalos.

## **_3. Confiabilidade_**

- Recuperar-se de falhas de infraestrutura ou serviços
- Adquirir dinamicamente recursos de computação para atender à demanda
- Mitigar interrupções como:
  - Configurações incorretas
  - Problemas de rede temporários
- Fundamentos
  - Para obter confiabilidade, sua arquitetura e sistema devem ter uma base bem planejada que possa lidar com alterações na demanda ou com requisitos, além de detectar falhas e se corrigir automaticamente
- Gerenciamento de alterações
- Gerenciamento de falhas

### **_Princípios de design de confiabilidade_**

- Testar os procedimentos de recuperação
- Recuperar automaticamente
- Dimensionar a escala horizontalmente
- Parar de tentar adivinhar a capacidade
- Gerenciar alterações na automação

## **_4. Eficiência de desempenho_**

- Usar recursos de computação com eficiência para cumprir requisitos de sistema
- Manter essa eficiência à medida que a demanda muda e as tecnologias evoluem
- Selecionar soluções personalizáveis
- Revisar para inovar continuamente
- Monitorar serviços da AWS
- Considerar as compensações

### **_Princípios de design de eficiencia de desempenho_**

- Democratizar tecnologias avançadas
- Obter alcance global em minutos
- Usar arquitetura sem servidor
- Experimentar com maior frequência
- Ter afinidade mecânica

## **_5. Otimização de custos_**

- Custos desnecessários
- Recursos subótimos
- Usar recursos que ofereçam custo-benefício
- Equiparar a oferta com a demanda
- Aumentar a conscientização sobre despesas
- Otimizar ao longo do tempo

### **_Princípios de design de otimização de custos_**

- Adotar um modelo de consumo
- Medir a eficiência geral
- Reduzir os gastos com operações do data center
- Analisar e atribuir despesas Usar serviços gerenciados

## **_6. Sustentabilidade_**

- Escolha de região
- Padrões de comportamento do usuário
- Padrões de software e arquitetura
- Padrões de dados
- Padrões de hardware
- Processo de desenvolvimento e implantação

### **_Princípios de design de sustentabilidade_**

- Compreenda seu impacto
- Estabeleça metas de sustentabilidade
- Maximize a utilização
- Antecipe e adote ofertas de hardware e software novos e mais eficientes
- Use serviços gerenciados
- Reduza o impacto posterior de suas workloads na nuvem
