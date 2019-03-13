import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the GradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grade',
  templateUrl: 'grade.html',
})
export class GradePage {
 
  gra: any
  de: any

   constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {


  }
  ionViewDidLoad() {
    this.restProvider.grade().subscribe(result => {
      this.gra = result.GradeList
      console.log(this.gra);

      this.gra.map((data) => {
        console.log(this.de)
        return this.de = data
      })
      

    })
  }

}
