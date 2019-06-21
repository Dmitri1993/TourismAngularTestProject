import { Component, OnInit } from '@angular/core';
import { SightsService } from '../../Shared/Services/sights.service';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from '../../nav-bar/menu.service';

@Component({
  selector: 'app-sight',
  templateUrl: './sight.component.html',
  styleUrls: ['./sight.component.css']
})
export class SightComponent implements OnInit {

  sightToShow;
  sightTitle;

  constructor(private SightsService: SightsService, private NavigationService: NavigationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sightTitle = this.route.snapshot.params['title'];
    this.sightToShow = this.SightsService.Sights.filter( sight => {
      return sight.title == this.sightTitle;
    })[0];
    this.NavigationService.parseActivatedRoute(this.route);
  }

}
