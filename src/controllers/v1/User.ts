import * as express from 'express';

export class UserController {
  public test = (req: express.Request, res: express.Response) => {
    res.status(200).send('Subroute successfully installed!');
  }
}

export default UserController;
