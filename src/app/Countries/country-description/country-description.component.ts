import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {NavigationService} from '../../nav-bar/menu.service';
import {CommonService} from '../../Shared/Services/common.service';

@Component({
  selector: 'app-country-description',
  templateUrl: './country-description.component.html',
  styleUrls: ['./country-description.component.css']
})
export class CountryDescriptionComponent implements OnInit {

  countryToShow;
  countryTitle;

  constructor(
    private route: ActivatedRoute,
    private NavigationService: NavigationService,
    private commonService: CommonService
  ) {
    commonService.isDataLoaded.subscribe(() => {
      this.getCountry();
    })
  }

  ngOnInit() {
    this.countryTitle = this.route.snapshot.params['title'];
    this.getCountry();
  }

  getCountry() {
    if (this.countryTitle && this.commonService.allData && this.commonService.allData.countries) {
      this.countryToShow = this.commonService.allData.countries.filter( country => {
        return country.title == this.countryTitle;
      })[0];
      this.NavigationService.parseActivatedRoute(this.route);
    }
  }

}
