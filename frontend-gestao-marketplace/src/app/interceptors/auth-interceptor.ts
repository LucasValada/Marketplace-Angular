import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserAuthService } from '../services/user-auth';
export const authInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const _userAuthService = inject(UserAuthService);

  const HAS_TOKEN = _userAuthService.getUserToken();
  // header e token que acessam o local storage
  if (HAS_TOKEN) {
    const newReq = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${HAS_TOKEN}`),
    });

    return next(newReq);
  }
  // clona uma requisição colocando um header

  return next(req);
};
