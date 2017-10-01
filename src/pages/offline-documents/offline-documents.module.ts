import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfflineDocumentsPage } from './offline-documents';

@NgModule({
  declarations: [
    OfflineDocumentsPage,
  ],
  imports: [
    IonicPageModule.forChild(OfflineDocumentsPage),
  ],
})
export class OfflineDocumentsPageModule {}
