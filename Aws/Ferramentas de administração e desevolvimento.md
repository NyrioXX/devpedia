- [**Ferramentas de administração e desenvolvimento**](#ferramentas-de-administração-e-desenvolvimento)
  - [**_AWS Tools for PowerShell_**](#aws-tools-for-powershell)
    - [**_Comandos powershell_**](#comandos-powershell)
  - [**_AWS CloudFormation_**](#aws-cloudformation)
  - [**_Ops Works_**](#ops-works)

# **Ferramentas de administração e desenvolvimento**

## **_AWS Tools for PowerShell_**

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

### **_Comandos powershell_**

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

## **_AWS CloudFormation_**

- O AWS CloudFormation é outra ferramenta útil que permite a um usuário criar, atualizar ou excluir implantações completas de infraestrutura da AWS de forma previsível e repetida

- A infraestrutura inteira pode ser modelada em um único arquivo de texto escrito em JavaScript Object Notation (JSON) ou YAML Ain't Markup Language (YAML)

- O modelo de arquivo de texto pode ser usado para definir todos os recursos da AWS necessários para uma pilha

- Uma pilha do AWS CloudFormation é um conjunto de recursos da AWS que pode ser gerenciado como uma unidade única

- É possivel criar, atualizar ou excluir uma coleção de recursos criando, atualizando ou excluindo pilhas

- Os recursos na pilha podem incluir instâncias do EC2, instâncias do Amazon Relational Database Service (Amazon RDS), Virtual Private Clouds (VPCs) e muitos outros recursos criados a partir de serviços da AWS

- O AWS CloudFormation também permite que os usuários visualizem como as alterações propostas em uma pilha podem afetar seus recursos em execução, como se as alterações excluirão ou substituirão recursos críticos

- `O AWS CloudFormation só faz as alterações na pilha depois que o usuário decide executá-las`

- Outro recurso do AWS CloudFormation é a detecção de desvios

  - A execução de uma operação de detecção de desvio em uma pilha determina se a configuração real da pilha difere, ou se desviou, da configuração de modelo esperada
  - Considera-se que um recurso foi desviado se algum dos seus valores reais de propriedade for diferente dos valores de propriedade esperados ou se a propriedade ou recurso tiver sido excluído
  - Considera-se que uma pilha se desviou se um ou mais dos seus recursos tiverem sido desviados
  - Se o recurso na pilha for compatível com a detecção de desvios, a operação de detecção retornará informações detalhadas sobre o status do desvio desse recurso

- O AWS CloudFormation também oferece suporte a extensões personalizadas para seu modelo de pilha que podem ser criadas usando o AWS Lambda

- É possível escrever o provisionamento personalizado em uma função do Lambda e configurar uma pilha do AWS CloudFormation para acionar essa função ao criar a pilha

  - Por exemplo, o usuario pode escrever uma lógica de provisionamento personalizada para tarefas, como procurar os IDs mais recentes da imagem de máquina da Amazon (AMI) para que o usuario possa usá-los nas suas pilhas

## **_Ops Works_**

- O AWS OpsWorks é um serviço de gerenciamento de configuração que fornece instâncias gerenciadas do Chef e do Puppet

- O Chef e o Puppet são plataformas de automação que permitem usar um código para automatizar as configurações de servidores

- Com o AWS OpsWorks, o usuario pode usar o Chef e o Puppet para automatizar como os servidores são configurados, implantados e gerenciados nas suas instâncias do EC2 ou ambientes de computação locais.

- O AWS OpsWorks tem três ofertas:

  1. AWS OpsWorks for Chef Automate
  2. AWS OpsWorks for Puppet Enterprise
  3. AWS OpsWorks Stacks
