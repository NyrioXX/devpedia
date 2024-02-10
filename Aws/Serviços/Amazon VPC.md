- [**Amazon Virtual Private Cloud (VPC)**](#amazon-virtual-private-cloud-vpc)
  - [**Comando CLI para criar uma VPC**](#comando-cli-para-criar-uma-vpc)
- [**Endereços de rede reservados para AWS**](#endereços-de-rede-reservados-para-aws)
- [**Recurso de atribuição automática de sub-rede IP pública**](#recurso-de-atribuição-automática-de-sub-rede-ip-pública)
- [**Tabela de rotas (ACL)**](#tabela-de-rotas-acl)
- [**Interface de rede elastica(NIC)**](#interface-de-rede-elasticanic)
- [**VPC Padrão**](#vpc-padrão)
- [**DNS**](#dns)
- [**Opções de conectividade**](#opções-de-conectividade)
- [**Network address translation (NAT)**](#network-address-translation-nat)
  - [**Caracteristicas do gateway NAT**](#caracteristicas-do-gateway-nat)
- [**Emparelhamento de VPC (Peering)**](#emparelhamento-de-vpc-peering)
  - [**Como fazer**](#como-fazer)
  - [**Comando CLI para conexão de emparelhamento**](#comando-cli-para-conexão-de-emparelhamento)
  - [**Limitações**](#limitações)
- [**AWS Direct Connect plus VPN**](#aws-direct-connect-plus-vpn)
- [**AWS VPN CloudHub**](#aws-vpn-cloudhub)
- [**AWS Site-to-site VPN**](#aws-site-to-site-vpn)
- [**VPC endpoints (Private Link)**](#vpc-endpoints-private-link)
- [**AWS Transit gateway**](#aws-transit-gateway)
- [**Segurança de rede**](#segurança-de-rede)
  - [**Host Bastion**](#host-bastion)
- [**Solução de problemas de rede mais comuns**](#solução-de-problemas-de-rede-mais-comuns)
  - [**Problemas ao conectar com o EC2**](#problemas-ao-conectar-com-o-ec2)
  - [**Problemas ao conectar com o EC2 pela internet**](#problemas-ao-conectar-com-o-ec2-pela-internet)
  - [**Problema de conexão por SSH**](#problema-de-conexão-por-ssh)
  - [**Problema com NAT**](#problema-com-nat)
  - [**Problemas com Peering**](#problemas-com-peering)

# **Amazon Virtual Private Cloud (VPC)**

Uma VPC é uma rede virtual privada. Por definição funciona da mesma que uma rede convencional só que em nuvem

- Uma VPC é dedidaca a uma conta AWS

- Pertenca a **_`apenas uma região AWS`_**

- Pode abranger varias zonas de disponibilidade

- Esta logicamente isolada de outras VPCs

- É possivel criar varias VPC em 1 conta AWS

- É possivel criar sub-redes em uma VPC mas não é recomendado varias sub-redes a fim de reduzir a complexidade da rede

- Ao criar uma VPC é possivel especificar o intervalo de endereços IPV4 escolhendo um bloco CIDR

  - O intervalo pode ser /16 (65.536 endereços) ou /28(16 endereços)
  - Os endereços não podem ser alterados depois que a VPC é criada

- As VPCs possuem um roteador implícito que roteia todo o tráfego na VPC

- Os endereços não podem se sobrepor aos endereços de outras redes na qual a VPC esteja conectada

- Numa VPC pode ser criado: sub-redes, tabela de rotas, security group, lista de controle de acesso à rede (ACL de rede)

## **Comando CLI para criar uma VPC**

```bash
$ aws ec2 create-vpc --cidr-block 10.0.0.0/16
```

# **Endereços de rede reservados para AWS**

![Endereços](../Arquivos/Endereços%20reservados%20AWS.png)

# **Recurso de atribuição automática de sub-rede IP pública**

- Somente instâncias executadas em uma Amazon VPC padrão recebem um endereço IP público durante a criação

- As instâncias criadas em VPCs personalizadas exigem a substituição da configuração padrão para receber endereços IP públicos

- Como alternativa, defina as configurações Modificar atribuição automática de IP em sub-redes para atribuir automaticamente endereços IP públicos às instâncias

- Diferentemente dos endereços IP elásticos, os endereços IP públicos não são estáticos

# **Tabela de rotas (ACL)**

- Uma tabela de rotas é um mecanismo usado para rotear o tráfego originado de uma sub-rede associada em uma VPC

- Ela contém um conjunto de regras (também chamado de rotas) que determinam para onde o tráfego é enviado

- As rotas em uma tabela de rotas consistem em uma orientação e um destino

- O roteador lê a rota assim: "Qualquer tráfego que vai para a orientação deve ser roteado por meio do destino"

- Um destino pode ser um ID de instância específico, um ID de interface de rede elástica, um gateway de Internet ou um gateway privado virtual

- Quando uma VPC é criada, uma tabela de rotas padrão também é criada

- Essa tabela de rotas padrão tem uma regra que roteia o tráfego local para qualquer lugar dentro do intervalo de endereços IP da VPC

  - Você pode adicionar mais rotas à tabela de rotas padrão

- Quando você cria uma sub-rede, ela é automaticamente associada à tabela de rotas padrão da VPC
  - Se você não quiser usar essa tabela de rotas, em vez disso, poderá criar uma tabela de rotas personalizada e associá-la à sub-rede

# **Interface de rede elastica(NIC)**

- Uma interface de rede elástica, também chamada de interface de rede (NIC), é uma interface de rede virtual (NIC) anexada a um EC2 instância

- Ela fornece o ponto de conexão que permite que uma instância se comunique com uma rede

- Cada interface de rede tem um endereço IP primário, além de endereços IP secundários adicionais

- Ele também tem seu próprio endereço de media access control (MAC) e grupos de segurança

- Cada instância em uma VPC tem uma NIC padrão, a interface de rede primária, que recebe um endereço IPv4 privado do intervalo de endereços IPv4 da VPC

  - Não é possível desanexar uma interface de rede primária de uma instância

- Você pode criar e anexar NICs adicionais a uma instância

  - O número de NICs que você pode anexar varia de acordo com o tipo de instância

  - Uma NIC adicional pode ser anexada a uma instância, desanexada dessa instância e anexada a outra instância

  - Os atributos da NIC o seguem quando eles são anexados ou desconectados das instâncias

  - Quando você move uma NIC de uma instância para outra, o tráfego de rede é redirecionado para a nova instância.

# **VPC Padrão**

- Quando você cria uma conta da AWS, a AWS cria automaticamente uma VPC padrão para você com um bloco CIDR de 172.31.0.0/16

- Essa VPC fornece até 65.536 endereços IPv4 privados no intervalo 172.31.0.0—172.31.255.255

- A AWS também cria automaticamente os seguintes componentes na VPC padrão:
  - Um gateway de Internet para permitir a comunicação com a Internet
  - Uma tabela de rotas padrão com regras para enviar tráfego para endereços IP no intervalo de endereços da VPC para uma rota local
  - Ela também envia tráfego para qualquer outro endereço IP para o gateway da Internet
  - Uma sub-rede pública em cada zona de disponibilidade com um tamanho /20, que fornece até 4.096 endereços
    - A opção Atribuir IP público automaticamente está habilitada para essas sub-redes
    - Qualquer instância executada na VPC padrão obtém automaticamente um endereço IP público. Elas são sub-redes públicas porque estão associadas à tabela de rotas padrão, que tem uma regra que permite o tráfego por meio de um gateway da Internet

# **DNS**

- Um servidor DNS (Domain Name System) é usado para resolver um nome de host DNS (como www.example.com) para seu endereço IP correspondente (como 192.0.2.1)

- Quando você cria uma VPC, a AWS atribui automaticamente um servidor DNS (fornecido pela Amazon) a ela para resolver nomes de host na VPC

  - A partir de dezembro de 2018, esse servidor DNS passa a ser chamado de resolvedor do Amazon Route 53
  - Por padrão, o resolvedor responde diretamente a consultas de DNS para nomes de domínio dentro da VPC
  - Ele realiza pesquisas recursivas em servidores de nomes públicos para todos os outros nomes de domínio

- Se você quiser usar um servidor DNS diferente para uma VPC, as opções disponíveis são:

  1.  Usar o seu próprio servidor DNS

      - Essa opção exige a especificação de um conjunto especial de opções do Dynamic Host Configuration Protocol (DHCP – Protocolo de configuração de host dinâmico) para a VPC

  2.  Usar uma zona hospedada privada do Amazon Route 53

            - Uma zona hospedada é um contêiner que contém informações sobre como o Amazon Route 53 roteia o tráfego para os domínios em uma VPC
            - Uma zona hospedada pública permite que o Amazon Route 53 roteie o tráfego da Internet para recursos dentro de uma VPC
            - Por exemplo, um cliente pode visualizar o site da empresa, que está sendo executado em uma instância do EC2. O Amazon Route 53 usa uma zona hospedada privada para rotear o tráfego dentro de uma ou mais VPCs sem expor recursos à Internet
            - Um caso de uso comum para criar um DNS de zona hospedada privada é chamado de DNS com omissão de rotas
            - Um DNS de omissão de rotas emparelha um DNS de zona hospedada privada com um DNS de zona hospedada pública
            - Com essa implementação, um determinado nome de host DNS resolve de forma diferente, dependendo se a pesquisa vem de dentro ou de fora da VPC
            - Se uma pesquisa for iniciada de dentro da VPC, o nome do host DNS resolverá para um endereço IP especificado. No entanto, se a pesquisa for originada fora da VPC, o mesmo nome de host DNS será resolvido para um endereço IP diferente. Um exemplo de cenário para usar um DNS com omissão de rotas é quando você deseja manter uma versão interna e externa do mesmo site. O DNS com omissão de rotas permite que você acesse a versão interna do site usando o mesmo nome de domínio usado para o site público

# **Opções de conectividade**

![Cenarios](../Arquivos/Cenarios%20e%20soluções%20de%20conectividade.png)

# **Network address translation (NAT)**

- O usuario pode usar um dispositivo NAT para habilitar uma instância em uma sub-rede privada para se conectar à Internet ou a outros serviços da AWS

- Isso também pode impedir a Internet de iniciar conexões com a instância

- Um dispositivo NAT encaminha o tráfego da instância que está na sub-rede privada para a Internet ou outros serviços da AWS. Em seguida, ele envia a resposta de volta para a instância

- Quando a solicitação vai para a Internet, o endereço IP de origem é substituído pelo endereço do dispositivo NAT

- Quando a resposta vai para a instância, o dispositivo NAT converte o endereço de volta para o endereço IP privado da instância

- A AWS oferece um gateway NAT e também uma instância NAT (que normalmente é uma instância do EC2 que executa o software NAT)

- Os gateways NAT são recomendados porque oferecem uma disponibilidade e largura de banda melhores em comparação com as instâncias NAT
  - O serviço NAT Gateway também é um serviço gerenciado da AWS que não exige administração manual

## **Caracteristicas do gateway NAT**

- Serviço gerenciado da AWS

- Redundância integrada dentro de uma zona de disponibilidade

- Exige um endereço IP elástico

- Compatível com os protocolos:

  - – Transmission Control Protocol (TCP – Protocolo de controle de transmissão)
  - User Datagram Protocol (UDP)
  - Internet Control Message Protocol (ICMP – Protocolo de mensagem de controle da Internet)

- Um gateway NAT é criado em uma Zona de disponibilidade específica e é implementado com redundância nessa zona

- Ele exige um endereço IP elástico (endereço IPv4 estático)

- Para criar um gateway NAT:

  1. Especifique a sub-rede em que você deseja criá-la e selecione o ID de alocação de um endereço IP elástico para associar a ela
  2. Atualize as tabelas de rotas das sub-redes privadas para apontar o tráfego da Internet para ela. Isso permite que as instâncias nessas sub-redes se comuniquem com a Internet

# **Emparelhamento de VPC (Peering)**

- Para conectar duas VPCs juntas para trocar tráfego ou dados, você pode criar uma conexão de emparelhamento da VPC

- Uma `conexão de emparelhamento` da VPC é uma conexão de redes entre duas VPCs que permite que você direcione o tráfego entre elas usando endereços IP privados

- As VPCs podem estar na mesma região, em regiões diferentes ou até mesmo em contas diferentes da AWS

- Os dados que são trocados atravessam privadamente a estrutura dorsal da AWS, e nenhum gateway será necessário para o emparelhamento funcionar

- A conexão é controlada pelas tabelas de rotas, que fazem referência à conexão de emparelhamento como um destino para as rotas. Isso resulta em uma conexão sem ponto único de falhas para comunicação ou gargalos de largura de banda

  - Um exemplo de uso de emparelhamento da VPC é permitir que outras VPCs acessem recursos que você possui em uma de suas VPCs. Por exemplo, imagine que uma conexão de emparelhamento de VPC é estabelecida entre duas VPCs em diferentes contas da AWS: Conta 1 e Conta 2. A conexão permite que os recursos da Conta 1 se comuniquem com os recursos na Conta 2 e vice-versa
  - Outro caso de uso para o emparelhamento da VPC é facilitar a transferência de dados. Por exemplo, se você tiver mais de uma conta da AWS, poderá emparelhar as VPCs entre essas contas para criar uma rede de compartilhamento de arquivos

- Você pode criar uma conexão de emparelhamento da VPC usando o Console de gerenciamento da AWS

- O emparelhamento de VPC envolve o estabelecimento de uma conexão bidirecional que ambas as partes devem inicializar e aceitar

- Os proprietários de ambas as VPCs devem estabelecer rotas que permitam que o tráfego seja enviado entre as redes

  - Essa relação de roteamento significa que as duas redes não devem ter espaços de endereço sobrepostos

## **Como fazer**

- Para estabelecer uma conexão de emparelhamento da VPC:

  1. O proprietário da VPC solicitante envia um pedido ao proprietário da VPC receptora para criar uma conexão de emparelhamento da VPC

  2. O proprietário da VPC receptora aceita a conexão de emparelhamento da VPC. A aceitação ativa a conexão

  3. O proprietário de cada VPC adiciona uma rota para uma ou mais de suas tabelas de rotas da VPC

     - Essa rota aponta para o intervalo de endereços IP da outra VPC, conhecida como VPC de mesmo nível
     - Essa rota permite o fluxo de tráfego entre as VPCs usando endereços IP privados

  4. Se necessário, você pode atualizar as regras do grupo de segurança associadas a instâncias em cada VPC

     - Essa atualização pode garantir que o tráfego de e para o emparelhamento da VPC não seja restrito
     - Se ambas as VPCs estiverem na mesma região, você poderá fazer referência a um grupo de segurança comum como a origem ou o destino das regras do grupo de segurança

  5. Opcionalmente, é possivel habilitar a resolução de nome de host DNS para a sua conexão da VPC

  - Suponha que as instâncias em ambos os lados da conexão de emparelhamento da VPC se endereçam usando um nome de host DNS público, que é o comportamento padrão. No entanto, talvez você queira que o nome do host seja resolvido para o endereço IP privado da instância em vez do endereço IP público. Nesse caso, a opção de resolução de nome de host DNS é necessária

## **Comando CLI para conexão de emparelhamento**

```bash
aws ec2 create-vpc-peering-connection --vpc-id vpc-1a2b3c4d --peer-vpc-id vpc-11122233
```

## **Limitações**

- As limitações de emparelhamento da VPC incluem:

1. `Sem sobreposição de intervalos de endereços IP privados`

   - Por exemplo, uma VPC com espaço de endereço IP privado 10.2.0.0/16 não pode emparelhar uma VPC com espaço de endereço IP privado 10.2.2.0/24

2. `Sem emparelhamento transitivo`

   - Se a VPC A estiver emparelhada à VPC B e a VPC B estiver emparelhada à VPC C, os recursos na VPC A não têm uma rota direta para os recursos na VPC C, ou vice-versa

3. `Sem roteamento transitivo de borda por meio do AWS Direct Connect`

   - Por exemplo, suponha que a VPC A e a VPC B estejam empatadas e a VPC A também esteja conectada ao seu data center por meio do AWS Direct Connect
   - Seu data center não poderá entrar em contato diretamente com os recursos na VPC B

4. `Sem acesso transitivo do gateway da Internet`

   - Se a VPC A e a VPC B estiverem emparelhadas, a VPC B não terá acesso ao gateway da Internet na VPC A. A VPC B deverá definir sua própria rota para a Internet

5. `Sem roteamento NAT entre VPCs`

   - A VPC A não pode rotear o tráfego por meio do servidor NAT na VPC B

6. `Não é possível resolver endereços IP privados`

   - Se você estiver na VPC A e fizer uma pesquisa de DNS de um endereço privado na VPC B, ela não será resolvida

7. `Nenhuma referência cruzada de grupos de segurança entre regiões`

   - Você não pode azer referência ao grupo de segurança de uma VPC de mesmo nível que esteja em uma região diferente
   - Use o bloco CIDR (Classless Inter-Domain Routing) da VPC de emparelhamento no campo de origem ou de destino da regra do grupo de segurança

# **AWS Direct Connect plus VPN**

- Ao usar o AWS Direct Connect, você pode criar uma conexão física entre o data center e a AWS

- Essa conexão cria um ponto de extremidade seguro e dedicado entre suas redes internas e sua rede na nuvem
- Uma extremidade do cabo está conectada ao roteador do seu data center. A outra extremidade está conectada a um roteador do AWS Direct Connect em um local do AWS Direct Connect

- Com essa conexão em vigor, você cria interfaces virtuais para acessar diretamente serviços públicos da AWS ou VPCs

- A conexão ignora os provedores de serviços de Internet em seu caminho de rede

- Uma interface virtual pública permite o acesso a serviços voltados para o público (por exemplo, o Amazon Simple Storage Service ou o Amazon S3)

- Uma interface virtual privada permite o acesso a uma VPC e é anexada a um gateway privado virtual

- Ao combinar uma conexão do AWS Direct Connect com a AWS Site-to-Site VPN, você adiciona a criptografia IPsec à conexão

# **AWS VPN CloudHub**

- Se você tiver vários requisitos de conexão VPN entre a VPC e o site remoto, considere o uso de um modelo AWS VPN CloudHub para implementá-los de forma conveniente e econômica

- O AWS VPN CloudHub opera em um modelo simples de hub-and-spoke e pode incluir as conexões do AWS Site-to-Site e do AWS Direct Connect plus VPN

- O modelo permite que os seus sites remotos se comuniquem com a VPC e também entre si

- Para usar o AWS VPN CloudHub:

1. Crie um gateway privado virtual com vários gateways do cliente
2. Cada gateway do cliente é configurado para anunciar as suas rotas do Border Gateway Patrol (BGP) por meio da sua conexão da AWS Site-to-Site VPN
   - Esses anúncios de roteamento são recebidos e anunciados novamente para cada par do BGP. Agora, cada site pode enviar e receber dados dos outros sites e da VPC.

- Exemplo: a sede corporativa em Nova York tem uma conexão do AWS Direct Connect com a VPC. As filiais, você liga conexões VPN de local para local com a VPC. As filiais em Los Angeles e Miami podem enviar e receber dados entre si e com a sede corporativa, sempre usando o AWS VPN CloudHub. Todos os sites estão usando o AWS VPN CloudHub

# **AWS Site-to-site VPN**

- Uma conexão AWS Site-to-Site VPN é uma conexão pela Internet entre sua VPC e sua rede remota

- Essa conexão usa IPsec para proteger a comunicação

- Dois componentes são necessários para estabelecer uma conexão:

  1. Um gateway privado virtual (gateway VPN) no lado da AWS da conexão VPN
  2. Um gateway do cliente no lado remoto da conexão VPN

- O AWS Direct Connect plus VPN combina os recursos do AWS Direct Connect com os recursos do AWS Site-to-Site VPN

# **VPC endpoints (Private Link)**

- Um ponto de extremidade de VPC permite que você conecte de maneira privada a VPC aos serviços da AWS compatíveis e aos serviços de ponto de extremidade de VPC desenvolvidos pelo AWS PrivateLink

- Esse método não requer um gateway de Internet, dispositivo NAT, conexão VPN ou conexão do AWS Direct Connect

- As instâncias na VPC não precisam saber o endereço IP público dos recursos com os quais desejam se comunicar

- O tráfego entre a VPC e o produto da AWS não sai da rede da Amazon

- Dois tipos de ponto de extremidade de VPC estão disponíveis:

  1. `Ponto de extremidade da interface`

     - Um ponto de extremidade da interface é um componente virtual que permite que você se conecte a um serviço exposto por meio do AWS PrivateLink
     - De forma específica, é uma interface de rede elástica, que é uma interface de rede virtual (NIC) que pode ser anexada a uma instância do Amazon EC2
     - Esse cartão virtual possui um endereço IP privado que serve como ponto de registro para o tráfego destinado ao serviço de destino
     - Muitos serviços da AWS podem ser alimentados pelo AWS Private Link
     - Você também pode criar seu próprio aplicativo e configurá-lo como um serviço desenvolvido pelo AWS PrivateLink. Esse tipo de serviço é conhecido como um serviço de ponto de extremidade de VPN

  2. `Ponto de extremidade do gateway`
     - Um ponto de extremidade do gateway fornece um mecanismo para acessar diretamente recursos no Amazon S3 e no Amazon DynamoDB sem precisar passar pela Internet
     - Ele é usado como destino em uma tabela de rotas: de uma rota para o recurso ao qual você está se conectando

- O AWS PrivateLink permite que você conecte com segurança VPCs a serviços da AWS compatíveis, serviços de terceiros no AWS Marketplace e aos seus próprios serviços na AWS

- O tráfego entre a VPC e o serviço de destino usa endereços IP privados e nunca sai da rede da AWS

- Para acessar um serviço usando o AWS PrivateLink, você cria um ponto de extremidade da interface para ele na VPC do consumidor do serviço

- Esse ponto de extremidade cria uma interface de rede (NIC) na sub-rede do consumidor de serviços

- Ele tem um endereço IP privado que serve como ponto de entrada para o tráfego que vai para o serviço

- Os pontos de extremidade de serviço disponíveis no AWS PrivateLink aparecem nas sub-redes da VPC como interfaces de rede elástica com endereços IP privados

- A lista de serviços da AWS compatíveis que podem ser invocados usando um endpoint da interface inclui o Amazon EC2, o Elastic Load Balancing e o AWS Systems Manager

# **AWS Transit gateway**

- O AWS Transit Gateway permite que você conecte VPCs e redes locais a um único gateway

- À medida que o número de VPCs no seu ambiente da Nuvem AWS cresce, a necessidade de interconectá-las torna-se cada vez mais desafiadora de implementar

- Com o AWS Transit Gateway, você só precisa criar e gerenciar uma única conexão

- Essa conexão vai do gateway central para cada Amazon VPC, data center local ou escritório remoto em toda a rede

- O AWS Transit Gateway atua como um hub que controla como o tráfego é roteado entre todas as redes conectadas, que agem como spokes

  - Este modelo de hub-and-spoke simplifica significativamente o gerenciamento e reduz os custos operacionais porque cada rede só precisa se conectar ao gateway de trânsito e não a todas as outras redes
  - Você pode conectar qualquer nova VPC ao gateway de trânsito. Em seguida, ela fica automaticamente disponível para todas as outras redes que também estão conectadas ao gateway de trânsito

- O AWS Transit Gateway roteia pacotes IPv4 e IPv6 entre anexos usando tabelas de rotas do gateway de trânsito

- As rotas decidem o próximo salto, dependendo do endereço IP de destino do pacote

- Você pode configurar as VPCs e conexões VPN anexadas para propagar suas tabelas de rotas para as tabelas de rotas do gateway

- Quando um pacote surge de um anexo, ele é roteado para outro anexo usando a tabela de rotas que corresponde ao endereço IP de destino

- Uma conexão de gateway de trânsito é a origem e o destino dos pacotes

- Você pode anexar uma ou mais VPCs e uma ou mais conexões VPN a um gateway de trânsito

- Se as VPCs e as conexões VPN estiverem na mesma região que o gateway de trânsito

# **Segurança de rede**

- Sua rede virtual pode e deve ser protegida em vários níveis diferentes:

1. O nível de segurança com escopo mais amplo está no nível da tabela de rotas.Ter uma sub-rede privada sem caminho direto para a Internet é uma das melhores maneiras de proteger seus recursos de computação internos contra o acesso não autorizado

2. O segundo nível são as listas de controle de acesso à rede (ACLs de rede). As ACLs de rede permitem que você defina o comportamento de segurança padrão para suas sub-redes. A segurança da VPC ou da camada de sub-rede geralmente é controlada pela equipe de segurança de rede

3. No terceiro nível, os security groups podem ser usados para controlar o comportamento no nível de uma instância ou interface de rede elástica. Geralmente administrados por desenvolvedores de aplicações

4. No quarto nível, você pode optar por usar algum tipo de software de detecção baseado em host de terceiros que monitora instâncias individuais do Amazon Elastic Compute Cloud (Amazon EC2) em busca de ameaças específicas (como invasão de malware, bugs conhecidos do sistema operacional e auditoria de segurança)

## **Host Bastion**

- Um host bastion serve como um ponto de partida da Internet pública para as instâncias do Amazon Elastic Compute Cloud (Amazon EC2) e outros recursos em uma sub-rede privada

- Ao usar um bastion host, você pode acessar recursos privados publicamente por meio da Internet de uma forma que ainda minimiza a superfície de ataque da sua sub-rede privada

- Os usuários devem ter chaves válidas para o bastion host e instâncias privadas

  - A AWS recomenda enfaticamente que você use diferentes pares de chaves públicas/privadas para o host bastion e para os recursos na sub-rede privada
  - As chaves para os recursos de sub-rede privada não devem ser armazenadas no host bastion, porque qualquer usuário não autorizado que acessar seu host bastion teria acesso aos recursos na sua sub-rede privada

- Para instâncias do Linux, a maioria dos clientes do Secure Shell (SSH) oferece suporte ao que é conhecido como encaminhamento de agente

  - Esse recurso permite que seu programa SSH local, como PuTTY, passe sua chave privada do cliente por meio da conexão SSH com o host bastion. Em seguida, ele pode passá-lo para a conexão SSH com seus recursos de rede privada

- Para instâncias do Microsoft Windows, você pode usar o console do Amazon EC2 para gerar uma senha de login usando a chave privada. Em seguida, use o programa do cliente de área de trabalho remota (RDP) para fazer login na instância privada com a senha gerada

# **Solução de problemas de rede mais comuns**

## **Problemas ao conectar com o EC2**

- Verifique se a instância está ativa e em execução

  - Verifique se ela foi aprovada nas verificações de Status do sistema e Status da instância

- Verifique se os security groups associados à instância permitem conexões para os protocolos e portas necessários

- Verifique se as ACLs de rede associadas à sub-rede permitem o tráfego das portas e protocolos necessários

- Verifique se a tabela de rotas associada à sub-rede tem regras de destino que apontam para os destinos apropriados

## **Problemas ao conectar com o EC2 pela internet**

- Verifique se o endereço IP público ou o nome DNS (Sistema de Nomes de Domínio) que você está usando está correto

- Verifique se a instância tem um endereço IP público ou um endereço IP elástico

- Verifique se há um gateway da Internet anexado à VPC da instância

- Verifique se a tabela de rotas da sub-rede da instância tem uma regra de rota para o destino 0.0.0.0/0 por meio do gateway da Internet

## **Problema de conexão por SSH**

- Verifique as credenciais de conexão da instância:
  - Nome do usuário
  - Chave privada da instância

## **Problema com NAT**

- Instância NAT ou gateway NAT

  - Verifique se a tabela de rotas possui uma rota para a instância NAT ou o gateway NAT

- Instância NAT

  - Verifique se a Verificação de origem/destino está desativada
  - Reinicie a instância NAT
  - Verifique as regras do security group de entrada

## **Problemas com Peering**

- Certifique-se de que a solicitação de emparelhamento foi aprovada

- Verifique as regras do security group

  - Certifique-se de usar o intervalo de blocos CIDR (Classless Inter-Domain Routing) na VPC A para permitir o acesso da VPC B ou usar o ID do security group da VPC A

- Verificar as ACLs de rede
  - Verifique se as ACLs de rede negam todo o tráfego externo
