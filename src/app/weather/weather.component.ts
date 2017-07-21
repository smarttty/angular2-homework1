import { Component, Input } from '@angular/core';
import {Restaurant} from '../interfaces/restaurant.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
@Input() restaurant: Restaurant;
constructor() {
}


}
