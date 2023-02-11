import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  constructor(private readonly httpService: HttpService){}
  
  findAllByAuthorId(authorId: number): Observable<AxiosResponse<Post[]>> {
    return this.httpService.get(`http://posts-api:5002/author/${authorId}/posts`);
  }

  findOne(postId: number): Observable<AxiosResponse<Post>> {
    return this.httpService.get(`http://posts-api:5002/posts/${postId}`);
  }

  findAll(): Observable<AxiosResponse<Post[]>> {
    console.log('f: spinner.findAll')
    return this.httpService.get(`http://posts-api:5002/posts`);
  }
}