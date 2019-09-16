// Default components
import { Injectable } from '@angular/core';

// Native
import { Storage } from '@ionic/storage';

// Http components
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Models
import { RequestAuth } from '../../models/request-auth';
import { RequestDevice } from '../../models/request-device';

@Injectable()
export class AuthServiceProvider {

  apiUrl: string;
  userId: string;
  deviceId: string;
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    public http: HttpClient,
    private localStorage: Storage
  ) {
    this.localStorage.get('apiUrl').then((value) => {
      this.apiUrl = value;
    });
    this.localStorage.get('userId').then((value) => {
      this.userId = value;
    });
    this.localStorage.get('deviceId').then((value) => {
      this.deviceId = value;
    });
    if (this.userId != null && this.userId != "") {
      this._headers.append('UserId', this.userId);
    }
    if (this.deviceId != null && this.deviceId != "") {
      this._headers.append('DeviceId', this.deviceId);
    }
  }

  authLogin(requestAuth: RequestAuth): any {
    return this.http.post(
      this.apiUrl + 'AuthLogin',
      requestAuth,
      { headers: this._headers }
    );
  }

  updateDevice(requestDevice: RequestDevice): any {
    return this.http.post(
      this.apiUrl + 'DeviceIdUpdate',
      requestDevice
    );
  }
}
