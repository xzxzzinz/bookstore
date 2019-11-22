import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { bookmodel } from "../models/book-model";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"]
})
export class AddBookComponent implements OnInit {
  public book: bookmodel = new bookmodel();
  constructor(public http: HttpClient) {}

  ngOnInit() {}
  public addbook() {
    this.book.id = 48;
    this.book.name = "BNK48";
    this.book.prices = 480;
    this.book.details = "ประวัติ Member Bnk48";
    this.book.pic =
      "https://f.ptcdn.info/189/056/000/p47qt3bsru2ECwJX7qW-o.png";

    this.http
      .post(
        "https://bookstore01.azurewebsites.net/api/BookStore/Post",
        this.book
      )
      .subscribe(it => console.log(it));
  }
}
