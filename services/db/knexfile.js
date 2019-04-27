// Update with your config settings.

module.exports = {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    database: "got_api",
  },
  port: 5432,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
  seeds: {
    directory: `${__dirname}/services/db/seeds/`,
  },
};
