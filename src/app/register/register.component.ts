import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-models';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 public  user: UserModel = new UserModel();
  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit() {
  }

  public register(){
    this.http.post('https://bookstore01.azurewebsites.net/api/Account/register', this.user).subscribe(it => {
      this.router.navigateByUrl('account/login');
    });
  }

}
