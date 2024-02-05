- [**Amazon Virtual Private Cloud (VPC)**](#amazon-virtual-private-cloud-vpc)

# **Amazon Virtual Private Cloud (VPC)**

Uma VPC é uma rede virtual privada. Por definição funciona da mesma que uma rede convencional só que em nuvem

- Uma VPC é dedidaca a uma conta AWS
- Pertenca a **_`apenas uma região AWS`_**
- Pode abranger varias zonas de disponibilidade
- Esta logicamente isolada de outras VPCs
- É possivel criar varias VPC em 1 conta AWS
- É possivel criar sub-redes em uma VPC mas não é recomendado varias sub-redes a fim de reduzir a complexidade da rede
- Ao criar uma VPC é possivel especificar o intervalo de endereços IPV4 escolhendo um bloco CIDR
  - O intervalo pode ser /16 (65.536 endereços) ou /28(16 endereços)
  - Os endereços não podem ser alterados depois que a VPC é criada
- Os endereços não podem se sobrepor aos endereços de outras redes na qual a VPC esteja conectada
- Numa VPC pode ser criado: sub-redes, tabela de rotas, security group, lista de controle de acesso à rede (ACL de rede)
