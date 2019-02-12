import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KaruPage } from './karu';

@NgModule({
  declarations: [
    KaruPage,
  ],
  imports: [
    IonicPageModule.forChild(KaruPage),
  ],
})
export class KaruPageModule {}
