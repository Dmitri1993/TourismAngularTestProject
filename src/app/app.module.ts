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
import {NewsComponent} from './News/news.component';
import {HttpClientModule} from '@angular/common/http';
import { GoogleSearchComponent } from './google-search/google-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewsComponent,
    GoogleSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
