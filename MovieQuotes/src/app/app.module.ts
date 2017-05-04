import { ListPageModule } from './../pages/list-page/list-page.module';
import { QuoteDetailPageModule } from './../pages/quote-detail-page/quote-detail-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyDlez69LZlJVnYNRu2V_6m2vxvKpg1vcgc",
    authDomain: "siscodr-movie-quotes.firebaseapp.com",
    databaseURL: "https://siscodr-movie-quotes.firebaseio.com",
    projectId: "siscodr-movie-quotes",
    storageBucket: "siscodr-movie-quotes.appspot.com",
    messagingSenderId: "875558260938"
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    QuoteDetailPageModule,
    ListPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
