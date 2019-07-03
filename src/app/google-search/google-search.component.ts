import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CommonService} from '../Shared/Services/common.service';


@Component({
  selector: 'app-google-search',
  templateUrl: './google-search.component.html',
  styleUrls: ['./google-search.component.css']
})
export class GoogleSearchComponent implements OnInit {

  queryString: string = '';
  articlesArray = [];

  constructor(
    private httpClient: HttpClient,
    private commonService: CommonService
  ) { }

  ngOnInit() {}

  makeSearchRequest() {
    if (this.queryString) {

      let params = new HttpParams()
        .set('query', this.queryString);
      this.httpClient.get(
        this.commonService.baseServerUrl + '/api/search',
        {params: params}
      )
        .subscribe(data => {
          if (data) {
            this.articlesArray = Object.values(data);
          } else {
            this.articlesArray = [];
          }
        },
        error => {
          console.log('error', error.error);
        })
    }
  }
}
