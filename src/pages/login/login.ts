import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { UserPage } from '../user/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any;
  username: any;
  password: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) { }

  server: string = "https://exam.fte.kmutnb.ac.th/api/login.php/"

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

      console.log(x);
      if (x.api_status == "success") {
        window.sessionStorage.setItem('Authen', JSON.stringify(x.userInfo))
        var sub = this.username.substring(4, 5);
        sub = parseInt(sub, 10);
        if (sub == 2) {
          this.navCtrl.push(UserPage);
        }
        else {
          alert('กรุณาลงชื่อเข้าใช้ด้วยบัญชีผู้ใช้คณะครุศาสตร์')
          console.log(sub)
          window.sessionStorage.clear();
        }
      }
      else {
        alert('บัญชีผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง โปรดลองอีกครั้ง')
      }
    });
  }
}
