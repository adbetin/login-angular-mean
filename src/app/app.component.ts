import { Component } from '@angular/core';
import { Login } from './login/login';
import { LoginResponse } from './login/login-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Login V1.0';

  loginModel: Login

  constructor(){
    this.resetLoginModel();
  }

  responseLogin = (loginResponse: LoginResponse) => {
    if(!!loginResponse){
      alert("Bienvenido " + loginResponse.name + " " + loginResponse.lastName + ": " + loginResponse.token);
    }else{
      alert("Error al iniciar sesion")
    }
    this.resetLoginModel()
  }

  private resetLoginModel = () => {
    this.loginModel = {
      user : "",
      password: ""
    };
  }
}
