import { Request } from 'express';
import { Repository } from 'typeorm';

export interface AuthRequest extends Request {
  token: string;
}

export interface Repositories {
  [index: string]: Repository<any>;
}
