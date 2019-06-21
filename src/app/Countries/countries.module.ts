import {NgModule} from '@angular/core';

import {CountriesCardsComponent} from './countries-cards/countries-cards.component';
import {CountryDescriptionComponent} from './country-description/country-description.component';
import {CountryCardComponent} from './country-card/country-card.component';
import {SharedModule} from '../Shared/shared.module';
import {CountriesRoutingModule} from './countries-routing.module';

@NgModule({
  declarations: [
    CountryCardComponent,
    CountriesCardsComponent,
    CountryDescriptionComponent
  ],
  imports: [
    CountriesRoutingModule,
    SharedModule
  ],
  exports: [],
  providers: []
})
export class CountriesModule { }
