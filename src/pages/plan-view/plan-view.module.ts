import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanViewPage } from './plan-view';

@NgModule({
  declarations: [
    PlanViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanViewPage),
  ],
})
export class PlanViewPageModule {}
