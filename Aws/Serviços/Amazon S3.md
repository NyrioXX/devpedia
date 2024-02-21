- [**Amazon S3**](#amazon-s3)
- [**Vantagens do S3**](#vantagens-do-s3)
- [**Classes de armazenamento**](#classes-de-armazenamento)
- [**Preços**](#preços)
  - [**Fatores que estimam o custo**](#fatores-que-estimam-o-custo)
- [**Hospedagem de site estatico no S3**](#hospedagem-de-site-estatico-no-s3)
  - [**_Dominio_**](#dominio)
- [**Controle de versão**](#controle-de-versão)
- [**Politicas de acesso**](#politicas-de-acesso)
- [**Bloqueio de objetos**](#bloqueio-de-objetos)
- [**Notificações de eventos S3**](#notificações-de-eventos-s3)
- [**Amazon S3 e CLI**](#amazon-s3-e-cli)
  - [_Comandos gerais_](#comandos-gerais)
  - [_Criar um objeto com uma classe de armazenamento específica_](#criar-um-objeto-com-uma-classe-de-armazenamento-específica)
  - [_Comando S3 API_](#comando-s3-api)
- [**Recursos adicionais do S3**](#recursos-adicionais-do-s3)
  - [**Gerenciamento do ciclo de vida de objetos**](#gerenciamento-do-ciclo-de-vida-de-objetos)

# **Amazon S3**

- O dados são armazenados como objetos em buckets e um unico arquivo pode ter até 5 Tb sendo a capacidade de armazenamento praticamente ilimitado

  - Um bucket é um contêiner para objetos armazenados no Amazon S3
  - Cada objeto está contido em um bucket
  - Os objetos são as entidades fundamentais armazenadas no Amazon S3
  - Os objetos consistem em metadados e dados de objeto
  - A porção de dados não é visível para o Amazon S3
  - Os metadados são um conjunto de pares de nome e valor que descreve o objeto
  - Um objeto é identificado exclusivamente em um bucket por uma chave (nome) e um ID de versão

- O armazenamento é projetado para 11 noves (99,999999999%) de durabilidade

- Acesso granular a buckets e objetos

- Ao adicionar um objeto ai bucket deve ser dado um nome unico que é chamado de chave de objeto

  - Uma chave é o identificador exclusivo de um objeto em um bucket
  - Cada objeto em um bucket tem exatamente uma chave
  - A combinação de um intervalo, chave e ID de versão identifica exclusivamente cada objeto
  - Portanto, O usuario pode pensar no Amazon S3 como um mapa de dados básico entre as informações no bucket + chave + versão e o próprio objeto

- Como o armazenamento é de objetos para fazer alterações deve ser feito o upload de todo arquivo (com as modificações) novamente

- É possivel ter varios buckets em uma conta

- É possivel vizualizar logs de acesso aos buckets e seus objetos

- É possivel escolher a **_região geografica_** em que a amazon armazenara o seu bucket

  - Uma região é a região geográfica da AWS em que o Amazon S3 armazena os buckets que O usuario cria
  - Os objetos armazenados em uma Região nunca saem da Região, a menos que O usuario os transfira explicitamente para outra Região
  - **_`Não é possivel escolher a zona de disponibilidade em que ficará o seu bucket`_**

- Por padrão os dados são privados e podem ser criptografados

- Os dados são armazenados de forma redundante

- É possivel recuperar os dados a qualquer momento e em qualquer lugar na internet

- Os nomes dos buckets devem ser exclusivos entre todos os nomes de buckets existentes no Amazon S3

# **Vantagens do S3**

- As vantagens do Amazon S3 incluem:

  - _Criação de buckets_

    - Crie e nomeie um bucket que armazena dados
    - Os buckets são os contêineres fundamentais para armazenamento no Amazon S3

  - _Armazenamento de dados_

    - Armazene uma quantidade praticamente ilimitada de dados em um bucket
    - Cada objeto pode conter até 5 TB de dados
    - Cada objeto é armazenado e recuperado usando uma chave exclusiva atribuída pelo desenvolvedor

  - _Download de dados_

    - Faça download dos seus dados ou permita que outras pessoas baixem dados
    - Faça download dos seus dados a qualquer momento ou permita que outras pessoas façam o mesmo

  - _Permissões_

    - Conceda ou negue acesso a usuários que desejam fazer upload de dados ou fazer download de dados do bucket do S3
    - Conceda permissões de upload e download a três tipos de usuários
    - Os mecanismos de autenticação podem ajudar a manter os dados protegidos contra acesso não autorizado

  - _Interfaces padrão_
    - Use interfaces REST e SOAP baseadas em padrões projetadas para funcionar com qualquer kit de ferramentas de desenvolvimento da Internet

# **Classes de armazenamento**

- O Amazon S3 oferece uma variedade de classes de armazenamento no nível do objeto projetadas para diferentes casos de uso:

1. **_Amazon S3 Standard_**

   - Projetado para ter alta durabilidade, acesso rapido e frequente
   - Adequado para a maioria dos casos

2. **_Amazon S3 Intelligent-Tiering_**

   - Projetado para otimizar custos, movendo automaticamente dados não usados por mais de 30 dias para um nivel de acesso mais economico e quando esses dados são acessados novamente retornam para o nivel de acesso normal (os 30 dias reiniciam)
   - Não existe impacto no desempenho e os custos são uma taxa fixa mensal e nenhum adicional
   - Ideal para dados de longa duração e frequencia de acesso imprevisivel

3. **_Amazon S3 Standard-Infrequent Access (Amazon S3 Standard-IA)_**

   - Usado para dados com pouco acesso mas com a necessidade de altissima velocidade de acesso
   - Possui alta velocidade de transferencia, custos reduzidos por GB transferido e recuperado
   - Ideal para backups de longo prazo e dados para recuperação de desastres

4. **_Amazon S3 One Zone-Infrequent Access (Amazon S3 One Zone-IA)_**

   - Similar ao anterior tendo como diferencial o fato de ser mantido em apenas 1 zona de disponibilidade (o padrão são 3 zonas)
   - Possui custo menor que o S3 Standard-Infrequent Access e é ideal para backups secundarios ou dados que possam ser recriados com facilidade, tambem serve como armazenamento economico de dados replicados de outras zonas de disponibilidade

5. **_Amazon Simple Storage Service Glacier_**

   - Projetado para ser duravel e de baixo custo
   - Possui configurações variaveis de suprimento, podendo variar de alguns minutos até algumas horas
   - Possui configurações de ciclo de vida para transferir dados de outras classes S3 para este de acordo com a frequencia de uso

6. **_Amazon S3 Glacier Deep Archive_**

   - Classe com menor custo
   - Projetado para armazenamento de longo prazo e que pode ser acessado apenas 1 ou 2 vezes por ano
   - Ideal para usuarios que acessam pouco os dados ou para necessidades de recuperação de desastres
   - O tempo de restauração pode ser de até 12h

- Os buckets podem ser acessados via interface grafica aws, CLI, SDKs, endpoints HTTP e HTTPS

- Nomeclatura: https://s3-ap-northeast-1.amazonaws.com/[nome do bucket]/[nome do objeto]

- O scaling do S3 é initerrupta e nenhum infraestrutura precisa ser gerida pelo cliente

# **Preços**

- **_`O usuario paga por:`_**

1. GBs por mês
2. Transferencia para **_`fora`_**, para outras regiões
3. Solicitações PUT, COPY, POST, LIST, GET

- **_`O usuario não paga:`_**

1. Transferencia para **_`dentro`_** do amazon S3
2. Transferencia para **_`fora`_** entre o amazon S3 e o Cloudfront ou EC2 **_`na mesma região`_**

## **Fatores que estimam o custo**

1. Tipo/classe do armazenamento
2. Quantidade de armazenamento
3. Quantidade de solicitações (as solicitações GET tem taxas diferentes)
4. Transferencia de **_`saida`_**

# **Hospedagem de site estatico no S3**

- O Amazon S3 fornece armazenamento de objetos e tem muitos usos práticos

- Ao usar o Amazon S3 para essa finalidade, a necessidade de implantar uma infraestrutura de tempo de execução complexa ou dispendiosa pode ser evitada

- Em um site estático, as páginas da Web são criadas usando linguagens simples, como HTML, CSS ou JavaScript. Por outro lado, um site dinâmico depende do processamento do lado do servidor, incluindo scripts do lado do servidor, como PHP, JSP ou ASP.NET

- A hospedagem de um site estático no Amazon S3 envolve algumas etapas:

  1. Primeiro, crie um bucket no Amazon S3 para armazenar o conteúdo do site
  2. Em seguida, configure o bucket do S3 para habilitar a hospedagem de sites e conceder permissões de leitura pública para seu conteúdo
  3. Por fim, carregue o conteúdo do site para o bucket usando o Console de gerenciamento da AWS ou a AWS Command Line Interface (AWS CLI)
  4. Acesse o site na URL do endpoint que o Amazon S3 atribui a ele. A URL do endpoint inclui o nome do bucket e o nome da região que o contém, conforme mostrado no diagrama.

     - `Observação`: - Existe diferença nos formatos de URL do endpoint do site. O caractere separador antes de <região> é um ponto (.) ou um traço (-). O tipo de separador depende da Região que contém o bucket do S3, perceba:

     1. <http://bucket-name.s3-website-><região>.amazonaws.com
     2. <http://bucket-name.s3-website>.<região>.amazonaws.com

     - O URL contém o nome do bucket e o nome da região em que o bucket foi criado

- `Como armazenar`:
  - Deve armazenar o site em uma hierarquia de pastas que reflita sua estrutura de conteúdo
  - Deve incluir um documento de índice definido durante a configuração do bucket
    - O nome padrão é index.html

## **_Dominio_**

- Em vez de acessar um site estático por meio do seu URL de ponto de extremidade do Amazon S3 atribuído, um usuário pode, opcionalmente, usar o serviço Amazon Route 53 para mapear o próprio nome de domínio do usuário para o ponto de extremidade do Amazon S3

  - Por exemplo, um usuário pode atribuir o nome de domínio mompopcafe.com a ele ou atribuir um nome de subdomínio, como <www.mompopcafe.com>

  - No exemplo, o domínio raiz (mompopcafe.com) e o subdomínio (<www.mompopcafe.com>) são usados para acessar o site

  - Para oferecer suporte a essa estrutura, dois buckets são criados e configurados no Amazon S3 — um bucket para o nome de domínio e um bucket para o nome do subdomínio

    - Um bucket contém o conteúdo do site, e o outro bucket redireciona as solicitações para o bucket do conteúdo

- Os nomes do bucket devem corresponder aos nomes de domínio que eles usam

- Além disso, os registros de alias são criados no Amazon Route 53 para mapear os nomes de domínio e subdomínio para os endpoints do bucket do S3 correspondentes

# **Controle de versão**

![versão](../Arquivos/Controle%20de%20versão%20S3.png)

- O Amazon S3 fornece um recurso de controle de versão para proteger objetos contra substituições e exclusões acidentais

- O versionamento permite que O usuario se recupere de ações não intencionais do usuário e falhas de aplicativos

- Ative o versionamento no nível do bucket

- Cada objeto em um bucket tem um ID de versão e, quando o versionamento é desativado, seu valor é definido como nulo

- Quando o versionamento está habilitado, o Amazon S3 cria um novo objeto e atribui um valor exclusivo ao seu ID de versão (incrementa-o) cada vez que ele é carregado

- Um bucket do S3 pode estar em um dos três estados de versionamento:

  1. **Versionamento desativado**

  - Essa configuração é a padrão
  - Se O usuario fizer upload de um objeto em um bucket com a mesma chave, ele substituirá a versão antiga
  - Se O usuario excluir um objeto, ele será excluído permanentemente

  2. **Versionamento ativado**

  - Se O usuario fizer upload de um objeto com a mesma chave, o Amazon S3 manterá o objeto anterior e criará um novo objeto com um novo ID de versão
  - Se O usuario excluir um objeto, o Amazon S3 o excluirá logicamente e adicionará um marcador, mas a versão anterior poderá ser recuperada por seu ID de versão

  3. **Versionamento suspenso**

  - As versões dos objetos existentes são mantidas, mas o bucket se comporta temporariamente como se o versionamento estivesse desativado

- Quando o controle de versão estiver habilitado em um bucket, ele não poderá ser desativado. Ele só pode ser suspenso

# **Politicas de acesso**

- Por padrão, novos buckets e objetos no Amazon S3 não permitem o acesso público, mas os usuários podem modificar políticas do bucket ou permissões de objeto para viabilizar o acesso

- Se O usuario quiser bloquear o efeito dessas políticas baseadas em recursos, o Amazon S3 fornece configurações de acesso público de bloqueio para buckets e contas para ajudar a gerenciar o acesso público aos recursos do Amazon S3

- O Aceso público ao bloco do Amazon S3 fornece configurações que substituem essas políticas e permissões baseadas em recursos, de maneira que O usuario possa limitar o acesso público aos recursos

- Com o acesso público ao bloco do Amazon S3, administradores de contas e proprietários de bucket podem configurar controles centralizados para limitar o acesso público aos recursos do Amazon S3. Esses controles são aplicados independentemente de como os recursos são criados

- Como melhor prática, o acesso público só deve ser usado para hospedagem na Web do Amazon S3

- O recurso de acesso público ao bloco do Amazon S3 pode ser acessado a partir do console do Amazon S3, da AWS CLI, da interface de programação de aplicativos (API) do Amazon S3 e dos modelos do AWS CloudFormation

- O Acesso público ao bloco do Amazon S3 oferece estas configurações:

1. **Bloquear novas ACLs públicas e fazer upload de objetos públicos**

   - Essa opção não permite o uso de novas listas de controle de acesso (ACLs) de bucket público ou de objetos
   - Solicitações PUT futuras que incluem novas ACLs públicas de bucket ou objeto falharão
   - Essa opção não afeta os buckets ou objetos existentes
   - Use essa configuração para a proteção contra futuras tentativas de usar ACLs para tornar buckets ou objetos públicos. Se um aplicativo tentar fazer upload de um objeto com uma ACL pública ou se um administrador tentar aplicar uma configuração de acesso público ao bucket, a ação será bloqueada

2. **Remover o acesso público concedido por meio de ACLs públicas**

   - Essa opção informa ao Amazon S3 para não avaliar nenhuma ACLs pública quando autorizar uma solicitação, o que impede que buckets ou objetos sejam tornados públicos por meio de ACLs
   - Essa configuração substitui todas as configurações de acesso público atuais ou futuras para objetos atuais e futuros no bucket
   - Se um aplicativo existente fizer upload de objetos com ACLs públicas para o bucket, essa configuração bloqueará a ação

3. **Bloquear novas políticas de bucket público**

   - Essa opção não permite o uso de novas políticas de bucket público, o que significa que as solicitações PUT futuras que incluam essas novas políticas de bucket falharão. Novamente, essa opção não afeta os buckets ou objetos existentes. Essa configuração ajuda a garantir que uma política de bucket não possa ser atualizada para conceder acesso público

4. **Bloquear o acesso público e entre contas para buckets que têm políticas públicas**

   - Se esta opção estiver definida, o acesso aos buckets que são publicamente acessíveis será limitado ao proprietário do bucket e aos serviços da AWS
   - Essa opção pode ser usada para proteger os buckets que têm políticas públicas enquanto O usuario trabalha para removê-las
   - Ela protege as informações armazenadas em um bucket por um serviço da AWS de se tornarem acessíveis publicamente

# **Bloqueio de objetos**

- O bloqueio de objetos do Amazon S3 permite armazenar objetos usando o modelo write once, read many (WORM - gravar uma vez, ler várias)

- Com o bloqueio de objetos do Amazon S3, O usuario pode impedir que um objeto seja excluído ou substituído, por um período fixo ou indefinidamente

- O bloqueio de objetos do Amazon S3 permite que O usuario atenda aos requisitos normativos que exigem armazenamento WORM

- O usuario também pode usá-lo para adicionar uma camada adicional de proteção contra alterações e exclusão de objetos

- O bloqueio de objetos do Amazon S3 oferece duas maneiras de gerenciar a retenção de objetos: períodos de retenção e retenções legais

  - Um **período de retenção** especifica um período fixo de tempo em que um objeto permanece bloqueado. Durante esse período, o objeto estará protegido contra WORM e não poderá ser sobrescrito ou excluído

  - Uma **retenção legal** fornece a mesma proteção que um período de retenção, mas não tem data de expiração. Em vez disso, uma retenção legal permanecerá em vigor até O usuario removê-la explicitamente. As retenções legais são independentes dos períodos de retenção: uma versão de objeto pode ter um período de retenção e uma retenção legal; um, mas não o outro; ou nenhum dos dois.

- Além disso, O usuario pode aplicar um modo de retenção a um objeto protegido por bloqueio de objetos para fornecer um nível adicional de proteção

- Os valores permitidos são Governança e Conformidade

- **No modo de Conformidade**

  - Uma versão do objeto protegida não pode ser substituída nem excluída por qualquer usuário, inclusive o usuário raiz na conta da AWS
  - Depois que um objeto é bloqueado no modo Conformidade, seu modo de retenção não pode ser alterado e seu período de retenção não pode ser reduzido
  - O modo de conformidade ajuda a garantir que uma versão do objeto não possa ser substituída ou excluída durante o período de retenção

- **No modo de Governança**
  - Os usuários não podem substituir ou excluir uma versão de objeto — ou alterar suas configurações de bloqueio — a menos que tenham permissões especiais
  - O modo de governança permite que O usuario proteja objetos contra exclusão pela maioria dos usuários
  - No entanto, ele ainda permite conceder permissões a alguns usuários para que eles possam alterar as configurações de retenção ou excluir o objeto, se necessário
  - O usuario também pode usar o modo de Governança para testar as configurações do período de retenção antes de criar um período de retenção no modo de Conformidade

# **Notificações de eventos S3**

- O recurso de notificação de eventos do Amazon S3 permite configurar um bucket para que as notificações sejam emitidas quando um novo objeto for adicionado ou excluído do bucket, ou quando um objeto existente for substituído

- As notificações podem ser emitidas para o Amazon Simple Queue Service (Amazon SQS), o Amazon Simple Notification Service (Amazon SNS) ou o AWS Lambda

- O usuario pode configurar as notificações para serem filtradas pelo prefixo e pelo sufixo do nome da chave de objetos
  - Por exemplo, O usuario pode configurar uma configuração para que O usuario receba uma notificação somente quando arquivos de imagem com uma extensão .jpg forem adicionados a um bucket
  - O usuario pode ter uma configuração que entrega uma notificação a um tópico do SNS quando um objeto com o prefixo images/ é adicionado ao bucket
  - A mesma configuração pode entregar notificações para objetos no mesmo bucket que têm um prefixo de logs/ para uma função do AWS Lambda

# **Amazon S3 e CLI**

## _Comandos gerais_

![comandos](../Arquivos/Comandos%20CLI%20para%20S3.png)

## _Criar um objeto com uma classe de armazenamento específica_

```bash
aws s3 cp file.txt s3://mybucket/myprefix/file.txt --storage-class INTELLIGENT_TIERING
```

## _Comando S3 API_

![s3api](../Arquivos/Comando%20S3%20api.png)

# **Recursos adicionais do S3**

![recursos](../Arquivos/Recursos%20adicionais%20s3.png)

## **Gerenciamento do ciclo de vida de objetos**

- Esse recurso permite que O usuario gerencie seus objetos para que eles sejam armazenados de maneira econômica durante todo o ciclo de vida

- Ao criar uma configuração de ciclo de vida, O usuario pode definir regras que especifiquem as ações que o Amazon S3 aplicará automaticamente a um grupo de objetos

- Ela suporta dois tipos de ações:

  1. **Ações de transição**

  - Definem quando os objetos fazem a transição para outra classe de armazenamento. Por exemplo, O usuario pode optar por fazer a transição de objetos para a classe de armazenamento STANDARD_IA 30 dias depois de criá-los. Ou O usuario pode arquivar objetos na classe de armazenamento GLACIER 1 ano depois de criá-los

  2. **Ações de expiração**

  - Definem quando os objetos expiram
  - O Amazon S3 exclui os objetos expirados em seu nome

  3. **URL de objeto pré-assinada**

  - Por padrão somente o proprietário do objeto tem permissão para acessá-lo
  - Se o proprietário do objeto quiser compartilhar o objeto com um usuário que não tenha credenciais ou permissões de segurança da AWS, ele poderá gerar uma URL pré-assinada para ele
  - A URL pré-assinada permite que um destinatário acesse o objeto por uma duração especificada
  - O usuario pode gerar uma URL pré-assinada programaticamente usando o AWS SDK para Java ou o AWS SDK para o.NET

  4. **Compartilhamento de recursos de origem cruzada (CORS)**

  - Se O usuario usar um bucket do S3 para hospedar um site estático, poderá usar o recurso de compartilhamento de recursos de origem cruzada (CORS)
  - Esse recurso permite que o aplicativo da Web acesse um recurso de um domínio diferente do domínio do ponto de extremidade do bucket
  - Por padrão, os navegadores bloqueiam essas solicitações para impor uma política de origem do mesmo domínio
  - O CORS define uma maneira para que aplicações Web clientes carregadas em um domínio interagirem com recursos em um domínio diferente
  - Para configurar seu bucket para permitir solicitações de origem cruzada, crie uma configuração CORS
  - Essa configuração é um documento XML com regras que identificam as origens que O usuario permite acessar seu bucket, as operações permitidas (métodos HTTP) para cada origem e outras informações específicas da operação
