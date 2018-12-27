import secret from './secret';

const db = secret.getDatabaseInfo();

export default {
  // type: 'mysql',
  host: db.host,
  port: db.port,
  user: db.user,
  password: db.password,
  database: db.database,
  // synchronize: true,
  // logging: false,
};
