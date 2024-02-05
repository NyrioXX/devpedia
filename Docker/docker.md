# Comandos

```bash
docker --help # lista os comandos do docker
```

```bash
docker ps # listar containers rodando
```

```bash
docker ps -a # lista todos os containers incluindo os que pararam
```

```bash
docker build -t # constroi a imagem (tem que estar na mesma pagina que o dockerfile); O -t significa tag, o docker gera uma tag ajuda no versionamento
```

```bash
docker run 'nome da imagem' # roda a imagem
```

```bash
docker exec -ti 'id_do_container' (obtido com o comando docker ps) # executa o container
```

```bash
'comando' -d # mantem o container rodando em background (libera o terminal)
```

```bash
docker inspect # inspeciona qualquer coisa e traz um json com informações
```

# Volumes

Existem 3 tipos de volume docker:

- Docker volume -> gerenciado pelo docker, monta dentro do container
- Docker bind -> cria um caminho entre um diretorio local e o volume docker
- tmpfs -> armazenamente temporario de recursos que só existe enquanto o container estiver ativo, usado para dados sensiveis

# Criar volume

- Docker volume

```bash
docker volume create 'nome_do_volume'
```

- Docker bind

```bash
 docker run -d '(rodar em background)' --name 'nome_do_container' --mount type=`tipo_do_volume`,source = `caminho_da_pasta_local`,target=`nome_do_workdir_no_dockerfile`
```

# Redes

Geralmente containers não são usados sozinhos e devem se conectar com outros containers para aumentar a eficiencia

- Bridge -> tipo padrão, comunica containers dentro de ecossistemas isolados. Tambem cria resolução de dns em que pode dar nomes aos containers e conectar passando os nomes
- Host -> usa a rede do host para compartilhar. O que for valido como rede para o pc será valido como rede para o docker
- Overlay -> quando ha varios hosts permite comunicação segura entre diversos componentes e hosts, podendo ser em maquinas diferentes

# Criar rede

```bash
docker network create --driver='tipo_da_rede' --subnet=`numero_da_subnet` --ip-range='range_de_ip' --gateway='numero_do_gateway' 'nome da rede'
```

# Ver rede

```bash
docker network ls
```

# Ecossistema de containers

- Docker compose serve para criar apis inteiras que se comunicam. Basicamente é um preset da api que roda quando desejado
- Orquestradores são ferramentas que permitem administrar varios containers ao mesmo tempo. O mais famoso atualmente é o kubernetes
