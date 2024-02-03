- [**Alta confiabilidade e disponibilidade**](#alta-confiabilidade-e-disponibilidade)
  - [**_Confiabilidade_**](#confiabilidade)
    - [**_Confiabilidade VS Disponibilidade_**](#confiabilidade-vs-disponibilidade)
  - [**_Disponibilidade_**](#disponibilidade)

# **Alta confiabilidade e disponibilidade**

## **_Confiabilidade_**

- Probabilidade de que o sistema como um todo funcione por um período específico
- Inclui hardware, firmware e software
- Medida de quanto tempo o item executa a função pretendida
- Duas medidas comuns de confiabilidade:
  1. Tempo médio entre falhas (MTBF): tempo total em serviço/número de falhas
  2. Taxa de falhas: número de falhas/tempo total em serviço

### **_Confiabilidade VS Disponibilidade_**

- `Confiabilidade` é a medida do tempo durante o qual um recurso executa a função pretendida
- `Disponibilidade` é a medida da porcentagem do tempo durante o qual um recurso opera normalmente
  - Porcentagem do tempo de atividade (como 99,9%) durante um período (geralmente um ano)
  - Disponibilidade = tempo de operação normal/tempo total
    - Abreviação comum:Indica apenas o número de noves
    - Por exemplo, 5 noves equivale a 99,999% de disponibilidade

## **_Disponibilidade_**

- Garantir que o tempo de inatividade do aplicativo seja minimizado o máximo possível sem a necessidade de intervenção humana
- O objetivo da alta disponibilidade é garantir que os sistemas funcionem e fiquem acessíveis na maior parte do tempo
- O tempo de inatividade seja minimizado
- Necessidade mínima de intervenção humana
- Os fatores que contribuem para a HA (high availability) incluem:
  1. `Tolerância a falhas`
  - Redundância integrada dos componentes de um aplicativo e sua capacidade de permanecer operacional
  2. `Escalabilidade`
  - Capacidade de um aplicativo acomodar o crescimento sem precisar de alteração no design
  3. `Capacidade de recuperação`
  - Processo, políticas e procedimentos relacionados à restauração do serviço após um evento catastrófico.
- Na TI local tradicional, a HA é cara e é adequada apenas para aplicativos essenciais para a operação
- Na nuvem:
  1. Vários servidores
  2. Data centers isolados redundantes em cada Zona de Disponibilidade
  3. Dentro de cada Região AWS há várias Zonas de Disponibilidade
  4. Várias Regiões ao redor do mundo
  5. Serviços tolerantes a falhas
