import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../../nav-bar/menu.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {

  subscribtion: Subscription;
  weatherURL: String;

  constructor(private NavigationService: NavigationService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.NavigationService.parseActivatedRoute(this.route);
    this.subscribtion = this.NavigationService.getWeatherURL().subscribe(weatherURL => {
      this.weatherURL = weatherURL;
    });
  }

}
