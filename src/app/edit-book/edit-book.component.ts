import { Component, OnInit } from "@angular/core";
import { bookmodel } from "../models/book-model";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { createWiresService } from 'selenium-webdriver/firefox';

@Component({
  selector: "app-edit-book",
  templateUrl: "./edit-book.component.html",
  styleUrls: ["./edit-book.component.css"]
})
export class EditBookComponent implements OnInit {

  public id: string;
  public book: bookmodel;


  constructor(public routeractive: ActivatedRoute, public http: HttpClient , public router : Router) {
    this.routeractive.params.forEach(query => {
      this.id = query.id;
      console.log(this.id);
    });
  }

  ngOnInit() {
    this.getbookbyid();
  }
  public getbookbyid() {
    this.http
      .get<bookmodel>(
        `https://bookstore01.azurewebsites.net/api/BookStore/Get/${this.id}`
      )
      .subscribe(it => (this.book = it));
  }

  public updatebook() {

  // check comfrim update

    if(!confirm("Are you sure to Update " + this.book.name)) return;

    this.http.put<bookmodel>(`https://bookstore01.azurewebsites.net/api/BookStore/Put/${this.id}`, this.book).subscribe(it => {
      console.log(it);
      this.router.navigateByUrl('/books');
    });
  }

  public back() {
    if(!confirm("Are you sure to Exit this form")) return;
    this.router.navigateByUrl('/books');
  }


}
