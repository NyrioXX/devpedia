# **Modelo de responsabilidade compartilhada**

- [**Modelo de responsabilidade compartilhada**](#modelo-de-responsabilidade-compartilhada)
  - [**_Responsabilidade do cliente_**](#responsabilidade-do-cliente)
    - [**`Segurança na nuvem`** (Responsabilidade do cliente)](#segurança-na-nuvem-responsabilidade-do-cliente)
  - [**_Responsabilidade da AWS_**](#responsabilidade-da-aws)
    - [**`Segurança da nuvem`** (Responsabilidade da AWS)](#segurança-da-nuvem-responsabilidade-da-aws)
  - [**_Caracteristicas do serviço e responsabilidade de segurança_**](#caracteristicas-do-serviço-e-responsabilidade-de-segurança)

## **_Responsabilidade do cliente_**

- Dados do cliente
- Aplicativos, IAM
- Sistema operacional, rede e configuração de firewall
- Criptografia e autenticação da integridade de dados no lado do cliente
- Criptografia no lado do servidor (sistema de arquivos ou dados)
- Proteção de trafego de rede

### **`Segurança na nuvem`** (Responsabilidade do cliente)

- Sistema operacional da instância do Amazon Elastic Compute Cloud (Amazon EC2)
  - Incluindo aplicação de patches, manutenção
- Aplicativos
  - Senhas, acesso baseado em função e outros
- Configuração do security group
- Firewalls baseados em host ou no sistema operacional – Incluindo sistemas de prevenção ou detecção de intrusão
- Configurações de rede
- Gerenciamento de contas
  - Configurações de permissão e login para cada usuário

## **_Responsabilidade da AWS_**

- Serviços fundamentais (computação, armazenamento, banco de dados, redes)
- Infraestrutura global (regiões, zonas de disponibilidade, locais de borda)

### **`Segurança da nuvem`** (Responsabilidade da AWS)

- Segurança física dos data centers: Acesso controlado e baseado em necessidades
- Infraestrutura de hardware e de software:
  Desativação de armazenamento, registro em log de acesso ao sistema operacional do host e auditoria
- Infraestrutura de rede: Detecção de intrusão
- Infraestrutura de virtualização: Isolamento de instância

A proteção dessa infraestrutura é a prioridade número um da AWS. Não é possível visitar os data centers ou escritórios da AWS para conferir essa proteção pessoalmente. No entanto, a Amazon oferece vários relatórios de auditores de terceiros que verificaram a conformidade da AWS com várias de normas e regulamentos de segurança de computadores.

## **_Caracteristicas do serviço e responsabilidade de segurança_**

- **_IaaS_** (`Ex: EC2, EBS, VPC`)
  - O cliente tem mais flexibilidade em relação a configuração de rede e armazenamento
  - O cliente é responsavel por gerenciar mais aspectos de segurança
  - O cliente configura os controles de acesso
- **_PaaS_** (`Ex: AWS Lambda, Amazon RDS`)
  - O cliente não precisa gerenciar a infraestrutura subjacente
  - A AWS gerencia o sistema operacional, patches, patches em bancos de dados, configuração de firewall e recuperação de desastres
  - O cliente se concentra no gerenciamento do codigo ou dados
- **_SaaS_** (`Ex: AWS trusted advisor, AWS shield, Amazon Chime`)
  - O software é hospedado de maneira centralizada
  - Licenciado em um modelo de assinatura ou pagamento
  - Os serviços normalmente são acessados por meio de um navegador web, aplicativo movel ou API
  - Os clientes não precisam gerenciar a infraestrutura que oferece suporte ao serviço
