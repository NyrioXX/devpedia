- [**Amazon S3**](#amazon-s3)
- [**Classes de armazenamento**](#classes-de-armazenamento)
- [**Preços**](#preços)
  - [**Fatores que estimam o custo**](#fatores-que-estimam-o-custo)
- [**Hospedagem de site estatico no S3**](#hospedagem-de-site-estatico-no-s3)
  - [**_Dominio_**](#dominio)

# **Amazon S3**

- O dados são armazenados como objetos em buckets e um unico arquivo pode ter até 5 Tb sendo a capacidade de armazenamento praticamente ilimitado
- O armazenamento é projetado para 11 noves (99,999999999%) de durabilidade
- Acesso granular a buckets e objetos
- Ao adicionar um objeto ai bucket deve ser dado um nome unico que é chamado de chave de objeto
- Como o armazenamento é de objetos para fazer alterações deve ser feito o upload de todo arquivo (com as modificações) novamente
- É possivel ter varios buckets em uma conta
- É possivel vizualizar logs de acesso aos buckets e seus objetos
- É possivel escolher a **_região geografica_** em que a amazon armazenara o seu bucket
  - **_`Não é possivel escolher a zona de disponibilidade em que ficará o seu bucket`_**
- Por padrão os dados são privados e podem ser criptografados
- Os dados são armazenados de forma redundante
- É possivel recuperar os dados a qualquer momento e em qualquer lugar na internet
- Os nomes dos buckets devem ser exclusivos entre todos os nomes de buckets existentes no Amazon S3

# **Classes de armazenamento**

- O Amazon S3 oferece uma variedade de classes de armazenamento no nível do objeto projetadas para diferentes casos de uso:

1. **_Amazon S3 Standard_**

   - Projetado para ter alta durabilidade, acesso rapido e frequente. Adequado para a maioria dos casos

2. **_Amazon S3 Intelligent-Tiering_**

   - Projetado para otimizar custos, movendo automaticamente dados não usados por mais de 30 dias para um nivel de acesso mais economico e quando esses dados são acessados novamente retornam para o nivel de acesso normal (os 30 dias reiniciam). Não existe impacto no desempenho e os custos são uma taxa fixa mensal e nenhum adicional. Ideal para dados de longa duração e frequencia de acesso imprevisivel

3. **_Amazon S3 Standard-Infrequent Access (Amazon S3 Standard-IA)_**

   - Usado para dados com pouco acesso mas com a necessidade de altissima velocidade de acesso. Possui alta velocidade de transferencia, custos reduzidos por GB transferido e recuperado. Ideal para backups de longo prazo e dados para recuperação de desastres

4. **_Amazon S3 One Zone-Infrequent Access (Amazon S3 One Zone-IA)_**

   - Similar ao anterior tendo como diferencial o fato de ser mantido em apenas 1 zona de disponibilidade (o padrão são 3 zonas). Possui custo menor que o S3 Standard-Infrequent Access e é ideal para backups secundarios ou dados que possam ser recriados com facilidade, tambem serve como armazenamento economico de dados replicados de outras zonas de disponibilidade

5. **_Amazon Simple Storage Service Glacier_**
   - Projetado para ser duravel e de baixo custo. Possui configurações variaveis de suprimento, podendo variar de alguns minutos até algumas horas. Possui configurações de ciclo de vida para transferir dados de outras classes S3 para este de acordo com a frequencia de uso
6. **_Amazon S3 Glacier Deep Archive_**
   - Classe com menor custo. Projetado para armazenamento de longo prazo e que pode ser acessado apenas 1 ou 2 vezes por ano. Ideal para usuarios que acessam pouco os dados ou para necessidades de recuperação de desastres. O tempo de restauração pode ser de até 12h

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
