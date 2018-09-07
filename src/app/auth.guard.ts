import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router){  }
  canActivate(): boolean{
    if(sessionStorage.getItem('role')=='ADMIN'){
      return true;
    }else{
      this.router.navigate(['/admin-login']);
      return false;
    }
  }

}
@Injectable()
export class LoginGuard implements CanActivate {
  
  constructor(private router: Router){  }
  canActivate(): boolean{
    return true;
  }

}
