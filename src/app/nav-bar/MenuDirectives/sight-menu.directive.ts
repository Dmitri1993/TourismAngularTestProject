import {Directive, HostBinding, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {NavigationService} from '../menu.service';

@Directive({
  selector: '[appSightMenu]'
})
export class SightMenuDirective implements OnInit{

  @HostBinding('class.isNotVisible') isNotVisible = true;

  private subscribtion : Subscription;

  constructor(private NavigationService: NavigationService) { }

  ngOnInit(): void {
    this.subscribtion = this.NavigationService.isSightObject().subscribe(isSight => {
      this.isNotVisible = !isSight['state'];
    });
  }

}
