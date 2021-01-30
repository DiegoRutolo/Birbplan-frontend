import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { TWEETS_FALSOS } from "./tweets-falsos";
import { Tweet } from "./tweets";

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

  saveTweeet(tweet: Tweet): void {
    
  }

  getPrueba(): void {
    console.log(this.http.get(this.urlPruebas));
  }
}
