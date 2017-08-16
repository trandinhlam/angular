import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayControlComponent } from './play-control/play-control.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

import { SoundService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    PlayControlComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SoundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
