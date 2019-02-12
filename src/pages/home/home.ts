import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { ClassPage } from '../class/class';
import { ExamPage } from '../exam/exam';
import { RulePage } from '../rule/rule';
import { ContactPage } from '../contact/contact';
import { GradePage } from '../grade/grade';
import { MapPage } from '../map/map';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('Check UserName');
  }

  onCalendarClick(){
    this.navCtrl.push(CalendarPage);    
  }

  onLoginClick(){
    this.navCtrl.push(LoginPage);    
  }

  onAboutClick(){
    this.navCtrl.push(AboutPage);
  }

  onClassClick(){
    this.navCtrl.push(ClassPage);
  }

  onExamClick(){
    this.navCtrl.push(ExamPage);
  }

  onRuleClick(){
    this.navCtrl.push(RulePage);
  }

  onContactClick(){
    this.navCtrl.push(ContactPage);
  }

  onGradeClick(){
    this.navCtrl.push(GradePage);
  }

  onMapClick(){
    this.navCtrl.push(MapPage);
  }


}
