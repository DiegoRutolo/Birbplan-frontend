import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private urlPruebas = "http://talos.rutolo.eu:3000/authorize";
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.redirigir();
  }

  redirigir(): void {
    window.location.href = this.urlPruebas;
  }

}
