import * as i from 'types';

/*
    ADD THIS FILE TO GITIGNORE WHEN PUSHING TO GIT
*/

class Secret implements i.SecretInfo {
  /*
      UPDATE THE DATABASE SETTINGS
  */
  private database: i.DatabaseConnectDetails = {
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'test',
  };
  private jwtSecret = 'rgt24r3-qefwrgeth3y524twefs-dbteh35wy24t3qrw';

  public getDatabaseInfo(): i.DatabaseConnectDetails {
    return this.database;
  }

  public getJwtSecret(): string {
    return this.jwtSecret;
  }
}

const s = new Secret();

export default s;
