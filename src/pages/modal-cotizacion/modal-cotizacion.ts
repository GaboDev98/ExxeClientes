import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

// Models
import { CotizadorEstandarResponse } from '../../models/response-cotizador-estandar';

@IonicPage()
@Component({
  selector: 'page-modal-cotizacion',
  templateUrl: 'modal-cotizacion.html',
})
export class ModalCotizacionPage {

  unidades: number;
  request_origen: string;
  request_destino: string; 
  response: CotizadorEstandarResponse = new CotizadorEstandarResponse();

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController, 
    private viewCtrl: ViewController
  ) {
    this.unidades = this.navParams.get('unidades');
    this.request_origen = this.navParams.get('request_origen');
    this.request_destino = this.navParams.get('request_destino');
    this.response = this.navParams.get('response_cotizacion');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
