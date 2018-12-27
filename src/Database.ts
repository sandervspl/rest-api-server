import knex from 'knex';
// import secret from 'config/secret';
import dbconfig from 'config/dbconfig';

class Database {
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

const d = new Database();

export default d.connection;
