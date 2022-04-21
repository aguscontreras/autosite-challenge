import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apirUrl: string;
  constructor(private http: HttpClient) {
    this.apirUrl = environment.apiUrl;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apirUrl}/users`);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apirUrl}/users/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apirUrl}/users`, user);
  }
}
