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
            id?: number, txt?: string, links?: string[], numeroLinks?: number,
            hashtags?: string[], numeroHashtags?: number, fotos?: string[],
            numeroFotos?: number, tipo?: TipoTweet, fecha?: Date, hora?: number,
            diaSemana?: DiaSemana
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
                return `${this.hora} ${this.fecha}`;
        
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
