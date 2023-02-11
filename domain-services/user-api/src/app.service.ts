import { Injectable } from '@nestjs/common';
import { User } from './models';

@Injectable()
export class AppService {  
  getUser(id: number): User {
    console.log('f: api.users', {id})
    return { id: 1, firstName: 'raul', lastName: 'bolanos' };
  }

  getUsers(): User[] {
    console.log('f: api.users')
    return [
      { id: 1, firstName: 'raul', lastName: 'bolanos' },
      { id: 2, firstName: 'esperanza', lastName: 'rodriguez' },
    ];
  }
}
