import { Component, Input } from '@angular/core';
import {Restaurant} from '../interfaces/restaurant.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  constructor() { }
  @Input()
  public  restaurant: Restaurant;
}
