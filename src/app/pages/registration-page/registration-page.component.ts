import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html'
})
export class RegistrationPageComponent {

  constructor(
    private userService: UserService,
    private router: Router,
    public errorService: ErrorService
  ) {}

  userForm = new FormGroup({
    username: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })
  
  get username() {
    return this.userForm.controls.username as FormControl
  }

  get email() {
    return this.userForm.controls.email as FormControl
  }

  submit() {
    this.userService.postUser({
      username: this.userForm.value.username as string,
      email: this.userForm.value.email as string
    }).subscribe(() => {
      this.router.navigate(['/login'])
    })
  }
}
