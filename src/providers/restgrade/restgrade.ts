import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the RestgradeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestgradeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestgradeProvider Provider');
  }

  grade():Observable<any>{
    let url = "https://exam.fte.kmutnb.ac.th/api/GradeList.php/?std=5802041620084&year=2560&sem=1"
    return this.http.get<any>(url);
  }
}
