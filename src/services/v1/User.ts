import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserService {
  public findAll() {
    return 'Hello world!';
  }
}
