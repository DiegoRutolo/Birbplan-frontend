import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TipoTweet } from "../tipo-tweet.enum";
import { DiaSemana } from "../dia-semana.enum";
import { InfoTipoTweet } from "../info-tipo-tweet";

@Component({
  selector: 'app-detalles-tipo-tweet',
  templateUrl: './detalles-tipo-tweet.component.html',
  styleUrls: ['./detalles-tipo-tweet.component.css']
})
export class DetallesTipoTweetComponent implements OnInit {

  eTipoTweet = TipoTweet;
  eDiaSemana = DiaSemana;

  @Output() eInfoTipoTweet = new EventEmitter<InfoTipoTweet>();
  infoTipoTweet = new InfoTipoTweet();
  
  opcionSeleccionada: TipoTweet;
  fecha;
  hora;
  diaSemana: DiaSemana;
  
  constructor() {
    
  }

  ngOnInit(): void {
    // Valores por defecto
    this.opcionSeleccionada = TipoTweet.Inactivo;
    this.diaSemana = DiaSemana.Lunes;
  }

  updateInfo() {
    console.log("updateInfo");
    this.infoTipoTweet.tipo = this.opcionSeleccionada;
    this.infoTipoTweet.fecha = this.fecha;
    this.infoTipoTweet.hora = this.hora;
    this.infoTipoTweet.diaSemana = this.diaSemana;

    this.eInfoTipoTweet.emit(this.infoTipoTweet);
  }

  log(val) {
    console.log(val);
    console.log(typeof val);
  }

}
