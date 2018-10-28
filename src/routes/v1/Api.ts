import ApiController from 'controllers/v1/Api';
import Route from 'routes/Route';
import { userRoute } from './User';

export class V1 extends Route<ApiController> {
  constructor() {
    super('api/v1', new ApiController());

    // All /api/v1 routes
    this.registerRoutes([
      {
        route: '/',
        callback: this.controller.test,
        method: 'get',
      },
    ]);

    // Sub routes
    this.registerSubroutes([
      {
        route: '/user',
        router: userRoute.router,
      },
    ]);
  }
}

export const v1 = new V1();
