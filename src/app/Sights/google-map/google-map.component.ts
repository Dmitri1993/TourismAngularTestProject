import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import {NavigationService} from '../../nav-bar/menu.service';
import {CommonService} from '../../Shared/Services/common.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  subscribtion: Subscription;
  sight;

  title: string = 'Google Map Sights Observing';
  lat: number = 48.804404;
  lng: number = 2.123162;

  constructor(
    private route: ActivatedRoute,
    private NavigationService: NavigationService,
    private commonService: CommonService
  ) {
    commonService.isDataLoaded.subscribe(() => {
      this.getMap();
    })
  }

  ngOnInit() {

    this.getMap();
  }

  getMap() {
    if (this.commonService.allData && this.commonService.allData.sights) {
      this.subscribtion = this.NavigationService.getSight().subscribe(sight => {
        this.lat = sight.latitude,
        this.lng = sight.longitude
      });
      this.NavigationService.parseActivatedRoute(this.route);
    }
  }

}
