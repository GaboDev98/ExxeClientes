// Default components
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Native
import { Storage } from '@ionic/storage';

@Injectable()
export class GuiaServiceProvider {
  
  apiUrl: string;
  userId: string;
  deviceId: string;
  bearerToken: string;
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');
  headers: any;
  
  constructor(
    public http: HttpClient,
    private localStorage: Storage
  ) {
    this.localStorage.get('apiUrl').then((value) => {
      this.apiUrl = value;
    });
    this.localStorage.get('bearerToken').then((value) => {
      this.bearerToken = value;
    });
    this.localStorage.get('userId').then((value) => {
      this.userId = value;
    });
    this.localStorage.get('deviceId').then((value) => {
      this.deviceId = value;
    });
    // Token por defecto
    this.headers = this._headers.append('UserId', '3214').append('Authorization', 'Bearer s2JMOchvpQfaBIgQ5zQIwKFKteD6g4ruu34DzEUj');
    // Verificación de campos adicionales
    if (this.bearerToken != null && this.bearerToken != "") {
      this._headers.append('Authorization', 'Bearer ' + this.bearerToken);
    }
    if (this.userId != null && this.userId != "") {
      this._headers.append('UserId', this.userId);
    }
    if (this.deviceId != null && this.deviceId != "") {
      this._headers.append('DeviceId', this.deviceId);
    }
  }

  getTrackingGuia(consecutivo: string): any {
    console.log(this.apiUrl + 'GetTrackingGuia/' + consecutivo);
    return this.http.get(
      this.apiUrl + 'GetTrackingGuia/' + consecutivo,
      { headers: this.headers }
    );
  }

  getEstadosGuia(consecutivo: string): any {
    return this.http.get(
      this.apiUrl + 'GetEstadosGuia/' + consecutivo,
      { headers: this.headers }
    );
  }

}
