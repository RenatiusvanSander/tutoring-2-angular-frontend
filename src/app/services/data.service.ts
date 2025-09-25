import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  static apiUrl: String = 'http://localhost:8082/tutoring3/api';

  constructor(private http: HttpClient) { }

  getByUserId(id: number) : Observable<User> {
    return this.http.get<User>(DataService.apiUrl + '/users/get-users/by-user-id/' + id)
    .pipe(
      map( (data: User) => User.fromHttp(data))
    );
  }

  getUser() : Observable<User> {
    return this.http.get<User>(DataService.apiUrl + '/users/get-users/get-user')
    .pipe(
      map( (data: User) => User.fromHttp(data))
    );
  }
}
