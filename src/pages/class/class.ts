import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestregisProvider } from '../../providers/restregis/restregis';
import { ResttimeProvider } from '../../providers/resttime/resttime';
// import CustomValue from './custom.js';

/**
 * Generated class for the ClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class',
  templateUrl: 'class.html',
})
export class ClassPage {
  restregis: any
  resttime: any

  Nameshrt: any
  codename: any
  section: any
  build_no: any
  room_no: any

  days: any

  start_time: any
  end_time: any
  time_code: any

  TimeLearn: any
  TimeOut: any



  constructor(public navCtrl: NavController, public navParams: NavParams, public restregisProvider: RestregisProvider, public resttimeProvider: ResttimeProvider) {
  }

  ionViewDidLoad() {
    this.restregisProvider.regis().subscribe((result) => {

      this.restregis = result.RegisDetail

      var nameshort = []
      this.restregis.COURSE_SHRT_NAME.map((data) => {
        nameshort.push(data)
        this.Nameshrt = nameshort
      })
      
      var codesname = []
      this.restregis.COURSE_CODE.map((data) => {
        codesname.push(data)
        this.codename = codesname
      })

      var sectionclass = []
      this.restregis.SECTION.map((data) => {
        sectionclass.push(data)
        this.section = sectionclass
      })

      var building = []
      this.restregis.BUILDING_NO.map((data) => {
        building.push(data)
        this.build_no = building
      })

      var roomming = []
      this.restregis.ROOM_NO.map((data) => {
        roomming.push(data)
        this.room_no = roomming
      })

      var daying = []
      this.restregis.DAY_NAME_THAI.map((data) => {

        daying.push(data)
        this.days = daying.sort()
        // this.sortDays = this.days.sort()
      })

      var startt = []
      this.restregis.START_TIME.map((data) => {
        startt.push(data)
        this.start_time = startt
      })

      var endd = []
      this.restregis.END_TIME.map((data) => {
        endd.push(data)
        this.end_time = endd
      })
      this.resttimeProvider.time().subscribe((result) => {
        this.resttime = result.TimeList
        var values = []
  
        this.start_time.map((data) => this.resttime.TIME_NAME.map((data2,index) => {
  
          if (data == String(++index)) {
            values.push(data2)
          }
        }))
        this.TimeLearn = values
        console.log(this.TimeLearn)

        var valuese = []
  
        this.end_time.map((data) => this.resttime.TIME_NAME.map((data2,index) => {
  
          if (data == String(++index)) {
            valuese.push(data2)
          }
        }))
        this.TimeOut = valuese
        console.log(this.TimeOut)
  
  
      })
    })
    // this.test = this.times
    // console.log(this.test)

    
  }


}
