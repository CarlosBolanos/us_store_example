import { Injectable } from '@nestjs/common';

export type User = {
  firstName: string;
  lastName: string;
};

@Injectable()
export class AppService {
  getUsers(): User[] {
    return [
      { firstName: 'raul', lastName: 'bolanos' },
      { firstName: 'esperanza', lastName: 'rodriguez' },
    ];
  }
}
