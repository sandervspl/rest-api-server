import * as i from 'types';

export class ApiController {
  public test: i.RequestHandler = (req, res) => {
    res.status(200).send('Successfully installed!');
  }
}

export default ApiController;
