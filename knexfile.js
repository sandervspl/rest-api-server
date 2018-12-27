module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'test',
      user:     'root',
      password: 'root',
      port:     8889,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'test',
      user:     'root',
      password: 'root',
      port:     8889,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'test',
      user:     'root',
      password: 'root',
      port:     8889,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
