import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {CountriesCardsComponent} from './countries-cards/countries-cards.component';
import {CountryDescriptionComponent} from './country-description/country-description.component';

const routes: Routes = [
  {path: 'countries', component: CountriesCardsComponent},
  {path: 'countries/:title', component: CountryDescriptionComponent},
  {path: 'searchcountries', component: CountriesCardsComponent},
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
export class CountriesRoutingModule { }
