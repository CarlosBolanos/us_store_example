import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Logger, Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { User } from './user.model';
import { UsersService } from './users.service';

@Resolver()
export class UserResolver {
  private readonly logger = new Logger(UserResolver.name);
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  user(@Args('id', { type: () => Int }) id: number): Observable<User> {
    this.logger.log('user', {id})
    return this.usersService.getUserById(id)
      .pipe(
        map(resp => resp.data)
      );
  }

  @Query(() => [User])
  users(): Observable<User[]>  {
    this.logger.log('users')
    return this.usersService.getUsers()
      .pipe(
        map(resp => resp.data)
      ) 
  }
}
