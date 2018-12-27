import { Module } from '@nestjs/common';
import UserModule from 'modules/v1/User';

@Module({
  imports: [UserModule],
})
export default class ApplicationModule {}
