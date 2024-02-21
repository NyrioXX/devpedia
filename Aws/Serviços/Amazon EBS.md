- [**Amazon Elastic Block Store (Amazon EBS)**](#amazon-elastic-block-store-amazon-ebs)
- [**Tipos de volume do EBS**](#tipos-de-volume-do-ebs)
- [**Snapshots**](#snapshots)
  - [**Ciclo de vida do snapshot**](#ciclo-de-vida-do-snapshot)
- [**Casos de uso**](#casos-de-uso)
- [**Comandos CLI**](#comandos-cli)

# **Amazon Elastic Block Store (Amazon EBS)**

- A diferença entre o armazenamento de bloco e de objeto é que com o armazenamento em bloco, O usuario precisa alterar apenas o bloco que contém o caractere. Com o armazenamento de objetos, todo o arquivo deve ser atualizado

- A diferença tem um grande impacto na taxa de transferência, latência e custo da sua solução de armazenamento

- Geralmente, as soluções de armazenamento em bloco são mais rápidas e usam menos largura de banda, mas custam mais do que o armazenamento no nível do objeto

- O Amazon EBS é melhor usado para armazenar dados persistentes

- O Amazon EBS fornece volumes de armazenamento em nível de bloco altamente disponíveis para uso com instâncias do EC2

- Cada volume do EBS é replicado automaticamente na sua Zona de disponibilidade para protegê-lo contra falhas de componentes, oferecendo alta disponibilidade e durabilidade

- Os volumes do EBS oferecem o desempenho consistente e de baixa latência de que O usuario precisa para executar suas cargas de trabalho

- Com o Amazon EBS, O usuario pode escalar seu uso para cima ou para baixo em minutos — tudo isso pagando apenas pelos recursos provisionados

- O usuario pode usar o Amazon EBS para criar volumes de armazenamento individuais e anexá-los a uma instância do EC2

- O Amazon EBS oferece armazenamento em nível de bloco com volumes replicados automaticamente dentro de sua zona de disponibilidade

- Esse arranjo fornece armazenamento durável, destacável e em nível de bloco (como um disco rígido externo) para suas instâncias do EC2

- Os volumes são diretamente anexados às instâncias. Assim, eles fornecem baixa latência entre onde os dados são armazenados e onde eles podem ser usados na instância

  - Por esse motivo, eles podem ser usados para executar um banco de dados com uma instância do EC2

- Os volumes do EBS também podem ser usados para fazer backup das suas instâncias em Amazon Machine Images (AMIs), que são armazenadas no Amazon Simple Storage Service (Amazon S3) e podem ser reutilizadas para criar novas instâncias do EC2 posteriormente

- Os usos incluem:

  - Volumes de inicialização e armazenamento para instâncias do EC2
  - Armazenamento de dados com um sistema de arquivos
  - Hosts de banco de dados
  - Aplicações empresariais

- Para fornecer um nível ainda maior de durabilidade de dados, O usuario pode usar o Amazon EBS para criar snapshots pontuais dos seus volumes

- O usuario também pode recriar um novo volume a partir de um instantâneo a qualquer momento

- Compartilhe snapshots ou até copie snapshots para diferentes regiões da AWS para uma proteção ainda maior da recuperação de desastres (DR)

- O usuario pode, por exemplo, criptografar e compartilhar seus instantâneos da Virgínia, EUA para Tóquio, Japão

- O usuario também pode obter volumes criptografados do Amazon EBS sem custo adicional

  - A criptografia ocorre no lado do Amazon EC2
  - Os dados que se movem entre a instância do EC2 e o volume do EBS dentro dos data centers da AWS são criptografados em trânsito

- Os volumes do EBS podem aumentar a capacidade e mudar para diferentes tipos

- O usuario pode mudar de uma unidade de disco rígido (HDD) para uma unidade de estado sólido (SSD)

- O usuario também pode aumentar de um volume de 50 GB para um volume de 16 TB

  - Por exemplo, O usuario pode fazer essa operação de redimensionamento dinamicamente, sem interromper as instâncias

- O Amazon EBS oferece a capacidade de fazer backup de snapshots de seus dados no Amazon S3 para recuperação durável

- Se O usuario escolher snapshots do Amazon EBS, o custo adicional será calculado por GB por mês de dados armazenados

# **Tipos de volume do EBS**

- Ao estimar o custo do Amazon EBS, O usuario deve considerar o seguinte:

- `Volumes`

  - O armazenamento de volume para todos os tipos de volume do EBS é cobrado pelo valor provisionado em GB por mês, até O usuario liberar o armazenamento

- `IOPS`

  - As operações de entrada/saída por segundo (IOPS) são uma forma de medir o desempenho dos dispositivos de armazenamento

  - Um IOPS mais alto significa que um dispositivo de armazenamento pode lidar com mais operações de entrada e saída (ou seja, gravação e leitura)

  - Para o Amazon EBS, a E/S está incluída no preço dos volumes de uso geral (SSD), enquanto para volumes magnéticos do Amazon EBS, a E/S é cobrada pelo número de solicitações feitas ao seu volume

  - Com os volumes de IOPS provisionadas (SSD), O usuario também é cobrado pelo valor provisionado em IOPS (multiplicado pela porcentagem de dias provisionados para o mês)

- O Amazon EBS fornece tipos de volume que diferem em características de performance e preços para adaptar a performance e o custo de armazenamento às necessidades de diferentes aplicações

- Eles são identificados por um nome de 3 caracteres (por exemplo, io1 e st1) e se enquadram em duas categorias, unidades de estado sólido (SSD) que são ideais para cargas de trabalho intensivas de IOPS e unidades de disco rígido (HDD) adequadas para MB/s (taxa de transferência) cargas de trabalho intensivas

- Os tipos de volume disponíveis são:

  - `SSD de IOPS provisionadas (io1)`

    - Sustentadas por unidades de estado sólido (SSDs) e a opção de armazenamento de maior desempenho do Amazon EBS

  - `SSD de uso geral (gp2)`

    - Esse é o tipo de volume do EBS padrão para instâncias do EC

  - `HDD otimizado para taxa de transferência (st1)`

    - Esse tipo de volume é apoiado por unidades de disco rígido (HDDs) e funciona bem para cargas de trabalho com taxa de transferência intensiva e acessadas com frequência, com grandes conjuntos de dados e grandes tamanhos de E/S

  - `HDD inativo (sc1)`

    - Esse tipo de volume é apoiado por unidades de disco rígido (HDDs) e oferece o menor custo por GB de todos os tipos de volume do EBS
    - Ele funciona menos para cargas de trabalho acessadas com menos frequência com conjuntos de dados grandes e inativos

- Adequar a tecnologia correta à sua carga de trabalho é a principal das melhores práticas para reduzir custos de armazenamento

- Os volumes do EBS apoiados por unidade de estado sólido (SSD) de IOPS provisionadas podem oferecer o mais alto desempenho. No entanto, se o aplicativo não exigir ou usar um desempenho tão alto, uma das opções de custo mais baixo pode ser uma solução melhor

# **Snapshots**

- O usuario pode fazer backup dos dados em um volume do EBS em um snapshot

- É crucial tirar snapshots de todos os dados que O usuario possa ter em desenvolvimento, teste ou produção regularmente

- O Amazon EBS oferece a capacidade de tirar snapshots de seus volumes para que eles possam ser restaurados caso o hardware subjacente que oferece suporte ao seu volume falhe ou o volume seja excluído acidentalmente

- Os snapshots copiam dados em nível de bloco para a infraestrutura do Amazon S3

- Os objetos são armazenados de forma redundante e podem sustentar a perda simultânea de dados em duas instalações

- O primeiro snapshot é um snapshot completo do estado do disco no momento em que o snapshot foi criado

- Todos os snapshots subsequentes capturarão apenas os deltas (diferenças) em comparação com o snapshot anterior

- Se O usuario adicionar dados ao volume do EBS depois de copiar o primeiro snapshot e criar um segundo snapshot, os novos blocos serão copiados para o Amazon S3

- O segundo snapshot consistirá em uma receita para restaurar o volume

- A receita consiste nos blocos do primeiro snapshots e em todos os novos blocos

- Os snapshots são incrementais, o que significa que eles são baseados em deltas

- Somente as alterações de snapshots anteriores devem ser copiadas para o Amazon S3

- Se O usuario atualizar blocos no volume do EBS e criar um terceiro snapshot, somente os blocos alterados serão copiados para o Amazon S3

- A nova receita para restaurar consistirá nos blocos atualizados e nos blocos restantes que ainda estiverem presentes no volume do EBS

## **Ciclo de vida do snapshot**

- O usuario pode usar o Amazon Data Lifecycle Manager (Amazon DLM) para automatizar a criação, a retenção e a exclusão de snapshots tirados para fazer backup dos volumes do EBS

- A automação do gerenciamento de snapshots ajuda O usuario a:

1. Proteger dados valiosos impondo uma programação regular de backup
2. Reter os backups conforme exigido por auditores ou pelas regras de conformidade interna
3. Reduzir os custos de armazenamento ao excluir backup obsoletos

- Para usar o Amazon DLM, marque o seu volume do EBS e crie uma política de ciclo de vida que defina o comportamento de backup e retenção que O usuario deseja aplicar a ele

- Uma política de ciclo de vida consiste nas seguintes configurações principais:

1. `Tipo de recurso`

   - O recurso da AWS gerenciado pela política (neste caso, volumes do EBS)

2. `Tag de destino`

   - A tag que deve ser associada com um volume do EBS a ser gerenciado pela política

3. `Programação`

   - Define com que frequência criar snapshots e o número máximo de snapshots a serem mantidos
   - A criação de um snapshot é iniciada em até uma hora após o horário de início especificado
   - Se a criação de um novo snapshot ultrapassar o número máximo de snapshots a serem mantidos para o volume, o snapshot mais antigo será excluído

- Crie uma política de ciclo de vida para gerenciar os backups de seus volumes do EBS

- Um arquivo JavaScript Object Notation (JSON) deve ser gerado para cobrir os detalhes da política

# **Casos de uso**

![Casos-de-uso](../Arquivos/Casos%20de%20uso%20EBS.png)

# **Comandos CLI**

- Criar volume

```bash
aws ec2 create-volume \ --size 80 \ --availability-zone us-east-1a \ --volume-type gp2
```

- Anexar volume

```bash
s ec2 attach-volume --volume-id vol-1234567890abcdef0 --instance-id i-01474ef662b89480 --device /dev/sdf
```

- Criar snapshot

```bash
aws ec2 create-snapshot –-volume-id vol-1234567890abcdef0 --description "This is my root volume snapshot"
```

- Copiando um snapshot

```bash
ws ec2 copy-snapshot –-region us-east-1 --source-region us-west-2 –-source-snapshot-id snap-1234567890abcdef0 --description "This is my copied snapshot"
```

- Prova de copia

```bash
$ aws ec2 describe-snapshots --snapshot-ids snap-0b3c2a7c2a7e4eec6 - -region us-west-2
```

- Restaurar um snapshot

```bash
aws ec2 create-volume –-size 80 –-availability-zone us-east-1a --volume-type gp2 –-snapshot-id snap-1234567890abcdef0
```

- Verificar o status do volume

```bash
aws ec2 describe-volume-status --volume-ids vol-1234567890abcdef0
```

- Gerenciamento de snapshots do amazon EC2

```bash
$ aws dlm create-default-role
```

- Gerenciar volumes do EBS com politica de ciclo de vida

```bash
$ aws dlm create-lifecycle-policy --description "My backup policy" --state ENABLED --execution-role-arn
arn:aws:iam::197757065544:role/AWSDataLife
cycleManagerDefaultRole --policy-details file://policyDetails.json
```

- Exibir politica de ciclo de vida

```bash
aws dlm get-lifecycle-policy --policy-id policy-0b0ac162276313459
```
