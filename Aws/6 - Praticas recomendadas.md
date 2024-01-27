# **Praticas recomendadas**

- **_`Não use o usario raiz da conta`_**
  1. Criar um usario IAM
  2. Criar grupos IAM
     - Dar ao grupo permissões de administrador
  3. Adicionar o usuario criado ao grupo
  4. Logar com o usuario credenciado
  5. Armazenar as credencias num local seguro
  6. Se tiver chaves de acesso de usuario raiz da conta, desative-as e remova-as
- **_`Autenticação de 2 fatores - MFA`_**
  1. Exigir MFA para o usuario raiz da conta e para todas as contas de usuario
  2. Use o MFA para controlar o acesso às interfaces de programação de aplicativos (APIs) de serviços
- **_`Ativar o AWS Cloudtrail`_**
  1. Criar a trilha
     - Dar o nome
     - Aplicar a todas as regiões
     - Inserir um nome para um novo bucket onde os logs serão armazenados
  2. Certifique-se que o bucket escolhido tenha acesso restrito apenas para pessoal autorizado
- **_`Ativar um relatorio de faturamento, como o AWS Cost and Usage Report`_**
  1. Ativar o relatorio de faturamento
     - O relatório fornece cobranças estimadas associadas à sua conta da AWS, por hora ou por dia
  2. Certifique-se que o bucket escolhido tenha acesso restrito apenas para pessoal autorizado

## **Outras praticas recomendadas**

- Use preferencialmente funções de usuario ao invés de compartilhar credenciais
- Remova os usuários e as credenciais desnecessários
- Use as funções para aplicativos que são executados em instâncias do Amazon EC2
- Delegue usando as funções em vez de compartilhar credenciais
- Conceda acesso com base no menor privilégio
- Configure uma política de senha forte
- Ative a MFA para usuários privilegiados
- Use as condições de política para segurança extra
- Alterne as credenciais regularmente
- Monitore a atividade em sua conta da AWS
