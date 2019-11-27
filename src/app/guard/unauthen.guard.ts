import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnauthenGuard implements CanActivate{
  constructor(public http : HttpClient , public localstorage : LocalstorageService, public router : Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token =  this.localstorage.GetToken();
    let loginStatus: boolean = true;

    // if(token == null)
    // {
    //   this.router.navigateByUrl("account/login");
    //   return false;
    // }


    console.log('check authen start');

    this.http.get<boolean>(`https://bookstore01.azurewebsites.net/api/Account/CheckToken/token?token=${token}`).subscribe(it =>{
      console.log('authen', it);
      loginStatus = it;

      if(loginStatus) {
        console.log('book', it);

        this.router.navigateByUrl('/books');
        this.localstorage.IsLogin = true;
        return true;
      }else{
        this.localstorage.IsLogin = false;
        return false;
      }
    });

    return true;
  }
}
