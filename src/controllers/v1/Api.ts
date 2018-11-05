import { Request, Response } from 'express';

export class ApiController {
  public test = (req: Request, res: Response) => {
    res.status(200).send('Successfully installed!');
  }
}

export default ApiController;
