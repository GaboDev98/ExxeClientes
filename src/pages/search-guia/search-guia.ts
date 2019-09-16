// Components
import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

// Pages
import { DetailGuiaPage } from '../detail-guia/detail-guia';

// Services
import { GuiaServiceProvider } from '../../services/guia-service/guia-service';

// Models
import { GuiaClientModel } from '../../models/guia-client';

@IonicPage()
@Component({
  selector: 'page-search-guia',
  templateUrl: 'search-guia.html'
})
export class SearchGuiaPage {

  consecutivo: string = "";
  guia_client: GuiaClientModel;
  loading: any;

  constructor(
    public navParams: NavParams, 
    public navCtrl: NavController, 
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public guiaService: GuiaServiceProvider
  ) {}

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
  
  searchGuia() {
    if(this.consecutivo != null && this.consecutivo != "") {
      this.showLoading('Consultando información...');
      this.guiaService.getTrackingGuia(this.consecutivo)
      .subscribe(
        (data) => { // Success
          // console.log(data);
          if (data != null) {
            this.guia_client = data;
            this.hideLoading();
            if(this.guia_client.Guia != null && parseInt(this.guia_client.Guia) > 0) {
              this.navCtrl.push(DetailGuiaPage, {
                modelGuia: this.guia_client
              });
            } else {
              this.showToast('El consecutivo no se encuentra registrado.');
              this.hideLoading();
            } 
          } else {
            this.showToast('El consecutivo no se encuentra registrado.');
            this.hideLoading();
          }
        },
        (error) => {
          this.showToast('Ocurrió un error al consultar la guía.');
          this.hideLoading();
          // console.log(error);
        }
      )
    } else {
      this.showToast('Por favor digite un número de guía.');
    }
  }

}
