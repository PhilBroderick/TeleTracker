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
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get("password").value === g.get("confirmPassword").value
      ? null
      : { mismatch: true };
  }

  register = () => {
    this.authService.register(this.registerForm.value.username, this.registerForm.value.password).subscribe(() => {
      this.router.navigate(["/"]);
    }, err=> console.log(err), () => {
      this.authService.login(this.registerForm.value.username, this.registerForm.value.password).subscribe(() => {
        this.router.navigate(["/"]);
      })
    })
  };
}
