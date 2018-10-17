import * as express from 'express';

export class ApiController {
  public test = (req: express.Request, res: express.Response) => {
    res.status(200).send('Successfully installed!');
  }
}

export default ApiController;
