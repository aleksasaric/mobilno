import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlanServiceProvider} from "../../providers/plan-service/plan-service";
import {Plan} from "../../models/Plans.model";
import {AddPlanPage} from "../add-plan/add-plan";

/**
 * Generated class for the PlanViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plan-view',
  templateUrl: 'plan-view.html',
})
export class PlanViewPage {
plan:Plan;

  constructor(public navCtrl: NavController, public navParams: NavParams, private planService:PlanServiceProvider) {
  this.plan = this.navParams.get('plan');
  }
updatePlan(plan:Plan){
    this.navCtrl.push(AddPlanPage,plan);
}
deletePlan(createDate:number){
    this.planService.deletePlan(createDate);
    this.navCtrl.pop();
}

}
