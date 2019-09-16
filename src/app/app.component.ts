// Default components
import { Nav, Platform, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages components
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { SearchGuiaPage } from '../pages/search-guia/search-guia';

// Native components
import { Storage } from '@ionic/storage';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

// Providers
import { ToasterProvider } from '../providers/toaster/toaster';
import { DatabaseProvider } from '../providers/database/database';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  options: PushOptions;
  pushObject: PushObject;
  
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    private push: Push,
    public events: Events,
    public platform: Platform,
    public statusBar: StatusBar,
    private localStorage: Storage,
    private toaster: ToasterProvider,
    public splashScreen: SplashScreen,
    public toastController: ToastController,
    private databaseService: DatabaseProvider
  ) {
    // Inicio de la app
    this.initializeApp();

    // Definición de url base para los servicios de tipo REST
    // this.localStorage.set('apiUrl', 'http://testsolex.blulogistics.net/Solex/Services/SolexMobileApi.svc/');
    this.localStorage.set('apiUrl', 'http://solex.blulogistics.net/Solex/Services/SolexMobileApi.svc/');

    // Listado de páginas
    this.pages = [
      { title: 'Página Principal', component: WelcomePage },
      { title: 'Rastreo de Guías', component: SearchGuiaPage },
      { title: 'Iniciar sesión', component: LoginPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Subcripción de las notificaciones
      this.pushSetup();
      // Subscripción al evento de iniciar sesión
      this.events.subscribe('user:loggedin', (token) => {
        // Guardamos el token del usuario
        this.localStorage.set('bearerToken', token);
      });
      // Subscripción al evento de cerrar sesión
      this.events.subscribe('user:logout', (token) => {
        // Mensaje en consola
        console.log('Cerrando sesión...');
      });
      // Solicitud de permisos 
      this.push.hasPermission()
      .then((res: any) => {
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }
      });
      // Estilos por defecto
      this.statusBar.styleDefault();
      // Ocultamos el splash screen
      this.splashScreen.hide();
      // Verificamos que la app se haya cargado en un dispositivo
      if (this.platform.is('android') || this.platform.is('ios')) {
        this.databaseService.createDatabase();
        this.databaseService.createTables();
      }
    });
  }

  openPage(page) {
    // Abrimos la página que viene por parámetro
    this.nav.setRoot(page.component);
  }

  pushSetup() {
    // Opciones de configración de las notificaciones
    this.options = {
      android: {
        senderID: '993976660396',
        topics: ['/topics/all']
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      }
    };
    
    this.pushObject = this.push.init(this.options);
   
    this.pushObject.on('notification').subscribe(
      (data: any) => {
        console.log('Received a notification', data);
        // Mostramos una toast en pantalla
        this.toaster.presentSimpleToast(data.message, 'bottom');
      }
    );
    
    this.pushObject.on('registration').subscribe(
      (data: any) => {
        // Mensaje en consola
        console.log('Device registered', data.registrationId);
        // Guardamos el id del dispositivo
        this.localStorage.set('deviceId', data.registrationId);
      }
    );
   
    this.pushObject.on('error').subscribe(
      error => {
        console.error('Error with Push plugin', error);
      }
    );
  }
}
