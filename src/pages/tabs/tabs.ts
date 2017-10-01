import { Component } from '@angular/core';

import { LawyersHomePage } from "../lawyers-home/lawyers-home";
import {OfflineDocumentsPage} from "../offline-documents/offline-documents";

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    slPage = LawyersHomePage;
    docPage = OfflineDocumentsPage;
}