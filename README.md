# react-node-redis-mysql-demo
---

## Setup instructions

1) Install `knex` package **globally** for `database` migrations.
```shell
$ npm install knex -g
```

2) `cd` into the `server` folder.
3) Create a `.env` file with the following values.
```javascript
DB_PASSWORD=foo
DB_NAME=demo
DB_CLIENT=mysql2
DB_HOST=localhost
DB_USER=root

REDIS_HOST=localhost
REDIS_PORT=4001
REDIS_DEFAULT_PASSWORD=demo
REDIS_USERNAME=rakib
REDIS_PASSWORD=123456

SERVER_PORT=4000
```

4) Run the following commands to do `database` migration & seed
```shell
$ npm install
$ knex migrate:latest
$ knex seed:run
```

5) Start the `node.js` server from the `/server` folder
```shell
$ node index.js
```

6) Start the `react.js` app by opening another terminal at the project `root` folder & then `cd` into the `app` folder.
```shell
# At the project root folder
# cd into the `app` folder
$ cd app
$ npm install
$ npm run dev
```