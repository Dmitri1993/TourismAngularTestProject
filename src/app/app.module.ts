import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {CountriesModule} from './Countries/countries.module';
import {CitiesModule} from './Cities/cities.module';
import {SightsModule} from './Sights/sights.module';
import {SharedModule} from './Shared/shared.module';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountriesModule,
    CitiesModule,
    SightsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
