import { User } from "./../../core/models/user.model";
import { AuthService } from "./../../core/services/auth.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm = () => {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: [
        "",
        [Validators.required, Validators.minLength(6), Validators.maxLength(12)]
      ]
    });
  };

  login = () => {
    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        next => {
          this.router.navigate(["/"]);
        },
        err => console.log(err)
      );
  };
}
