import {Injectable, isDevMode, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';


@Injectable()

export class CommonService implements OnInit {

  baseServerUrl: string = isDevMode() ? 'http://localhost:8080' : window.location.origin;

  allData: any;
  isDataLoaded = new Subject();

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpClient.get(this.baseServerUrl + '/api/getalldata')
      .subscribe(data => {
        this.allData = data;
        this.isDataLoaded.next(true);
      })
  }

  ngOnInit(): void {

  }

}
