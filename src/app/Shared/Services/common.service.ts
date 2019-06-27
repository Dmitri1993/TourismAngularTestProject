import {Injectable, isDevMode} from '@angular/core';


@Injectable()

export class CommonService {

  baseUrl: string = isDevMode() ? 'http://localhost:8080' : 'https://tourism-angular-application.herokuapp.com';

  constructor() {}

}
