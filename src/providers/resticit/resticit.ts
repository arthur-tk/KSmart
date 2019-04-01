
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable'Request, Headers;

/*
  Generated class for the ResticitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResticitProvider {

  constructor(public http: Http) {
    console.log('Hello ResticitProvider Provider');
  }

  server: string = "https://exam.fte.kmutnb.ac.th/api/login.php/"


  icit() {
   // let username = $usernamew;
   // let password = $passwordw;

    let type = "application/x-www-form-urlencoded";
    let headers = new Headers({ 'Content-type': type });
    let body = JSON.stringify({ username: "s5802041620084",password :"art15535"})
    let option = new RequestOptions({ headers: headers });

    this.http.post(this.server , body,option).subscribe(res => {
      let x = (res.json().userInfo)
      console.log(x)
      
    })
  }


}
