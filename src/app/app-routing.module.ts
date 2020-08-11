import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false }, )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
