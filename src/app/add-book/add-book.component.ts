import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { bookmodel } from "../models/book-model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"]
})
export class AddBookComponent implements OnInit {
  public book: bookmodel = new bookmodel();
  constructor(public http: HttpClient, public router: Router) {}

  ngOnInit() {}
  public addbook() {
    if (!confirm("Are you sure to Add This Book ?")) return;

    this.http
      .post(
        "https://bookstore01.azurewebsites.net/api/BookStore/Post",
        this.book
      )
      .subscribe(it => {
        console.log(it);
        this.router.navigateByUrl("/books");
      });
  }
  public back() {
    if(!confirm("Are you sure to Exit this form")) return;
    this.router.navigateByUrl('/books');
  }
}
