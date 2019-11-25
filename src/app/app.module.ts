import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ListBookComponent } from "./list-book/list-book.component";
import { EditBookComponent } from "./edit-book/edit-book.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { DetailBookComponent } from "./detail-book/detail-book.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { OrderListComponent } from './order-list/order-list.component';
import { GoodsSellComponent } from './goods-sell/goods-sell.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ListSaleComponent } from './list-sale/list-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListBookComponent,
    EditBookComponent,
    AddBookComponent,
    DetailBookComponent,
    OrderListComponent,
    GoodsSellComponent,
    CalculateComponent,
    ListSaleComponent
  ],
  imports: [HttpClientModule, BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
