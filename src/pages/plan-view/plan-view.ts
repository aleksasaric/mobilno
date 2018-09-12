import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PlanServiceProvider} from "../../providers/plan-service/plan-service";
import {Plan} from "../../models/Plans.model";
import {AddPlanPage} from "../add-plan/add-plan";
import {HomePage} from "../home/home";

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
random:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private planService:PlanServiceProvider,private alertCtrl: AlertController) {
  this.plan = this.navParams.get('plan');
  }
    alertConfirm(message:string,createDate:number) {
        let alert = this.alertCtrl.create({
            title: 'ATTENTION!',
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');

                    }
                },
                {
                    text: 'YES',
                    handler: () => {
                        this.planService.deletePlan(createDate);
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    }

  ionViewDidEnter(){
      this.random = Math.floor(Math.random()*6)+1;
      console.log(this.random);
  }

updatePlan(plan:Plan){
    this.navCtrl.push(AddPlanPage,plan);
}
deletePlan(createDate:number){
      this.alertConfirm("Are you sure you want to delete this plan?",createDate);


}
checkPlan(createDate:number){
      this.planService.checkPlan(createDate);
      this.navCtrl.push(HomePage);

}

}
