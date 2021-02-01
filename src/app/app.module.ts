import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TweetProgramadoPreviewComponent } from './tweet-programado-preview/tweet-programado-preview.component';
import { ListaProgramadosComponent } from './lista-programados/lista-programados.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrandingComponent } from './branding/branding.component';
import { DetallesTweetComponent } from './detalles-tweet/detalles-tweet.component';
import { DetallesTipoTweetComponent } from './detalles-tipo-tweet/detalles-tipo-tweet.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetProgramadoPreviewComponent,
    ListaProgramadosComponent,
    BrandingComponent,
    DetallesTweetComponent,
    DetallesTipoTweetComponent,
    LoginComponent,
    PerfilComponent
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
