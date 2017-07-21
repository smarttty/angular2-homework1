import { Component, Input } from '@angular/core';

import {Restaurant} from '../interfaces/restaurant.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  constructor() { }
  @Input() restaurant: Restaurant;

}
