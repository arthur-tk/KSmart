import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ResticitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResticitProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ResticitProvider Provider');
  }
  time(): Observable<any> {
    let url = ""
    return this.http.get<any>(url);
  }

}
