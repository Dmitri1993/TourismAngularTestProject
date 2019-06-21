import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {GoogleMapComponent} from './google-map.component';

const routes: Routes = [
  {path: ':title', component: GoogleMapComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class GoogleMapRoutingModule { }
