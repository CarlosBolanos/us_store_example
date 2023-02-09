import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UsersService } from './users.service';

@Resolver()
export class UserResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.getUserById(id);
  }

  @Query(() => [User])
  users(): User[] {
    return this.usersService.getUsers();
  }
}
