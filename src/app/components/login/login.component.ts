import { Component, inject } from '@angular/core';
import { UserService } from '../../service/user.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formulario: FormGroup;

  constructor(private form: FormBuilder) {
    this.formulario = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  error = '';

  userService = inject(UserService);

  createUser() {
    if (
      this.formulario.get('name')?.errors ||
      this.formulario.get('name')?.value === null
    ) {
      if (this.formulario.get('name')?.hasError('required')) {
        this.error = 'Name is required';
      } else {
        this.error = 'The name is too short';
      }
      return;
    }

    this.userService
      .createUser(this.formulario.get('name')?.value)
      .subscribe((user) => {
        console.log('user created', user),
          this.userService.saveUserToLocasStorage(user);
      });
  }
}
