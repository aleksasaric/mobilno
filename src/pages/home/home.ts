import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddPlanPage} from '../add-plan/add-plan';
import {PlanServiceProvider} from "../../providers/plan-service/plan-service";
import {Plan} from "../../models/Plans.model";
import {PlanViewPage} from "../plan-view/plan-view";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    plans: Promise<Plan[]>;
    plan:Plan;
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
    getPlan(createDate:number){
      this.planService.getPlan(createDate).then((plan)=>{
          this.plan = plan;
          this.navCtrl.push(PlanViewPage,{plan:this.plan})
      })
    }
}
