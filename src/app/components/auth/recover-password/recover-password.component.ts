import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recover-password',
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
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss',
})
export class RecoverPasswordComponent {
  FormRecover: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder) {
    this.FormRecover = this.formBuilder.group({
      email: ['', [Validators.required]],
    });
  }
}
