import {NgModule} from '@angular/core';

import {CityCardComponent} from './city-card/city-card.component';
import {CitiesCardsComponent} from './cities-cards/cities-cards.component';
import {CityDescriptionComponent} from './city-description/city-description.component';
import {SharedModule} from '../Shared/shared.module';
import {CitiesRoutingModule} from './cities-routing.module';

@NgModule({
  declarations: [
    CityCardComponent,
    CitiesCardsComponent,
    CityDescriptionComponent
  ],
  imports: [
    CitiesRoutingModule,
    SharedModule
  ],
  exports: [],
  providers: []
})
export class CitiesModule { }
