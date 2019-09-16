// Default components
import { Component } from '@angular/core';

// Ionic components
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tracking-guia',
  templateUrl: 'tracking-guia.html',
})
export class TrackingGuiaPage {

  public lista_estados_guia;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.lista_estados_guia = navParams.get("listaEstadosGuia");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackingGuiaPage');
  }

}
