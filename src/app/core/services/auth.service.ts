import { environment } from "./../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authUrl = environment.baseApiUrl + "auth/";
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) {}

  login = (username: string, password: string) => {
    return this.http
      .post(this.authUrl + "login", {
        username: username,
        password: password
      })
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem("token", user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
          }
        })
      );
  };

  loggedIn = () => {
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  };

  logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("loggedUser");
  };

  register = (username: string, password: string) => {
    return this.http.post(this.authUrl + "register", {
      username: username,
      password: password
    });
  };
}
