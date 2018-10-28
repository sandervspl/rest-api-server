import ApiController from 'controllers/v1/Api';
import Route from 'routes/Route';
// import userRoute from './User';

export class Api extends Route<ApiController> {
  constructor() {
    super('api/v1', new ApiController());
  }

  protected $initRoutes(): void {
    const ctlr = this.controller;

    // All /api routes
    this.registerRoutes([
      {
        route: '/',
        callback: ctlr.test,
        method: 'get',
      },
    ]);

    // Sub routes
    // this.router.use('/user', userRoute.router);
  }
}

export const v1 = new Api();
