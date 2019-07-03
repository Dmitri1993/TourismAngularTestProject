import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {NavigationService} from '../../nav-bar/menu.service';
import {CommonService} from '../../Shared/Services/common.service';

@Component({
  selector: 'app-countries-cards',
  templateUrl: './countries-cards.component.html',
  styleUrls: ['./countries-cards.component.css']
})
export class CountriesCardsComponent implements OnInit, OnDestroy {

  searchTitle = '';
  countries = [];
  searchByCity = '';
  searchCountryBySight = '';

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private NavigationService: NavigationService,
    private commonService: CommonService
  ) {
    commonService.isDataLoaded.subscribe(() => {
      this.getCountries();
    })
  }

  ngOnInit() {
    this.route.params.subscribe();

    this.subscription = this.NavigationService.getCityQuery().subscribe(cityQuery => {
      this.searchByCity = cityQuery
    });
    this.subscription = this.NavigationService.getCountryBySightQuery().subscribe(country => {
      this.searchCountryBySight = country
    });

    this.getCountries();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getCountries() {
    if (this.commonService.allData && this.commonService.allData.countries) {
      this.countries = this.commonService.allData.countries;
      this.NavigationService.parseActivatedRoute(this.route);
    }
  }
}
