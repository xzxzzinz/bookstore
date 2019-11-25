import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListBookComponent } from "./list-book/list-book.component";
import { DetailBookComponent } from "./detail-book/detail-book.component";
import { EditBookComponent } from "./edit-book/edit-book.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { GoodsSellComponent } from './goods-sell/goods-sell.component';
import { ListSaleComponent } from './list-sale/list-sale.component';

const routes: Routes = [
  {
    path: "account",
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  },
  {
    path: "books",
    children: [
      { path: "", component: ListBookComponent },
      { path: ":id", component: DetailBookComponent },

      {path: "edit/:id" , component: EditBookComponent }
    ]
  },

  { path: "book/create", component: AddBookComponent },
  { path: "sele", component: GoodsSellComponent },
  { path: "historysale", component: ListSaleComponent },

  { path: "**", component: ListBookComponent },
  { path: "", component: ListBookComponent }

  // www.book.com/books
  //             /edit/12
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
