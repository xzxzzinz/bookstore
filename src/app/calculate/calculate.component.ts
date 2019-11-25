import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { bookmodel } from '../models/book-model';
import { HttpClient } from '@angular/common/http';
import { selesmodel } from '../models/seles-model';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  @Input() orders: bookmodel[] = [];
  @Output() ordersEmpty : EventEmitter<bookmodel[]> = new EventEmitter<bookmodel[]>();


  private sales: selesmodel = new selesmodel();

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }


  private count() : number
  {
    let orderCount = 0;
    this.orders.forEach(element => {
      orderCount += element.each;
    });
    return orderCount;
  }

  private sumFunc() : number
  {
    let sum = 0;
    this.orders.forEach(element => {
      sum += element.prices * element.each
    });
    return sum;
  }

  private vat() : number
  {
    let sum  = 0;
    this.orders.forEach(element => {
      sum += element.prices * element.each
    });
    return (sum * 7 / 100) + sum;
  }

  public addOrders()
  {
    this.sales.sales = this.orders;
    this.sales.payment = 1000;

    this.http.post<selesmodel>('https://bookstore01.azurewebsites.net/api/Sales/AddProductSales', this.sales).subscribe(it => {
      this.orders = [];
      this.ordersEmpty.emit(this.orders);
    });
  }
}




