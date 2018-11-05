import { Request, Response } from 'express';

export class UserController {
  public test = (req: Request, res: Response) => {
    res.status(200).send('Subroute successfully installed!');
  }
}

export default UserController;
