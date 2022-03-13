# Short.vue Server

O servidor é responsável por toda a lógica de encurtamento de URL.

Ele disponibiliza uma API que retorna a URL encurtada ao fazer um `POST` request para `/api/short`

Você pode fazer um `GET` request para `/api/top` para ver os links mais clicados do banco de dados.

<hr>

## Project setup

```
yarn install
```

## Como iniciar o servidor:

```
nodemon app.js
```

## .ENV

É necessário configurar as variáveis de ambiente, um exemplo de `.env` é:

> Lembre-se de alterar o \<username> e o \<password> na MONGO_URI

```
PORT=3333
BASE_URL=http:localhost:3333/
MONGO_URI=mongodb+srv://<username>:<password>@urlshortenercluster.8pfxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
