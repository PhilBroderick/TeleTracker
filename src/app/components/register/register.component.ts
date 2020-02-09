import { AuthService } from "./../../core/services/auth.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControlName,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group(
      {
        username: ["", Validators.required],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ]
        ],
        confirmPassword: ["", Validators.required]
      },
      this.passwordMatchValidator
    );
  }

  passwordMatchValidator(g: FormGroup) {
    console.log(g.get("password").value);
    console.log(g.get("confirmPassword").value);
    return g.get("password").value === g.get("confirmPassword").value
      ? null
      : { mismatch: true };
  }

  register = () => {};
}
