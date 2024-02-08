- [**Amazon Virtual Private Cloud (VPC)**](#amazon-virtual-private-cloud-vpc)
  - [**Comando CLI para criar uma VPC**](#comando-cli-para-criar-uma-vpc)
- [**Endereços de rede reservados para AWS**](#endereços-de-rede-reservados-para-aws)
- [**Recurso de atribuição automática de sub-rede IP pública**](#recurso-de-atribuição-automática-de-sub-rede-ip-pública)
- [**Tabela de rotas**](#tabela-de-rotas)
- [**Interface de rede elastica**](#interface-de-rede-elastica)
- [**VPC Padrão**](#vpc-padrão)
- [**DNS**](#dns)

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

# **Tabela de rotas**

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

# **Interface de rede elastica**

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
