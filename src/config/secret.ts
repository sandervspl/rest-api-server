import * as i from '../types';

/*
    ADD THIS FILE TO GITIGNORE WHEN PUSHING TO GIT
*/

class Secret implements i.SecretInfo {
  /*
      UPDATE THE DATABASE SETTINGS
  */
  private database: i.DatabaseConnectDetails = {
    host: 'localhost',
    port: 3306,
    user: 'USER',
    password: 'PASSWORD',
    database: 'DATABASE',
  };
  private jwtSecret = '<ADD RANDOM STRING HERE>';

  public getDatabaseInfo(): i.DatabaseConnectDetails {
    return this.database;
  }

  public getJwtSecret(): string {
    return this.jwtSecret;
  }
}

const s = new Secret();

export default s;
