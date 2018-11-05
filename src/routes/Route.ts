import * as i from 'types';
import express from 'express';

export default class Route<C> {
  private _router: express.Router;

  constructor(
    public routeRoot: string,
    private _controller: C
  ) {
    this._router = express.Router();
  }

  public get router() {
    return this._router;
  }

  public get controller() {
    return this._controller;
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
  }

  protected registerSubroutes(registers: i.SubrouteRegister[]) {
    registers.forEach((register) => {
      this.router.use(register.route, register.router);
    });
  }
}
