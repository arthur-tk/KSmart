import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    CalendarPage,
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
  ],
 
})
export class CalendarPageModule {}
