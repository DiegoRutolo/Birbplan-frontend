import { Tweet } from "./tweets";
import { TipoTweet } from "./tipo-tweet.enum";
import { DiaSemana } from "./dia-semana.enum";

export const TWEETS_FALSOS: Tweet[] = [
    new Tweet(
        1, "sige mi kanal de yutube", 1, 2, 0, TipoTweet.Inactivo, new Date("2000-01-01"), "00:00", DiaSemana.Domingo
    ),
    new Tweet(
        2, "Hello there", 1, 1, 0, TipoTweet.Inactivo, null, null, null
    )
];
