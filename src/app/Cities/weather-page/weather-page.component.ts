import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../../nav-bar/menu.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CommonService} from '../../Shared/Services/common.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {

  subscribtion: Subscription;
  weatherURL: String;

  constructor(
    private route: ActivatedRoute,
    private NavigationService: NavigationService,
    private commonService: CommonService
  ) {
    commonService.isDataLoaded.subscribe(() => {
      this.getWeather();
    })
  }
  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    if (this.commonService.allData && this.commonService.allData.cities) {
      this.NavigationService.parseActivatedRoute(this.route);
      this.subscribtion = this.NavigationService.getWeatherURL().subscribe(weatherURL => {
        this.weatherURL = weatherURL;
      });
    }
  }

}
