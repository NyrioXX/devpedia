- [**Amazon Lambda**](#amazon-lambda)
- [**Conceitos**](#conceitos)
- [**Como implementar**](#como-implementar)
- [**Camadas do lambda**](#camadas-do-lambda)
- [**Limites do lambda**](#limites-do-lambda)

# **Amazon Lambda**

# **Conceitos**

- A computação sem servidor permite que o usuario crie e execute aplicativos e serviços sem se preocupar com servidores. Os aplicativos sem servidor não exigem que o usuario provisione, dimensione ou gerencie nenhum servidor

- A AWS fornece computação sem servidor por meio do serviço AWS Lambda. O usuario pode criar funções do Lambda para praticamente qualquer tipo de aplicativo ou serviço de back-end

- Tudo o que é necessário para executar e dimensionar o aplicativo com alta disponibilidade é gerenciado para o usuario

- O Lambda oferece serviços computacionais sem servidor totalmente gerenciados que executam seu código apenas quando necessário e dimensionam automaticamente para milhares de solicitações por segundo

- Com o Lambda, o usuario pode executar código para praticamente qualquer tipo de aplicativo ou serviço de back-end, tudo isso com o mínimo de administração

- O usuario só precisa fazer upload de seu código para que o Lambda se encarregue de todos os itens necessários para executá-lo e dimensioná-lo para alta disponibilidade

- O usuario pode configurar o código para que ele seja acionado automaticamente por meio de outros serviços da AWS ou chamá-lo diretamente usando qualquer aplicativo web ou móvel

- `O tempo de execução de uma função do Lambda é limitado no máximo 15 minutos`

- `O Lambda pode lidar com até 1.000 invocações de função simultâneas em uma única Região`
- Há várias opções de idioma

- Execute código para praticamente qualquer tipo de aplicativo ou serviço de back-end

  - Basta fazer upload de seu código que o Lambda se encarrega de todos os itens necessários para executá-lo e dimensioná-lo com alta disponibilidade
  - Configure seu código para ele ser acionado automaticamente por outros serviços da AWS ou o invoque diretamente de qualquer aplicativo web ou móvel

- Pague apenas pelo tempo de computação que o usuario consome

  - O usuario não paga nada quando seu código não está em execução

- Com o AWS Lambda, não há novas linguagens, ferramentas ou frameworks para aprender. O usuario pode usar qualquer biblioteca de terceiros, até mesmo as nativas

- O AWS Lambda comporta Java, Node.js, C#, Python e Ruby

- Casos de uso do Lambda incluem:

  1. Backups automatizados
  2. Processamento de objetos carregados no Amazon S3
  3. Análise de log orientada por eventos
  4. Transformações orientadas por eventos
  5. Internet das Coisas (IoT)
  6. Operação de sites sem servidor

# **Como implementar**

- Processo de desenvolvimento e implantação de uma função do AWS Lambda com dependências:

1. Defina uma classe de manipulador do Lambda em seu código

   - O manipulador possibilita que o usuario especifique onde o AWS Lambda pode começar a executar seu código. O usuario pode aprender mais sobre os manipuladores do Lambda aqui: https://docs.aws.amazon.com/lambda/latest/dg

2. Crie sua função do AWS Lambda. Ela inclui seu código, informações de configuração correspondentes e requisitos de recursos

3. Configure o acesso a recursos com o AWS Identity and Access Management (IAM) e funções do IAM

   - O usuario pode usar security groups e listas de controle de acesso à rede (ACLs de rede) para fornecer às funções acesso aos seus recursos

4. Faça upload de seu código

5. Teste a função, verifique os resultados e analise os logs

6. Monitore suas funções do Lambda e métricas de relatórios por meio do Amazon CloudWatch
   - Exemplos do que o usuario pode monitorar incluem o número de solicitações, a latência e o número de solicitações que resultam em erros

# **Camadas do lambda**

- As camadas do Lambda permitem que os desenvolvedores:

  1. Configurem uma função do Lambda para usar bibliotecas que não estão incluídas no pacote de implantação

     - A camada do Lambda é um arquivo zip com bibliotecas e um tempo de execução personalizado.

  2. Mantenham o pacote de implantação pequeno
     - Para funções de Node.js, Python e Ruby, o usuario pode desenvolver o código da função no console do Lambda, desde que mantenha seu pacote de implantação abaixo de 3 MB
  3. Evitem erros de dependência de pacote no código
  4. Compartilhem bibliotecas com outros desenvolvedores

- Uma função pode usar até cinco camadas por vez

- O tamanho total descompactado da função e de todas as camadas não pode exceder o limite do pacote de implantação descompactado de `250 MB`

- O usuario pode criar camadas ou usar as camadas publicadas pela AWS e por outros clientes da AWS

- As camadas comportam políticas baseadas em recursos para conceder permissão a contas específicas da AWS, ao AWS Organizations ou a todas as contas

- As camadas são extraídas para o diretório /opt no ambiente de execução da função

# **Limites do lambda**

- O AWS Lambda restringe a quantidade de recursos de computação e de armazenamento que o usuario pode usar para executar e armazenar funções
  - Por exemplo, no momento da redação deste texto, a alocação máxima de memória para uma única função do Lambda é 3 GB. O Lambda também tem limites de simultaneidade e tamanho de pacote (250 MB neste momento)
- Pode ser consultado em: https://docs.aws.amazon.com/pt_br/lambda/latest/dg/gettingstarted-limits.html
