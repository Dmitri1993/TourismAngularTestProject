import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {CitiesService} from '../../Shared/Services/cities.service';
import {NavigationService} from '../../nav-bar/menu.service';

@Component({
  selector: 'app-cities-cards',
  templateUrl: './cities-cards.component.html',
  styleUrls: ['./cities-cards.component.css']
})
export class CitiesCardsComponent implements OnInit {

  searchTitle = '';
  cities = [];
  searchByCountry = '';
  searchCityBySight = '';

  private subscription: Subscription;

  constructor(private CitiesService: CitiesService, private NavigationService: NavigationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cities = this.CitiesService.Cities;
    this.NavigationService.parseActivatedRoute(this.route);
    this.subscription = this.NavigationService.getCountryQuery().subscribe(countryQuery => {
      this.searchByCountry = countryQuery
    });

    this.subscription = this.NavigationService.getCityBySightQuery().subscribe(city => {
      this.searchCityBySight = city
    });
  }

}
