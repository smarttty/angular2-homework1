import { Component, EventEmitter, Output } from '@angular/core';

import {Restaurant} from './interfaces/restaurant.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selected_place: Restaurant;
  public set(res) {
    this.selected_place = res;
  }
}
