import { Injectable } from '@nestjs/common';
import { User } from './models';

@Injectable()
export class AppService {  
  getUser(id: number): User {
    console.log('f: api.users.getUser', {id})
    return { id: 1, firstName: 'raul', lastName: 'bolanos' };
  }

  getUsers(): User[] {
    console.log('f: api.users.getUsers')
    return [
      { id: 1, firstName: 'raul', lastName: 'bolanos' },
      { id: 2, firstName: 'esperanza', lastName: 'rodriguez' },
    ];
  }
}
