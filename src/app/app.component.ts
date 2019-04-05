import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  frasesHachebe =  [
    'Ya está otra vez el cabrón de Hachebé ebrio',
    'HBorracho',
    'El cabrón de Hachebé está bebiendo ya como si fuese agua',
    'Pero cómo puede ser que esté ya borracho el cabrón de Hachebé?',
    'Hachebé está borracho. Sorprendente. Inaudito'
  ];
  open() {
    const frase = this.frasesHachebe[(Math.floor(Math.random() * this.frasesHachebe.length))];
    window.open('https://twitter.com/intent/tweet?text=' + frase);
  }
}
