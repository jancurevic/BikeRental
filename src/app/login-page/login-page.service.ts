import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
  url: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.url = environment.backendUrl;
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });
  }

  logIn(username, password): Observable<{ token: string; admin: boolean }> {
    const parameters = `?username=${username}&password=${password}`;
    return this.http.post(
      `${this.url}token${parameters}`,
      {},
      { headers: this.headers }
    ) as Observable<{ token: string; admin: boolean }>;
  }

  logout() {
    this.auth.logout();
  }
}
