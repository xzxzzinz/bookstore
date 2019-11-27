import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { bookmodel } from "../models/book-model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-goods-sell",
  templateUrl: "./goods-sell.component.html",
  styleUrls: ["./goods-sell.component.css"]
})
export class GoodsSellComponent implements OnInit {
  public namesearch: string = "";

  public books: bookmodel[] = [];
  public selebook: bookmodel[] = [];

  constructor(
    public routeractive: ActivatedRoute,
    public http: HttpClient,
    public router: Router
  ) {
    this.Getbook();
  }

  //กด Add ละ ส่งข้อมูลไปฝั่ง order
  //กดจำนวนได้
  //ตัวแปร book[]
  //กดบวกได้ ลบได้
  //ใส่ตัวเลขจำนวนได้

  ngOnInit() {}
  public Getbook() {
    this.http
      .get<bookmodel[]>(
        "https://bookstore01.azurewebsites.net/api/BookStore/Get"
      )
      .subscribe(it => (this.books = it));
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

  public addorder(item: bookmodel) {
    // หาว่ามีหนังสือในออเดอร์รึป่าว
    // ถ้ามี ให้บวกค่าเพิ่ม ถ้าไม่ใ้หแอดออเดอร์ใหม่
    if(item == null) return;
    var orderSeleted = this.selebook.find(it => it.id == item.id);

    console.log('index' + this.selebook.indexOf(orderSeleted));
    if(orderSeleted == null) this.selebook.unshift(item);
  }


  public eachincease(item: bookmodel) {
    console.log(item);
      // ดักไม่ให้ ค่าจำนวนติดลบ
    if(item.count == 0) return;

    this.addorder(item);

    // ดักไม่ให้เกินจำนวน count
    if(item.each >= item.count){
      return;
    }
// บวกค่าเพิ่ม
    item.each ++;
    console.log("kaew");
  }

  // public test(item: any)
  // {
  //   var orderSeleted = this.selebook.find(it => it.id == item.id);
  //   var index = this.selebook.indexOf(orderSeleted);
  //   console.log(index, this.selebook);
  //   this.selebook.splice(index, 1);// ใส่ผิด
  // }

  public eachdecrease(item: bookmodel) {
// ลบจำนวนสินค้า ไป 1
    item.each = item.each - 1;
// หาก จำนวนออเดอร์ = 0 ลบ ออเดอร์นั้นทิ้ง
    if(item.each <= 0){
      item.each = 0;
      this.selebook.splice(this.selebook.indexOf(item), 2);
      return;
    }

    this.addorder(item);
  }

  // ฟิกค่าจำนวน ไม่ให้เกิน count
  public eachfix(item: bookmodel) {
    console.log(item);

    this.addorder(item);

    if(item == null) return;
    if(item.count == 0) return;

    // if(item.each == undefined) item.each = 1;
    if(item.each >= item.count){
      item.each = item.count;
      return;
    }

  }
// กด ละ  จะรี เซ็ตค่า
  public ordersReset(event: any){
    console.log(event);
    this.selebook = [];
    this.Getbook();
  }

  public clearCount(id: any) {
    console.log(id);
    var bookReset = this.books.find(it => it.id == id);
    if( bookReset == null ) return;
    bookReset.each = 0;
  }

  // ลบ สินค้าใน สต๊อก
  public celStock(item: bookmodel) : number {
    return item.count - item.each;
  }
}
