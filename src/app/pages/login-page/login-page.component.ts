import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  loginForm = new FormGroup({
    username: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(150)
    ]),
    confirmation_code: new FormControl<string>('', [
      Validators.required
    ])
  })

  get username() {
    return this.loginForm.controls.username as FormControl
  }

  get confirmation_code() {
    return this.loginForm.controls.confirmation_code as FormControl
  }

  submit() {
    this.userService.loginUser({
      username: this.loginForm.value.username as string,
      confirmation_code: this.loginForm.value.confirmation_code as string
    }).subscribe(resp => {
      this.router.navigate(['/'])
      localStorage.setItem('auth_token', resp.token)
      localStorage.setItem('request_user', this.loginForm.value.username as string)
    })
  }

}
