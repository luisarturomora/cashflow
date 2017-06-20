import { Router, CanActivate } from '@angular/router';

import { LoginComponent } from "./pages/login/login.component";

import { AuthGuard } from './authguard.service';

export const routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent},
];

export const authProviders = [
  AuthGuard
]

export const navigatableComponents = [
  LoginComponent
];