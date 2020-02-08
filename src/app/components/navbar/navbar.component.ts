import { AuthService } from "./../../core/services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}
  loggedUser: string = sessionStorage.getItem("loggedUser");
  ngOnInit() {}

  logout = () => this.authService.logout();

  isLoggedIn = () => !!localStorage.getItem("token");
}
