- [**Amazon Storage Gateway**](#amazon-storage-gateway)
- [**Como o Gateway de armazenamento faz interface com a Nuvem AWS**](#como-o-gateway-de-armazenamento-faz-interface-com-a-nuvem-aws)
  - [**Gateway de volume**](#gateway-de-volume)
  - [**Gateway de fita**](#gateway-de-fita)
- [**Casos de uso**](#casos-de-uso)

# **Amazon Storage Gateway**

- O Storage Gateway é um serviço de armazenamento híbrido que permite que seus aplicativos locais usem o armazenamento na nuvem da AWS

- Você pode usar o Storage Gateway para backup e arquivamento, recuperação de desastres (DR), processamento de dados na nuvem, armazenamento em camadas e migração

- O Storage Gateway fornece um conjunto padrão de protocolos de armazenamento, como Internet Small Computer Systems Interface (iSCSI), Server Message Block (SMB) e Network File System (NFS). Esses protocolos permitem que você use o armazenamento da AWS sem reescrever seus aplicativos existentes

- O Storage Gateway pode preencher a lacuna entre a infraestrutura local e os serviços na nuvem de um aplicativo

  - Por exemplo, suponha que um aplicativo precise permanecer no local por motivos de desempenho ou conformidade, ou pode ser muito complexo migrar totalmente para a nuvem. Nesse caso, você pode usar o Storage Gateway como uma ponte entre o aplicativo e a nuvem

- Seus aplicativos se conectam ao serviço por meio de uma máquina virtual (VM) ou dispositivo de gateway de hardware usando protocolos de armazenamento padrão, como Network File System (NFS), Server Message Block (SMB) e Internal Small Computer Interface (iSCSI)

- O gateway se conecta a serviços de armazenamento da AWS, como Amazon Simple Storage Service (Amazon S3), Amazon Simple Storage Service Glacier e Amazon Elastic Block Store (Amazon EBS)

- Ele fornece armazenamento para arquivos, volumes e fitas virtuais na AWS. Assim, o Storage Gateway oferece três tipos de interface — gateway de arquivos, gateway de volume e gateway de fita

- O serviço inclui um mecanismo de transferência de dados altamente otimizado, com gerenciamento de largura de banda, resiliência de rede automatizada e transferência de dados eficiente. Ele também fornece um cache local para acesso local de baixa latência aos dados mais ativos

- O Storage Gateway simplifica a adoção local do armazenamento da AWS. Os três tipos de interface que ele suporta — `arquivo, volume (bloco) e fita`

- **Gateway de arquivos**

  - Com esse tipo de gateway, as informações são armazenadas e recuperadas como objetos no Amazon S3 com um cache local para o usuário

- **Gateway de volumes**

  - Se os sistemas locais usarem iSCSI (Internet Small Computer Systems Interface), os gateways de volume oferecem um mecanismo de acesso ao Amazon S3 para armazenamento

- **Gateway de fita**
  - Se os sistemas locais usarem iSCSI (Internet Small Computer Systems Interface), os gateways de volume oferecem um mecanismo de acesso ao Amazon S3 para armazenamento

# **Como o Gateway de armazenamento faz interface com a Nuvem AWS**

- A interface de arquivos do Storage Gateway permite armazenar e recuperar objetos no Amazon S3 usando o protocolo NFS ou SMB

- Depois que seus arquivos são transferidos para o Amazon S3, eles são armazenados como objetos e acessados por meio de um ponto de montagem NFS

- Aqui, eles podem ser gerenciados como objetos nativos do Amazon S3

- Como objetos do S3, os arquivos se beneficiam de recursos como versionamento, gerenciamento do ciclo de vida (incluindo arquivamento no Amazon S3 Glacier) e replicação entre regiões

## **Gateway de volume**

- A interface de volume do Storage Gateway apresenta às aplicações os volumes de disco de armazenamento em bloco que podem ser acessados usando o protocolo iSCSI

- Os dados nesses volumes são copiados como snapshots pontuais do Amazon EBS, que permitem acessar os dados por meio do Amazon Elastic Compute Cloud (Amazon EC2), se necessário

- Ao se conectar com essa interface de bloco, você pode executar o gateway em dois modos diferentes: armazenado em cache ou armazenado

- No modo armazenado em cache, os seus dados principais são armazenados no Amazon S3 e você mantém os dados acessados com frequência armazenados localmente

- Isso resulta em uma economia substancial de custos para o armazenamento principal

- Ele minimiza a necessidade de dimensionar o armazenamento local, mantendo o acesso de baixa latência aos dados acessados com frequência

- No modo armazenado, você armazena todo o conjunto de dados localmente, enquanto realiza backups assíncronos desses dados no Amazon S3. Esse modo fornece backups externos duráveis e baratos que você pode recuperar localmente ou a partir do Amazon EC2

## **Gateway de fita**

- A interface de fita apresenta o Storage Gateway ao seu aplicativo de backup existente como uma biblioteca de fitas virtuais, que consiste em um trocador de mídia virtual e unidades de fita virtuais

- Você pode continuar a usar os seus aplicativos de backup atuais enquanto faz gravações em um conjunto praticamente ilimitado de fitas virtuais

- Cada fita virtual é armazenada no Amazon S3

- Quando você não precisar mais de acesso a dados em fitas virtuais, seu aplicativo de backup poderá arquivá-los da biblioteca de fitas virtuais no Amazon S3 Glacier

- Esse recurso pode reduzir ainda mais os custos de armazenamento

# **Casos de uso**

![Solucoes](../Arquivos/Casos%20de%20uso%20Storage%20Gateway.png)

O Storage Gateway suporta três casos de uso de nuvem híbrida principais

1. Mova backups e arquivos para a nuvem
2. Reduza o armazenamento local com compartilhamentos de arquivos com suporte em nuvem
3. Forneça aos aplicativos locais acesso de baixa latência aos dados armazenados na AWS
