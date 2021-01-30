import { Component, OnInit } from '@angular/core';

import { TweetService } from "../tweet.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.tweetService.getPrueba();
  }

}
