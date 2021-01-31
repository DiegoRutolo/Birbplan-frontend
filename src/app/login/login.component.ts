import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private urlPruebas = "http://talos.rutolo.eu:3000/authorize";

  constructor() { }

  ngOnInit(): void {
    this.redirigir();
  }

  redirigir(): void {
    window.location.href = this.urlPruebas;
  }

}
