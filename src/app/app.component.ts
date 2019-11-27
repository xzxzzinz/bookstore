import { Component } from '@angular/core';
import { LocalstorageService } from './services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookstore';

  constructor(public localService: LocalstorageService, public router: Router) {

  }

  public logout(){
    this.localService.clearLocalStorage();
    this.router.navigateByUrl('account/login');
  }
}
