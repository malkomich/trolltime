import { Component } from '@angular/core';

@Component({
  selector: 'gif-bender',
  templateUrl: './bender.component.html',
  styleUrls: [
    '../../gif.component.css',
    './bender.component.css'
  ]
})

export class BenderComponent {
  boom(): void {
    const audio = new Audio('assets/audio/bender.mp3');
    audio.play();
  }
}
