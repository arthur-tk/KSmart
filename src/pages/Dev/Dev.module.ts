import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevPage } from './Dev';

@NgModule({
  declarations: [
    DevPage,
  ],
  imports: [
    IonicPageModule.forChild(DevPage),
  ],
})
export class DevPageModule {}
