import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any;
  username: any;
  password: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController, public http: Http) {
  }

  server: string = ""


  onChangeUser($event) {
    this.username = $event.target.value
  }

  onChangePass($event) {
    this.password = $event.target.value

  }

  doLogin() {



    let type = "application/x-www-form-urlencoded";
    let headers = new Headers({ 'Content-type': type });
    let option = new RequestOptions({ headers: headers });

    this.http.post(this.server, { username: this.username, password: this.password }, option).subscribe(res => {
      let x = (res.json())
    
      // if(x){
      //   console.log('ok')

      // }
      // else {
      //   console.log('err')
      // }
      console.log(x);
      if (x.api_status == "success") {
        console.log('ok')
        console.log(x.api_status)

        var myString = this.username;
        var id = myString.substr(1);
        console.log(id)
      }
      else
      {
        alert('บัญชีผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง โปรดลองอีกครั้ง')
      }
     
    });

  }
}
