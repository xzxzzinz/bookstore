import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { bookmodel } from "../models/book-model";

@Component({
  selector: "app-list-book",
  templateUrl: "./list-book.component.html",
  styleUrls: ["./list-book.component.css"]
})
export class ListBookComponent implements OnInit {
  public books: bookmodel[] = [];

  constructor(public http: HttpClient) {
    this.Getbook();
  }

  ngOnInit() {}

  public Getbook() {
    // this.http
    //   .get<bookmodel>("https://bookstore01.azurewebsites.net/api/BookStore/Get")
    //   .subscribe(it => console.log(it));

    this.http
      .get<bookmodel[]>(
        "https://bookstore01.azurewebsites.net/api/BookStore/Get"
      )
      .subscribe(it => (this.books = it));


      // jfjijijij
  }
}
