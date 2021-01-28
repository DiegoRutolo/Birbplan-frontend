import { Component, OnInit } from '@angular/core';

import { Tweet } from "../tweets";
import { TweetService } from "../tweet.service";

@Component({
  selector: 'app-lista-programados',
  templateUrl: './lista-programados.component.html',
  styleUrls: ['./lista-programados.component.css']
})
export class ListaProgramadosComponent implements OnInit {

  tweets: Tweet[];

  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.updateTweets();
  }

  updateTweets(): void {
    this.tweetService.getTweets().subscribe(tweets => this.tweets = tweets);
  }

}
