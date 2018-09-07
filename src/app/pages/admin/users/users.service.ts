import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private baseUrl: string = 'http://localhost:8080/pages/user';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private _httpClient: HttpClient) { }
    user: User;
    getUsers() {
        return this._httpClient.get(this.baseUrl + '/select');
    }

    deleteUser(user: User) {
        return this._httpClient.delete(this.baseUrl + '/delete/' + user.id);
    }
    addUser(user: User) {
        return this._httpClient.post<User>(this.baseUrl + '/insert', user).pipe(
            map(data => data)
        );
    }
    getUserById(id: number) {
        return this._httpClient.get(this.baseUrl + '/select/' + id).pipe(
            map(data => data));
    }

    updateUser(user: User) {
        return this._httpClient.put(this.baseUrl + '/edit', user).pipe(
            map(data => data));
    }
    setter(user: User) {
        this.user = user;
    }
}