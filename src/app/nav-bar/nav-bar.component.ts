import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

import {NavigationService} from './menu.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  countryQuery = '';
  cityQuery = '';
  countryBySightQuery = '';
  cityBySightQuery = '';
  sightQuery ='';

  private subscription: Subscription;

  constructor(private NavigationService: NavigationService) { }

  ngOnInit() {

    this.subscription = this.NavigationService.getCountryQuery().subscribe(countryQuery => {
      this.countryQuery = countryQuery
    });
    this.subscription = this.NavigationService.getCityQuery().subscribe(cityQuery => {
      this.cityQuery = cityQuery
    });
    this.subscription = this.NavigationService.getCountryBySightQuery().subscribe(country => {
      this.countryBySightQuery = country
    });
    this.subscription = this.NavigationService.getCityBySightQuery().subscribe(city => {
      this.cityBySightQuery = city
    });
    this.subscription = this.NavigationService.getSightQuery().subscribe(sight => {
      this.sightQuery = sight
    });

  }

}
