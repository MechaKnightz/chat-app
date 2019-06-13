import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginUser } from '@app/_models/loginUser';
import { environment } from '@src/environments/environment'

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<LoginUser[]>(`${environment.loginUrl}/users`);
    }

    getById(id: number) {
        return this.http.get<LoginUser>(`${environment.loginUrl}/users/${id}`);
    }
}