import * as i from 'types';
import { Response, NextFunction } from 'express';

export const jwtVerify = (req: i.AuthRequest, res: Response, next: NextFunction) => {
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
