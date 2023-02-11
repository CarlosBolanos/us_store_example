import { Query, Args, ResolveField, Resolver, Parent } from '@nestjs/graphql';
import { map, Observable } from 'rxjs';
import { PostsService } from './posts.service';
import { Post } from './models/post.model';
import { User } from './models/user.model';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query((returns) => Post)
  findPost(@Args('id') id: number): Observable<Post> {
    console.log('f: spinner.findPost')
    return this.postsService.findOne(id).pipe(
      map(response => response.data)
    );
  }

  @Query((returns) => [Post])
  getPosts(): Observable<Post[]> {
    console.log('f: spinner.getPosts')
    return this.postsService.findAll().pipe(
      map(response => response.data)
    );
  }

  @ResolveField((of) => User)
  user(@Parent() post: Post): any {
    console.log('f: spinner.user.resolveField')
    return { __typename: 'User', id: post.authorId };
  }
}