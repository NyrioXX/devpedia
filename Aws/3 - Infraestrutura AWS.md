# Infraestrutura AWS

Os data centers são a base da infraestrutura da AWS. Data center é um local onde os dados físicos reais residem e o processamento de dados ocorre. Os data centers da AWS são construídos em clusters em várias Regiões globais.
Os data centers são projetados com segurança, com vários fatores em mente.

- A Infraestrutura global da AWS foi projetada e construída para oferecer um ambiente de computação em nuvem **`flexível, confiável, dimensionável e seguro com desempenho de rede global de alta qualidade e tolerante a falhas`**.
- Cada local é cuidadosamente avaliado para mitigar os riscos ambientais
- Os data centers têm um design redundante que prevê e tolera falhas enquanto mantém os níveis de serviço
- Para garantir a disponibilidade, os backups dos componentes essenciais do sistema são feitos em vários locais isolados, conhecidos como Zonas de Disponibilidade
- Para garantir a capacidade, AWS monitora continuamente o uso dos serviços para implantar uma infraestrutura compatível com os compromissos e os requisitos de disponibilidade
- Os locais dos data centers não são divulgados e todo o acesso a eles é restrito
- Em caso de falha, os processos automatizados desviam o tráfego de dados do cliente para fora da área afetada
- Um único data center normalmente abriga de 50.000 a 80.000 servidores físicos. Todos os data centers ficam on-line e atendem aos clientes; nenhum data center fica off-line

## **Zonas de disponibilidade** (Região conjunta de data centers)

- Cada Zona de Disponibilidade é composta de um ou mais data centers
- Projetada para isolamento de falhas
- Interconectada com outras Zonas de Disponibilidade por meio de links privados de alta velocidade
- Você escolhe suas Zonas de Disponibilidade
- A AWS recomenda replicar entre Zonas de Disponibilidade para fins de resiliência

## **Regiões AWS** (Região conjunta de zonas de disponibilidade)

- Uma Região da AWS é uma área geográfica
- A AWS tem 24 regiões ao redor do mundo
- Cada Região é composta de duas ou mais Zonas de Disponibilidade
- Você habilita e controla a replicação de dados entre Regiões
- A comunicação entre as Regiões usa a estrutura de conexões de rede da infraestrutura da AWS

Você deve considerar alguns fatores ao selecionar a Região ou as Regiões ideais para armazenar dados e usar os serviços da AWS.

- Uma consideração essencial é a **_governança de dados e os requisitos legais_**. As leis locais podem exigir que determinadas informações sejam mantidas dentro de limites geográficos. Essas leis podem restringir as Regiões onde é possível oferecer conteúdo ou serviços.
- Se todos os demais fatores permanecerem inalterados, será desejável executar os aplicativos e armazenar os dados em uma Região que esteja mais próxima possível do usuário e dos sistemas que os acessarão. Isso ajudará você a reduzir a **`latência`**. O CloudPing é um site que pode ser usado para testar a latência entre sua localização e em todas as Regiões AWS.
- Lembre-se de que nem todos os serviços estão disponíveis em todas as Regiões. Para saber mais, consulte a página AWS Regional Services.
- Por fim, **`há alguma variação no custo da execução de serviços, que pode depender da Região escolhida`**.

## **Pontos de presença** (Rede de entrega de conteudo)

- A AWS fornece uma rede global de 216 locais de pontos de presença.
- Consiste em 205 locais de borda e 11 caches de borda regionais
- Usado com o Amazon CloudFront, uma rede de entrega de conteúdo (CDN) distribui conteúdo aos usuários finais com latência reduzida
- Caches de borda regionais usados para conteúdo com acesso pouco frequente
- Os **`data centers`** são a base da infraestrutura da AWS. Data center é um local onde os dados físicos reais residem e o processamento de dados ocorre.
- Os data centers da AWS são construídos em clusters em várias Regiões globais.
- Os data centers são projetados com segurança, com vários fatores em mente.
- Cada local é cuidadosamente avaliado para mitigar os riscos ambientais
- Os data centers têm um design redundante que prevê e tolera falhas enquanto mantém os níveis de serviço
  Para garantir a disponibilidade, os backups dos componentes essenciais do sistema são feitos em vários locais isolados, conhecidos como Zonas de Disponibilidade
- Para garantir a capacidade, AWS monitora continuamente o uso dos serviços para implantar uma infraestrutura compatível com os compromissos e os requisitos de disponibilidade
- Os locais dos data centers não são divulgados e todo o acesso a eles é restrito
- Em caso de falha, os processos automatizados desviam o tráfego de dados do cliente para fora da área afetada
  Um único data center normalmente abriga de 50.000 a 80.000 servidores físicos. Todos os data centers ficam on-line e atendem aos clientes; nenhum data center fica off-line
