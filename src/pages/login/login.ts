import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { disableDebugTools } from '@angular/platform-browser';
import { ResticitProvider } from '../../providers/resticit/resticit';

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

  username:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams , public resticitProvider: ResticitProvider) {
  }

  /*login(){
    console.log("Username: "+ this.username);
    console.log("Password: "+ this.password):
  }*/
  ionViewDidLoad() {
    this.resticitProvider.icit()

    
  }
  
  doLogin(){

    console.log(this.username + this.password)

    if( this.username =="admin" && this.password == "admin"){
      console.log("OK")
      this.navCtrl.push(HomePage);    
      
    }
    else{
      console.log("bad")

    }

  }

  onChangeInputUser(event){
      this.username = event.value
  }
  onChangeInputPass(event){
    this.password = event.value
}

}
