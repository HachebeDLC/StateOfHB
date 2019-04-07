import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Frase {
  frase: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient) {

  }
  open() {
    let fraseHB: Frase[] = [];
    this.http.get<Frase[]>('/frases.json').subscribe(data => {
      fraseHB = data;
      const frase = fraseHB[(Math.floor(Math.random() * fraseHB.length))].frase;
      window.open('https://twitter.com/intent/tweet?text=' + frase);
    });

  }
}
