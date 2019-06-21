import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SightComponent} from './sight/sight.component';
import {SightsCardsComponent} from './sights-cards/sights-cards.component';

const routes: Routes = [
  {path: 'sights', component: SightsCardsComponent},
  {path: 'sights/:title', component: SightComponent},
  {path: 'searchsights', component: SightsCardsComponent},
  {path: ':title', loadChildren: './google-map/google-map.module#GoogleMapModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SightsRoutingModule { }
