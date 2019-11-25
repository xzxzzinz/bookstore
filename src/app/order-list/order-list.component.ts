import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { bookmodel } from '../models/book-model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  //สื่อสารข้าม component ขาเข้า
  @Input() books: bookmodel[];
  @Output() clearCount: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

    public sumCount(item: bookmodel): number {
      return item.prices * item.each;
    }

    public delete(index: number) {
      this.clearCount.emit(this.books[index].id);
      this.books.splice(index, 1);
    }

}
