import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from '../../nav-bar/menu.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CommonService} from '../../Shared/Services/common.service';

@Component({
  selector: 'app-sights-cards',
  templateUrl: './sights-cards.component.html',
  styleUrls: ['./sights-cards.component.css']
})
export class SightsCardsComponent implements OnInit, OnDestroy {

  searchTitle = '';
  sights = [];
  searchByCountry = '';
  searchByCity = '';

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private NavigationService: NavigationService,
    private commonService: CommonService
  ) {
    commonService.isDataLoaded.subscribe(() => {
      this.getSights();
    })
  }

  ngOnInit() {
    this.route.params.subscribe();

    this.subscription = this.NavigationService.getCountryQuery().subscribe(countryQuery => {
      this.searchByCountry = countryQuery
    });
    this.subscription = this.NavigationService.getCityQuery().subscribe(cityQuery => {
      this.searchByCity = cityQuery
    });

    this.getSights();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getSights() {
    if (this.commonService.allData && this.commonService.allData.sights) {
      this.sights = this.commonService.allData.sights;
      this.NavigationService.parseActivatedRoute(this.route);
    }
  }

}
