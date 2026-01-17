import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const token =
    localStorage.getItem('authToken') ||
    sessionStorage.getItem('authToken');

  if (token) {
    return true; // user is logged in
  }

  // not logged in → redirect to login
  router.navigate(['/login']);
  return false;
};
