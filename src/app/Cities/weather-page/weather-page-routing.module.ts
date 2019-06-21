import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {WeatherPageComponent} from './weather-page.component';

const routes: Routes = [
  {path: ':title', component: WeatherPageComponent},
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
export class WeatherPageRoutingModule { }
