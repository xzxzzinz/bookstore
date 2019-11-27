import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { LocalstorageService } from "../services/localstorage.service";
import { createWiresService } from "selenium-webdriver/firefox";

@Injectable({
  providedIn: "root"
})
export class AuthenGuard implements CanActivate {
  constructor(
    public http: HttpClient,
    public localstorage: LocalstorageService,
    public router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token = this.localstorage.GetToken();
    let loginStatus: boolean = false;

    console.log("check authen start");

    this.http
      .get<boolean>(
        `https://bookstore01.azurewebsites.net/api/Account/CheckToken/token?token=${token}`
      )
      .subscribe(it => {
        console.log("authen..", it);
        loginStatus = it;


        if(it){
          //ถ้าผ่าน โชว์นาฟบาร์ ละเข้าเว็บ
          this.localstorage.IsLogin = true;
          return true;
        }
    //ถ้าไม่ผ่าน ยุบ นาฟบาร์ กลับ หน้าล็อคอิน
        this.localstorage.IsLogin = false;

        this.router.navigateByUrl("account/login");
        console.log("NAVIGATE", it);
        return false;
      });

    this.localstorage.IsLogin = true;
    return true;
  }
}
