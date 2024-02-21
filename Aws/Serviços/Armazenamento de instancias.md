- [**Armazenamento de instancias**](#armazenamento-de-instancias)
- [**Volumes**](#volumes)
- [**Casos de uso**](#casos-de-uso)

# **Armazenamento de instancias**

- Os armazenamentos de instâncias fornecem armazenamento temporário em nível de bloco para a instância. Esse armazenamento está localizado em discos que estão anexados fisicamente ao computador host

- Fornece armazenamento temporário para suas instâncias do EC2

- Um armazenamento de instâncias é feito de volumes de armazenamento de instâncias também chamados de unidades temporárias (blocos de dados)

- O armazenamento não é persistente: os dados são recuperados quando a instância do EC2 é encerrada

- Um armazenamento de instâncias é dedicado a uma instância específica do EC2

- É um armazenamento rápido e de baixa latência

- As instâncias com suporte de armazenamento de instâncias não podem ser interrompidas. Elas só podem ser encerradas.

- Os dados são recuperados quando a instância é encerrada, mas permanecem em caso de reinicialização

- Os volumes de armazenamento de instâncias não têm sua própria interface de programação de aplicativos de gerenciamento (API)

- Em vez disso, os volumes de armazenamento de instâncias são especificados usando o recurso de mapeamento de dispositivos de blocos da API do Amazon EC2 e do Console de gerenciamento da AWS

- O usuario não pode criar ou destruir volumes de armazenamento de instâncias, mas pode controlar se eles estão expostos à instância do Amazon EC2 e qual nome de dispositivo é usado

# **Volumes**

- Alguns tipos de instância não oferecem suporte a volumes de armazenamento de instâncias

- Para os tipos de instância compatíveis com eles, o número e o tamanho dos volumes de armazenamento de instâncias disponíveis para uma instância variam de acordo com o tipo de instância

- Os tipos de instância que usam unidades de estado sólido (SSD) baseadas em NVMe (Non-Volatile Memory Express) ou Serial Advanced Technology Attachment (SATA) oferecem alto desempenho de E/S aleatório

- O NVMe pode executar milhares de comandos simultaneamente e é uma forma de acessar a memória

- Esses tipos de instância são uma boa opção quando O usuario precisa de armazenamento com baixa latência, mas não precisa que os dados persistam quando a instância for encerrada

- O usuario deve especificar os volumes de armazenamento de instâncias que deseja usar ao executar uma instância (exceto os volumes de armazenamento de instâncias NVMe, que estão disponíveis por padrão)

- O usuario não pode disponibilizar um volume de armazenamento de instâncias depois de executar a instância

- Depois que a instância é executada, os volumes de armazenamento de instâncias ficam disponíveis para a instância

- No entanto, O usuario não pode acessar os volumes de armazenamento de instâncias até que eles sejam montados

- Para instâncias do Microsoft Windows, o serviço EC2Launch monta os volumes de armazenamento de instâncias para uma instância

- Para instâncias do Linux, o tipo de instância determina quais volumes de armazenamento de instâncias são montados para O usuario e quais exigem que O usuario mesmo monte

# **Casos de uso**

- Os volumes de armazenamento de instâncias da AWS funcionam bem para o armazenamento temporário de informações que estão mudando continuamente, como buffers, caches, dados temporários e outros conteúdos temporários

- O usuario também pode usá-los para dados que são replicados em uma frota de instâncias, como um pool de servidores Web com balanceamento de carga
