import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListBookComponent } from "./list-book/list-book.component";
import { DetailBookComponent } from "./detail-book/detail-book.component";
import { EditBookComponent } from "./edit-book/edit-book.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

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
      { path: ":id", component: DetailBookComponent }
    ]
  },
  {
    path: "edit",
    children: [
      { path: ":id", component: EditBookComponent },
      { path: "", component: ListBookComponent }
    ]
  },
  { path: "create", component: AddBookComponent },

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
