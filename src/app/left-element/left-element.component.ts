import {Component, EventEmitter, Output} from '@angular/core';
import {Restaurant} from '../interfaces/restaurant.interface';
import {CommunicationService} from '../services/communication.service';

@Component({
  selector: 'app-left-element',
  templateUrl: './left-element.component.html',
  styleUrls: ['./left-element.component.css']
})
export class LeftElementComponent {
  public restaurants: Restaurant[] = [];
  public filter = 'all';
  public imageHeader = '../../assets/images/Compot.jpg'
  constructor(private service: CommunicationService) {
    this.restaurants = this.service.getRestaurants();
  }
  @Output() changed = new EventEmitter();
  selected(res: Restaurant) {
     this.imageHeader = res.image_url;
     this.changed.emit(res);
   }
}
