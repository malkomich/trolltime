import { Component } from '@angular/core';

@Component({
  selector: 'gif-ppap',
  templateUrl: './ppap.component.html',
  styleUrls: [
    '../../gif.component.css',
    './ppap.component.css'
  ]
})

export class PpapComponent {
  boom(): void {
    const audio = new Audio('assets/audio/ppap.mp3');
    audio.play();
  }
}
