import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { CalendarPage } from '../pages/calendar/calendar';
import { LoginPage } from '../pages/login/login';
import { ClassPage } from '../pages/class/class';
import { ExamPage } from '../pages/exam/exam';
import { RulePage } from '../pages/rule/rule';
import { GradePage } from '../pages/grade/grade';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    AboutPage,
    CalendarPage,
    LoginPage,
    ClassPage,
    ExamPage,
    RulePage,
    GradePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    AboutPage,
    CalendarPage,
    LoginPage,
    ClassPage,
    ExamPage,
    RulePage,
    GradePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
