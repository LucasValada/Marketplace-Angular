import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  getUserToken() {
    //TO DO: Recuperar token do local storage
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoidmFsYWRhb0BnbWFpbC5jb20iLCJpYXQiOjE3NTkyNzA0MDgsImV4cCI6MTc1OTM1NjgwOH0.-OBCVhnK7bYioKg8-4750h3nKIHtlDrmwUXzm3DtNtM';
  }
}
