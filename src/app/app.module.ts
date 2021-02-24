import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ListaProgramadosComponent } from './lista-programados/lista-programados.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrandingComponent } from './branding/branding.component';
import { DetallesTweetComponent } from './detalles-tweet/detalles-tweet.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProgramadosComponent,
    BrandingComponent,
    DetallesTweetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
