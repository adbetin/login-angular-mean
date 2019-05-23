import { Component, OnInit, Input } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { LoginResponse } from '../login-response';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [LoginService]
})
export class LoginFormComponent {

  constructor(
    private loginService: LoginService,
    private spinner: NgxSpinnerService) { }

  @Input()
  loginModel: Login;

  @Input()
  loginHandler: Function;

  doLogin(loginModel: Login) {
    if (this.isValid()) {
      this.spinner.show()
      this.loginService.doLogin(loginModel).then((loginResponse: LoginResponse) => {
        this.loginHandler(loginResponse);
        this.spinner.hide();
      }, (error: any) => {
        this.loginHandler(error)
        this.spinner.hide();
      });
    }
  }

  isValid = (): boolean => {
    return this.loginModel.password != "" && this.loginModel.user != ""
  }
}
