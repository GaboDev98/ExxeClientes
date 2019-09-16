// Default components
import { Component } from '@angular/core';

// Ionic components
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Native
import { Platform } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

// Pages components
import { LoginPage } from '../login/login';
import { SearchGuiaPage } from '../search-guia/search-guia';
import { CotizadorEstandarPage } from '../cotizador-estandar/cotizador-estandar';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  providers: [ScreenOrientation]
})
export class WelcomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    private screenOrientation: ScreenOrientation
  ) {
    if(!this.platform.is('core') && !this.platform.is('mobileweb')) {
      // Seteamos la orientación de la pantalla en vertical
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
  }

  SearchGuiaPage() {
    this.navCtrl.push(SearchGuiaPage);
  }

  CotizadorEstandarPage() {
    this.navCtrl.push(CotizadorEstandarPage);
  }

  LoginPage() {
    this.navCtrl.push(LoginPage);
  }

}
