import { Module } from '@nestjs/common';
import UserController from 'controllers/v1/User';
import UserService from 'services/v1/User';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export default class UserModule {}
