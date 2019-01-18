import * as i from 'types';

export const jwtVerify: i.RequestHandler = (req: i.AuthRequest, res, next) => {
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
