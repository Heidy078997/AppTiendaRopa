import { CanActivateFn } from '@angular/router';

export const pageGuard: CanActivateFn = (route, state) => {
  return true;
};
