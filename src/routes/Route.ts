import * as i from 'types';
import * as express from 'express';
import { generateRoutesTable } from 'services';
import { V1 } from './v1/Api';

export default class Route<C> {
  private routeController: C;
  private _router: express.Router;

  constructor(
    public routeRoot: string,
    Controller: any
  ) {
    this._router = express.Router();
    this.routeController = Controller;
  }

  public get router() {
    return this._router;
  }

  public get controller() {
    return this.routeController;
  }

  protected registerRoutes(registers: i.RouteRegister[]) {
    const table = [];

    registers.forEach((register) => {
      const methods = [register.middleware, register.callback].filter(m => m != null);

      table.push([
        register.method.toUpperCase(),
        this.routeRoot + register.route,
      ]);

      this.router
        .route(register.route)
        [register.method](...methods);
    });

    // generateRoutesTable(table);
  }

  protected registerSubroutes(registers: i.SubrouteRegister[]) {
    registers.forEach((register) => {
      this.router.use(register.route, register.router);
    });
  }
}
