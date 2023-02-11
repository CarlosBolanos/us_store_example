import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService){}

  getUserById(id: number): Observable<AxiosResponse<User>>  {
    return this.httpService.get(`http://users-api:5001/users/${id}`);
  }

  getUsers(): Observable<AxiosResponse<User[]>> {        
    return this.httpService.get(`http://users-api:5001/users`)      
  }
}
