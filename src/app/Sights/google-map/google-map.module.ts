import {NgModule} from '@angular/core';
import {GoogleMapComponent} from './google-map.component';
import {SharedModule} from '../../Shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import {GoogleMapRoutingModule} from './google-map-routing.module';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    GoogleMapComponent
  ],
  imports: [
    SharedModule,
    GoogleMapRoutingModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBePshkt1R3Uoyb9TtrbSZ6Ps5UEcusb9U'
    })
  ],
  exports: [],
  providers: []
})
export class GoogleMapModule{

}
