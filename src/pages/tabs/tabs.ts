import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { OtherPage } from '../other/other';



@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homePage = HomePage;
  otherPage = OtherPage;
  userPage = UserPage;

}
