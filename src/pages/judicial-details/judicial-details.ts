import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-judicial-details',
  templateUrl: 'judicial-details.html',
})
export class JudicialDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  id: string;
  caseName: string;
  date: string;
  description: string;
  status: string;

  ionViewDidLoad() {
    this.id = this.navParams.get("id");
    this.caseName = this.navParams.get("name");
    this.date = this.navParams.get("date");
    this.description = this.navParams.get("description");
    this.status = this.navParams.get("status");
  }

  onClose() {
    this.viewCtrl.dismiss();
  }

}
