import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {NavigationService} from '../../nav-bar/menu.service';
import {CommonService} from '../../Shared/Services/common.service';

@Component({
  selector: 'app-city-description',
  templateUrl: './city-description.component.html',
  styleUrls: ['./city-description.component.css']
})
export class CityDescriptionComponent implements OnInit {

  cityToShow;
  cityTitle;

  constructor(
    private route: ActivatedRoute,
    private NavigationService: NavigationService,
    private commonService: CommonService
  ) {
    commonService.isDataLoaded.subscribe(() => {
      this.getCity();
    })
  }

  ngOnInit() {
    this.cityTitle = this.route.snapshot.params['title'];
    this.getCity();
  }

  getCity() {
    if (this.cityTitle && this.commonService.allData && this.commonService.allData.cities) {
      this.cityToShow = this.commonService.allData.cities.filter((city) => {
        return city.title == this.cityTitle;
      })[0];
      this.NavigationService.parseActivatedRoute(this.route);
    }
  }

}
