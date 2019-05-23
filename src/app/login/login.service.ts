import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Login } from './login';
import { LoginResponse } from './login-response';

@Injectable()
export class LoginService {

  private loginUrl = '/api/login';

  constructor(private http: Http) { }

  // post("/api/login")
  doLogin(loginModel: Login): Promise<void | LoginResponse> {
    return this.http.post(this.loginUrl, loginModel)
               .toPromise()
               .then(response => response.json() as LoginResponse)
               .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg)
  }
}
