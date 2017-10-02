import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import judicialCase from "../../data/judicialCase";
import {JudicialCase} from "../../data/judicialCase.interface";
import {JudicialDetailsPage} from "../judicial-details/judicial-details";
import { addOfflineDocPage } from '../add-offline-document/add_offline_doc';


@Component({
  selector: 'page-offline-documents',
  templateUrl: 'offline-documents.html',
})
export class OfflineDocumentsPage {

   addOfflineDoc =  addOfflineDocPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
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
