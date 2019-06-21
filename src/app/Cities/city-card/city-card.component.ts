import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {

  @Input()
  city;

  constructor() { }

  ngOnInit() {
  }

}
