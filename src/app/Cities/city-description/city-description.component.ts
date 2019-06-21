import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {NavigationService} from '../../nav-bar/menu.service';
import {CitiesService} from '../../Shared/Services/cities.service';

@Component({
  selector: 'app-city-description',
  templateUrl: './city-description.component.html',
  styleUrls: ['./city-description.component.css']
})
export class CityDescriptionComponent implements OnInit {

  cityToShow;
  cityTitle;

  constructor(private CitiesService: CitiesService, private NavigationService: NavigationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cityTitle = this.route.snapshot.params['title'];
    this.cityToShow = this.CitiesService.Cities.filter((city) => {
      return city.title == this.cityTitle;
    })[0];
    this.NavigationService.parseActivatedRoute(this.route);
  }

}
