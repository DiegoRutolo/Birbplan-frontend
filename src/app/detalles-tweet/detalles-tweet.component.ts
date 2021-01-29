import { Component, OnInit, Input } from '@angular/core';

import { Tweet } from "../tweets";

@Component({
  selector: 'app-detalles-tweet',
  templateUrl: './detalles-tweet.component.html',
  styleUrls: ['./detalles-tweet.component.css']
})
export class DetallesTweetComponent implements OnInit {

  @Input() tweet: Tweet;

  constructor() { }

  ngOnInit(): void {
  }

}
