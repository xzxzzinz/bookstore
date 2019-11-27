import { Injectable } from '@angular/core';
import { LoginResult } from '../models/user-models';

@Injectable({
  providedIn: 'root'
})

export class LocalstorageService {

  public IsLogin: boolean = false;
  public User: LoginResult = new LoginResult();

  constructor() { }
  // save token
  // get token
  public clearLocalStorage(){
    localStorage.clear();
  }
  public GetToken(): string{
    return localStorage.getItem('token');
  }

  public SaveToken(token: string) {
    localStorage.setItem('token', token);
  }
}
