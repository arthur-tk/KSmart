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
import { HiskPage } from '../pages/hisk/hisk';
import { LogoPage } from '../pages/logo/logo';
import { ColorPage } from '../pages/color/color';
import { FlowPage } from '../pages/flow/flow';
import { TextPage } from '../pages/text/text';
import { MapPage } from '../pages/map/map';
import { KaruPage } from '../pages/karu/karu';
import { HttpClientModule} from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { RestgradeProvider } from '../providers/restgrade/restgrade';
import { RestregisProvider } from '../providers/restregis/restregis';
import { ResttimeProvider } from '../providers/resttime/resttime';
import { ResticitProvider } from '../providers/resticit/resticit';







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
    GradePage,
    HiskPage,
    LogoPage,
    ColorPage,
    FlowPage,
    TextPage,
    MapPage,
    KaruPage,
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    GradePage,
    HiskPage,
    LogoPage,
    ColorPage,
    FlowPage,
    TextPage,
    MapPage,
    KaruPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    RestgradeProvider,
    RestregisProvider,
    ResttimeProvider,
    ResticitProvider
    
  ]
})
export class AppModule {}
