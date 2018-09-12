import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import {AddPlanPage} from '../add-plan/add-plan';
import {PlanServiceProvider} from "../../providers/plan-service/plan-service";
import {Plan} from "../../models/Plans.model";
import {PlanViewPage} from "../plan-view/plan-view";
import {AngularFireAuth} from "angularfire2/auth";
import {LoginPage} from "../login/login";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    plans: Promise<Plan[]>;
    plan:Plan;
    email:string;
  constructor(private _app: App, private fire: AngularFireAuth,public navCtrl: NavController, private planService:PlanServiceProvider){
    this.email=this.fire.auth.currentUser.email;
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
    logout(){
      this.fire.auth.signOut();
        this._app.getRootNav().setRoot(LoginPage);



    }

}
