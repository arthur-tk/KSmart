import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { CalendarPage } from '../pages/calendar/calendar';
import { LoginPage } from '../pages/login/login';
import { ClassPage } from '../pages/class/class';
import { ExamPage } from '../pages/exam/exam';
import { RulePage } from '../pages/rule/rule';
import { GradePage } from '../pages/grade/grade';
import { MapPage } from '../pages/map/map';
import { HttpClientModule} from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { RestgradeProvider } from '../providers/restgrade/restgrade';
import { RestregisProvider } from '../providers/restregis/restregis';
import { ResttimeProvider } from '../providers/resttime/resttime';
import { HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { UserPage } from '../pages/user/user';
import { OtherPage } from '../pages/other/other';
import { DevPage } from '../pages/Dev/Dev';
import { HospitalPage } from '../pages/hospital/hospital';
import { LibraryPage } from '../pages/library/library';
import { IcitPage } from '../pages/icit/icit';
import { LoanPage } from '../pages/loan/loan';
import { AccidentPage } from '../pages/accident/accident';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    CalendarPage,
    LoginPage,
    ClassPage,
    ExamPage,
    RulePage,
    GradePage,
    MapPage,
    UserPage,
    OtherPage,
    DevPage,
    HospitalPage,
    LibraryPage,
    IcitPage,
    LoanPage,
    AccidentPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    CalendarPage,
    LoginPage,
    ClassPage,
    ExamPage,
    RulePage,
    GradePage,
    MapPage,
    UserPage,
    OtherPage,
    DevPage,
    HospitalPage,
    LibraryPage,
    IcitPage,
    LoanPage,
    AccidentPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    RestgradeProvider,
    RestregisProvider,
    ResttimeProvider    
  ]
})
export class AppModule {}
