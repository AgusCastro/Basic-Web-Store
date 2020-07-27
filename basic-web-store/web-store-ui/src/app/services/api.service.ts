import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../domain/User';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.userUrl;
  principalUrl: string = environment.principalUrl;

  login(loginPayload) {
    const headers = {
      'Authorization': 'Basic ' + btoa('devglan-client:devglan-secret'),
      'Content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    };
    return this.http.post(this.principalUrl + '/oauth/token', loginPayload, {headers});
  }

  getUsers() {
    return this.http.get(this.baseUrl + '/user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  createUser(user: User){
    return this.http.post(this.baseUrl + '/user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }
  registerUser(user: User){
    return this.http.post(this.principalUrl + '/registerUser', user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/user/' + user.id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }

  deleteUser(id: number){
    return this.http.delete(this.baseUrl + '/user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
  currentUser(): Observable<any>{
    return this.http.get(this.baseUrl + '/user/current?access_token=' +
      JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
}
