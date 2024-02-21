- [**_AWS Tools for PowerShell_**](#aws-tools-for-powershell)
  - [**_Comandos powershell_**](#comandos-powershell)
- [**_AWS CloudFormation_**](#aws-cloudformation)
  - [**Como funciona**](#como-funciona)
  - [**Projeto de modelos**](#projeto-de-modelos)
- [**_Ops Works_**](#ops-works)

# **_AWS Tools for PowerShell_**

- Permite criar scripts para operações nos recursos da AWS por meio da linha de comando do PowerShell

- Ferramentas para executar muitas das mesmas ações disponíveis no AWS Software Development Kit (SDK) do .NET

- É possivel usar na linha de comando para tarefas rápidas, como:

1. Criação e configuração de grupos de segurança
2. Execução de instâncias
3. Criação e exclusão de buckets do Amazon Simple Storage Service (Amazon S3)
4. Executar tarefas do AWS Identity and Access Management (IAM), como atribuir uma função a um usuário
5. Publicação de métricas do Amazon CloudWatch

- O AWS Tools for PowerShell fornece um conjunto de cmdlets, que são comandos usados em um ambiente do Microsoft Windows PowerShell para executar uma ação
- O AWS Tools for PowerShell oferece suporte ao mesmo conjunto de serviços e regiões compatíveis com os SDKs da AWS

## **_Comandos powershell_**

- `Executar uma instancia EC2`

  ```bash
  PS C:\> New-EC2Instance -ImageId ami-c49c0dac -MinCount 1 -MaxCount 1 -KeyName myPSKeyPair -SecurityGroups myPSSecurityGroup -InstanceType t1.micro
  ```

- `Mostrar detalhes EC2 filtrados no ID reserva`

  ```bash
  PS C:\> $reservation = New-Object 'collections.generic.list[string]’ $reservation.add("r-5caa4371") $filter_reservation = New-Object
  Amazon.EC2.Model.Filter -Property @{Name = "reservation-id"; Values = $reservation} (Get-EC2Instance -Filter $filter_reservation).Instances
  ```

- `Criar um novo bucket S3`

  ```bash
  PS C:\> New-S3Bucket -BucketName website-example -Region us-west-1
  ```

- `Criar um grupo do IAM`

  ```bash
  PS C:\> New-IAMGroup -Path "/ps-created-groups/" -GroupName "powerUsers"
  ```

- `Criar um usuario IAM`

  ```bash
  S C:\> New-IAMUser -Path "/ps-created-users/" -UserName "myNewUser"
  ```

- `Adicionar usuario do IAM ao grupo`

  ```bash
    PS C:\> Add-IAMUserToGroup -UserName myNewUser -GroupName powerUsers
  ```

# **_AWS CloudFormation_**

- O AWS CloudFormation é outra ferramenta útil que permite a um usuário criar, atualizar ou excluir implantações completas de infraestrutura da AWS de forma previsível e repetida

- A infraestrutura inteira pode ser modelada em um único arquivo de texto escrito em JavaScript Object Notation (JSON) ou YAML Ain't Markup Language (YAML)

- O modelo de arquivo de texto pode ser usado para definir todos os recursos da AWS necessários para uma pilha

- Uma pilha do AWS CloudFormation é um conjunto de recursos da AWS que pode ser gerenciado como uma unidade única

- É possivel criar, atualizar ou excluir uma coleção de recursos criando, atualizando ou excluindo pilhas

- Os recursos na pilha podem incluir instâncias do EC2, instâncias do Amazon Relational Database Service (Amazon RDS), Virtual Private Clouds (VPCs) e muitos outros recursos criados a partir de serviços da AWS

- O AWS CloudFormation também permite que os usuários visualizem como as alterações propostas em uma pilha podem afetar seus recursos em execução, como as alterações excluirão ou substituirão recursos críticos

- `O AWS CloudFormation só faz as alterações na pilha depois que o usuário decide executá-las`

- Outro recurso do AWS CloudFormation é a detecção de desvios

  - A execução de uma operação de detecção de desvio em uma pilha determina se a configuração real da pilha difere, ou se desviou, da configuração de modelo esperada
  - Considera-se que um recurso foi desviado se algum dos seus valores reais de propriedade for diferente dos valores de propriedade esperados ou se a propriedade ou recurso tiver sido excluído
  - Considera-se que uma pilha se desviou se um ou mais dos seus recursos tiverem sido desviados
  - Se o recurso na pilha for compatível com a detecção de desvios, a operação de detecção retornará informações detalhadas sobre o status do desvio desse recurso

- O AWS CloudFormation também oferece suporte a extensões personalizadas para seu modelo de pilha que podem ser criadas usando o AWS Lambda

- É possível escrever o provisionamento personalizado em uma função do Lambda e configurar uma pilha do AWS CloudFormation para acionar essa função ao criar a pilha

  - Por exemplo, o usuario pode escrever uma lógica de provisionamento personalizada para tarefas, como procurar os IDs mais recentes da imagem de máquina da Amazon (AMI) para que o usuario possa usá-los nas suas pilhas

## **Como funciona**

- Um modelo é uma especificação dos recursos da AWS a serem provisionados

- Uma pilha é uma coleção de recursos da AWS que foram criados a partir de um modelo

- Você pode provisionar (criar) uma pilha várias vezes

- Quando uma pilha é provisionada, os recursos da AWS especificados pelo modelo de pilha são criados

- Todas as cobranças incorridas pelo uso desses serviços começarão a ser geradas quando forem criadas como parte da pilha do AWS CloudFormation

- Quando uma pilha é excluída, os recursos associados a essa pilha são excluídos

- A ordem de exclusão é determinada pelo AWS CloudFormation

- Você não tem controle direto sobre o que e quando é excluído

- Se um erro for encontrado quando você iniciar um modelo do AWS CloudFormation, todos os recursos serão revertidos por padrão

  - Você pode alterar essa opção na linha de comando

- O AWS CloudFormation garante que todos os recursos de pilha sejam criados ou excluídos, conforme apropriado

- Como o AWS CloudFormation trata os recursos da pilha como uma única unidade, eles devem ser criados ou excluídos com êxito para que a pilha seja criada ou excluída

- Se um recurso não puder ser criado, o AWS CloudFormation reverterá a pilha e excluirá automaticamente todos os recursos criados

- Se um recurso não pode ser excluído, todos os recursos restantes são mantidos até que a pilha possa ser excluída com êxito

- Para preservar um volume do Amazon Elastic Block Store (Amazon EBS), defina seu atributo **DeleteOnTermination** como **Falso**

- Para preservar um recurso, defina o atributo **DeletionPolicy** como **Reter**

- Alguns recursos podem não ser excluídos quando uma pilha é excluída, como um bucket do S3
  - Opcionalmente, você também pode habilitar a proteção contra encerramento em uma pilha

![modelo](./Arquivos/Estrutura%20de%20modelo%20cloudformation.png)

## **Projeto de modelos**

- O AWS CloudFormation Designer é uma ferramenta visual que permite criar e modificar modelos do AWS CloudFormation usando uma interface de arrastar e soltar

- Você pode facilmente adicionar, modificar ou remover recursos e o JSON subjacente será alterado de acordo

- Se você modificar um modelo que seja associado a uma pilha em execução, você poderá alterar a pilha de modo que ela fique de acordo com o modelo

- Ferramentas de terceiros também podem fornecer soluções para ajudá-lo a projetar modelos do AWS CloudFormation

# **_Ops Works_**

- O AWS OpsWorks é um serviço de gerenciamento de configuração que fornece instâncias gerenciadas do Chef e do Puppet

- O Chef e o Puppet são plataformas de automação que permitem usar um código para automatizar as configurações de servidores

- Com o AWS OpsWorks, o usuario pode usar o Chef e o Puppet para automatizar como os servidores são configurados, implantados e gerenciados nas suas instâncias do EC2 ou ambientes de computação locais.

- O AWS OpsWorks tem três ofertas:

  1. AWS OpsWorks for Chef Automate
  2. AWS OpsWorks for Puppet Enterprise
  3. AWS OpsWorks Stacks
