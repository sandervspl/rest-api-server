import { Controller, Get, Post, Body } from '@nestjs/common';
import UserService from 'services/v1/User';

@Controller('user')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  private async findAll() {
    return this.userService.findAll();
  }
}
