import { Component } from '@angular/core';
import { Gif } from './gif';

const GIFS: Gif[] = [
  { id: 1, name: 'PPAP' },
  { id: 2, name: 'Bender' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Troll Time!';
  gifs = GIFS;
  selectedGif: Gif;

  onSelect(gif: Gif): void {
    this.selectedGif = gif;
  }

}
