- [**Amazon Glacier**](#amazon-glacier)
- [**Conceitos**](#conceitos)
- [**Acesso**](#acesso)
- [**Como funciona**](#como-funciona)
- [**Acesso**](#acesso-1)
- [**Politicas de ciclo de vida**](#politicas-de-ciclo-de-vida)
- [**Criptografia**](#criptografia)
- [**Segurança**](#segurança)
- [**Comparação entre S3 e Glacier**](#comparação-entre-s3-e-glacier)

# **Amazon Glacier**

- O Amazon S3 Glacier é uma classe de armazenamento segura, durável e de custo extremamente baixo do Amazon S3 para arquivamento de dados e backup de longo prazo

# **Conceitos**

- **_Arquivo_**: qualquer objeto (como foto, vídeo, arquivo ou documento) armazenado no Amazon S3 Glacier. É a unidade básica de armazenamento no Amazon S3 Glacier. Cada arquivo tem seu próprio ID exclusivo e também pode ter uma descrição

- **_Cofre_**: um contêiner para armazenar arquivos. Ao criar um cofre, O usuario especifica o nome do cofre e a Região em que deseja que o cofre esteja localizado

  - No exemplo de URI: https://glacier.us-west-2.amazonaws.com/111122223333/vaults/examplevault
    - `glacier.us-west-2.amazonaws.com` identifica a região Oeste dos EUA (Oregon)
    - `111122223333` é o ID da conta da AWS que possui o cofre
    - `vaults` refere-se à coleção de cofres pertencentes à conta da AWS
    - `examplevault` identifica um cofre específico na coleção de cofres

- **_Política de acesso ao cofre_**

  - Determina quem pode ou não acessar os dados armazenados no cofre
  - Também determina quais operações os usuários podem ou não realizar
  - Uma política de permissões de acesso ao cofre pode ser criada para cada cofre para gerenciar permissões de acesso para um cofre específico
  - O usuario também pode usar uma **_política de bloqueio de cofre_** para ajudar a garantir que um cofre não possa ser alterado
  - Cada cofre pode ter uma política de acesso ao cofre e uma política de bloqueio de cofre anexada a ele

- **_Trabalho_**

  - Os trabalhos do Amazon S3 Glacier podem realizar uma consulta selecionada em um arquivo, recuperar um arquivo ou obter um inventário de um cofre
  - Ao executar uma consulta em um arquivo, O usuario inicia um trabalho que fornece uma consulta de linguagem de consulta estruturada (SQL) e uma lista de objetos de arquivamento do Amazon S3 Glacier

# **Acesso**

- Ao arquivar dados com o Amazon S3 Glacier, O usuario pode armazenar seus dados a um custo baixo (mesmo em comparação com o Amazon S3). No entanto, O usuario não pode recuperar seus dados imediatamente quando quiser

- Os dados armazenados no Amazon S3 Glacier levam várias horas para serem recuperados, e é por isso que eles funcionam bem para arquivamento

- Para armazenar e acessar dados no Amazon S3 Glacier, O usuario pode usar o Console de Gerenciamento da AWS. No entanto, apenas algumas operações — como criar ou excluir cofres e criar ou gerenciar políticas de arquivamento — estão disponíveis no console

- Quase todas as outras operações exigem que O usuario use a interface de programação de aplicativo (API) REST do Amazon S3 Glacier ou os Kit de Desenvolvimento de Software (SDK) Java ou.NET AWS

- O uso dessas ferramentas permite que O usuario interaja com o Amazon S3 Glacier por meio da AWS Command Line Interface (AWS CLI)

- O usuario também pode arquivar dados no Amazon S3 Glacier usando políticas de ciclo de vida

- Para manter os custos baixos, mas adequados para diferentes necessidades de recuperação, o Amazon S3 Glacier oferece três opções de acesso a arquivos

- Essas opções variam de alguns minutos a várias horas. Eles são:

- **_Acelerado_**

  - As recuperações aceleradas permitem o acesso aos seus dados rapidamente quando O usuario recebe uma solicitação urgente ocasional de um subconjunto de arquivos
  - Exceto para os arquivos maiores (mais de 250 MB), os dados acessados por meio de recuperações expressas costumam ser disponibilizados entre 1 a 5 minutos
  - Os dois tipos de recuperações aceleradas são Capacidade sob demanda e provisionada
  - As solicitações sob demanda são semelhantes às instâncias sob demanda do Amazon EC2 e estão disponíveis na maioria das vezes
  - As solicitações de capacidade provisionada estarão disponíveis garantidamente quando O usuario precisar delas

- **_Padrão_**

  - As recuperações padrão permitem que O usuario acesse qualquer um dos seus arquivos em várias horas
  - Geralmente, as recuperações padrão são concluídas entre 3 e 5 horas
  - Essa é a opção padrão para solicitações de recuperação que não especificam a opção de recuperação

- **_Em massa_**

  - Recuperações em massa são a opção de recuperação de menor custo para o Amazon S3 Glacier
  - O usuario pode usá-las para recuperar grandes quantidades de dados — até mesmo petabytes — de forma econômica em um dia
  - Geralmente, as recuperações em massa são concluídas entre 5 e 12 horas

# **Como funciona**

- Um objeto individual arquivado no Amazon S3 Glacier, como um documento, vídeo ou qualquer outro tipo de arquivo, é chamado de arquivamento
- Cada arquivamento possui um ID exclusivo atribuído a ele pela AWS

- Os arquivamentos são armazenados em cofres

- Um cofre é endereçado por seu nome exclusivo, que é atribuído a ele pelo criador

- Uma determinada conta da AWS pode criar até 1.000 cofres no Amazon S3 Glacier

- Os arquivos no Amazon S3 Glacier são referenciados por um URL que aponta para o Amazon S3 Glacier

- O URL contém os seguintes componentes:

  - O ID da conta da AWS proprietária
  - O nome do cofre
  - O ID do arquivamento individual
  - No exemplo: `https://glacier.us-east-1.amazonaws.com/1111222233333/vaults/examplevault/archives/<archive_id>`
    - Um aplicativo armazena um arquivo no Amazon S3 Glacier
    - Esse arquivo é identificado por <archive_id>no cofre chamado examplevault, que está sob o prefixo /archives. A conta é 111122223333 e é executada na região us-east-1

# **Acesso**

- O usuario pode interagir com objetos no Amazon S3 Glacier de duas maneiras:

  1. Usando uma política de ciclo de vida do Amazon S3;
  2. Usando a API do Amazon S3 Glacier (por meio de código personalizado ou da AWS CLI)

- Uma política de ciclo de vida do Amazon S3 permite que O usuario mova um objeto para o Amazon S3 Glacier automaticamente

- O usuario faz isso especificando uma ação de transição para alterar sua classe de armazenamento para GLACIER

- Os dados armazenados no Amazon S3 Glacier pelo Amazon S3 não podem ser recuperados diretamente por meio da API do Amazon S3 Glacier

- Esses dados são gerenciados em seu nome pelo Amazon S3

- Eles não aparecerão como um cofre ou um conjunto de arquivos se O usuario usar a API do Amazon S3 Glacier com as credenciais da sua conta

- Os arquivos arquivados do Amazon S3 podem ser restaurados usando o console do Amazon S3 ou usando a API do Amazon S3

- O usuario também pode fazer upload, recuperar e gerenciar arquivos no Amazon S3 Glacier usando a API do Amazon S3 Glacier

- Os arquivos que O usuario adicionou diretamente ao Amazon S3 Glacier com a API do Amazon S3 Glacier também podem ser recuperados por meio da API

- A recuperação de um arquivo do Amazon S3 Glacier é uma operação assíncrona em que O usuario primeiro inicia um trabalho e, em seguida, baixa a saída após a conclusão do trabalho

- Para iniciar um trabalho de recuperação de arquivo, O usuario usa a operação de API Initiate Job (POST jobs) ou o equivalente na AWS CLI ou nos Kit de Desenvolvimento de Software (SDK) da AWS

- Uma solicitação de recuperação pode recuperar um único arquivo com um ID de arquivamento, vários arquivos especificando um intervalo de datas de criação ou um subconjunto de um arquivo, especificando um intervalo de bytes

- Os usuários podem pesquisar a conclusão do trabalho usando a operação de API Describe Job (GET JobID)

- As notificações de conclusão do Amazon S3 Glacier também podem ser enviadas usando o Amazon SNS. Quando um trabalho do Amazon S3 Glacier terminar de ser executado, o usuário poderá solicitar o download dos seus dados descongelados

- Além disso, o Amazon S3 Glacier fornece uma função de consulta no local, o Glacier Select, que permite executar análises diretamente nos seus dados de arquivamento em repouso. Para usá-lo, especifique a operação SELECT ao iniciar uma solicitação de trabalho

- Com o Glacier Select, O usuario pode executar consultas e análises personalizadas nos seus dados armazenados no Amazon S3 Glacier sem restaurá-los para o Amazon S3

# **Politicas de ciclo de vida**

- O usuario deve automatizar o ciclo de vida dos dados armazenados no Amazon S3

- Usando políticas de ciclo de vida, O usuario pode ter dados alternados em intervalos regulares entre diferentes tipos de armazenamento do Amazon S3

- Ele reduz os custos gerais porque O usuario paga menos pelos dados quando eles se tornam menos importantes com o tempo

- Além de definir regras de ciclo de vida por objeto, O usuario também pode definir regras de ciclo de vida por bucket

- Considere um exemplo de uma política de ciclo de vida que move dados à medida que envelhece do Amazon S3 Standard para o Amazon S3 Standard — Acesso pouco frequente, e, finalmente, no Amazon S3 Glacier antes de ser excluído. Suponha que um usuário envie um vídeo para o aplicativo. Seu aplicativo gera uma visualização em miniatura do vídeo. Esta pré-visualização do vídeo é armazenada no Amazon S3 Standard, pois é provável que o usuário queira acessá-la imediatamente.Os dados de uso indicam que, após 30 dias, a maior parte das visualizações de miniatura não é acessada. Portanto, sua política de ciclo de vida pegará essas visualizações e as moverá para o Amazon S3 — Acesso pouco frequente após 30 dias. Depois de mais 30 dias, é improvável que a pré-visualização seja acessada novamente. Em seguida, ela é transferida para o Amazon S3 Glacier, onde permanece por 1 ano. Após 1 ano, a pré-visualização é excluída. O importante é que a política de ciclo de vida gerencia todo esse movimento automaticamente

# **Criptografia**

- Outra diferença importante entre o Amazon S3 e o Amazon S3 Glacier é como os dados são criptografados

- A criptografia do lado do servidor protege os dados em repouso

- Com as duas soluções, O usuario pode transferir seus dados com segurança por HTTP seguro (HTTPS)

- Todos os dados arquivados no Amazon S3 Glacier são criptografados por padrão. Com o Amazon S3, seu aplicativo deve iniciar a criptografia no lado do servidor

- Esse tipo de criptografia pode ser realizado de várias maneiras:

  1. A criptografia do lado do servidor com chaves de criptografia gerenciadas pelo Amazon S3 (SSE-S3) emprega criptografia multifator forte. O Amazon S3 criptografa cada objeto com uma chave exclusiva. Como proteção adicional, a própria chave é criptografada com uma chave mestra que é alterada regularmente. A criptografia no lado do servidor do Amazon S3 usa uma das cifras de bloco mais fortes disponíveis, o padrão de criptografia avançada de 256 bits (AES-256), para criptografar seus dados

  2. O AWS Key Management Service (AWS KMS) é um serviço que combina hardware e software seguros e altamente disponíveis para fornecer um sistema de gerenciamento de chaves dimensionado para a nuvem. O AWS KMS usa chaves mestras do cliente (CMKs) para criptografar seus objetos do Amazon S3. O usuario usa o AWS KMS por meio da seção Chaves de criptografia no console do AWS Identity and Access Management (IAM) ou por meio de APIs do AWS KMS. O usuario pode criar chaves de criptografia centralmente, definir as políticas que controlam como as chaves podem ser usadas e auditar o uso da chave para provar que elas estão sendo usadas corretamente. O usuario pode usar essas chaves para proteger seus dados em buckets do Amazon S3

  3. Usando a criptografia do lado do servidor com chaves de criptografia fornecidas pelo cliente (SS-EC), O usuario pode definir suas próprias chaves de criptografia. Com a chave de criptografia que O usuario fornece como parte da sua solicitação, o Amazon S3 gerencia a criptografia, à medida que grava em discos, e a descriptografia quando O usuario acessa seus objetos.

# **Segurança**

- Por padrão, apenas O usuario pode acessar os seus dados

- O usuario pode habilitar e controlar o acesso aos seus dados no Amazon S3 Glacier usando o AWS Identity and Access Management (IAM)

- O usuario configura uma política do IAM que especifica o acesso do usuário

# **Comparação entre S3 e Glacier**

- Embora o Amazon S3 e o Amazon S3 Glacier sejam soluções de armazenamento de objetos que permitem armazenar uma quantidade praticamente ilimitada de dados, este gráfico descreve algumas diferenças críticas. Dentre elas:

1. Tenha cuidado ao decidir qual é a solução de armazenamento correta para suas necessidades. Esses serviços são serviços diferentes para diferentes necessidades de armazenamento. O Amazon S3 foi projetado para acesso frequente e de baixa latência aos seus dados. Por outro lado, o Amazon S3 Glacier foi projetado para armazenamento de baixo custo e longo prazo de dados acessados com pouca frequência

2. O tamanho máximo do item no Amazon S3 é de 5 TB, mas o Amazon S3 Glacier pode armazenar itens de até 40 TB.

3. Como o Amazon S3 oferece acesso mais rápido aos seus dados, o custo de armazenamento por gigabyte é maior do que o custo do armazenamento com o Amazon S3 Glacier.

4. Embora ambos os serviços tenham cobranças por solicitação, o Amazon S3 cobra pelas operações PUT, COPY, POST, LIST e GET. Por outro lado, o Amazon S3 Glacier cobra pelas operações de UPLOAD e recuperação.

5. Como o Amazon S3 Glacier foi projetado para acesso menos frequente aos dados, ele custa mais para cada solicitação de recuperação do que a recuperação custaria para o Amazon S3. `Tanto o custo por recuperação quanto o custo por GB são maiores para o Amazon S3 Glacier`
