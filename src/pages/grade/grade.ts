import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestgradeProvider } from '../../providers/restgrade/restgrade';
import { LoginPage } from '../login/login';

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
  id: any
  authen: any


  Values = {
    name: {},
    grade: {}
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public restgradeProvider: RestgradeProvider) {

  }

  
  year(event: any) {
    this.years = event.target.value;
    console.log(this.years)

  }

  term(event: any) {
    this.terms = event.target.value;
    console.log(this.terms)

  }

 async choice() {
    if (this.years == undefined || this.years == '' && this.terms == undefined || this.terms == '') {
      console.log('badyear&terms')
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
      let idstd = JSON.parse(window.sessionStorage.getItem('Authen'))
     
        if (idstd !== null) {
          this.authen = idstd
          const x = this.authen.username.substr(1)
          console.log(x)

          if (Object.keys(this.authen).length > 1) {
            this.restgradeProvider.grade(x, this.pushyear, this.pushterm).subscribe((result) => {

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
        else {
          alert('กรุณาเข้าสู่ระบบ')
          this.navCtrl.push(LoginPage);  
        }
        
     

    }
  }
}



// this.restgradeProvider.grade(this.pushyear, this.pushterm).subscribe((result) => {

//   this.gra = result.GradeList

//   var nameSubject = []
//   this.gra.COURSE_NAME_ENG.map((data) => {
//     nameSubject.push(data)
//     this.Values.name = nameSubject
//     this.NameSubject = nameSubject
//   })

//   var grade = []
//   this.gra.GRADE.map((data) => {
//     grade.push(data)
//     this.Grade = grade
//     this.Values.grade = grade
//   })

//   console.log(this.gra)

// })
