- [`Para instalar a AWS CLI usando pip, execute o seguinte comando:`](#para-instalar-a-aws-cli-usando-pip-execute-o-seguinte-comando)
- [`Para verificar a instalação, execute o seguinte comando:`](#para-verificar-a-instalação-execute-o-seguinte-comando)
- [`AWS Configure`](#aws-configure)
- [`AWS Help`](#aws-help)
- [`Opções query`](#opções-query)
- [`AWS filter`](#aws-filter)
- [`AWS Dry run`](#aws-dry-run)

# `Para instalar a AWS CLI usando pip, execute o seguinte comando:`

```bash
pip3 install awscli --upgrade –-user
```

O switch —user é usado para colocar a instalação da AWS CLI em ~/.local/bin

# `Para verificar a instalação, execute o seguinte comando:`

```bash
aws --version
```

- _O resultado esperado é:_

```bash
aws-cli/1.16.137 Python/3.7.3 Linux/4.14.77-81.59-amzn2.x86_64 botocore/1.12.127
```

# `AWS Configure`

```bash
$ aws configure
ID da chave de acesso da AWS [Nenhum]: AKIAIOSFODNN7EXAMPLE
Chave de acesso secreta da AWS [Nenhuma]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Nome da região padrão [Nenhum]: us-west-2
Formato de saída padrão [Nenhum]: json
```

- Há dois outros formatos de saída compatíveis com a AWS CLI:

  1. Tabela formatada em ASCII —O formato de saída da tabela é o formato mais legível porque os dados têm representações legíveis por humanos em um formato tabular. O comando é:

  ```bash
  export AWS_DEFAULT_OUTPUT="table"
  ```

  2. Texto delimitado por tabulação: este formato de texto exibe dados como texto em linhas delimitadas por tabulação e funciona bem com ferramentas de processamento de texto Unix, como scripts do PowerShell. O comando é:

  ```bash
  output=text
  ```

- Formato da linha de comando
  Serviço -> operação -> parametros -> opções

  ```bash
  aws ec2 stop-instances --instance-id i-1234567890abcdef0 --output json
  ```

  Observação: **_`os nomes dos parâmetros são precedidos por dois traços (--).`_**

# `AWS Help`

- Todos os comandos na AWS CLI têm exemplos de sintaxe e comandos disponíveis. Para acessar esses exemplos com o comando help

```bash
aws ec2 help
```

# `Opções query`

- Serve para limitar a resposta no CLI

```bash
  aws ec2 describe-instances –-query 'Reservations[0].Instances[0]'
  # Mostrar apenas a primeira instancia
```

```bash
aws ec2 describe-instances --query 'Reservations[0].Instances[0].State.Name'
# Mostrar o estado nomeado da primeira instância
```

# `AWS filter`

- Serve para filtrar a resposta do CLI

```bash
aws ec2 describe-instances –-filter "Name=platform,Values=windows"
#  Mostrar apenas instâncias do Microsoft Windows
```

# `AWS Dry run`

- Serve para testar se as permissões estão presentes mas sem realizar uma solicitação

```bash
aws ec2 run-instances --image-id ami-1a2b3c4d --count 1 --instance-type c5.large --key-name MyKeyPair --security-groups MySecurityGroup --dry-run
```

- Geralmente fornece uma resposta de erro
  1. Se as permissões necessárias estiverem presentes, a resposta de erro será `DryRunOperation`
  2. Se as permissões não estiverem presentes, o comando falharia sem incluir a opção --dry-run , o que retornaria a resposta de erro `UnauthorizedOperation`
