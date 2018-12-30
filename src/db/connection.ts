import knex from 'knex';
import dbconfig from 'config/dbconfig';

// TODO: Add custom knex thingy with type checking (table names etc.)

class DatabaseConnection {
  public connection: knex;

  constructor() {
    this.connection = knex({
      client: 'mysql',
      connection: {
        ...dbconfig,
      },
    });
  }
}

const d = new DatabaseConnection();

export default d.connection;
