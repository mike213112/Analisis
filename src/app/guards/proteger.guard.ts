import { AngularFireAuth } from 'angularfire2/auth';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProtegerGuard implements CanActivate {

  constructor(private login: LoginService,
              private router: Router,
              private toastr: ToastrService,
              private autentican: AngularFireAuth){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    return this.autentican.authState
      .pipe(take(1))
      .pipe(map(authState => !!authState))
      .pipe(tap(auth => {
        if(!auth){
          this.router.navigate(['/accounts/login']);
        }
      }));
  }

}
