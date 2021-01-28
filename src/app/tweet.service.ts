import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { TWEETS_FALSOS } from "./tweets-falsos";
import { Tweet } from "./tweets";

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor() { }

  getTweets(): Observable<Tweet[]> {
    return of(TWEETS_FALSOS);
  }

  getTweet(id: number): Observable<Tweet> {
    return of(TWEETS_FALSOS.find(tweet => tweet.id === id));
  }
}
