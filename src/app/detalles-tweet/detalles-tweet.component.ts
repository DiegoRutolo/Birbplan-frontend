import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";

import { Tweet } from "../tweets";
import { TweetService } from "../tweet.service";
import { InfoTipoTweet } from "../info-tipo-tweet";

@Component({
  selector: 'app-detalles-tweet',
  templateUrl: './detalles-tweet.component.html',
  styleUrls: ['./detalles-tweet.component.css']
})
export class DetallesTweetComponent implements OnInit {

  tweet: Tweet;

  constructor(
    private route: ActivatedRoute, private router: Router,
    private tweetService: TweetService
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // cargar el tweet
      this.tweetService.getTweet(Number(id)).subscribe(tweet => this.tweet = tweet);
    } else {
      this.tweet = new Tweet();
    }
  }

  updateInfoTipoTweet(info: InfoTipoTweet) {
    this.tweet.tipo = info.tipo;
    this.tweet.fecha = info.fecha;
    this.tweet.hora = info.hora;
    this.tweet.diaSemana = info.diaSemana;
  }

  guardarTweet(): void {
    this.tweetService.saveTweet(this.tweet);
  }

}
