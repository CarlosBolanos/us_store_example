import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { UserResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [HttpModule],
  providers: [UsersService, UserResolver],
})
export class UsersModule {}
