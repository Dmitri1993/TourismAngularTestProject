import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {CommonService} from '../Shared/Services/common.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  query: string = '';

  newsArray;

  paramsSubscribtion;
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.paramsSubscribtion = this.route
      .queryParams
      .subscribe(params => {
        this.query = params.query;
      });

    let params = new HttpParams()
      .set('query', this.query);

    this.httpClient.get(
      this.commonService.baseServerUrl + '/api/getnews',
      {params: params}
      )
      .subscribe((data) => {
        this.newsArray = data;
      },
      (error) => {
        console.log('error', error.status, error.message);
      });

  }

  ngOnDestroy() {
    if (this.paramsSubscribtion) {
      this.paramsSubscribtion.unsubscribe();
    }
  }

}
