import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  exam(idstd):Observable<any>{
    let url = `https://exam.fte.kmutnb.ac.th/API/StdExam/${idstd}`
    return this.http.get<any>(url);
  }


}
