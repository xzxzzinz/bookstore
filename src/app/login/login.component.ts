import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RouterLink, Router } from "@angular/router";
import { LoginModel, ResultAccount, LoginResult } from "../models/user-models";
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public login: LoginModel = new LoginModel();
  public result: LoginResult = new LoginResult();

  constructor(public http: HttpClient, public router: Router , public  localservice : LocalstorageService) {}

  ngOnInit() {}
  public loginFuntion() {
    this.http
      .post<LoginResult>(
        "https://bookstore01.azurewebsites.net/api/Account/Login",
        this.login
      )
      .subscribe(it => {
        console.log(it);
        if(it.status == 'success') {
          this.router.navigateByUrl('books');
          this.localservice.SaveToken(it.token);
          this.localservice.User = it;
        }else{
          this.login = new LoginModel();
        }
      });
  }
}
