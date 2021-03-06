import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  redirectURL: string;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm = () => {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(12)]
      ]
    });
  };

  login = () => {
    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        next => {
          let params = this.route.snapshot.queryParams;
          if (params['redirectURL']) {
            this.redirectURL = params['redirectURL'];
          }
          if (this.redirectURL) {
            this.router.navigate([this.redirectURL]);
          } else {
            this.router.navigate(['/']);
          }
        },
        err => console.log(err)
      );
  };
}
