import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sight-card',
  templateUrl: './sight-card.component.html',
  styleUrls: ['./sight-card.component.css']
})
export class SightCardComponent implements OnInit {

  @Input()
  sight;

  constructor() { }

  ngOnInit() {
  }

}
