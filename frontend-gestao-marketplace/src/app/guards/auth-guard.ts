import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user';
import { UserAuthService } from '../services/user-auth';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const _userService = inject(UserService);
  const _userAuthService = inject(UserAuthService);
  const _router = inject(Router);
  // NAO POSSUI TOKEN NO LOCAL STORAGE
  const HAS_TOKEN = _userAuthService.getUserToken();
  if (!HAS_TOKEN) {
    _router.createUrlTree(['/login']);
    return false;
  }

  try {
    // tenta validar o token no back-end
    await firstValueFrom(_userService.validateUser());

    // se o usuário estiver logado e tentar acessar a página de login, redireciona para a página de produtos
    if (state.url === '/login') {
      return _router.createUrlTree(['/products']);
    }

    // se o token for válido, deixa o usuário acessar a rota
    return true;
  } catch (error) {
    // se o token for inválido, redireciona para a página de login
    return _router.createUrlTree(['/login']);
  }
};
