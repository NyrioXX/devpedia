- [**Visão geral de armazenamento**](#visão-geral-de-armazenamento)
- [**Como o armazenamento na nuvem funciona?**](#como-o-armazenamento-na-nuvem-funciona)
- [**Serviços de armazenamento**](#serviços-de-armazenamento)
- [**Tipos de armazenamento**](#tipos-de-armazenamento)
- [**Casos de uso**](#casos-de-uso)

# **Visão geral de armazenamento**

- O armazenamento na nuvem é um modelo de computação na nuvem que armazena dados na Internet por meio de um provedor de computação na nuvem, que gerencia e opera o armazenamento de dados como um serviço

# **Como o armazenamento na nuvem funciona?**

- O armazenamento na nuvem é adquirido de um fornecedor de nuvem terceirizado, que possui e opera a capacidade de armazenamento de dados e a entrega pela Internet em um modelo de pagamento conforme o uso

- Esses fornecedores de armazenamento na nuvem gerenciam capacidade, segurança e durabilidade para tornar os dados acessíveis aos seus aplicativos de todo o mundo.

# **Serviços de armazenamento**

- Ele tem três grandes categorias:

1. `Armazenamento de instâncias (ou armazenamento temporário), Amazon EBS e Amazon Simple Storage Service (Amazon S3)`

   - O armazenamento de instâncias, ou armazenamento temporário, é um armazenamento temporário que é adicionado à sua instância do Amazon Elastic Compute Cloud (Amazon EC2)

2. `O Amazon EBS`

- É um armazenamento persistente e montável
- Um volume do EBS pode ser montado como um dispositivo para uma instância do EC2, mas somente se ambos estiverem na mesma zona de disponibilidade

3. `Amazon S3`

- É um armazenamento persistente
- No entanto, ele pode ser acessado de qualquer lugar

# **Tipos de armazenamento**

- Os principais serviços de armazenamento na nuvem da AWS estão agrupados em quatro categorias:

1. `Armazenamento em bloco`

   - O Amazon Elastic Block Store (Amazon EBS) fornece recursos de armazenamento em bloco altamente disponíveis e de baixa latência para cargas de trabalho que exigem armazenamento persistente acessível a partir de uma instância do Amazon Elastic Compute Cloud (Amazon EC2)

2. `Armazenamento de objetos`

   - O `Amazon Simple Storage Service (Amazon S3)` foi projetado para armazenar objetos de qualquer tipo de forma segura, durável e escalável e torná-los acessíveis pela Internet
   - O `Amazon Simple Storage Service Glacier` fornece armazenamento de objetos de baixo custo e altamente durável para backup e arquivamento de longo prazo de qualquer tipo de dados

3. `Armazenamento de arquivos`

   - O `Amazon Elastic File System (Amazon EFS)` fornece um sistema de arquivos simples, escalável e elástico para cargas de trabalho baseadas no Linux
   - O `Amazon FSx for Windows File Server` fornece um sistema de arquivos nativo do Microsoft Windows totalmente gerenciado para oferecer suporte a aplicativos do Windows executados na AWS

4. `Armazenamento na nuvem híbrida`

   - O AWS Storage Gateway fornece um link que conecta seu ambiente local aos serviços de armazenamento na nuvem da AWS de maneira resiliente e eficiente

# **Casos de uso**

- Análise de big data
- Data warehouses
- Bancos de dados
- Backup e arquivo

![Armazenamento](./Arquivos/Cenarios%20e%20soluções%20de%20armazenamento.png)
