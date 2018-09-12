import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

  apiKey = '&APPID=5248e35066aeea0fe02e77e3a2936788';
  url;

  constructor(public http: Http) {

    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city, state){
    return this.http.get(this.url+ city + ',' + state +  this.apiKey)
        .map(res => res.json());
  }

}
