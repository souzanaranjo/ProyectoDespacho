import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {LoginPage} from "../pages/login/login";
import {LawyersHomePage} from "../pages/lawyers-home/lawyers-home";
import {JudicialDetailsPage} from "../pages/judicial-details/judicial-details";
import {TabsPage} from "../pages/tabs/tabs";
import {OfflineDocumentsPage} from "../pages/offline-documents/offline-documents";
import { addOfflineDocPage } from '../pages/add-offline-document/add_offline_doc';

@NgModule({
  declarations: [
    MyApp,
      LoginPage,
      LawyersHomePage,
      JudicialDetailsPage,
      TabsPage,
      OfflineDocumentsPage,
      addOfflineDocPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      LoginPage,
      LawyersHomePage,
      JudicialDetailsPage,
      TabsPage,
      OfflineDocumentsPage,
      addOfflineDocPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
