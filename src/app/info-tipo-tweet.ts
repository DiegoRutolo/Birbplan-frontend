import { TipoTweet } from "./tipo-tweet.enum";
import { DiaSemana } from "./dia-semana.enum";

export class InfoTipoTweet {
    tipo: TipoTweet;
    fecha: Date;
    hora: string;
    diaSemana: DiaSemana;
}