import { Component, OnInit } from '@angular/core';
import { TipoTweet } from "../tipo-tweet.enum";
import { DiaSemana } from "../dia-semana.enum";

@Component({
  selector: 'app-detalles-tipo-tweet',
  templateUrl: './detalles-tipo-tweet.component.html',
  styleUrls: ['./detalles-tipo-tweet.component.css']
})
export class DetallesTipoTweetComponent implements OnInit {

  eTipoTweet = TipoTweet;
  eDiaSemana = DiaSemana;
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

}
