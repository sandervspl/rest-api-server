import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import Config from 'config/apiconfig';
import * as routes from 'routes';
import secret from 'config/secret';
import { routesTable } from './services';

class Server {
  private app: express.Application;

  public init = () => {
    // Init Express server
    this.app = express();

    // Block the header from containing information about the server
    this.app.disable('x-powered-by');

    // Enable CORS
    this.app.use(cors());

    // Enable bodyParser to read JSON content
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    // Enable cookieParser to enable cookies
    this.app.use(cookieParser());

    // Init routes
    Object.values(routes).forEach(api => (
      this.app.use(`${Config.rootUrl}${api.routeRoot}`, api.router)
    ));

    routesTable.generate(this.app);

    // 404 route
    this.app.use((req, res) => {
      res.sendStatus(404);
    });

    // Init Database
    require('./Database');

    // Start express server
    this.app.listen(Config.port, () => {
      const db = secret.getDatabaseInfo();
      console.info(`API server started on ${db.host}:${Config.port}${Config.rootUrl}`);
    });
  }
}

const server = new Server();
server.init();
