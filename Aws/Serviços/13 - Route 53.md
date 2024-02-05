- [**Route 53**](#route-53)
  - [**Conceitos**](#conceitos)
  - [**DNS e elastic load balancer**](#dns-e-elastic-load-balancer)
  - [**Politicas de roteamento**](#politicas-de-roteamento)

# **Route 53**

## **Conceitos**

- O Amazon Route 53 fornece um serviço Web de Domain Name System (DNS) na nuvem altamente disponível e escalável
- O Amazon Route 53 foi projetado para fornecer uma maneira confiável e econômica de rotear usuários finais a aplicativos da Internet
- Ele converte URLs —como www.example.com—em endereços IP numéricos que os computadores usam para se conectar uns com os outros, como 192.0.2.1

- O Amazon Route 53 conecta solicitações de usuários à infraestrutura em execução na AWS

  - Exemplos dessa infraestrutura são instâncias do Amazon Elastic Compute Cloud (Amazon EC2), balanceadores de carga do ELB ou buckets do Amazon Simple Storage Service (Amazon S3)
  - Ela também pode ser usada para rotear usuários para infraestruturas fora da AWS

- Você pode usar o Amazon Route 53 para configurar verificações de integridade do DNS. Dessa forma, ele pode rotear o tráfego para pontos de extremidade íntegros ou monitorar de forma independente a integridade do aplicativo e dos seus pontos de extremidade

- O Amazon Route 53 permite gerenciar o tráfego globalmente por meio de vários tipos de roteamento, incluindo roteamento baseado em latência, roteamento baseado em geoproximidade ou geolocalização e weighted round robin

- Esses tipos de roteamento podem ser combinados com failover de DNS para permitir uma variedade de arquiteturas de baixa latência e tolerantes a falhas

- O Amazon Route 53 também oferece registro de nome de domínio. ‒ Você pode comprar e gerenciar nomes de domínio, como example.com, e o Amazon Route 53 automaticamente definirá as configurações de DNS para os seus domínios.

## **DNS e elastic load balancer**

- Quando você cria um balanceador de carga do ELB, ele recebe um nome DNS padrão. Você pode optar por usar o nome DNS padrão ou associar o seu próprio nome DNS, que pode ser gerenciado usando o Route 53

  - Por exemplo, você pode registrar um nome de domínio, como example.com, para o seu site ou aplicativo da Web. Em seguida, você poderia rotear o tráfego da Internet para os recursos em sua conta da AWS
  - Um registro CNAME pode redirecionar consultas DNS para qualquer registro DNS. Por exemplo, você pode criar um registro CNAME que redireciona consultas de apex.example.com para acme.example.com ou acme.example.org
  - Um registro de alias só pode redirecionar consultas para recursos selecionados da AWS. Exemplos desses recursos podem ser buckets do S3, distribuições do Amazon CloudFront ou outro registro na zona hospedada do Route 53 em que você cria o alias

## **Politicas de roteamento**

- O Amazon Route 53 oferece suporte a sete políticas de roteamento diferentes.

  1.  `Política de roteamento simples`: use para um único recurso que execute uma determinada função para o seu domínio, por exemplo, um servidor Web que oferece conteúdo para o site example.com

  2.  `Política de roteamento ponderado`: use para rotear o tráfego para vários recursos nas proporções que você especificar

      - O roteamento ponderado do Amazon Route 53 desloca o tráfego do antigo sistema para o novo (**_`implantação azul e verde`_**)

      - Uma implantação azul/verde é uma implantação que reduz o risco de o site ou o aplicativo ficar indisponível porque você executa dois ambientes de produção correspondentes. Um ambiente é conhecido como ambiente azul e o outro ambiente é conhecido como ambiente verde

      - Os dois ambientes paralelos, cada um com seu próprio balanceador de carga do ELB e configuração do Amazon EC2 Auto Scaling. O recurso de roteamento ponderado do Route 53 é então usado para começar a deslocar os usuários do ambiente existente (azul) para o novo ambiente (verde).

      - Esse processo pode ser feito para migrar usuários para o ambiente verde novo ou atualizado

      - Tecnologias como o Amazon CloudWatch e o Amazon CloudWatch Logs podem ser usadas para monitorar o ambiente verde

      - Se forem encontrados problemas em qualquer lugar do novo ambiente, o roteamento ponderado do Route 53 poderá ser implantado para transferir os usuários de volta para os servidores azuis em execução. Quando o novo ambiente verde estiver totalmente ativo e em execução sem problemas, o ambiente azul poderá ser gradualmente desligado. Devido à latência potencial dos registros DNS, um desligamento total do ambiente azul pode levar de um dia a uma semana

  3.  `Política de roteamento de latência`: use quando você tiver recursos em várias regiões da AWS e quiser rotear o tráfego para a região que fornece a latência mais baixa

      - Suponha que você queira distribuir a sua arquitetura de implantação entre várias regiões em todo o mundo e fornecer aos usuários o tempo de resposta mais rápido. Muitas vezes, mas nem sempre, a Região geograficamente mais próxima do usuário fornece os tempos de resposta mais rápidos

      - Para situações como essa, você pode usar o Route 53 para executar o que é conhecido como _latency-based routing (LBR)_. O LBR permite que você use o DNS para rotear solicitações de usuário para a região da AWS que fornecerá aos usuários a resposta mais rápida

      - Por exemplo, suponha que você tenha load balancers na região Oeste dos EUA (Oregon) e na região Ásia-Pacífico (Sydney). Você criou um conjunto de registros de recursos de latência no Amazon Route 53 para cada load balancer. Um usuário em Barcelona, Espanha, insere o nome do seu domínio em um navegador, O DNS roteia a solicitação para um servidor de nomes do Route 53. O Route 53 refere-se a seus dados de latência entre as diferentes regiões e roteia a solicitação adequadamente

  4.  `Política de roteamento de failover`: use quando quiser configurar o failover ativo/passivo

  5.  `Política de roteamento de geolocalização`: use quando quiser rotear o tráfego com base na localização dos seus usuários

  6.  `Política de roteamento de geoproximidade`: use quando desejar rotear o tráfego com base na localização dos seus recursos e, opcionalmente, alternar o tráfego de recursos em uma localização para recursos em outra

  7.  `Roteamento de resposta com valores múltiplos`: use quando quiser que o Route 53 responda a consultas DNS com até oito registros íntegros selecionados aleatoriamente
