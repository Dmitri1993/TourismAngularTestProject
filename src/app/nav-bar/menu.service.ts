import {ActivatedRoute} from '@angular/router';
import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs';
import {CommonService} from '../Shared/Services/common.service';

@Injectable()

export class NavigationService {

  constructor(
    private commonService: CommonService
  ) {}

  isCountry = new BehaviorSubject<any>({state: false});
  isCity = new BehaviorSubject<any>({state: false});
  isSight = new BehaviorSubject<any>({state: false});

  countryQuery = new BehaviorSubject('');
  cityQuery  = new BehaviorSubject('');
  sightQuery = new BehaviorSubject('');
  sight = new BehaviorSubject<any>({sight: null});
  countryBySightQuery = new BehaviorSubject('');
  cityBySightQuery = new BehaviorSubject('');

  cityWeather = new BehaviorSubject('');

  isCountryObject() {
    return this.isCountry;
  }
  isCityObject() {
    return this.isCity;
  }
  isSightObject() {
    return this.isSight;
  }


  getCountryQuery() {
    return this.countryQuery;
  }
  getCityQuery() {
    return this.cityQuery;
  }
  getSight() {
    return this.sight
  }
  getCountryBySightQuery() {
    return this.countryBySightQuery;
  }
  getCityBySightQuery() {
      return this.cityBySightQuery;
    }
  getSightQuery() {
      return this.sightQuery;
    }
    getWeatherURL() {
    return this.cityWeather
    }

  parseActivatedRoute(route: ActivatedRoute): void {

    this.closeMenus();
    this.cleanVars();

    if(route.snapshot.queryParams['country']) {
      this.countryQuery.next(route.snapshot.queryParams['country']);
      this.openCountryMenu();
    }

    if(route.snapshot.queryParams['city']) {
      this.cityQuery.next(route.snapshot.queryParams['city']);
      this.cityWeather.next(this.commonService.allData.cities.filter(city => city['title'] == this.cityQuery.value)[0]['weatherURL']);
      this.openCityMenu();
    }

    if(route.snapshot.queryParams['sight']) {
      this.sightQuery.next(route.snapshot.queryParams['sight']);
      this.sight.next({sight: this.commonService.allData.sights.filter(sight => {
        return sight.title == this.sightQuery.value
      })[0]});
      this.countryBySightQuery.next(this.sight.value['sight']['country']);
      this.cityBySightQuery.next(this.sight.value['sight']['city']);
      this.openSightMenu();
    }
  }

  openCountryMenu(): void {
    this.isCountry.next({state: true});
    this.isCity.next({state: false});
    this.isSight.next({state: false});
  }

  openCityMenu(): void {
    this.isCountry.next({state: false});
    this.isCity.next({state: true});
    this.isSight.next({state: false});
  }

  openSightMenu(): void {
    this.isCountry.next({state: false});
    this.isCity.next({state: false});
    this.isSight.next({state: true});
  }

  closeMenus(): void {
    this.isCountry.next({state: false});
    this.isCity.next({state: false});
    this.isSight.next({state: false});
  }

  cleanVars() {
    this.countryQuery.next('');
    this.cityQuery.next('');
    this.sightQuery.next('');
    this.cityBySightQuery.next('');
    this.countryBySightQuery.next('');
  }
}
