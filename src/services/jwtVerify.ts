import * as express from 'express';
import * as i from 'types';

export const jwtVerify = (req: i.AuthRequest, res: express.Response, next: express.NextFunction) => {
  const bearerHeader = req.headers.authorization as string;

  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    req.token = token;

    next();
  } else {
    res.sendStatus(403);
  }
};
