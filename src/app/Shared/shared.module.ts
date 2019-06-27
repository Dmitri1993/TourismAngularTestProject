import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {CountriesService} from '../Shared/Services/countries.sevice';
import {NavigationService} from '../nav-bar/menu.service';
import {SightsService} from './Services/sights.service';
import {CitiesService} from './Services/cities.service';
import {CityMenuDirective} from '../nav-bar/MenuDirectives/city-menu.directive';
import {SightMenuDirective} from '../nav-bar/MenuDirectives/sight-menu.directive';
import {SearchByTitlePipe} from './Pipes/search-by-title.pipe';
import {SearchBySightPipe} from '../nav-bar/NavigationPipes/search-by-sight.pipe';
import {HoverDirective} from './Directives/hover.directive';
import {SearchByCityPipe} from '../nav-bar/NavigationPipes/search-by-city.pipe';
import {SearchByCountryPipe} from '../nav-bar/NavigationPipes/search-by-country.pipe';
import {CountryMenuDirective} from '../nav-bar/MenuDirectives/country-menu.directive';
import {SafePipe} from './Pipes/safe.pipe';
import {CommonService} from './Services/common.service';

@NgModule({
  declarations: [
    HoverDirective,
    SearchByTitlePipe,
    CountryMenuDirective,
    CityMenuDirective,
    SightMenuDirective,
    SearchByCityPipe,
    SearchBySightPipe,
    SearchByCountryPipe,
    SafePipe

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    HoverDirective,
    SearchByTitlePipe,
    CountryMenuDirective,
    CityMenuDirective,
    SightMenuDirective,
    SearchByCityPipe,
    SearchBySightPipe,
    SearchByCountryPipe,
    FormsModule,
    SafePipe
  ],
  providers: [
    NavigationService,
    SightsService,
    CitiesService,
    CountriesService,
    CommonService
  ]
})
export class SharedModule { }
