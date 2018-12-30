import { Injectable } from '@nestjs/common';
import db from 'db/connection';

@Injectable()
export default class UserService {
  public findAll() {
    return db.select().from('users');
  }
}
