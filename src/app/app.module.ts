import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//App components
import { AppComponent } from './app.component';
import { RpVideoComponent } from './rp-video/rp-video.component';
//Videogular modules
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';


@NgModule({
  declarations: [
    AppComponent,
    RpVideoComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
