import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user';
import { UserAuthService } from '../services/user-auth';
import { firstValueFrom } from 'rxjs';

export const loginGuard: CanActivateFn = async () => {
  const _userService = inject(UserService);
  const _userAuthService = inject(UserAuthService);
  const _router = inject(Router);

  const HAS_TOKEN = _userAuthService.getUserToken();

  // Sem token → pode ver a tela de login
  if (!HAS_TOKEN) return true;

  // Com token → valida no back-end
  try {
    await firstValueFrom(_userService.validateUser());
    // Token ok → não deixa ir ao login, redireciona para products
    // ❗️RETORNA UrlTree (não usa navigate)
    return _router.createUrlTree(['/products']);
  } catch {
    // Token inválido → pode acessar login
    return true;
  }
};
