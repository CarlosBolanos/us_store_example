import { Injectable } from '@nestjs/common';
import { Post } from './models';

@Injectable()
export class AppService {  
  private posts: Post[] = [
    { authorId: 1, id: 1, title: 'Lorem Ipsum' },
    { authorId: 1, id: 2, title: 'Foo' },
    { authorId: 2, id: 3, title: 'Bar' },
    { authorId: 2, id: 4, title: 'Hello World' },
  ]

  getPost(id: number): Post {
    console.log('f: posts.api.srvc.getPost', {id})
    return this.posts.find(it => it.authorId === Number(id));
  }

  getPosts(): Post[] {
    console.log('f: posts.api.srvc.getPosts')
    return this.posts;
  }
}
