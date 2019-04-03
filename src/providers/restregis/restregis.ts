import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the RestregisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestregisProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestregisProvider Provider');
  }
  regis(idstd): Observable<any> {
    let url = `https://exam.fte.kmutnb.ac.th/api/Regisdetail.php/?std=${idstd}&year=2561&sem=2`
    return this.http.get<any>(url);
  }
  
}
