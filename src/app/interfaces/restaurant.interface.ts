import {Weather} from './weather.interface';
export interface Restaurant {
  name: string;
  address:  string;
  phone: string;
  image_url: string;
  type?: string;
  weather: Weather;
  followers: number;
}
