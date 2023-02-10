import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
};

@Injectable()
export class AppService {  
  getUser(id: number): User {
    return { id: 1, firstName: 'raul', lastName: 'bolanos' };
  }

  getUsers(): User[] {
    return [
      { id: 1, firstName: 'raul', lastName: 'bolanos' },
      { id: 2, firstName: 'esperanza', lastName: 'rodriguez' },
    ];
  }
}
