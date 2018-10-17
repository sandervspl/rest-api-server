import Route from './Route';
import ApiController from '../controllers/Api';
// import userRoute from './User';

class Api extends Route<ApiController> {
  constructor() {
    super(new ApiController());
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

export default new Api();
