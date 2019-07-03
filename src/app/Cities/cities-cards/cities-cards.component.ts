import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {NavigationService} from '../../nav-bar/menu.service';
import {CommonService} from '../../Shared/Services/common.service';

@Component({
  selector: 'app-cities-cards',
  templateUrl: './cities-cards.component.html',
  styleUrls: ['./cities-cards.component.css']
})
export class CitiesCardsComponent implements OnInit, OnDestroy {

  searchTitle = '';
  cities = [];
  searchByCountry = '';
  searchCityBySight = '';

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private NavigationService: NavigationService,
    private commonService: CommonService
  ) {
    commonService.isDataLoaded.subscribe(() => {
      this.getCities();
    })
  }

  ngOnInit() {
    this.route.params.subscribe();

    this.subscription = this.NavigationService.getCountryQuery().subscribe(countryQuery => {
      this.searchByCountry = countryQuery
    });
    this.subscription = this.NavigationService.getCityBySightQuery().subscribe(city => {
      this.searchCityBySight = city
    });

    this.getCities();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getCities() {
    if (this.commonService.allData && this.commonService.allData.cities) {
      this.cities = this.commonService.allData.cities;
      this.NavigationService.parseActivatedRoute(this.route);
    }
  }

}
