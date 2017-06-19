import { Routes } from '@angular/router'

import { loginForm } from './loginform/login.component'

export const appRoutes:Routes = [
    { path: 'login', component: loginForm },
    { path: '', redirectTo: '/login', pathMatch: 'full'}
]