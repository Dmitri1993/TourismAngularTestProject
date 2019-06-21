import {Directive, HostBinding, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {NavigationService} from '../menu.service';

@Directive({
  selector: '[appCountryMenu]'
})
export class CountryMenuDirective implements OnInit {

  @HostBinding('class.isNotVisible') isNotVisible = true;

  private subscribtion : Subscription;

  constructor(private NavigationService: NavigationService) { }

  ngOnInit(): void {
    this.subscribtion = this.NavigationService.isCountryObject().subscribe(isCountry => {
      this.isNotVisible = !isCountry['state'];
    });
  }

}
