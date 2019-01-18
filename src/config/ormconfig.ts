import secret from './secret';

const db = secret.databaseInfo;

export default {
  type: 'mysql',
  host: db.host,
  port: db.port,
  username: db.user,
  password: db.password,
  database: db.database,
  synchronize: true,
  logging: false,
};
