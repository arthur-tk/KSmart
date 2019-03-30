import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { RestgradeProvider } from '../../providers/restgrade/restgrade';


@IonicPage()
@Component({
  selector: 'page-grade',
  templateUrl: 'grade.html',
})
export class GradePage {

  gra: any

  NameSubject: any
  Grade: any

  Values = {
    name: {},
    grade: {}
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public restgradeProvider: RestgradeProvider) {


  }
  // ionViewWillEnter() {
  ionViewDidLoad() {
    this.restgradeProvider.grade().subscribe((result) => {

      this.gra = result.GradeList

      var nameSubject = []
      this.gra.COURSE_NAME_ENG.map((data) => {
        nameSubject.push(data)
        this.Values.name = nameSubject
        this.NameSubject = nameSubject
      })

      var grade = []
      this.gra.GRADE.map((data) => {
        grade.push(data)
        this.Grade = grade
        this.Values.grade = grade
      })

      console.log(this.gra)


    })
  }

  year($event){
    console.log($event.target.value)
  }
  term($event){
    console.log($event.target.value)
  }
}
