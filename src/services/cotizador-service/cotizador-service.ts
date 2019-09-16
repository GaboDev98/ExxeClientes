// Default components
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Native
import { Storage } from '@ionic/storage';

// Models
import { CotizadorEstandarRequest } from '../../models/request-cotizador-estandar';

@Injectable()
export class CotizadorServiceProvider {
  
  headers: any;
  apiUrl: string;
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(
    public http: HttpClient,
    private localStorage: Storage
  ) {
    this.localStorage.get('apiUrl').then((value) => {
      this.apiUrl = value;
    });
    this.apiUrl = 'http://testsolex.blulogistics.net/Solex/Services/SolexMobileApi.svc/';
    this.headers = this._headers
    .append('UserId', '3355')
    .append('Authorization', 'Bearer YXBpOmViYzg3Njg5MjhiZjE1NGIyMTg4NGZlMjU5MDA3NDllMGU0MTRmZGM=');
  }

  getCiudades(): any {
    return this.http.get(
      this.apiUrl + 'GetCiudades',
      { headers: this.headers }
    );
  }
  
  getRutaByOrigenDestino(origen: string, destino: string): any {
    return this.http.get(
      this.apiUrl + 'GetRuta/' + origen + '/' + destino,
      { headers: this.headers }
    );
  }

  searchCotizacion(request: CotizadorEstandarRequest): any {
    return this.http.post(
      this.apiUrl + 'CotizadorEstandar', 
      request,
      { headers: this.headers }
    );
  }

}
