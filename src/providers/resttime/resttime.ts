import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ResttimeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResttimeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ResttimeProvider Provider');
  }
  time(): Observable<any> {
    let url = "h"
    return this.http.get<any>(url);
  }
}
