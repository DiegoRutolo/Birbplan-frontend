import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { ListaProgramadosComponent } from "../lista-programados/lista-programados.component";
import { DetallesTweetComponent } from "../detalles-tweet/detalles-tweet.component";
import { LoginComponent } from "../login/login.component";

const routes: Routes = [
  {path: '', redirectTo: '/lista', pathMatch: 'full'},
  {path: 'lista', component: ListaProgramadosComponent},
  {path: 'detalles', component: DetallesTweetComponent},
  {path: 'detalles/:id', component: DetallesTweetComponent}
  //{path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
