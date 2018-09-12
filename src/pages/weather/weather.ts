import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider} from "../../providers/weather/weather";

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  weather:any;

  location:{
    city:string,
      state: string
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvider : WeatherProvider) {
      this.location = {
          city: 'Belgrade',
          state: 'rs'
      }


  }

  ionViewWillEnter(){
      this.location = {
          city: 'Belgrade',
          state: 'rs'
      }

    this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(weather =>{
        for (var i=0;i<weather.list.length;i++){
            weather.list[i].main.temp_min=Math.round(weather.list[i].main.temp_min-273.15);
            weather.list[i].main.temp_max=Math.round(weather.list[i].main.temp_max-273.15);
        }
        this.weather = weather;

    })
  }

  saveForm(){
      this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(weather =>{
          for (var i=0;i<weather.list.length;i++){
              weather.list[i].main.temp_min=Math.round(weather.list[i].main.temp_min-273.15);
              weather.list[i].main.temp_max=Math.round(weather.list[i].main.temp_max-273.15);
          }
          this.weather = weather;

      })

  }

}
