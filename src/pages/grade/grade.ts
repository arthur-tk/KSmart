import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  years: string;
  terms: string;
  pushyear: string;
  pushterm: string;


  Values = {
    name: {},
    grade: {}
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public restgradeProvider: RestgradeProvider) {


  }

  // ionViewDidLoad() {
  //   this.restgradeProvider.grade().subscribe((result) => {

  //     this.gra = result.GradeList

  //     var nameSubject = []
  //     this.gra.COURSE_NAME_ENG.map((data) => {
  //       nameSubject.push(data)
  //       this.Values.name = nameSubject
  //       this.NameSubject = nameSubject
  //     })

  //     var grade = []
  //     this.gra.GRADE.map((data) => {
  //       grade.push(data)
  //       this.Grade = grade
  //       this.Values.grade = grade
  //     })

  //     console.log(this.gra)

  //   })
  // }

  year(event: any) {
    this.years = event.target.value;

  }

  term(event: any) {
    this.terms = event.target.value;

  }

  choice() {
    if (this.years == undefined || this.years == '' && this.terms == undefined || this.terms == '') {
      console.log('badyear')
      alert('กรุณาเลือกปีการศึกษา และ ภาคเรียน')
    }
    else if (this.years == undefined || this.years == '') {
      console.log('badyear')
      alert('กรุณาเลือกปีการศึกษา')
    }
    else if (this.terms == undefined || this.terms == '') {
      console.log('badterm')
      alert('กรุณาเลือกภาคเรียน')
    }
    else {
      console.log('g')
      this.pushyear = this.years;
      this.pushterm = this.terms;
      console.log(this.pushyear)
      console.log(this.pushterm)
      this.restgradeProvider.Setgrade(this.pushyear, this.pushterm)

      this.restgradeProvider.grade(this.pushyear, this.pushterm).subscribe((result) => {

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

  }

}
