import * as express from 'express';
import { Repository } from 'typeorm';

export interface AuthRequest extends express.Request {
  token: string;
}

export interface Repositories {
  [index: string]: Repository<any>;
}
