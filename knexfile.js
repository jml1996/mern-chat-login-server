module.exports = {

    development: {
      client: 'sqlite3',
      useNullAsDefault:true,
      connection: {
        filename: './data/expat.db3'
      }
    },
  
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      },
      seeds:{
        directory:'./data/seeds'
      }
    },
    production: {
      client: 'pg',
      connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: './data/migrations'
      },
      seeds:{
        directory:'./data/seeds'
      }
    }
  };