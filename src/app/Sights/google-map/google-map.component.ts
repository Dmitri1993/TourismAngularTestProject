import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import {NavigationService} from '../../nav-bar/menu.service';

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

  constructor(private route: ActivatedRoute, private NavigationService: NavigationService) { }

  ngOnInit() {
    this.NavigationService.parseActivatedRoute(this.route);
    this.subscribtion = this.NavigationService.getSight().subscribe(sight => {
      this.lat = sight['sight']['coordinates']['latitude'],
      this.lng = sight['sight']['coordinates']['longitude']
    });
  }

}
