import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})

export class ExamPage {

  showexam: any
  id: any
  authen: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) { }
  async ionViewDidLoad() {
    let idstd = JSON.parse(window.sessionStorage.getItem('Authen'))
    if (idstd !== null) {
      this.authen = idstd
      const x = this.authen.username.substr(1)
      
      if (Object.keys(this.authen).length > 1) {
        this.restProvider.exam(x).subscribe(result => {
          this.showexam = result.ExamFTE
          console.log(this.showexam)
          this.showexam.map((idstd) => {
            return this.id = idstd
          })
        })
      }
    }
    else {
      alert('กรุณาเข้าสู่ระบบ')
      this.navCtrl.push(LoginPage);
    }
  }
} 