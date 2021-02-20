import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { TWEETS_FALSOS } from "./tweets-falsos";
import { Tweet } from "./tweets";
import { TipoTweet } from './tipo-tweet.enum';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private urlPruebas = "http://talos.rutolo.eu:3000/authorize"

  constructor(private http: HttpClient) { }

  getTweets(): Observable<Tweet[]> {
    return of(TWEETS_FALSOS);
  }

  getTweet(id: number): Observable<Tweet> {
    return of(TWEETS_FALSOS.find(tweet => tweet.id === id));
  }

  getNextId(): number {
    //TODO: Esto es hacer trampa, luego hay que arreglarlo
    return Math.max(...TWEETS_FALSOS.map(tweet => tweet.id)) + 1;
  }

  reasignarNulo(campo, valorNulo) {
    if (campo === null || campo === undefined) {
      return valorNulo;
    } else {
      return campo;
    }
  }

  saveTweet(tweet: Tweet): void {
    let flag_nuevoTweet = tweet.id === null || tweet.id === undefined ? true : false;
    // Completamos los datos que faltan
    tweet.id = this.reasignarNulo(tweet.id, this.getNextId());
    tweet.txt = this.reasignarNulo(tweet.txt, "");
    tweet.tipo = this.reasignarNulo(tweet.tipo, TipoTweet.Inactivo);
    // Guardamos o actualizamos
    if (flag_nuevoTweet) {
      this.postTweet(tweet);
    } else {
      this.updateTweet(tweet);
    }
  }

  postTweet(tweet: Tweet): void {
    TWEETS_FALSOS.push(tweet);
  }

  updateTweet(tweetNuevo: Tweet): void {
    TWEETS_FALSOS[TWEETS_FALSOS.indexOf(TWEETS_FALSOS.find(tweetViejo => tweetViejo.id === tweetNuevo.id))] = tweetNuevo;
    // Pffffff...
  }

  getPrueba(): void {
    //console.log(this.http.get(this.urlPruebas));
    console.log("Prueba");
  }
}
