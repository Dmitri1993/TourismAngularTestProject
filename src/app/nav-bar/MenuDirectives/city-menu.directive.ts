import {Directive, HostBinding, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {NavigationService} from '../menu.service';

@Directive({
  selector: '[appCityMenu]'
})
export class CityMenuDirective implements OnInit{

  @HostBinding('class.isNotVisible') isNotVisible = true;

  private subscribtion: Subscription;

  constructor(private NavigationService: NavigationService) { }

  ngOnInit(): void {
    this.subscribtion = this.NavigationService.isCityObject().subscribe(isCity => {
      this.isNotVisible = !isCity['state'];
    });
  }

}
