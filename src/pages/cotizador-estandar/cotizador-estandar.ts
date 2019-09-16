// Default components
import { Component, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

// Models
import { CityResponse } from '../../models/response-city';
import { CotizadorEstandarRequest } from '../../models/request-cotizador-estandar';
import { CotizadorEstandarResponse } from '../../models/response-cotizador-estandar';

// Services
import { CotizadorServiceProvider } from '../../services/cotizador-service/cotizador-service';
import { AutocompleteServiceProvider } from '../../services/autocomplete-service/autocomplete-service';

// Providers
import { LoaderProvider } from '../../providers/loader/loader';

@IonicPage()
@Component({
  selector: 'page-cotizador-estandar',
  templateUrl: 'cotizador-estandar.html',
})
export class CotizadorEstandarPage {

  @ViewChild('input_origen') input_origen;
  @ViewChild('input_destino') input_destino;
  @ViewChild('request_cantidad') input_cantidad;

  my_form: FormGroup;
  origen: string;
  destino: string;
  list_ciudades_db: any[];
  is_disabled: boolean = true;
  list_ciudades_ws: CityResponse[];

  request: CotizadorEstandarRequest = new CotizadorEstandarRequest();
  response: CotizadorEstandarResponse = new CotizadorEstandarResponse();

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private loader: LoaderProvider, 
    public toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private cotizadorService: CotizadorServiceProvider,
    public autocompleteService: AutocompleteServiceProvider
  ) { }

  ngOnInit(): void {
    this.my_form = new FormGroup({
      origen: new FormControl('', [
        Validators.required
      ]),
      destino: new FormControl('', [
        Validators.required
      ])
    })
  }

  CheckRoute(): void {
    if (this.my_form.value.origen != null 
      && this.my_form.value.origen != ""
      && this.my_form.value.destino != null 
      && this.my_form.value.destino != "")
    {
      this.origen = this.my_form.value.origen;
      this.destino = this.my_form.value.destino;
      this.loader.show('Verificando ruta...');
      this.cotizadorService.getRutaByOrigenDestino(this.origen, this.destino)
      .subscribe(
        (data) => { // Success
          this.request.Ruta = data["RutaId"];
          this.is_disabled = false;
          this.request.Cantidad = 1;
          this.loader.hide();
        },
        (error) => {
          this.showToast('Ocurrió un error: ' + error.message);
          console.log('Ocurrió un error: ' + error);
          this.loader.hide();
        }
      );
    } else {
      this.showToast('Digite la ciudad de origen y destino.');
    }
  }

  showToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  CotizacionSearch() {
    if (this.request.Ruta <= 0 || this.request.Ruta == null) {
      this.showToast('Primero debe consultar y seleccionar la ciudad de origen y destino.');
    }
    else if(this.request.Cantidad <= 0 || this.request.Cantidad == null) {
      this.showToast('Digite la cantidad de unidades.');
    }
    else if(this.request.Kilos <= 0 || this.request.Kilos == null) {
      this.showToast('Digite el peso de las unidades.');
    }
    else if(this.request.Kilos <= 0 || this.request.Kilos == null) {
      this.showToast('Digite el valor declarado de la mercancía.');
    }
    else {
      this.request.EmpresaId = 2739;
      this.loader.show('Consultando información...');
      this.cotizadorService.searchCotizacion(this.request)
        .subscribe(
        (data) => {   
            this.response = data;
            let modal = this.modalCtrl.create('ModalCotizacionPage', {
              unidades: this.request.Cantidad,
              request_origen: this.origen,
              request_destino: this.destino,
              response_cotizacion: this.response
            });
            modal.present();
            modal.onDidDismiss(data => {
              if (data) { }
            });
            this.response = data; // Success
            this.loader.hide();
          },
          (error) => {
            this.showToast('Ocurrió un error: ' + error.message);
            console.log('Ocurrió un error: ' + error);
            this.loader.hide();
          }
        );
    }
  }

  FocusDestino() {
    this.destino = '';
  }

  FocusCount() {
    this.request.Cantidad = 1;
  }

  ClearCotizacion() {
    this.request.Cantidad = 0;
    this.request.Kilos = 0;
    this.request.KilosVolumen = 0;
    this.request.ValorDeclarado = 0;
    this.response.CostoManejo = 0;
    this.response.ValorFlete = 0;
    this.response.ValorTotal = 0;
    this.my_form.reset();
    this.destino = '';
    this.origen = '';
  }

}
