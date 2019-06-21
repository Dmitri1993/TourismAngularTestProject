import { Component, OnInit } from '@angular/core';
import {SightsService} from '../../Shared/Services/sights.service';
import {NavigationService} from '../../nav-bar/menu.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sights-cards',
  templateUrl: './sights-cards.component.html',
  styleUrls: ['./sights-cards.component.css']
})
export class SightsCardsComponent implements OnInit {

  searchTitle = '';
  sights = [];
  searchByCountry = '';
  searchByCity = '';

  private subscription: Subscription;

  constructor(private SightsCards: SightsService, private NavigationService: NavigationService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sights = this.SightsCards.Sights;

    this.subscription = this.NavigationService.getCountryQuery().subscribe(countryQuery => {
      this.searchByCountry = countryQuery
    });
    this.subscription = this.NavigationService.getCityQuery().subscribe(cityQuery => {
      this.searchByCity = cityQuery
    });

    this.NavigationService.parseActivatedRoute(this.route);
  }


}
