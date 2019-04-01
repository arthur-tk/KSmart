import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular';
import { ResticitProvider } from '../../providers/resticit/resticit';
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
 

  // username:string;
  //password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams , public resticitProvider: ResticitProvider, public loading: LoadingController , public http: Http) {
  }

  /*login(){
    console.log("Username: "+ this.username);
    console.log("Password: "+ this.password):
  }*/

  server: string = ""


  // icit() {
  //  // let username = $usernamew;
  //  // let password = $passwordw;

  //   let type = "application/x-www-form-urlencoded";
  //   let headers = new Headers({ 'Content-type': type });
  //   let body = JSON.stringify({ username: "s5802041620084",password :"art15535"})
  //   let option = new RequestOptions({ headers: headers });

  //   this.http.post(this.server , body,option).subscribe(res => {
  //     let x = (res.json().userInfo)
  //     console.log(x)
      
  //   })
  // }

  doLogin() {

    
    this.username = this.navParams.get('username');
    this.password = this.navParams.get('password');

    let type = "application/x-www-form-urlencoded";
    let headers = new Headers({ 'Content-type': type });
    let option = new RequestOptions({ headers: headers });

    let data = {
      username: this.username,
      password: this.password

    };

    // let loader = this.loading.create({
    //   content: 'Processing please wait...',
    // });

    // loader.present().then(() => {
      this.http.post(this.server , data,option).subscribe(res => {
        let x = (res.json().userInfo)
        console.log(x);
          // loader.dismiss()
          // this.items = res.server_response;

          // console.log(this.items);
        });
    // });
  }
}















//   ionViewDidLoad() {
//     this.resticitProvider.icit()

    
//   }
  
//   doLogin(){

//     console.log(this.username + this.password)

//     if( this.username =="" && this.password == ""){
//       console.log("OK")
//       this.navCtrl.push(HomePage);    
      
//     }
//     else{
//       console.log("bad")

//     }

//   }

  

//   onChangeInputUser(event){
//       this.username = event.value
//   }
//   onChangeInputPass(event){
//     this.password = event.value
// }

// }
