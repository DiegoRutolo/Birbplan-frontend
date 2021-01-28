import { Component, OnInit } from '@angular/core';

import { Tweet } from "../tweets";
import { TweetService } from "../tweet.service";

@Component({
  selector: 'app-tweet-programado-preview',
  templateUrl: './tweet-programado-preview.component.html',
  styleUrls: ['./tweet-programado-preview.component.css']
})
export class TweetProgramadoPreviewComponent implements OnInit {

  tweet: Tweet;

  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
  }

  getTweet(): void {
  }
}
