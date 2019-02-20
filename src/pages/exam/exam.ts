import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})



export class ExamPage {

  spy: any
  test: any
  // test: {
  //   id: String,
  //   sbj: String
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {


  }
  ionViewDidLoad() {
    this.restProvider.exam().subscribe(result => {
      this.spy = result.ExamFTE
      console.log(this.spy);

      this.spy.map((data) => {
        console.log(this.test)
        return this.test = data
      })

    })
  }
} 