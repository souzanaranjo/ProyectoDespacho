import { Component, OnInit } from '@angular/core';
import {NavController, NavParams, ModalController, Modal} from 'ionic-angular';
import judicialCase from "../../data/judicialCase";
import {JudicialCase} from "../../data/judicialCase.interface";
import {JudicialDetailsPage} from "../judicial-details/judicial-details";


@Component({
  selector: 'page-lawyers-home',
  templateUrl: 'lawyers-home.html',
})
export class LawyersHomePage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  misCasos: {id: string, name: string, date: string, description: string, status: string }[];


  ngOnInit() {
    this.misCasos = judicialCase;
  }

  onViewCase(judicialCase: JudicialCase) {
      const modal = this.modalCtrl.create(JudicialDetailsPage, judicialCase);
      modal.present();
  }
}
