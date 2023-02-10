import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getById(@Param() params): User {
    return this.appService.getUser(params.id);
  }

  @Get()
  get(): User[] {
    return this.appService.getUsers();
  }
}
