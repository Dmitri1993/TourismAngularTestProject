import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from '../../nav-bar/menu.service';
import {CommonService} from '../../Shared/Services/common.service';

@Component({
  selector: 'app-sight',
  templateUrl: './sight.component.html',
  styleUrls: ['./sight.component.css']
})
export class SightComponent implements OnInit {

  sightToShow;
  sightTitle;

  constructor(
    private route: ActivatedRoute,
    private NavigationService: NavigationService,
    private commonService: CommonService
  ) {
    commonService.isDataLoaded.subscribe(() => {
      this.getSight();
    })
  }

  ngOnInit() {
    this.sightTitle = this.route.snapshot.params['title'];
    this.getSight();
  }

  getSight() {
    if (this.sightTitle && this.commonService.allData && this.commonService.allData.sights) {
      this.sightToShow = this.commonService.allData.sights.filter( sight => {
        return sight.title == this.sightTitle;
      })[0];
      this.NavigationService.parseActivatedRoute(this.route);
    }
  }
}
