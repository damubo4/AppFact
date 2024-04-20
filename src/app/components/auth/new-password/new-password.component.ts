import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss',
})
export class NewPasswordComponent implements OnInit {
  FormPassword: FormGroup;
  hide_1 = true;
  hide_2 = true;
  samePasswords = true;
  textError = false;

  constructor(private formBuilder: FormBuilder) {
    this.FormPassword = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.FormPassword.get('confirm_password')?.valueChanges.subscribe({
      next: (value) => {
        this.comparePasswords(value, 'password');
      },
    });

    this.FormPassword.get('password')?.valueChanges.subscribe({
      next: (value) => {
        this.comparePasswords(value, 'confirm_password');
      },
    });
  }

  comparePasswords(value: string, type: string) {
    if (value == this.FormPassword.get(type)?.value) {
      this.samePasswords = false;
      this.textError = false;
    } else {
      this.samePasswords = true;
      this.textError = true;
    }
  }
}
