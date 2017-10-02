import { Component } from '@angular/core';
import judicialCase from "../../data/judicialCase";
import {JudicialCase} from "../../data/judicialCase.interface";
import { AlertController } from "ionic-angular";

//import { ViewController, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-add-offline-doc',
  templateUrl: 'add_offline_doc.html',
})

export class addOfflineDocPage {

    casosOffline: {id: string, name: string, date: string, description: string, status: string }[];

    constructor(private alertCtrl: AlertController) {}
  
    ngOnInit() {
        this.casosOffline = judicialCase;
    }

    onSelectCase(caso : JudicialCase){
        const alert = this.alertCtrl.create({
        title: 'Add Case to offline documents',
        subTitle: 'Are you sure?',
        message: 'Are you sure you want to add the case?',
        buttons: [
            {
                text: 'Yes, go ahead',
                handler: () => {
                    //this.quotesService.addQuoteToFavorites(selectedQuote);
                }
            },
            {
                text: 'No, I changed my mind!',
                role: 'cancel',
                handler: () => {
                    console.log('Cancelled!');
                }
            }
        ]
        });

        alert.present();
    }
  

}
