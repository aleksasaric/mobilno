import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlanServiceProvider} from "../../providers/plan-service/plan-service";
import {Plan} from "../../models/Plans.model";
import {FormGroup, Validator, FormControl} from "@angular/forms";
import {PlanViewPage} from "../plan-view/plan-view";
import {HomePage} from "../home/home";


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
    val:string='';
    plan2: any;
  formGroup: FormGroup;
  plan: Plan;
  date: Date = new Date();
  titleFrom: string = '';
  titleTo:string='';
  content: string='';
  done: boolean;
  email: string='';

  constructor(public navCtrl: NavController,private planService:PlanServiceProvider, public navParams: NavParams) {
        this.val = this.navCtrl.last().name;
        this.plan2 = navParams.data;
      this.formGroup = new FormGroup({
        titleFrom: new FormControl(),
          titleTo: new FormControl(),
        content: new FormControl(),
        date: new FormControl()


      }
    )
  }
  ionViewWillEnter(){
        if  (this.val=="PlanViewPage") {
            this.formGroup.controls['titleFrom'].setValue(this.plan2.titleFrom);
            this.formGroup.controls['titleTo'].setValue(this.plan2.titleTo);
            this.formGroup.controls['date'].setValue(this.plan2.date);
            this.formGroup.controls['content'].setValue(this.plan2.content);
        }
  }
  savePlan(plan:Plan){
      //update
      if (this.val=="PlanViewPage")
      {
        this.updatePlan(plan);

      }
      //save
      else {
          this.planService.savePlan(plan);
          this.navCtrl.pop();

      }

  }
    updatePlan(plan:Plan){
        this.planService.deletePlan(this.plan2.createDate);
        this.planService.savePlan(plan);
        this.navCtrl.push(HomePage);
    }
}
