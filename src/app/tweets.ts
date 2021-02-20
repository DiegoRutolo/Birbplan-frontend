import { TipoTweet } from "./tipo-tweet.enum";
import { DiaSemana } from "./dia-semana.enum";

export class Tweet {
    id: number;

    txt: string;
    numeroLinks: number;
    numeroFotos: number;
    numeroHashtags: number;

    tipo: TipoTweet;
    fecha: Date;    // De aqui se puede sacar día del mes o fecha completa
    hora: string;    // Como se guarda solo la hora?
    diaSemana: DiaSemana;

    constructor(
            id?: number, txt?: string, numeroLinks?: number,
            numeroHashtags?: number, numeroFotos?: number,
            tipo?: TipoTweet, fecha?: Date, hora?: string,
            diaSemana?: DiaSemana
        ) {
        this.id = id;
        this.txt = txt;
        this.numeroLinks = numeroLinks;
        this.numeroHashtags = numeroHashtags;
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
                return `${this.hora}`;
        
            case TipoTweet.Semanal:
                return `${this.diaSemana} ${this.hora}`;
            
            case TipoTweet.Mensual:
                return `${this.fecha.getDate().toString()} ${this.hora}`;
            default:
                this.tipo = TipoTweet.Inactivo;
                return "Inactivo";
        }
    }

    get hasLink(): boolean {
        return this.numeroLinks > 0;
    }
    set hasLink(val: boolean) {
        this.numeroLinks = val? 1 : 0;
    }

    get hasFoto(): boolean {
        return this.numeroFotos > 0;
    }
    set hasFoto(val: boolean) {
        this.numeroFotos = val? 1 : 0;
    }

    get numHashtag(): number {
        return this.numeroHashtags;
    }
    set numHashtag(val: number) {
        this.numeroHashtags = Math.max(0, val);
    }
}
