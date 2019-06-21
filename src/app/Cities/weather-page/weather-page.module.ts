import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WeatherPageComponent} from './weather-page.component';
import {SharedModule} from '../../Shared/shared.module';
import {WeatherPageRoutingModule} from './weather-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WeatherPageRoutingModule
  ],
  declarations: [
    WeatherPageComponent
  ]
})
export class WeatherPageModule { }
