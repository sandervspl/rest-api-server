import { Injectable } from '@nestjs/common';
import { Service } from 'services/Service';
import * as entities from 'entities';

@Injectable()
export default class UserService extends Service<entities.User> {
  constructor() {
    super(entities.User);
  }

  public findAll() {
    return this.repo.find();
  }
}
