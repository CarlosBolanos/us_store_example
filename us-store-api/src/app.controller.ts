import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get(): User[] {
    return this.appService.getUsers();
  }
}
