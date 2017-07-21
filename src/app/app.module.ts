import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftElementComponent } from './left-element/left-element.component';
import { WeatherComponent } from './weather/weather.component';
import { InfoComponent } from './info/info.component';

import {CommunicationService} from './services/communication.service';
import { ViewComponent } from './view/view.component';
import { TypePipe } from './pipes/type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeftElementComponent,
    WeatherComponent,
    InfoComponent,
    ViewComponent,
    TypePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
