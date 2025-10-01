import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthSuccessResponse } from '../interfaces/auth-sucess-response';
import { Observable } from 'rxjs';
import { ILoginSucessResponse } from '../interfaces/login-sucess-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _httpClient = inject(HttpClient);

  validateUser(): Observable<IAuthSuccessResponse> {
    return this._httpClient.get<IAuthSuccessResponse>('http://localhost:3000/api/protected');
  }

  login(email: string, password: string) {
    const body = {
      email,
      password,
    };
    return this._httpClient.post<ILoginSucessResponse>(
      'http://localhost:3000/api/users/login',
      body
    );
  }
}
