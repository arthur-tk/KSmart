import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HiskPage } from '../hisk/hisk';
import { LogoPage } from '../logo/logo';
import { ColorPage } from '../color/color';
import { FlowPage } from '../flow/flow';
import { TextPage } from '../text/text';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  onHiskClick(){
    this.navCtrl.push(HiskPage);
  }

  onLogoClick(){
    this.navCtrl.push(LogoPage);
  }

  onColorClick(){
    this.navCtrl.push(ColorPage);
  }

  onFlowClick(){
    this.navCtrl.push(FlowPage);
  }

  onTextClick(){
    this.navCtrl.push(TextPage);
  }
}
