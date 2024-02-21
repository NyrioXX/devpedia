- [**Amazon EFS**](#amazon-efs)
  - [**Modo de desempenho**](#modo-de-desempenho)
  - [**Classe de armazenamento**](#classe-de-armazenamento)
- [**Etapas para configurar um sistema de arquivos do Amazon EFS e torná-lo acessível a uma instância do EC2**](#etapas-para-configurar-um-sistema-de-arquivos-do-amazon-efs-e-torná-lo-acessível-a-uma-instância-do-ec2)
- [**Etapas de implantação**](#etapas-de-implantação)
- [**Recursos do Amazon EFS**](#recursos-do-amazon-efs)
- [**Casos de uso**](#casos-de-uso)

# **Amazon EFS**

- O Amazon EFS é um armazenamento escalável, totalmente gerenciado e elástico do Network File System (NFS) para uso com serviços de nuvem da AWS e recursos locais

- Alguns recursos do Amazon EFS são os seguintes:

  1. Sistema de arquivos em escala de petabytes e baixa latência
  2. Capacidade elástica
  3. Suporta NFS
  4. Compatível com todas as imagens de máquina da Amazon (AMIs) baseadas no Linux para Amazon Elastic Compute Cloud (Amazon EC2)

- **Elástica**

  - O armazenamento do Amazon EFS é simples, escalável e elástico

- **Elasticidade dinâmica**

  - O Amazon EFS foi criado para escalar elasticamente sob demanda, sem interromper os aplicativos
  - Os sistemas de arquivos do Amazon EFS crescem e diminuem automaticamente à medida que O usuario adiciona e remove arquivos
  - Seus aplicativos têm o armazenamento de que precisam, quando precisam

- **Totalmente gerenciado**

  - O Amazon EFS é um serviço gerenciado que facilita a configuração e o dimensionamento de armazenamento de arquivos na nuvem da AWS
  - É uma maneira fácil de criar um sistema de arquivos para big data e análise, fluxos de trabalho de processamento de mídia, gerenciamento de conteúdo, veiculação da Web e diretórios iniciais

- Para oferecer suporte a uma variedade de cargas de trabalho de armazenamento na nuvem, o Amazon EFS expõe atributos que permitem controlar o desempenho do sistema de arquivos

- Esses atributos de desempenho consistem em modo de desempenho, classe de armazenamento e modo de taxa de transferência

## **Modo de desempenho**

- O usuario pode selecionar entre dois modos de desempenho ao criar um sistema de arquivos: uso geral e E/S máxima

- De `Uso geral` é recomendado para a maioria dos sistemas de arquivos do Amazon EFS

- O uso geral funciona bem para casos de uso sensíveis à latência, como ambientes de serviço da Web, sistemas de gerenciamento de conteúdo, diretórios iniciais e serviço geral de arquivos

- Se O usuario não escolher um modo de desempenho ao criar seu sistema de arquivos, o Amazon EFS selecionará o modo de uso geral para O usuario por padrão

- Os sistemas de arquivos no modo `E/S máxima` podem ser dimensionados para níveis mais altos de taxa de transferência agregada e operações por segundo com uma compensação de latências ligeiramente mais altas para operações de arquivos

- Aplicativos e cargas de trabalho altamente paralelizados, como análise de big data e processamento de mídia, podem se beneficiar desse modo

- Observe que O usuario não pode alterar o modo de desempenho de um sistema de arquivos após ele ter sido criado

## **Classe de armazenamento**

- O Amazon EFS oferece uma classe de armazenamento Standard e uma classe de armazenamento de acesso pouco frequente

- **Classe de armazenamento Standard**

  - Foi projetada para cargas de trabalho ativas do sistema de arquivos e funciona bem para armazenar arquivos acessados com frequência

- **Acesso pouco frequente**

  - É uma classe de armazenamento de baixo custo otimizada para armazenar arquivos de longa duração e acessados com pouca frequência

- **Modo de taxa de transferência**

  - O usuario pode escolher entre dois modos de taxa de transferência para o sistema de arquivos: taxa de transferência intermitente e taxa de transferência provisionada

  - **Com a Taxa de transferência de intermitência**, a taxa de transferência no Amazon EFS aumenta à medida que o tamanho do seu sistema de arquivos na classe de armazenamento padrão aumenta

  - Essa é a configuração do modo padrão

  - **Com a Taxa de transferência provisionada**, O usuario pode instantaneamente provisionar a taxa de transferência do seu sistema de arquivos (em mebibytes por segundo ou MiB/s), independente da quantidade de dados armazenados

  - Esse modo permite que O usuario cresça além dos limites permitidos pelo modo de Taxa de transferência de intermitência

- O usuario pode criar um sistema de arquivos, montar o sistema de arquivos em uma instância do EC2 e, em seguida, ler e gravar dados de e para o sistema de arquivos

- O usuario pode montar um sistema de arquivos do Amazon EFS na sua VPC por meio do protocolo Network File System versões 4.0 e 4.1 (NFSv4)

- O usuario pode acessar o sistema de arquivos do Amazon EFS simultaneamente a partir de instâncias do EC2 na sua Amazon VPC, para que os aplicativos que escalam além de uma única conexão possam acessar um sistema de arquivos

- As instâncias do EC2 executadas em várias zonas de disponibilidade dentro da mesma região da AWS podem acessar o sistema de arquivos para que muitos usuários possam acessar e compartilhar uma fonte de dados comum

# **Etapas para configurar um sistema de arquivos do Amazon EFS e torná-lo acessível a uma instância do EC2**

1. Criar o sistema de arquivos do Amazon EFS. Observe que ele possui um escopo no nível da região.
2. Crie um destino de montagem na Virtual Private Cloud (VPC) da instância. Um destino de montagem fornece um endereço IP para um ponto de extremidade NFSv4 onde O usuario pode montar seu sistema de arquivos.
3. Montar o sistema de arquivos no destino de montagem. 4. Conectar a instância do EC2 ao destino de montagem.

# **Etapas de implantação**

1. Crie seus recursos do Amazon EC2 e execute sua instância. (Lembre-se de que antes de iniciar e se conectar a uma instância do EC2, O usuario deve criar um par de chaves, a menos que já tenha um.)
2. Crie um sistema de arquivos do Amazon EFS
3. Na sub-rede apropriada, crie as montagens de destino
4. Em seguida, conecte-se à sua instância do EC2 e monte o sistema de arquivos do Amazon EFS
5. Por fim, limpe seus recursos e proteja sua conta da AWS

# **Recursos do Amazon EFS**

- No Amazon EFS, o principal recurso é o sistema de arquivos. Cada sistema de arquivos tem propriedades como ID, token de criação, hora de criação, tamanho do sistema de arquivos em bytes, número de destinos de montagem criados para o sistema de arquivos e o estado do sistema de arquivos

- O Amazon EFS também oferece suporte a outros recursos para configurar o recurso principal. Esses outros recursos incluem destinos de montagem e tags

- **Ponto de acesso**

  - Para acessar o sistema de arquivos, O usuario deve criar destinos de montagem na VPC. Cada destino de montagem tem as seguintes propriedades:
    - O ID do destino de montagem
    - O ID da sub-rede em que ele é criado
    - O ID do sistema de arquivos para o qual ele foi criado
    - Um endereço IP onde o sistema de arquivos pode ser montado
    - O estado do destino de montagem
  - O usuario pode usar o endereço IP ou o nome Domain Name System (DNS) no comando de montagem

- **Tags**

  - Para ajudar a organizar seus sistemas de arquivos, O usuario pode atribuir seus próprios metadados a cada sistema de arquivos criado
  - Cada tag é um par de chave/valor
  - Pense em destinos de montagem e tags como sub-recursos que existem somente se eles estiverem associados a um sistema de arquivos.

# **Casos de uso**

- **Diretórios iniciais**

  - O Amazon EFS pode fornecer armazenamento para organizações que têm muitos usuários que precisam acessar e compartilhar conjuntos de dados comuns

- **Sistema de arquivos para aplicativos corporativos**

  - O Amazon EFS fornece escalabilidade, elasticidade, disponibilidade e durabilidade para ser o armazenamento de arquivos para aplicativos corporativos e para aplicativos entregues como um serviço
  - A interface padrão do sistema de arquivos, as permissões do sistema de arquivos e a hierarquia de diretórios facilitam a migração de aplicativos corporativos de ambientes locais para a Nuvem AWS

- **Teste e desenvolvimento de aplicativos**

  - O Amazon EFS fornece aos seus ambientes de desenvolvimento um repositório de armazenamento comum. Com um sistema de arquivos do Amazon EFS, O usuario pode compartilhar código e outros arquivos de forma segura e organizada
  - O Amazon EFS oferece uma solução escalável e altamente disponível que funciona bem para cargas de trabalho de teste e desenvolvimento

- **Backups de banco de dados**

  - O Amazon EFS apresenta um sistema de arquivos padrão que pode ser facilmente montado com o NFSv4 a partir de servidores de banco de dados
  - Ele fornece uma maneira de criar backups de banco de dados portáteis com ferramentas de aplicativos nativos ou aplicativos de backup corporativos

- **Serviços da Web e gerenciamento de conteúdo**

  - O Amazon EFS fornece um sistema de arquivos durável e de alta taxa de transferência para sistemas de gerenciamento de conteúdo que armazenam e veiculam informações para uma variedade de aplicativos, como sites, publicações on-line e arquivos

- **Análise de Big Data**

  - O Amazon EFS fornece escala e desempenho para aplicativos de big data que exigem alta taxa de transferência para nós de computação
  - Ele também fornece consistência de leitura após gravação e operações de arquivo de baixa latência

- **Fluxos de trabalho de mídia**

  - Fluxos de trabalho de mídia, como edição de vídeo, produção em estúdio, processamento de transmissão, design de som e renderização geralmente dependem do armazenamento compartilhado para manipular arquivos grandes
  - Um modelo de consistência de dados robusto com alta taxa de transferência e acesso a arquivos compartilhados pode reduzir o tempo necessário para realizar esses trabalhos
  - Ele também pode consolidar vários repositórios de arquivos locais em um único local para todos os usuários
