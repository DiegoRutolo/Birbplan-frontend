import { Tweet } from "./tweets";
import { TipoTweet } from "./tipo-tweet.enum";
import { DiaSemana } from "./dia-semana.enum";

export const TWEETS_FALSOS: Tweet[] = [
    new Tweet(
        1, "sige mi kanal de yutube", ["https://www.youtube.com/watch?v=MI1ZQiAlUZE"], 1, ["#fisica", "#100cia", "#movidas"], 2, [], 0, TipoTweet.Inactivo, new Date("2000-01-01"), 0, DiaSemana.Domingo
    ),
    new Tweet(
        2, "Hello there", ["https://es.wikipedia.org/wiki/Obi-Wan_Kenobi", "https://starwars.fandom.com/es/wiki/Obi-Wan_Kenobi"], 1, ["#GeneralKenobi"], 1, [], 0, TipoTweet.Inactivo, null, null, null
    )
];
