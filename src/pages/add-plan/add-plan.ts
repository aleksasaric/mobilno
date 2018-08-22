import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlanServiceProvider} from "../../providers/plan-service/plan-service";
import {Plan} from "../../models/Plans.model";
import {FormGroup, Validator, FormControl} from "@angular/forms";

/**
 * Generated class for the AddPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-plan',
  templateUrl: 'add-plan.html',
})
export class AddPlanPage {
  formGroup: FormGroup;
  plan: Plan;
  date: Date = new Date();
  title: string = '';
  content: string='';

  constructor(public navCtrl: NavController,private planService:PlanServiceProvider) {
    this.formGroup = new FormGroup({
        title: new FormControl(),
        content: new FormControl(),
        date: new FormControl()
      }
    )
  }

  savePlan(plan:Plan){
      this.planService.savePlan(plan);
      this.navCtrl.pop();
  }
}
