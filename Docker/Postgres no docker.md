# **Como usar o postgres no docker**

- Comando para instalação

```bash
docker run --name postgresLocal -p 5432:5432 -e POSTGRES_PASSWORD=gglimas -d postgres
```

- Se não definir a porta da erro quando vai conectar
- o _-e_ define as variaveis de ambiente (usuario: POSTGRES_USER; senha: POSTGRES_PASSWORD; banco de dados padrão: POSTGRES_DB)

- Comando para salvar os dados na maquina (usa ao iniciar o container)

```bash
docker run -p 5432:5432 -v /tmp/database:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234 -d postgres
```
