import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { bookmodel } from "../models/book-model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-list-book",
  templateUrl: "./list-book.component.html",
  styleUrls: ["./list-book.component.css"]
})
export class ListBookComponent implements OnInit {
  public books: bookmodel[] = [];
  public namesearch: string = "";
  constructor(
    public routeractive: ActivatedRoute,
    public http: HttpClient,
    public router: Router
  ) {
    this.Getbook();
  }

  ngOnInit() {}

  public Getbook() {
    this.http
      .get<bookmodel[]>(
        "https://bookstore01.azurewebsites.net/api/BookStore/Get"
      )
      .subscribe(it => (this.books = it));
  }

  public deletebook(book: any) {
    if (!confirm("Are you sure to Delete " + book.name)) return;
    this.http
      .delete(
        `https://bookstore01.azurewebsites.net/api/BookStore/Delete/${book.id}`
      )
      .subscribe(it => {
        console.log(it);
        this.router.navigateByUrl("");
      });
  }

  public searchbook() {
    this.http
      .get<bookmodel[]>(
        `https://bookstore01.azurewebsites.net/api/BookStore/Sreach/${this.namesearch}`
      )
      .subscribe(it => {
        console.log(it);
        this.books = it;
      });
  }
}
