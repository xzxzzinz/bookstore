import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListBookComponent } from "./list-book/list-book.component";
import { DetailBookComponent } from "./detail-book/detail-book.component";
import { EditBookComponent } from "./edit-book/edit-book.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { GoodsSellComponent } from "./goods-sell/goods-sell.component";
import { ListSaleComponent } from "./list-sale/list-sale.component";
import { AuthenGuard } from "./guard/authen.guard";
import { UnauthenGuard } from "./guard/unauthen.guard";

const routes: Routes = [

  // { path: "**", redirectTo: "books", pathMatch: 'full',
  // canActivate: [AuthenGuard]},
  { path: "", redirectTo: "books" , pathMatch: 'full'},
  {
    path: "account",
    children: [
      {
        path: "login",
        component: LoginComponent,
        canActivate: [UnauthenGuard]
      },
      {
        path: "register",
        component: RegisterComponent,
        canActivate: [UnauthenGuard]
      }
    ]
  },
  {
    path: "books",
    children: [
      {
        path: "",
        component: ListBookComponent,
        canActivate: [AuthenGuard]
      },
      {
        path: ":id",
        component: DetailBookComponent,
        canActivate: [AuthenGuard]
      },

      {
        path: "edit/:id",
        component: EditBookComponent,
        canActivate: [AuthenGuard]
      }
    ]
  },
  {
    path: "book/create",
    component: AddBookComponent,
    canActivate: [AuthenGuard]
  },
  {
    path: "sele",
    component: GoodsSellComponent,
    canActivate: [AuthenGuard]
  },
  {
    path: "historysale",
    component: ListSaleComponent,
    canActivate: [AuthenGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
