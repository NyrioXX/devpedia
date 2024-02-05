- [**Elastic Load Balancing**](#elastic-load-balancing)
  - [**Tipos de balanceadores de carga**](#tipos-de-balanceadores-de-carga)
    - [**_Application Load Balancer_**](#application-load-balancer)
    - [**_Network Load Balancer_**](#network-load-balancer)
    - [**_Classic Load Balancer_**](#classic-load-balancer)
  - [**Listeners**](#listeners)
    - [**Como funciona**](#como-funciona)

# **Elastic Load Balancing**

- Distribui automaticamente o tráfego de aplicativos de entrada entre vários destinos, como instâncias do Amazon Elastic Compute Cloud (Amazon EC2), contêineres e endereços IP

- Um balanceador de carga distribui cargas de trabalho para vários recursos de computação, como servidores virtuais

- Os balanceadores de carga do ELB podem ser configurados na área de serviço do Amazon EC2 no Console de gerenciamento da AWS

- É possivel usar o serviço por meio da AWS Command Line Interface (AWS CLI) ou kits de desenvolvimento de software (SDKs).

- Os principais recursos dos load balancers do ELB incluem:

  - `Alta disponibilidade (HA)`
    - Os balanceadores de carga do ELB podem distribuir tráfego entre vários destinos, incluindo instâncias do EC2, contêineres e endereços IP —em uma única zona de disponibilidade ou em várias zonas de disponibilidade
  - `Verificações de integridade`
    - Os balanceadores de carga do ELB podem ser configurados para detectar destinos não íntegros, interromper o envio de tráfego para eles e, em seguida, distribuir a carga entre os destinos íntegros restantes
  - `Segurança`
    - O usuario pode criar e gerenciar grupos de segurança associados aos balanceadores de carga. O usuario também pode criar um load balancer interno (não voltado para a Internet)
  - `Terminação do Transport Layer Security (TLS)`
    - Os balanceadores de carga incluem gerenciamento integrado de certificados e descriptografia com Secure Sockets Layer (SSL). Assim, o usuario pode gerenciar centralmente as configurações de SSL do balanceador de carga e descarregar o trabalho intensivo da CPU dos seus aplicativos
  - `Balanceamento de carga da camada 4 ou 7`
    - O usuario pode balancear a carga de aplicativos Hypertext Transfer Protocol (HTTP) e Secure HTTP (HTTPS) para feições específicas da camada 7. Lembre-se de que a Camada 7 é a camada do aplicativo no modelo OSI (Open Systems Interconnection)
    - O usuario também pode optar por usar apenas o balanceamento de carga da camada 4 para aplicativos que dependem exclusivamente do TCP. **_`Lembre-se de que a Camada 4 é a camada de transporte no modelo OSI`_**
  - `Monitoramento operacional`
    - Os balanceadores de carga do ELB podem trabalhar com métricas do Amazon CloudWatch e rastreamento de solicitações. O usuario pode usar esses recursos para monitorar o desempenho do aplicativo em tempo real

- Um balanceador de carga é usado por vários motivos:

  1. Para proteger o acesso aos seus servidores Web por meio de um único ponto de acesso exposto
  2. Para desacoplar seu ambiente usando balanceadores de carga públicos e internos
  3. Para fornecer alta disponibilidade e tolerância a falhas com a capacidade de distribuir o tráfego entre várias zonas de disponibilidade
  4. Para aumentar a elasticidade e a escalabilidade com o mínimo de sobrecarga

## **Tipos de balanceadores de carga**

### **_Application Load Balancer_**

- Funciona no nível do aplicativo

- Oferece suporte ao roteamento baseado em conteúdo e aplicativos executados em contêineres

- Suporta um par de protocolos padrão abertos (WebSocket e HTTP/2) e pode fornecer visibilidade adicional sobre a integridade das instâncias e contêineres de destino

- Os `Application load balancers` fornecem roteamento avançado de solicitações que oferece suporte a arquiteturas modernas de aplicações, incluindo microsserviços e aplicações baseadas em contêiner

- Os balanceadores de carga de aplicativo são recomendados para todos os outros casos de uso do Amazon Virtual Private Cloud (Amazon VPC).

- Os sites e aplicativos móveis que são executados em contêineres ou em instâncias do EC2 podem se beneficiar do uso dos balanceadores de carga de aplicativo.

- Casos de uso:
  - Roteamento baseado em caminho e baseado em host
  - Suporte nativo ao IPv6
  - Portas dinâmicas
  - Protocolos de solicitação adicionais compatíveis
  - Proteção contra exclusão e rastreamento de solicitações
  - Métricas aprimoradas e logs de acesso
  - Verificações de integridade direcionadas

### **_Network Load Balancer_**

- Projetado para lidar com dezenas de milhões de solicitações por segundo, mantendo alta taxa de transferência com baixa latência

- Os balanceadores de carga de rede funcionam bem para o balanceamento de carga do tráfego do Transmission Control Protocol (TCP)

- O usuario pode usar a mesma interface de programação de aplicativos (API) para controlar programaticamente os balanceadores de carga de rede e os balanceadores de carga de aplicativo

  - A API inclui controle programático completo de grupos-alvo e destino

- O balanceador de carga de rede é ideal para tráfego TCP de balanceamento de carga

- Ele é otimizado para lidar com padrões de tráfego repentinos e voláteis ao usar um único endereço IP estático por zona de disponibilidade

- Os balanceadores de carga de rede são recomendados para o balanceamento de carga do tráfego TCP em uma VPC

- Caso de uso:
  1. Padrões de tráfego repentinos e voláteis
  2. Único endereço IP estático por zona de disponibilidade
  3. Funciona bem para aplicativos que exigem desempenho extremo
  4. Exibir respostas HTTP
  5. Veja o número de hosts íntegros e não íntegros
  6. Filtre métricas com base em zonas de disponibilidade ou balanceador de carga

### **_Classic Load Balancer_**

- Fornece balanceamento de carga básico entre várias instâncias do Amazon EC2

- Ele opera nos níveis de solicitação e conexão

- Os balanceadores de carga clássica se destinam a aplicativos criados dentro da rede EC2 Classic

- Os Classic load balancers são recomendados para redes clássicas

- Os Classic load balancers são recomendados para todos os outros casos de uso da Amazon VPC

- Casos de uso:
  1. Acesse servidores por meio de um único ponto
  2. Desacople o ambiente do aplicativo
  3. Ofereça alta disponibilidade e tolerância a falhas
  4. Aumente a elasticidade e a escalabilidade

## **Listeners**

- Um listener verifica as solicitações de conexão de clientes usando o protocolo e a porta que o usuario configurar

- As regras que o usuario define para um ouvinte determinam como o balanceador de carga roteia solicitações para seus destinos registrados

  - O ouvinte que define a porta e o protocolo nos quais o balanceador de carga escuta
  - Cada balanceador de carga precisa de pelo menos um ouvinte para aceitar o tráfego

- Cada regra consiste em uma prioridade, uma ou mais ações e uma ou mais condições

- Quando as condições de uma regra são atendidas, suas ações são executadas

- O usuario deve definir uma regra padrão para cada ouvinte e, opcionalmente, pode definir regras adicionais

- Até 50 ouvintes podem estar em um balanceador de carga

### **Como funciona**

- **_No balanceador de aplicação_**

  - Cada ouvinte verifica as solicitações de conexão de clientes usando o protocolo e a porta que o usuario configurar

  - O listener encaminha solicitações a um ou mais grupos de destino, com base nas regras definidas

  - Cada regra especifica um grupo de destino, condição e prioridade

  - Quando a condição é atendida, o tráfego é encaminhado ao grupo de destino

  - O usuario deve definir uma regra padrão para cada listener e pode adicionar regras que especificam diferentes grupos de destino com base no conteúdo da solicitação

  - Essa configuração também é conhecida como roteamento baseado em conteúdo

  - Cada grupo de destino roteia solicitações a um ou mais destinos registrados, como instâncias do EC2, usando o protocolo e o número de porta que o usuario especificar

  - O usuario pode registrar um destino com vários grupos de destino

  - O usuario pode configurar verificações de integridade em cada grupo de destino
    - As verificações de integridade são executadas em todos os destinos registrados a um grupo de destino especificado em uma regra de ouvintes para seu balanceador de carga
    - Observe que cada listener contém uma regra padrão e um listener contém outra regra que roteia solicitações para um grupo de destino diferente

- `Como criar um load balancer pelo CLI`

  ```bash
  aws elbv2 create-load-balancer \ --name my-load-balancer \ --subnets subnet-12345678 subnet-23456789 \ --security-groups sg-12345678
  ```

- `Como criar um grupo de destino para o load balancer pelo CLI`

  ```bash
  aws elbv2 create-target-group \ --name my-targets \ --protocol HTTP \ --port 80 \ --vpc-id vpc-12345678
  ```

- `Como registrar instancias EC2 no grupo de destino`

  ```bash
  aws elbv2 register-targets \ --target-group-arn targetgroup-arn \ --targets Id=i-12345678 Id=i-23456789
  ```

- `Como criar um ouvinte para o load balancer`

  ```bash
  aws elbv2 create-listener \ --load-balancer-arn loadbalancer-arn \ --protocol HTTP \ --port 80 \ --default-actions
  Type=forward,TargetGroupArn=targetgroup-arn
  ```

- `Como verificar a integridade dos destinos registrados`

  ```bash
  aws elbv2 describe-target-health --target-group-arn targetgroup-arn
  ```
