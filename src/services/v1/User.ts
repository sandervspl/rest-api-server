import { Injectable } from '@nestjs/common';
import db from 'Database';

@Injectable()
export default class UserService {
  public findAll() {
    return db.select().from('users');
  }
}
