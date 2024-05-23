import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { EmpService } from './emp.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  let service=inject(EmpService);
  return service.getLoginStatus();
};
