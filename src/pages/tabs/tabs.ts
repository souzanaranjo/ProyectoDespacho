import { Component } from '@angular/core';

import { LawyersHomePage } from "../lawyers-home/lawyers-home";

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    slPage = LawyersHomePage;
    docPage = LawyersHomePage;
}