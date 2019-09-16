// Default Components
import { Component } from '@angular/core';

// Ionic components
import { ToastController } from 'ionic-angular';
import { LoadingController, Events } from 'ionic-angular';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

// Services
import { AuthServiceProvider } from '../../services/auth-service/auth-service';

// Models
import { RequestAuth } from '../../models/request-auth';
import { ResponseAuth } from '../../models/response-auth';

// Pages
import { SearchGuiaPage } from '../../pages/search-guia/search-guia';

// Native
import { Storage } from '@ionic/storage';
import { WelcomePage } from '../welcome/welcome';

// Providers
import { ToasterProvider } from '../../providers/toaster/toaster';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: any;
  request_auth: RequestAuth = new RequestAuth();
  response_auth: ResponseAuth = new ResponseAuth();

  constructor(
    public events: Events,
    public navParams: NavParams,
    private localStorage: Storage,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private toaster: ToasterProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public authService: AuthServiceProvider
  ) { }

  showLoading(message: string) {
    this.loading = this.loadingCtrl.create({
      content: message
    });
    
    this.loading.present();
  }

  hideLoading() {
    this.loading.dismiss();
  }

  menuToggle() {
    this.menuCtrl.open();
  }

  backPage() {
    this.navCtrl.push(WelcomePage);
  }

  authLogin() {
    if((this.request_auth.Username != null && this.request_auth.Username != "")
      && this.request_auth.Password != null && this.request_auth.Password.toString() != "") {
        // Mostramos el mensaje de carga
        this.showLoading('Validando credenciales de Solex...');
        // Consumimos el servicio de Solex
        this.authService.authLogin(this.request_auth)
        .subscribe(
          (data) => { // Success
            this.response_auth = data;
            // Ocultamos el mensaje de carga
            this.hideLoading();
            // Capturamos la respuesta de Solex
            var response_token = this.response_auth.Access_token;
            // Si la respuesta de Solex es afirmativa
            if(response_token.Error_description == "Success") {
              // Emitimos el evento de usuario logueado
              this.events.publish('user:loggedin', response_token.Access_token);
              // Asignamos el id del usuario autenticado
              this.localStorage.set('userId', this.response_auth.UsuarioId);
              // Navegamos a la página de inicio después de realizar la autenticación
              this.navCtrl.push(SearchGuiaPage);
            } else {
              // Vaciamos el id del usuario
              this.localStorage.set('userId', '');
            }
            // Mostramos el mensaje devuelto desde el servicio de Solex
            this.toaster.presentSimpleToast(response_token.Error_description, 'bottom');
          },
          (error) => { // Error
            // Ocultamos el mensaje de carga
            this.hideLoading();
            // Imprimimos en consola
            console.log(error);
          }
        )
    } else {
      this.toaster.presentSimpleToast('Por favor digite sus credenciales.', 'bottom');
    }
  }
}
