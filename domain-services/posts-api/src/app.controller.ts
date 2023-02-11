import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from './models';

@Controller('/posts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getById(@Param() params): Post {
    return this.appService.getPost(params.id);
  }

  @Get()
  get(): Post[] {
    return this.appService.getPosts();
  }
}
