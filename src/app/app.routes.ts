import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { RecoverPasswordComponent } from './components/auth/recover-password/recover-password.component';
import { NewPasswordComponent } from './components/auth/new-password/new-password.component';
import { TemplateComponent } from './components/template/template.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recover-account', component: RecoverPasswordComponent },
  { path: 'new-password', component: NewPasswordComponent },
  { path: 'dashboard', component: TemplateComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
