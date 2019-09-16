// Default components
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// Autocomplete
import { AutoCompleteModule } from 'ionic2-auto-complete';

// UI Components
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pipes
import { TimeFormatPipe } from '../pipes/time-format/time-format';

// Pages components
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { SearchGuiaPage } from '../pages/search-guia/search-guia';
import { DetailGuiaPage } from '../pages/detail-guia/detail-guia';
import { TrackingGuiaPage } from '../pages/tracking-guia/tracking-guia';
import { CotizadorEstandarPage } from '../pages/cotizador-estandar/cotizador-estandar';

// Ionic components
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Services
import { GuiaServiceProvider } from '../services/guia-service/guia-service';
import { AuthServiceProvider } from '../services/auth-service/auth-service';
import { CotizadorServiceProvider } from '../services/cotizador-service/cotizador-service';
import { AutocompleteServiceProvider } from '../services/autocomplete-service/autocomplete-service';

// Native components
import { Push } from '@ionic-native/push';
import { SQLite } from '@ionic-native/sqlite';
import { IonicStorageModule } from '@ionic/storage';

// Prividers
import { LoaderProvider } from '../providers/loader/loader';
import { ToasterProvider } from '../providers/toaster/toaster';
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    WelcomePage,
    SearchGuiaPage,
    DetailGuiaPage,
    TrackingGuiaPage,
    TimeFormatPipe,
    CotizadorEstandarPage
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    WelcomePage,
    SearchGuiaPage,
    DetailGuiaPage,
    TrackingGuiaPage,
    CotizadorEstandarPage
  ],
  providers: [
    Push,
    SQLite,
    StatusBar,
    SplashScreen,
    LoaderProvider,
    ToasterProvider,
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    DatabaseProvider,
    GuiaServiceProvider,
    AuthServiceProvider,
    CotizadorServiceProvider,
    AutocompleteServiceProvider
  ]
})
export class AppModule {}
