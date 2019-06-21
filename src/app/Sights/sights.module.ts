import {NgModule} from '@angular/core';

import {SightCardComponent} from './sight-card/sight-card.component';
import {SightsCardsComponent} from './sights-cards/sights-cards.component';
import {SightComponent} from './sight/sight.component';
import {SharedModule} from '../Shared/shared.module';
import {SightsRoutingModule} from './sights-routing.module';


@NgModule({
  declarations: [
    SightsCardsComponent,
    SightCardComponent,
    SightComponent
  ],
  imports: [
    SightsRoutingModule,
    SharedModule
  ],
  exports: [],
  providers: []
})
export class SightsModule { }
