import { Injectable } from '@angular/core';

import {Restaurant} from '../interfaces/restaurant.interface';

@Injectable()
export class CommunicationService {

  constructor() { }

  private restaurants: Restaurant[] = [
    {
      name: 'Компот',
      address: 'ул. Сибирская 47а',
      phone: '8 (342) 241-05-05',
      image_url: '../../assets/images/Compot.jpg',
      type: 'Restaurant',
      weather: {
        temperature: '+22',
        water: '+7',
        precipitation: 'sunny',
      },
      followers: 21,
    },
    {
      name: 'Butcher',
      address: 'Лубянский пр-д, 15',
      phone: '8 (495) 231-92-82',
      image_url: '../../assets/images/Butcher.jpg',
      type: 'Restaurant',
      weather: {
        temperature: '+7',
        water: '+1',
        precipitation: 'rain',
      },
      followers: 22000,

    },
    {
      name: 'Провокатор',
      address: 'Оружейный пер., 15А',
      phone: '8 (495) 205-00-69',
      image_url: '../../assets/images/Provocator.jpg',
      type: 'Strip-club',
      weather: {
        temperature: '+7',
        water: '+1',
        precipitation: 'rain',
      },
      followers: 52000,
    },
    {
      name: 'Монарх',
      address: 'ул. Монастырская, 14А',
      phone: '8 (342) 234-44-99',
      image_url: '../../assets/images/Monarch.jpg',
      type: 'Strip-club',
      weather: {
        temperature: '+22',
        water: '+7',
        precipitation: 'sunny',
      },
      followers: 72000,

    }

  ];
  private selected_restraunt: Restaurant;
  public getRestaurants(): Restaurant[] {
    return(this.restaurants);
  }


}
