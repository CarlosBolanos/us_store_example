import { Parent, Args, ID, Int, Query, ResolveField, Resolver, ResolveReference } from '@nestjs/graphql';
import { Logger, Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { User } from './models/user.model';

import { UsersService } from './users.service';


@Resolver((of) => User)
export class UsersResolver {  
  constructor(private usersService: UsersService) {}

  @Query((returns) => User)
  user(@Args({ name: 'id', type: () => ID }) id: number): Observable<User> {
    return this.usersService.getUserById(id)
      .pipe(
        map(resp => resp.data)
      );
  }

  @Query(() => [User])
  users(): Observable<User[]>  {
    console.log('f: spinner.users')
    return this.usersService.getUsers()
      .pipe(
        map(resp => resp.data)
      ) 
  }


  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): Observable<User> {
    return this.usersService.getUserById(reference.id)
    .pipe(
      map(resp => resp.data)
    );
  }
}
