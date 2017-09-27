import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JudicialDetailsPage } from './judicial-details';

@NgModule({
  declarations: [
    JudicialDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(JudicialDetailsPage),
  ],
})
export class JudicialDetailsPageModule {}
