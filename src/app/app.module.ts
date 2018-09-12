import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule} from "@angular/http";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddPlanPage } from '../pages/add-plan/add-plan';
import { WeatherPage} from "../pages/weather/weather";
import { LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlanServiceProvider } from '../providers/plan-service/plan-service';
import {IonicStorageModule} from "@ionic/storage";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PlanViewPage} from "../pages/plan-view/plan-view";
import { WeatherProvider } from '../providers/weather/weather';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseAuth = {
    apiKey: "AIzaSyBdU_3fAEGgsSLP4M9V4Q_EEkbNvuEFdy0",
    authDomain: "bikersdreamplaner.firebaseapp.com",
    databaseURL: "https://bikersdreamplaner.firebaseio.com",
    projectId: "bikersdreamplaner",
    storageBucket: "bikersdreamplaner.appspot.com",
    messagingSenderId: "737933549340"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddPlanPage,
    PlanViewPage,
      WeatherPage,
      LoginPage,
      RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      IonicStorageModule.forRoot(),
      FormsModule,
      HttpModule,
      ReactiveFormsModule,
      AngularFireModule.initializeApp(firebaseAuth),
      AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddPlanPage,
      PlanViewPage,
      WeatherPage,
      LoginPage,
      RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlanServiceProvider,
    WeatherProvider
  ]
})
export class AppModule {}
