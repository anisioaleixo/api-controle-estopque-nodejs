// Update with your config settings.

const path = require('path')
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'db_estoque',
      user: 'userdbestoque',
      password: 'my_password_db_estoque'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
      tableName: 'knex_seeds'
    }
  }

};
