import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaDeLoginComponent } from "./tela-de-login/tela-de-login.component";
import { TelaDeListasComponent } from "./tela-de-listas/tela-de-listas.component";

const routes: Routes = [
  {path: "", component: TelaDeLoginComponent},
  {path: "listas", component: TelaDeListasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
