import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { ListaProgramadosComponent } from "../lista-programados/lista-programados.component";
import { DetallesTweetComponent } from "../detalles-tweet/detalles-tweet.component";

const routes: Routes = [
  {path: '', redirectTo: '/lista', pathMatch: 'full'},
  {path: 'lista', component: ListaProgramadosComponent},
  {path: 'detalles/new', component: DetallesTweetComponent},
  {path: 'detalles/:id', component: DetallesTweetComponent}
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
