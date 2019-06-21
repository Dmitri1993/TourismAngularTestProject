import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {NavigationService} from '../../nav-bar/menu.service';
import {CountriesService} from '../../Shared/Services/countries.sevice';

@Component({
  selector: 'app-countries-cards',
  templateUrl: './countries-cards.component.html',
  styleUrls: ['./countries-cards.component.css']
})
export class CountriesCardsComponent implements OnInit {

  searchTitle = '';
  countries = [];
  searchByCity = '';
  searchCountryBySight = '';

  private subscription: Subscription;

  constructor(private CountriesService: CountriesService, private NavigationService: NavigationService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.countries = this.CountriesService.Countries;
    this.route.params.subscribe();
    this.NavigationService.parseActivatedRoute(this.route);

    this.subscription = this.NavigationService.getCityQuery().subscribe(cityQuery => {
      this.searchByCity = cityQuery
    });
    this.subscription = this.NavigationService.getСountryBySightQuery().subscribe(country => {
      this.searchCountryBySight = country
    });

    this.NavigationService.parseActivatedRoute(this.route);
  }

}
