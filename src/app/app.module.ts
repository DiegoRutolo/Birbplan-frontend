import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TweetProgramadoPreviewComponent } from './tweet-programado-preview/tweet-programado-preview.component';
import { ListaProgramadosComponent } from './lista-programados/lista-programados.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetProgramadoPreviewComponent,
    ListaProgramadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
