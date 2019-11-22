import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router"; //ไว้ดักเก็บparam
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-detail-book",
  templateUrl: "./detail-book.component.html",
  styleUrls: ["./detail-book.component.css"]
})
//class => functions
export class DetailBookComponent implements OnInit {
  public id: string;

  constructor(public routeractive: ActivatedRoute, public http: HttpClient) {
    this.routeractive.params.forEach(query => {
      this.id = query.id;
      console.log(this.id);
      // console.log(query.name);
    });

    //auto ทำงานเอง
  }



  ngOnInit() {
    // auto
    this.getbookbyid();
  }

  public getbookbyid() {
    this.http
      .get(`https://bookstore01.azurewebsites.net/api/BookStore/Get/${this.id}`)
      .subscribe(it => console.log(it));
  }
}
