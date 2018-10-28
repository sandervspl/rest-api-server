import UserController from 'controllers/v1/User';
import Route from 'routes/Route';

export class UserRoute extends Route<UserController> {
  constructor() {
    super('user', new UserController());

    // All /user routes
    this.registerRoutes([
      {
        route: '/',
        callback: this.controller.test,
        method: 'get',
      },
    ]);
  }
}

export const userRoute = new UserRoute();
