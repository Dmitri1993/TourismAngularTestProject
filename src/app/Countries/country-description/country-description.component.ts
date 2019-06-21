import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CountriesService} from '../../Shared/Services/countries.sevice';
import {NavigationService} from '../../nav-bar/menu.service';

@Component({
  selector: 'app-country-description',
  templateUrl: './country-description.component.html',
  styleUrls: ['./country-description.component.css']
})
export class CountryDescriptionComponent implements OnInit {

  countryToShow;
  countryTitle;

  constructor(private CountriesService: CountriesService, private NavigationService: NavigationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.countryTitle = this.route.snapshot.params['title'];
    this.countryToShow = this.CountriesService.Countries.filter( country => {
      return country.title == this.countryTitle;
    })[0];
    this.NavigationService.parseActivatedRoute(this.route);
  }

}
