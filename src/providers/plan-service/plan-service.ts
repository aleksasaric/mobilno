import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import {Plan} from "../../models/Plans.model";



/*
  Generated class for the PlanServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlanServiceProvider {
  private plans: Plan[] = [];
    private plan:Plan;


  constructor(public storage: Storage) {

  }
    savePlan(plan:Plan){
    plan.createDate = Date.now();
      this.plans.push(plan);
      this.storage.set('plans',this.plans);
    }
    getAllPlans(){
      return this.storage.get('plans').then(
          (plans)=>{
            this.plans = plans == null ? [] : plans;
            return [...this.plans];}
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
    }

