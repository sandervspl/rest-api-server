import path from 'path';
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'test',
      user:     'root',
      password: 'root',
      port:     8889,
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
      tableName: 'knex_migrations',
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'test',
      user:     'root',
      password: 'root',
      port:     8889,
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'test',
      user:     'root',
      password: 'root',
      port:     8889,
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
      tableName: 'knex_migrations',
    },
  },
};
