import { Query, Args, ResolveField, Resolver, Parent } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './models/post.model';
import { User } from './models/user.model';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query((returns) => Post)
  findPost(@Args('id') id: number): Post {
    return this.postsService.findOne(id);
  }

  @Query((returns) => [Post])
  getPosts(): Post[] {
    return this.postsService.findAll();
  }

  @ResolveField((of) => User)
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId };
  }
}