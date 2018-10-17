import * as i from '../types';
import * as express from 'express';
import routesTable from './createRoutesTable';
import Config from '../config/apiconfig';

export default class Route<C> {
  private routeController: C;
  private expressRouter: express.Router;

  constructor(Controller: any) {
    this.expressRouter = express.Router();
    this.routeController = Controller;
  }

  public get router(): express.Router {
    return this.expressRouter;
  }

  public get controller(): C {
    return this.routeController;
  }

  protected registerRoutes(registers: i.RouteRegister[]) {
    const table = [];

    registers.forEach((register) => {
      const methods = [register.middleware, register.callback].filter(m => m != null);

      table.push([
        `${Config.rootUrl}${register.route}`,
        register.method.toUpperCase(),
      ]);

      this.router
        .route(register.route)
        [register.method](...methods);
    });

    routesTable(table);
  }
}
