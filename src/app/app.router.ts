import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { HomeController } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthCheck } from './_guards/auth.guard';
import { LinkComponent } from './link/link.component'


export const router: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeController },
    { path: 'login', component: LoginComponent, canActivate: [AuthCheck] },
    { path: 'link', component: LinkComponent, canActivate: [AuthCheck] },
    { path: '**', redirectTo: '' }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: false });