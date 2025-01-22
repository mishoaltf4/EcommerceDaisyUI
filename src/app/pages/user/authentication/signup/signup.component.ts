import { Component } from '@angular/core';
import {FaIconComponent, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  protected inputType: string = "password";

  registerForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
  });

  constructor(private authService: AuthService) {
  }

  showPassword(){
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }

  signUp(): void{
    if(this.registerForm.valid){
      const email: string = this.registerForm.get('email')!.value;
      const username: string = this.registerForm.get('name')!.value;
      const password: string = this.registerForm.get('password')!.value

      const newUser = {
        email: email,
        username: username,
        password: password
      }
      this.authService.addUser(newUser).subscribe({
        next: (response) => console.log('User added successfully:', response),
        error: (err) => console.error('Error adding user:', err)
      })
    }
  }


  protected readonly faEye = faEye;
  protected readonly faEyeSlash = faEyeSlash;
}
