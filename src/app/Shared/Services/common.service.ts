import {Injectable} from '@angular/core';


@Injectable()

export class CommonService {

  baseUrl: string = window.location.origin;

  constructor() {}

}
