import * as i from '../types';
import * as express from 'express';
import routesTable from './createRoutesTable';
import Config from '../config/apiconfig';

export default class Route<C> {
  private routeController: C;
  private expressRouter: express.Router;

  constructor(
    protected routeRoot: string,
    Controller: any
  ) {
    this.expressRouter = express.Router();
    this.routeController = Controller;

    this.$initRoutes();
  }

  public get router(): express.Router {
    return this.expressRouter;
  }

  public get controller(): C {
    return this.routeController;
  }

  // $initRoute() should be used in routes to define endpoints
  // tslint:disable-next-line
  protected $initRoutes() {}

  protected registerRoutes(registers: i.RouteRegister[]) {
    const table = [];

    registers.forEach((register) => {
      const methods = [register.middleware, register.callback].filter(m => m != null);

      table.push([
        register.method.toUpperCase(),
        `${Config.rootUrl}${this.routeRoot}${register.route}`,
      ]);

      this.router
        .route(register.route)
        [register.method](...methods);
    });

    routesTable(table);
  }
}
