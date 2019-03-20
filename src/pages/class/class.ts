import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestregisProvider } from '../../providers/restregis/restregis';
import { ResttimeProvider } from '../../providers/resttime/resttime';

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

  Nameshrt: any
  codename: any
  section: any
  build_no: any
  room_no: any
  days: any
  start_time: any
  end_time: any

  Values = {
    namesh: {},
    codes: {},
    sec: {},
    build: {},
    room: {},
    day: {},
    start: {},
    end: {}
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public restregisProvider: RestregisProvider, public resttimeProvider: ResttimeProvider) {
  }

  ionViewDidLoad() {
    this.restregisProvider.regis().subscribe((result) => {

      this.restregis = result.RegisDetail

      var nameshort = []
      this.restregis.COURSE_SHRT_NAME.map((data) => {
        nameshort.push(data)
        this.Values.namesh = nameshort
        this.Nameshrt = nameshort
      })

      var codesname = []
      this.restregis.COURSE_CODE.map((data) => {
        codesname.push(data)
        this.codename = codesname
        this.Values.codes = codesname
      })

      var sectionclass = []
      this.restregis.SECTION.map((data) => {
        sectionclass.push(data)
        this.section = sectionclass
        this.Values.sec = sectionclass
      })

      var building = []
      this.restregis.BUILDING_NO.map((data) => {
        building.push(data)
        this.build_no = building
        this.Values.build = building
      })

      var roomming = []
      this.restregis.ROOM_NO.map((data) => {
        roomming.push(data)
        this.room_no = roomming
        this.Values.room = roomming
      })

      var daying = []
      this.restregis.DAY_NAME_THAI.map((data) => {
        daying.push(data)
        this.days = daying
        this.Values.day = daying
      })

      var startt = []
      this.restregis.START_TIME.map((data) => {
        startt.push(data)
        this.start_time = startt
        this.Values.start = startt
      })

      var endd = []
      this.restregis.END_TIME.map((data) => {
        endd.push(data)
        this.end_time = endd
        this.Values.end = endd
      })

      console.log(this.restregis)


    })
  }

}
