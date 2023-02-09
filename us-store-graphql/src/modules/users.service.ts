import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  getUserById(id: number): User {
    return { id, firstName: 'carlos', lastName: 'bolanos' };
  }

  getUsers(): User[] {
    console.log('f: getUsers');
    return [
      { id: 1, firstName: 'raul', lastName: 'bolanos' },
      { id: 2, firstName: 'esperanza', lastName: 'rodriguez' },
    ];
  }
}
