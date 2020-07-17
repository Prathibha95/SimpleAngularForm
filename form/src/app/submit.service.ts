import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  constructor(private http: HttpClient) { }

submit(user: User) {
  return this.http.post(environment.apiBaseUrl + '/submit', user);
}
}
