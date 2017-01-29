import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GifComponent } from './gif.component';
import { PpapComponent } from './gifs/ppap/ppap.component';
import { BenderComponent } from './gifs/bender/bender.component';

@NgModule({
  declarations: [
    AppComponent,
    GifComponent,
    PpapComponent,
    BenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
