import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LawyersHomePage } from './lawyers-home';

@NgModule({
  declarations: [
    LawyersHomePage,
  ],
  imports: [
    IonicPageModule.forChild(LawyersHomePage),
  ],
})
export class LawyersHomePageModule {}
