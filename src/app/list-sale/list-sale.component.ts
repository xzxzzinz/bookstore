import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { selesmodel } from '../models/seles-model';

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.css']
})
export class ListSaleComponent implements OnInit {

  constructor(public http: HttpClient) { }
  public history: selesmodel[];

  ngOnInit() {
    this.http.get<selesmodel[] >('https://bookstore01.azurewebsites.net​/api/sales/getproductsales').subscribe(it => this.history = it );
  }

}
