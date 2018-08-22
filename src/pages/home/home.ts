import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddPlanPage} from '../add-plan/add-plan';
import {PlanServiceProvider} from "../../providers/plan-service/plan-service";
import {Plan} from "../../models/Plans.model";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    plans: Promise<Plan[]>;
  constructor(public navCtrl: NavController, private planService:PlanServiceProvider){

  }

    ionViewWillEnter()
    {
        this.plans = this.getPlans();
    }
  	addPlan(){
      this.navCtrl.push(AddPlanPage);
  	}
  	getPlans(){
      return this.planService.getAllPlans();
    }
}
