import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})


export class UserPage {
  panelI: boolean;
  panelO: boolean;

  id: any
  authen: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.panelI = true;
    this.panelO = false;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
   
    let idstd = JSON.parse(window.sessionStorage.getItem('Authen'))
    console.log(idstd)
      if (idstd !== null || idstd !== undefined  || idstd !=='') {
        this.authen = idstd
        this.id = idstd
      console.log(this.id,'dd')
      if (this.id == null || this.id == undefined || this.id == '') {

        this.panelO = false;
        this.panelI = true;

      }
      else {
        this.panelO = true;
        this.panelI = false;
      }
    }
  
  }

  

  
  Obtn() {

    this.navCtrl.push(LoginPage);


  }
  Obto() {
    window.sessionStorage.clear();
    this.panelO = false;
    this.panelI = true;
    this.navCtrl.push(LoginPage);
   
 

  }


}
