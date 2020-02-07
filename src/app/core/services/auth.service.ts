import { environment } from "./../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authUrl = environment.baseApiUrl + "auth";

  constructor(private http: HttpClient) {}

  login = (username: string, password: string) => {
    var token = this.http.post(this.authUrl + "login", {
      username: username,
      password: password
    });
    console.log(token);
    return token;
  };

  logout = () => localStorage.removeItem("token");

  isLoggedIn = () => !!localStorage.getItem("token");
}
