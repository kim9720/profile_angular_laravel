import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth-guard';
import { GestLayout } from './layouts/gest-layout/gest-layout';
import { AppLayout } from './layouts/app-layout/app-layout';

export const routes: Routes = [

  {
    path: '',
    component: GestLayout,
    children: [
      { path: '', component: Home },
      { path: 'home', component: Home },
      { path: 'login', component: Login },
      //
    ],
  },

  {
    path: '', component:AppLayout,
    canActivate: [authGuard],
    children: [
      {path: 'dashboard', component: Dashboard},
      
      //
    ]
  }
];
