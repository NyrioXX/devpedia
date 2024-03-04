# **NestJs**

## **Comandos**

- **Criando um projeto**

```bash
nest new 'nome-do-projeto'
```

- **Criando modulos/services/controllers/resources**

```bash
nest generate controller/service/module/resouces 'nome-do-modulo'
# generate pode ser substituido por apenas a letra g
nest g controller 'pasta'/'nome-do-modulo'
# dessa forma cria um pasta no momento da criação do recurso, ideal para separar dentro da pasta src
```

## **Usando variaveis de ambiente**

### **Instalando modulo de configuração**

```bash
npm i --save @nestjs/config
```

### **Importar o modulo de configuração**

- No arquivo app.modules.ts importar o modulo e serviço config

```javascript
import { ConfigModule, ConfigService } from "@nestjs/config";
```

## **Usando TypeORM**

### **Instalação do TypeORM**

```bash
npm install --save @nestjs/typeorm typeorm
```

### **Instalação de banco de dados (Postgres como exemplo)**

```bash
npm i pg @types/pg
```

### **Configurando o TypeORM**

- No arquivo app.module.ts configurar o ORM importando o modulo
- No TypeOrmModule imports:[] e inject:[] colocar as configuração do dotenv
- No useFactory: ()=>{} aplica as configurações do dotenv usando configService.get('nome da config no .env')

```javascript
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TodoModule } from "./app/todo/todo.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("DB_HOST"),
        port: Number(configService.get("DB_PORT")),
        username: configService.get("DB_USER"),
        password: configService.get("DB_PASSWORD"),
        database: configService.get("DB_DATABASE"),
        entities: [__dirname + "/**/*.entity{.js,.ts}"],
        synchronize: true,
      }),
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## **Usando Auth0**
