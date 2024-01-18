# **Preços AWS**

## **_3 fatores fundamentais de custos na AWS_**

1. Computação: é cobrado por hora/minuto e varia com o tipo de instancia (somente linux)
2. Armazenamento: Cobrado, normamente, por GB
3. Transferência de dados: Saida é agregada e cobrada, a entrada não tem cobrança (possui excessões), cobrado normalmente por GB

## **_Caracteristicas da precificação na AWS_**

- Os pagamentos são feitos conforme o uso, possuem desconto em caso de reservas e tendem a diminuir com o crescimento da AWS. É possível calcular custos com a calculadora da própria AWS.
- A AWS também possui desconto por volume. Quanto maior o uso maior o desconto
- Existe ainda a possibilidade de negociar preços personalizados para projetos de alto volume e com necessidades exclusivas
  - No que tange as reservas existem 3 tipos:
  1. **AURI** → Instancias reservadas com pagamento antecipado total são as que possuem maior desconto
  2. **PURI →** Instancias reservadas com pagamento parcial antecipado possuem desconto menor que a modalidade anterior
  3. **NURI** → Instancias reservadas sem pagamento antecipado que possuem menor desconto
- Alguns serviços da AWS são gratuitos por um ano para novos clientes (micro instância T2, EC2, S3, EBS, …)
- A AWS também oferece vários serviços e recursos sem custo adicional. (VPC, IAM, Cobrança consolidada, AWS beanstalk, AWS cloudformation, auto scaling, AWS opsworks). Embora não haja cobrança por esses serviços, pode haver cobranças associadas a outros serviços da AWS usados com esses serviços. Por exemplo, quando você dimensionar automaticamente instâncias do EC2 adicionais, haverá cobranças por essas instâncias.
- O custo total de propriedade (TCO) é a estimativa financeira que ajuda a identificar custos diretos e indiretos de um sistema.
