import { decimalDigest } from "@angular/compiler/src/i18n/digest";

import { TipoTweet } from "./tipo-tweet.enum";
import { DiaSemana } from "./dia-semana.enum";

export class Tweet {
    id: number;

    txt: string;
    links: string[];
    numeroLinks: number;
    hashtags: string[];
    numeroHashtags: number;
    fotos: string[];    // De momento asumo que está en base64
    numeroFotos: number;

    tipo: TipoTweet;
    fecha: Date;    // De aqui se puede sacar día del mes o fecha completa
    hora: number;    // Como se guarda solo la hora?
    diaSemana: DiaSemana;

    constructor(
            id: number, txt: string, links: string[], numeroLinks: number,
            hashtags: string[], numeroHashtags: number, fotos: string[],
            numeroFotos: number, tipo: TipoTweet, fecha: Date, hora: number,
            diaSemana: DiaSemana
        ) {
        this.id = id;
        this.txt = txt;
        this.links = links;
        this.numeroLinks = numeroLinks;
        this.hashtags = hashtags;
        this.numeroHashtags = numeroHashtags;
        this.fotos = fotos;
        this.numeroFotos = numeroFotos;
        this.tipo = tipo;
        this.fecha = fecha;
        this.hora = hora;
        this.diaSemana = diaSemana;
    }

    getTextoResumen(): string {
        switch (this.tipo) {
            case TipoTweet.Inactivo:
                return "Inactivo";
            
            case TipoTweet.Unico:
                return `${this.fecha}`;
            
            case TipoTweet.Diario:
                return `${this.hora} ${this.fecha}`
        
            case TipoTweet.Semanal:
                return `${this.diaSemana} ${this.hora}`;
            
            case TipoTweet.Mensual:
                return `${this.fecha.getDate().toString()} ${this.hora}`
            
            default:
                return "error¿?";
        }
    }
}
