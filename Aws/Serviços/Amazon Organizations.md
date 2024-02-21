- [**Amazon Organizations**](#amazon-organizations)
- [**Segurança com o Organizations**](#segurança-com-o-organizations)
- [**Configuração do Organizations**](#configuração-do-organizations)
  - [**Regras de nomeclatura**](#regras-de-nomeclatura)
- [**Acesso ao Organizations**](#acesso-ao-organizations)

# **Amazon Organizations**

- O AWS Organizations é um serviço de gerenciamento de contas que permite consolidar várias contas da AWS em uma organização que O usuario cria e gerencia de forma centralizada

- O AWS Organizations inclui recursos de faturamento consolidado e gerenciamento de contas, que ajudam a atender melhor às necessidades orçamentárias, de segurança e de compatibilidade da sua empresa

- Uma organização consiste em contas que são organizadas em unidades organizacionais (UOs)

- Uma UO é um contêiner para várias contas em uma raiz

- Uma UO também pode conter outras UOs, o que permite criar uma hierarquia que se parece com uma árvore de cabeça para baixo

- A árvore tem uma raiz no topo e galhos de UOs que se estendem para baixo, terminando em contas que são as folhas da árvore

- Quando O usuario anexa uma política a um dos nós na hierarquia, ela flui para baixo e afeta todas as ramificações e folhas

- A organização também tem várias políticas que são associadas a algumas das UOs ou diretamente a contas

- Uma UO pode ter apenas um pai e, atualmente, cada conta pode ser membro de exatamente uma UO. Uma conta é uma conta padrão da AWS que contém seus recursos da AWS

- O usuario pode anexar uma política a uma conta para aplicar controles apenas a essa conta

- Os principais benefícios do AWS Organizations são:

  - Políticas de acesso gerenciadas centralmente em várias contas da AWS
  - Acesso controlado aos serviços da AWS
  - Automatizou a criação e o gerenciamento de contas da AWS
  - Faturamento consolidado em várias contas da AWS

# **Segurança com o Organizations**

- O AWS Organizations não substitui a associação de políticas do AWS Identity and Access Management (IAM) a usuários, grupos e funções em uma conta da AWS

- As políticas do IAM permitem que O usuario permita ou negue acesso a serviços da AWS — como Amazon Simple Storage Service (Amazon S3) — e a recursos individuais da AWS (como um bucket específico do S3) ou operações individuais de interface de programação de aplicativos (API) (como s3:CreateBucket)

- Uma política do IAM pode ser aplicada apenas a usuários, grupos ou funções do IAM e nunca pode restringir o usuário raiz da conta da AWS

- Por outro lado, com o Organizations, O usuario usa políticas de controle de serviço (SCPs) para permitir ou negar acesso a determinados serviços da AWS para contas individuais da AWS ou para grupos de contas em uma UO

- As ações especificadas de uma SCP anexada afetam todos os usuários, grupos e funções do IAM de uma conta, incluindo o usuário raiz da conta da AWS

# **Configuração do Organizations**

- Para criar e configurar uma organização, siga estas etapas:

  - _Etapa 1_: cria sua organização com sua conta da AWS atual como a conta de gerenciamento. Esse processo pressupõe que O usuario tenha permissões de administrador na sua conta atual. Depois de criar uma organização, O usuario pode adicionar contas a ela criando novas contas ou convidando contas existentes para ingressar usando a conta de gerenciamento

  - _Etapa 2_: crie unidades organizacionais (UOs) na sua nova organização e mova as contas de membro para essas UOs

  - _Etapa 3_: crie políticas de controle de serviço (SCPs), que permitem aplicar restrições a quais ações que podem ser delegadas a usuários e funções nas contas-membro. Uma SCP é um tipo de política de controle da organização

  - _Etapa 4_: para testar as políticas da sua organização, entre como usuário para cada função em suas UOs e veja como as políticas de controle de serviço afetam o acesso à conta. Como alternativa, O usuario pode usar o simulador de políticas do IAM para testar e solucionar problemas do IAM e de políticas baseadas em recursos anexadas a usuários, grupos ou funções do IAM em sua conta da AWS

## **Regras de nomeclatura**

![nomeclarutra](../Arquivos/nomeclatura%20organizations.png)

# **Acesso ao Organizations**

- O AWS Organizations é disponibilizado para todos os clientes da AWS sem cobranças adicionais

- Ele pode ser gerenciado por meio de diferentes interfaces:

  1. O **Console de gerenciamento da AWS** é uma interface baseada em navegador que O usuario pode usar para gerenciar sua organização e seus recursos da AWS. O usuario pode executar qualquer tarefa da sua organização usando o console

  2. A **AWS Command Line Interface (AWS CLI)** permite que O usuario emita comandos para executar tarefas do AWS Organizations e da AWS. A AWS CLI pode ser mais rápida e mais conveniente do que usar o console

  3. O usuario também pode usar os **kits de desenvolvimento de software (SDKs)** da AWS para lidar com tarefas como assinatura criptográfica de solicitações, gerenciamento de erros e novas tentativas de solicitações automaticamente. Os SDKs da AWS consistem em bibliotecas e códigos de exemplo para várias linguagens de programação e plataformas, como Java, Python, Ruby,.NET, iOS e Android

  4. A **API de consulta HTTPS do AWS Organizations** oferece acesso programático ao AWS Organizations e à AWS. Ela permite que O usuario emita solicitações HTTPS diretamente para o serviço. Quando O usuario usa a API HTTPS, deve incluir o código para assinar digitalmente solicitações usando suas credenciais

-
