import { Component, Input } from '@angular/core';
import { Gif } from './gif';

@Component({
  selector: 'my-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})

export class GifComponent {
  @Input()
  gif: Gif;
}
