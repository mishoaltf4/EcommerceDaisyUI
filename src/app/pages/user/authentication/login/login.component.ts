import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  protected inputType: string = 'password';

  constructor(private authService: AuthService) {
  }

  signin():void{
    console.log(this.loginForm.value);
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;
    const user = {
      email: email,
      password: password,
    }
    this.authService.loginUser(user).subscribe({
      next: (response) => {console.log(response)},
      error: (error) => {console.log(error)},
    })
  }

  showPassword():void{
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }

  protected readonly faEye = faEye;
  protected readonly faEyeSlash = faEyeSlash;
}
