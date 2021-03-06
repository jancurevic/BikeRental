import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from './login-page.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  loading: boolean;
  error: boolean;

  constructor(private loginService: LoginService, private router: Router, private user: UserService) {}

  ngOnInit() {
    this.loading = false;
    this.error = false;
  }

  get loginForm() {
    return this.user.loginForm as FormGroup;
  }

  registration() {
    this.router.navigate(['/registration']);
  }

  logUser() {
    this.error = false;
    this.loading = true;
    this.loginService.logIn(this.user.username, this.user.password).subscribe((data) => {
      this.user.updateData(data);
      //console.log(this.user.data);
      if (data.token.length > 0) {
        data.admin ? this.router.navigate(['/admin-dashboard']) : this.router.navigate(['/user-dashboard']);
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('token', data.token);
      } else {
        this.error = true;
      }
    });
    this.loading = false;
  }
}
