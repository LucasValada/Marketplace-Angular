import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth';
import { UserService } from '../services/user';
import { first, firstValueFrom } from 'rxjs';

export const loginAuthGuard: CanActivateFn = async (route, state) => {
  const _userService = inject(UserService);
  const _userAuthService = inject(UserAuthService);
  const _router = inject(Router);
  const HAS_TOKEN = _userAuthService.getUserToken();

  if (!HAS_TOKEN) return true;
  try {
    await firstValueFrom(_userService.validateUser());
    // TOKEN VÁLIDO, redirecionar para /products
    _router.navigate(['/products']);
    return false;
  } catch (error) {
    // token inválido, retornar para tela de login
    return true;
  }
};
