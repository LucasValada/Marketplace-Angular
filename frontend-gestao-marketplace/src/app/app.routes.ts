import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Products } from './pages/products/products';
import { Layout } from './pages/layout/layout';
import { NewProduct } from './pages/new-product/new-product';
import { authGuard } from './guards/auth-guard';
import { loginGuard } from './guards/login-guard';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
    canActivate: [loginGuard],
  },
  {
    path: '',
    component: Layout,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'products',
        component: Products,
      },
      {
        path: 'new-product',
        component: NewProduct,
      },
    ],
  },

  {
    path: '', // se a rota estiver vazia, redireciona para login
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**', // se a rota for inválida, redireciona para login
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
