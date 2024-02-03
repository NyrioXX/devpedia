- [**AWS Trusted Advisor**](#aws-trusted-advisor)
  - [**Recursos do Trusted Advisor**](#recursos-do-trusted-advisor)

# **AWS Trusted Advisor**

- O trusted advisor fornece praticas recomendadas ou verificações em 5 categorias:
  1. Custo
  2. Desempenho
  3. Segurança
  4. Tolerancia a falhas
  5. Limites de serviço
- Status de verificações

  1. Vermelho - ação recomendada
  2. Amarelo - investigação recomendada
  3. Verde - nenhum problema detectado

- As seguintes verificações do Trusted Advisor estão disponíveis para todos os clientes sem nenhum custo:

1. Limites de serviço
2. Security groups: portas específicas sem restrição
3. Uso do AWS Identity and Access Management (IAM)
4. Autenticação multifator (MFA) em conta raiz
5. Snapshots públicos do Amazon Elastic Block Store (Amazon EBS)
6. Snapshots públicos do Amazon Relational Database Service (Amazon RDS)

- O conjunto completo de verificações e orientação está disponível nos planos de suporte Business e Enterprise.
- Usando esse recurso, é possivel melhorar o desempenho e a confiabilidade do sistema, aumentar a segurança e procurar oportunidades de economizar dinheiro.

## **Recursos do Trusted Advisor**

- `Notificações do Trusted Advisor`: atualizado com a implantação de recursos da AWS. Notificado por uma mensagem de e-mail semanal ao optar por este serviço.
- `AWS Identity and Access Management (IAM)`: controle o acesso a verificações ou categorias de verificações específicas.
- `Interface de programação de aplicativo (API) do AWS Support`: recupera e atualiza os resultados do Trusted Advisor programaticamente.
- `Links de ação`: hiperlinks em itens em um relatório do Trusted Advisor que o levam diretamente à console. No console, o usuario pode implementar as recomendações do Trusted Advisor.
- `Alterações recentes`: monitore as alterações recentes do status da verificação no painel do console. As alterações mais recentes aparecem na parte superior da lista para chamar sua atenção.
- `Excluir itens`: personalize o relatório do Trusted Advisor. É possivel excluir itens do resultado da verificação se eles não forem relevantes.
- `Atualizar tudo`: atualiza verificações individuais ou todas as verificações de uma só vez selecionando Atualizar tudo no canto superior direito do painel de resumo. Uma verificação pode ser atualizada de 5 em 5 minutos
