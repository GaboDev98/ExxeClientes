// Components
import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

// Pages
import { TrackingGuiaPage } from '../tracking-guia/tracking-guia';

// Providers
import { GuiaServiceProvider } from '../../services/guia-service/guia-service';

// Models
import { GuiaEstadoClientModel } from '../../models/guia-estado-client';

@IonicPage()
@Component({
  selector: 'page-detail-guia',
  templateUrl: 'detail-guia.html'
})
export class DetailGuiaPage {

  visibility: string = 'hidden';
  lista_estados_guia: GuiaEstadoClientModel[];
  loading: any;

  public modelGuia;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public guiaService: GuiaServiceProvider
  ) {
    this.modelGuia = navParams.get("modelGuia");
  }

  menuToggle() {
    this.menuCtrl.open();
  }

  showToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  showLoading(message: string) {
    this.loading = this.loadingCtrl.create({
      content: message
    });
    
    this.loading.present();
  }

  hideLoading() {
    this.loading.dismiss();
  }

  trackingGuia() {
    this.showLoading('Consultando información...');
    this.guiaService.getEstadosGuia(this.modelGuia.Guia)
    .subscribe(
      (data) => { // Success
        this.lista_estados_guia = data;
        this.hideLoading();
        if(this.lista_estados_guia != null) {
          this.navCtrl.push(TrackingGuiaPage, {
            listaEstadosGuia: this.lista_estados_guia
          });
        } else {
          this.showToast('La guía no tiene seguimiento.');
        }
      },
      (error) =>{
        this.hideLoading();
        console.log(error);
      }
    )
  }

}
