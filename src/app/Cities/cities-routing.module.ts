import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CitiesCardsComponent} from './cities-cards/cities-cards.component';
import {CityDescriptionComponent} from './city-description/city-description.component';

const routes: Routes = [
  {path: 'cities', component: CitiesCardsComponent},
  {path: 'cities/:title', component: CityDescriptionComponent},
  {path: 'searchcities', component: CitiesCardsComponent},
  {path: 'weather', loadChildren: './weather-page/weather-page.module#WeatherPageModule'}
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
export class CitiesRoutingModule { }
