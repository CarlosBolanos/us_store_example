import { Module } from '@nestjs/common';
import { UserResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [],
  providers: [UsersService, UserResolver],
})
export class UsersModule {}
