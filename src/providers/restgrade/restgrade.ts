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

  grade(idstd, $year ,$term):Observable<any>{
    let terms = $term 
    let years = $year
    let url = `https://exam.fte.kmutnb.ac.th/api/GradeList.php/?std=${idstd}&year=${years}&sem=${terms}`
    return this.http.get<any>(url);  
  }
  
  
}
