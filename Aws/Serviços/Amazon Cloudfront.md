- [**Amazon CloudFront**](#amazon-cloudfront)
  - [**Conceitos**](#conceitos)
  - [**Custos**](#custos)

# **Amazon CloudFront**

## **Conceitos**

- Serviço de entrega de conteudo (CDN)

- O Amazon CloudFront é um serviço Web que acelera a distribuição do conteúdo estático e dinâmico da Web, como arquivos .html, .css, .js e arquivos de imagem, para os usuários

- O Amazon CloudFront entrega conteúdo por meio de uma rede mundial de datacenters denominados pontos de presença

- Ao usar o CloudFront, o usuario pode usar vários locais em todo o mundo para entregar seu conteúdo. O uso de uma CDN permite que os usuários interajam com o aplicativo com menor latência. Como resultado, o CloudFront permite que o usuario dimensione, economize dinheiro e melhore o desempenho dos aplicativos

- O Amazon CloudFront oferece os seguintes benefícios:

  1. Construído com base na infraestrutura global da AWS em expansão, com uma rede de pontos de presença que permite que os aplicativos ofereçam alta disponibilidade, escalabilidade e desempenho

  2. Projetado para ser seguro, com proteção de rede e de nível de aplicativo

  3. Projetado para ser programável, para que o usuario possa executar seu código em locais da AWS em todo o mundo, permitindo que o usuario responda aos usuários com a menor latência

  4. Otimizado para baixa latência e alta velocidade de transferência de dados

  5. Custo efetivo porque o usuario paga apenas pela transferência de dados e pelas solicitações usadas para entregar conteúdo aos seus clientes

     - Com o CloudFront, não são exigidos pagamentos adiantados ou taxas fixas de plataforma, compromissos de longo prazo, taxas adicionais para conteúdo dinâmico e serviços profissionais para começar a usar
     - Se o usuario usar origens da AWS, como o Amazon Simple Storage Service (Amazon S3) ou o Elastic Load Balancing, pagará apenas pelos custos de armazenamento, e não pelos dados transferidos entre esses serviços e o CloudFront

  6. Funciona com outros serviços da AWS para que o usuario possa distribuir conteúdo para usuários finais com baixa latência, altas velocidades de transferência de dados e sem compromissos mínimos exigidos

## **Custos**

- Quando o usuario começa a estimar o custo do Amazon CloudFront, deve considerar a distribuição de tráfego, as solicitações e a transferência de dados para fora

1. `Distribuição de tráfego`
   - A transferência de dados e os preços das solicitações variam entre regiões geográficas. Além disso, os preços são baseados no ponto de presença de onde seu conteúdo é veiculado
2. `Solicitações`
   - O número e o tipo de solicitações (HTTP ou HTTPS) feitas e a região geográfica onde as solicitações são feitas
3. `Transferência de dados de saída`
   - A quantidade de dados transferida para fora dos pontos de presença do CloudFront
