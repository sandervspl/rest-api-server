import { Request } from 'express';

export interface AuthRequest extends Request {
  token: string;
}
