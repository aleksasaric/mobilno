import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import {Plan} from "../../models/Plans.model";
import {AngularFireAuth} from 'angularfire2/auth';


/*
  Generated class for the PlanServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlanServiceProvider {
  private plans: Plan[] = [];

    private plan:Plan;



  constructor(private fire: AngularFireAuth, public storage: Storage) {

  }
    savePlan(plan:Plan){
    plan.createDate = Date.now();
    plan.done = false;
        plan.email = this.fire.auth.currentUser.email;
      this.plans.push(plan);
      this.storage.set('plans',this.plans);

    }
    getAllPlans(){
      var plansWithEmail: Plan[]=[];
      return this.storage.get('plans').then(
          (plans)=>{
            this.plans = plans == null ? [] : plans;

            if (plans==null){
                return plans;

            }
            for (var i = 0; i < plans.length; i++) {
                    if (plans[i].email === this.fire.auth.currentUser.email) plansWithEmail.push(plans[i]);
                }

            return plansWithEmail;}
      )

          }
          getPlan(createDate:number){
            return this.storage.get('plans').then((plans)=>{
                this.plan = [...plans].find(r => r.createDate===createDate);
                return this.plan;
            })
          }

          deletePlan(createDate:number){

            this.plans = this.plans.filter((plan)=>{
                return plan.createDate !== createDate
            });
            this.storage.set('plans',this.plans);

          }
          checkPlan(createDate:number){

             this.storage.get('plans').then((plans)=>{
                for(var i=0;i<plans.length;i++){

                    if (plans[i].createDate==createDate){ plans[i].done=true;}
                }


                this.storage.set('plans', plans);


              });

          }

    }

